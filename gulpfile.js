// Dependencies
const coffeelint = require('gulp-coffeelint');
const debug = require('gulp-debug');
const gulp = require('gulp');
const jsonlint = require('gulp-jsonlint');
const stylish = require('coffeelint-stylish');

// Files
const coffeeFiles = [
    './grammars/*.cson',
    './keymaps/*.cson',
    './lib/**/*.coffee',
    './menus/*.cson',
    './snippets/*.cson'
];

const jsonFiles = [
    './grammars/*.json',
    './keymaps/*.json',
    './menus/*.json',
    './snippets/*.json',
    './package.json'
];

// Lint CoffeeScript & CSON files
gulp.task('lint:coffee', (done) => {
    gulp.src(coffeeFiles)
        .pipe(debug({title: 'coffeelint:'}))
        .pipe(coffeelint())
        .pipe(coffeelint.reporter(stylish))
        .pipe(coffeelint.reporter('fail'));
    done();
});

// Lint JSON files
gulp.task('lint:json', (done) => {
    gulp.src(jsonFiles)
        .pipe(debug({title: 'jsonlint:'}))
        .pipe(jsonlint())
        .pipe(jsonlint.failAfterError())
        .pipe(jsonlint.reporter());
    done();
});

// Tasks
gulp.task('lint', gulp.parallel('lint:coffee', 'lint:json', done => {
  done();
}));
