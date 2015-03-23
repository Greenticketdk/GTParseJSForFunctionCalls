var gulp = require('gulp');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');
 
gulp.task('lint', function () {
    return gulp.src(['*.js', 'tests/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('test', ['lint'], function () {
    return gulp.src('tests/test.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}));
});
