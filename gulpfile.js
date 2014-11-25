//based on https://git.anguiano.me/christian/gulp-foundation-5-template/

// Gulp
var gulp = require('gulp');

// Plugins
var sass = require('gulp-ruby-sass');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');


//var plumber = require('gulp-plumber');
//var prefix = require('gulp-autoprefixer');
//var uglify = require('gulp-uglify');
//var imagemin = require('gulp-imagemin');
//var livereload = require('gulp-livereload');
//var lr = require('tiny-lr');
//var server = lr();

// Compile Sass
gulp.task('sass', function() {
  gulp.src(['assets/scss/*.scss'])
    .pipe(sass({
        loadPath: ['assets/scss', 'bower_components/foundation/scss', 'bower_components/foundation/scss/foundation']
      }))
    //.pipe(minifycss())
    .pipe(gulp.dest('assets/css'))
});

gulp.task('js', function(){
  gulp.src(['bower_components/bigSlide/dist/bigSlide.min.js', 'bower_components/mixitup/build/*.js'])
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('assets/js'))
})

gulp.task('default', ['sass', 'js']);
