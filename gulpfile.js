var babelify = require('babelify');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var gulp = require('gulp');
var ejs = require('gulp-ejs');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var spawn = require('child_process').spawn;

gulp.task('sass', function() {
  return gulp.src('./assets/stylesheets/**/*.scss')
    .pipe(sass().on('error', function (err) { console.log(err); this.emit('end');}))
    .pipe(gulp.dest('./public/stylesheets/'));
});

gulp.task('html', function() {
  return gulp.src('./assets/index.html.ejs')
    .pipe(ejs({
      env: process.env.NODE_ENV || 'development'
    }).on('error', function(err) {
      console.log(err);
    }))
    .pipe(rename('index.html'))
    .pipe(gulp.dest("./public"));
});

// for chrome manifests
gulp.task('json', function() {
  if (process.env.NODE_ENV === 'production') {
    return gulp.src('./assets/chrome/manifest.prod.json')
      .pipe(rename('manifest.json'))
      .pipe(gulp.dest('./public'));
  } else {
    return gulp.src('./assets/chrome/manifest.dev.json')
      .pipe(rename('manifest.json'))
      .pipe(gulp.dest('./public'));
  }
});

gulp.task('images', function() {
  return gulp.src('./assets/images/**')
    .pipe(imagemin()) 
    .pipe(gulp.dest('./public/images'))
});

gulp.task('production', function() {
  process.env.NODE_ENV = 'production';

  gulp.start('default');
});

gulp.task('default', function() {
  var tasks = ['javascripts', 'images', 'sass', 'json', 'html'];
  if (process.env.NODE_ENV !== 'production')
    tasks.push('server')
  gulp.start(tasks);
  gulp.watch('./assets/stylesheets/**/*.scss', ['sass']);
  gulp.watch('./assets/images/**', ['images']);
  gulp.watch('./assets/javascripts/**/*.js', ['javascripts']);
});

gulp.task('javascripts', function() {
  var bundler = browserify({
    entries: 'assets/javascripts/index.js',
  });

  bundler.transform(babelify, {presets: ["es2015", "react", "stage-2"]});

  if (process.env.NODE_ENV !== 'production')
    return bundler.bundle()
      .on('error', function (err) { console.log(err); this.emit('end'); })
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(gulp.dest('public/javascripts/'));
  else 
    return bundler.bundle()
      .on('error', function (err) { console.log(err); this.emit('end'); })
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('public/javascripts/'));


});

gulp.task('server', function() {
  var express = spawn('npm', ['run', 'server'], {stdio: 'inherit'});
  process.on('exit', function () {
    console.log('\nKilling Express server');
    express.kill();
  });
});
