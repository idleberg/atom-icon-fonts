var gulp = require('gulp');
var debug = require('gulp-debug');
var coffeelint = require('gulp-coffeelint');
var jshint = require('gulp-jshint');
var jsonlint = require('gulp-jsonlint');
var lesshint = require('gulp-lesshint');

// Tasks
gulp.task('lint', ['coffeelint', 'jshint', 'jsonlint', 'lesshint']);

// Exclude node_modules
var self = '!node_modules/**/*';

// Lint CoffeeScript & CSON files
gulp.task('coffeelint', function () {
    gulp.src(['./**/*.cson', './**/*.coffee', self])
        .pipe(debug({title: 'coffeelint:'}))
        .pipe(coffeelint())
        .pipe(coffeelint.reporter());
});

// Lint LESS files
gulp.task('lesshint', function () {
     gulp.src(['./**/*.less', self])
        .pipe(debug({title: 'lesshint:'}))
        .pipe(lesshint())
        .pipe(lesshint.reporter());
});

// Lint JavaScript files
gulp.task('jshint', function() {
    return gulp.src(['./**/*.js', self])
        .pipe(debug({title: 'jshint:'}))
        .pipe(jshint());
});

// Lint JSON files
gulp.task('jsonlint', function() {
   gulp.src(['./**/*.json', self])
        .pipe(debug({title: 'jsonlint:'}))
        .pipe(jsonlint())
        .pipe(jsonlint.reporter());
});
