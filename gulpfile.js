// Dependencies
const coffeelint = require('gulp-coffeelint');
const debug = require('gulp-debug');
const gulp = require('gulp');
const jshint = require('gulp-jshint');
const jsonlint = require('gulp-jsonlint');
const lesshint = require('gulp-lesshint');
const stylish = require('coffeelint-stylish');

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

// Lint CoffeeScript & CSON files
gulp.task('lint:coffee', gulp.series(function(done) { 
    gulp.src(coffeeFiles)
        .pipe(debug({title: 'coffeelint:'}))
        .pipe(coffeelint())
        .pipe(coffeelint.reporter(stylish))
        .pipe(coffeelint.reporter('fail'));
    done();
}));

// Lint LESS files
gulp.task('lint:less', gulp.series(function(done) { 
    gulp.src(lessFiles)
        .pipe(debug({title: 'lesshint:'}))
        .pipe(lesshint())
        .pipe(lesshint.reporter());
    done();
}));

// Lint JavaScript files
gulp.task('lint:js', gulp.series(function(done) { 
    gulp.src(jsFiles)
        .pipe(debug({title: 'jshint:'}))
        .pipe(jshint());
    done();
}));

// Lint JSON files
gulp.task('lint:json', gulp.series(function(done) { 
    gulp.src(jsonFiles)
        .pipe(debug({title: 'jsonlint:'}))
        .pipe(jsonlint())
        .pipe(jsonlint.failAfterError())
        .pipe(jsonlint.reporter());
    done();
}));

// Tasks
gulp.task('lint', gulp.parallel('lint:coffee', 'lint:js', 'lint:json', 'lint:less', function(done) {
  done();
}));

