#!/usr/bin/env node

const CSS = require('css');
const signale = require('signale');
const yaml = require('js-yaml');
const { join } = require('path');
const { mkdirSync, readFileSync, writeFile } = require('fs');

const readDB = () => {
    let db;

    try {
      db = yaml.safeLoad(readFileSync(join(__dirname, 'db.yml'), 'utf8'));
    } catch (e) {
      signale.fatal(new Error('Could not read db.yml'));
    }

    return db;
}

const readFile = (path, file) => {
    const filePath = join(__dirname, 'node_modules', `__${path}`, file);
    const fileContents = readFileSync(filePath, 'utf8');

    return fileContents;
}

const parseCSS = (font) => {
    let fileContents = '';
    if (typeof font.files === 'object') {
        font.files.forEach( file => {
            fileContents += readFile(font.directory, file)
        });
    } else {
        fileContents = readFile(font.directory, font.files);
    }

    let ast = CSS.parse(fileContents);
    let rules = ast.stylesheet.rules;

    let output = rules.map(item => {
        if (typeof item.selectors !== 'undefined' && item.selectors[0].startsWith(font.pattern.before) && item.selectors[0].endsWith(font.pattern.after)) {
            let output = {};

            output.selector = item.selectors[0]
            .replace(/^\./, '')
            .replace(/:before$/, '');

            item.declarations.forEach( declaration => {
                if (declaration.property === 'content') output.code = declaration.value.replace(/("|')*/g, '').replace(/\\/g, '');
            });

            return output;
        }

    });

    // Remove null keys
    output = output.filter(e => e);

    return output;
}

const writeCSS = (font, data) => {
    const output = {};

    data.forEach( element => {
        const prefix = (typeof font.replace !== 'undefined' && font.replace.to) ? element.selector.replace(/^fa-/, font.replace.to) : element.selector;

        output[prefix] = {
            body: `content: '\\\\${element.code}';$0`,
            description: 'content',
            prefix: prefix
        }
    });

    const snippet = {
        ".source.css .meta.property-list.css, .source.css.scss .meta.property-list.scss, .source.less .meta.property-list.less, .source.sass, .source.stylus .meta.property-list.stylus": output
    };

    const contents = JSON.stringify(snippet, null, 4);

    const outDir = join(__dirname, '..', 'snippets');
    writeFile(`${outDir}/${font.slug}--css.json`, contents, (err) => {
        if (err) return signale.fatal(err);
        signale.success(`${font.slug}--css.json`);
    });
}

const write = (font, data, type = 'html') => {
    const output = {};
    const snippet = {};
    const scope = (type === 'jsx') ? '.source.js.jsx' : '.text.html';

    data.forEach( element => {
        const classProp = (type === 'jsx') ? 'className' : 'class';
        const classesBefore = (typeof font.classes !== 'undefined' && font.classes.before.trim() !== '') ? font.classes.before : '';
        const classesAfter = (typeof font.classes !== 'undefined' && font.classes.after.trim() !== '') ? font.classes.after : '';

        const classes = [classesBefore, element.selector, classesAfter].join(' ').trim();
        const options = (font.options === true) ? '$2' : '';

        if (typeof font.replace !== 'undefined' && font.replace.to) element.selector = element.selector.replace(/^fa-/, font.replace.to);

        output[element.selector] = {
            body: `<$\{1:${font.tag}\} ${classProp}="${classes}${options}"></$\{1:${font.tag}\}>$0`,
            description: `<${font.tag}>`,
            prefix: element.selector
        }
    });

    snippet[scope] = output;
    const contents = JSON.stringify(snippet, null, 4);
    const outDir = join(__dirname, '..', 'snippets');

    writeFile(`${outDir}/${font.slug}--${type}.json`, contents, (err) => {
        if (err) return signale.fatal(err);
        signale.success(`${font.slug}--${type}.json`);
    });
}

try {
    mkdirSync(join(__dirname, '..', 'snippets'));
} catch (e) {
    // Don't panic
}

const db = readDB();

db.fonts.forEach( (font) => {
    try {
        let data = parseCSS(font);
        writeCSS(font, data);
        write(font, data, 'html');
        write(font, data, 'jsx');
    } catch(err) {
        if (err) signale.fatal(err);
    }
});