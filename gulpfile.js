/* jshint esversion:6, node:true*/

const gulp       = require('gulp'),
      browserify = require('browserify'),
      babelify   = require('babelify'),
      buffer     = require('vinyl-buffer'),
      uglify     = require('gulp-uglify'),
      sourcemaps = require('gulp-sourcemaps'),
      source     = require('vinyl-source-stream');

gulp.task('js', () => {
    return browserify({
        entries: './src/js/main.js',
        debug  : true
    })
    .transform(babelify, {
        presets: ['es2015']
    })
    .bundle()
    .on('error', (err) => {
        console.log(err);
        this.emit('end');
    })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build'));
});

gulp.task('default', ['js']);

gulp.task('watch', () => {
    return gulp.watch('./src/**/*.js', ['default']);
});
