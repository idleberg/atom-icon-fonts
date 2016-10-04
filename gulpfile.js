// Dependencies
const gulp = require('gulp');
const debug = require('gulp-debug');
const coffeelint = require('gulp-coffeelint');
const jshint = require('gulp-jshint');
const jsonlint = require('gulp-jsonlint');
const lesshint = require('gulp-lesshint');

// Files
const coffeeFiles = [
    './grammars/*.cson',
    './keymaps/*.cson',
    './lib/**/*.coffee',
    './menus/*.cson',
    './snippets/*.cson'
];

const jsFiles = [
    './lib/**/*.js'
];

const jsonFiles = [
    './grammars/*.json',
    './keymaps/*.json',
    './menus/*.json',
    './snippets/*.json',
    './package.json'
];

const lessFiles = [
    './styles/**/*.less'
];

// Tasks
gulp.task('lint', ['coffeelint', 'jshint', 'jsonlint', 'lesshint']);

// Lint CoffeeScript & CSON files
gulp.task('coffeelint', function () {
    gulp.src(coffeeFiles)
        .pipe(debug({title: 'coffeelint:'}))
        .pipe(coffeelint())
        .pipe(coffeelint.reporter('fail'));
});

// Lint LESS files
gulp.task('lesshint', function () {
     gulp.src(lessFiles)
        .pipe(debug({title: 'lesshint:'}))
        .pipe(lesshint())
        .pipe(lesshint.reporter());
});

// Lint JavaScript files
gulp.task('jshint', function() {
    return gulp.src(jsFiles)
        .pipe(debug({title: 'jshint:'}))
        .pipe(jshint());
});

// Lint JSON files
gulp.task('jsonlint', function() {
   gulp.src(jsonFiles)
        .pipe(debug({title: 'jsonlint:'}))
        .pipe(jsonlint())
        .pipe(jsonlint.reporter());
});
