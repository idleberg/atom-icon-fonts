var gulp = require('gulp');
var debug = require('gulp-debug');
var jsonlint = require('gulp-json-lint');
var coffeelint = require('gulp-coffeelint');

// Tasks
gulp.task('lint', ['coffeelint', 'jsonlint']);

// Exclude node_modules
var self = '!node_modules/**/*';

// Lint CSON files
gulp.task('coffeelint', function () {
    gulp.src([
        './**/*.cson', './**/*.coffee', self])
        .pipe(debug({title: 'csonlint:'}))
        .pipe(coffeelint())
        .pipe(coffeelint.reporter())
});

// Lint JSON files
gulp.task('jsonlint', function() {
   gulp.src(['./**/*.json', self])
      .pipe(debug({title: 'jsonlint:'}))
      .pipe(jsonlint())
      .pipe(jsonlint.report('verbose'));
});