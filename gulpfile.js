var gulp      = require('gulp'),
    del       = require('del'),
    sequence  = require('gulp-sequence'),
    connect   = require('gulp-connect'),
    file      = require('gulp-file'),
    sass      = require('gulp-sass'),
    ghPages   = require('gulp-gh-pages'),
    util      = require('gulp-util'),
    opn       = require('opn');

var domain = "coypu.co";
var remoteUrl = "git@github.com:bkzl/coypu-landing.git"
var paths = {
  build: {
    src: 'build/**/*',
    dest: 'build'
  },
  sass: {
    src: 'style.scss',
    dest: 'build',
    watch: ['sass/*.scss', 'style.scss']
  },
  img: {
    src: 'img/**/*',
    dest: 'build/img'
  },
  html: {
    src: ['*.html', 'index.html'],
    dest: 'build',
    watch: ['*.html', 'index.html']
  }
};

gulp.task('sass', function() {
  return gulp.src(paths.sass.src)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(paths.sass.dest))
    .pipe(connect.reload());
});

gulp.task('img', function() {
  return gulp.src(paths.img.src)
    .pipe(gulp.dest(paths.img.dest));
});

gulp.task('html', function() {
  return gulp.src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest))
    .pipe(connect.reload());
});

gulp.task('cname', function() {
  return file('CNAME', domain, { src: true })
    .pipe(gulp.dest(paths.build.dest));
});

gulp.task('clean', function() {
  return del([paths.build.dest]);
});

gulp.task('build', ['sass', 'img', 'html', 'cname']);

gulp.task('watch', function() {
  gulp.watch(paths.sass.watch, ['sass']);
  gulp.watch(paths.html.watch, ['html']);
});

gulp.task('connect', function() {
  connect.server({
    root: paths.build.dest,
    livereload: true
  });
});

gulp.task('deploy', function() {
  return gulp.src(paths.build.src)
    .pipe(ghPages({
      "remoteUrl": remoteUrl
    }));
});

gulp.task('browse', function () {
  opn('http://localhost:8080', { app: 'google chrome' });
});

gulp.task('serve', sequence('clean', 'build', ['watch', 'connect'], 'browse'));
gulp.task('publish', sequence('clean', 'build', 'deploy'));
gulp.task('default', ['serve']);
