
var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var cp = require('child_process');
var concat = require('gulp-concat');


var config = {
  sass_path: 'assets/scss',
  css_path: 'assets/css',
  js_src_path: 'assets/js/src',
  js_path: 'assets/js',
  bower_dir: 'bower_components'
}

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});

gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

gulp.task('browser-sync', ['sass', 'js', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

gulp.task('sass', function () {
    gulp.src(config.sass_path + '/*.scss')
    .pipe(sass({ includePaths : [config.sass_path, config.bower_dir + '/foundation/scss', config.bower_dir + '/foundation/scss/foundation', config.bower_dir + '/foundation/scss/foundation/components']}).on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 2 versions'],cascade: false}))
    .pipe(minifycss())
    .pipe(gulp.dest('_site/assets/css'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest(config.css_path));
});

gulp.task('js', function(){
  gulp.src(['bower_components/mixitup/build/*.js'])
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest(config.js_path))
})

gulp.task('watch', function() {
  gulp.watch('assets/scss/*', ['sass'])
});

gulp.task('watch', function () {
    gulp.watch('assets/scss/*.scss', ['sass']);
    gulp.watch(['*.html', '_layouts/*.html', '_includes/*.html', 'events/*', 'about/*', 'resources/*'], ['jekyll-rebuild']);
});

gulp.task('default', ['browser-sync', 'watch']);
