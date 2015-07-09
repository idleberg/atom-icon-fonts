var gulp = require('gulp');
var jsonlint = require('gulp-json-lint');
var coffeelint = require('gulp-coffeelint');

// Tasks
gulp.task('lint', ['coffeelint', 'jsonlint']);

// Exclude node_modules
var self = '!node_modules/**/*';

// Lint CSON files
gulp.task('coffeelint', function () {
    gulp.src(['./**/*.cson', self])
        .pipe(coffeelint())
        .pipe(coffeelint.reporter())
});

// Lint JSON files
gulp.task('jsonlint', function() {
   gulp.src(['./**/*.json', self])
      .pipe(jsonlint())
      .pipe(jsonlint.report('verbose'));
});