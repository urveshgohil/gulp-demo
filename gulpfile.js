const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('styles', () => {
    return gulp.src(['scss/*.scss','scss/**/*.scss'])
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
});
gulp.task('javascript', () => {
    return gulp.src(['js/*.js'])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});
gulp.task('watch', () => {
    return gulp.watch(['scss/*.scss','scss/**/*.scss','js/*.js'], (done) => {
        gulp.series(['styles','javascript']) (done)
    })
});