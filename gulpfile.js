var babelify = require('babelify');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

gulp.task('sass', function() {
  return gulp.src('./assets/stylesheets/**/*.scss')
    .pipe(sass().on('error', function (err) { console.log(err); this.emit('end');}))
    .pipe(gulp.dest('./public/stylesheets/'));
});

gulp.task('images', function() {
  return gulp.src('./assets/images/**')
    .pipe(imagemin()) // Optimize
    .pipe(gulp.dest('./public/images'))
});

gulp.task('apply-production', function() {
  process.env.NODE_ENV = 'production';
});

gulp.task('default', function() {
  gulp.start('apply-production', 'javascripts', 'images', 'sass');
  gulp.watch('./assets/stylesheets/**/*.scss', ['sass']);
  gulp.watch('./assets/images/**', ['images']);
  gulp.watch('./assets/javascripts/**/*.js', ['javascripts']);
});

gulp.task('javascripts', function() {
  var bundler = browserify({
    entries: 'assets/javascripts/index.js',
  });

  bundler.transform(babelify, {presets: ["es2015", "react"]});

  return bundler.bundle()
    .on('error', function (err) { console.log(err); this.emit('end'); })
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('public'));

});
