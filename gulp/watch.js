'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-ruby-sass');
var plumber = require("gulp-plumber");
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');
var postcss = require('gulp-postcss');
var filter = require("gulp-filter");
var $ = require('gulp-load-plugins')({lazy: true});

var paths = {
  dist: './static',
  scripts: [
    './assets/javascripts/lib/*.js',
    './assets/javascripts/*.js'
    ],
  styles: [
    './assets/stylesheets/**/*.scss',
    './assets/stylesheets/**/*.sass'
    ]
};

gulp.task('scripts', function() {
  gulp.src(paths.scripts)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dist + '/javascripts'))
});

gulp.task('styles', function() {
  var processors = [
    require('autoprefixer')({ browsers: ['last 3 version', 'ie 8'], cascade: false })
  ];

  gulp.src(paths.styles)
    .pipe($.plumber())
    .pipe($.sass())
    .on('error', function(err) {
      console.log(err.message);
    })
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(filter("**/*.css"))
    .pipe(postcss(processors))
    .pipe(gulp.dest(paths.dist + '/stylesheets'));
});

gulp.task('default', function() {
  gulp.watch([paths.scripts], ['scripts']);
  gulp.watch([paths.styles], ['styles']);
});
