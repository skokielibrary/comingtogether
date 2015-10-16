//based on https://git.anguiano.me/christian/gulp-foundation-5-template/

// Gulp
var gulp = require('gulp');

// Plugins
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');


var config = {
  sass_path: 'assets/scss',
  css_path: 'assets/css',
  js_src_path: 'assets/js/src',
  js_path: 'assets/js',
  bower_dir: 'bower_components'
}

gulp.task('sass', function () {
    gulp.src(config.sass_path + '/*.scss')
    .pipe(sass({ includePaths : [config.sass_path, config.bower_dir + '/foundation/scss', config.bower_dir + '/foundation/scss/foundation', config.bower_dir + '/foundation/scss/foundation/components']}).on('error', sass.logError))
    //.pipe(autoprefixer({browsers: ['last 2 versions'],cascade: false}))
    .pipe(minifycss())
    .pipe(gulp.dest(config.css_path));
});

gulp.task('js', function(){
  gulp.src(['bower_components/bigSlide/dist/bigSlide.min.js', 'bower_components/mixitup/build/*.js'])
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest(config.js_path))
})

gulp.task('watch', function() {
  gulp.watch('assets/scss/*', ['sass'])
});

gulp.task('default', ['sass', 'js', 'watch']);
