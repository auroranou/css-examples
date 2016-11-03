'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefix = require('gulp-autoprefixer');

var scssSrcPath = './sass/**/*.scss';
var cssDestPath = './css';

gulp.task('default', ['sass']);

gulp.task('sass:watch', function () {
  gulp.watch(scssSrcPath, ['sass']);
});

gulp.task('sass', function () {
  // Pipe original SCSS files through auto-prefixer and write to final CSS file
  return gulp.src(scssSrcPath)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefix('last 2 versions'))
    .pipe(gulp.dest(cssDestPath));
});