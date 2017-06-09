/**

Gulp Boilerplate

*/

/**
 * Required plugins
 */
 var gulp = require('gulp');
 var sass = require('gulp-sass');
 var browserSync = require('browser-sync').create();
 var useref = require('gulp-useref');
 var uglify = require('gulp-uglify');
 var gulpIf = require('gulp-if');
 var cache = require('gulp-cache');
 var del = require('del');
 var runSequence = require('run-sequence');
 var cleanCSS = require('gulp-clean-css');
 var config = require('./config.json');

/**
 * Compile SASS into CSS
 */
 function compileSass(cfg) {
  return gulp.src(cfg.sass.src)
  .pipe(sass())
  .pipe(gulp.dest(cfg.css.dest))
  .pipe(browserSync.reload({
    stream: true
}));
}

gulp.task('sass', function() {
  compileSass(config.app);
});

/**
 * Watch project files and reload the screen
 */
 function watchAll(cfg){
  gulp.watch(cfg.sass.src, ['sass']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch(cfg.html.src, browserSync.reload);
    gulp.watch(cfg.js.src, browserSync.reload);  
}

gulp.task('watch', function (){
    watchAll(config.app); 
})

/**
 * Default taks for the Development Environment
 */
 gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
    )
})

/**
 * Automatic Browser reload
 */
 gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
  },
})
});

/**
 * JS and CSS concatenation and minification
 */
 gulp.task('useref', function(){
  userefUglify(config.app);
});

 function userefUglify(cfg){
  return gulp.src(cfg.html.src)
  .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist'))
}

/**
 * Clean production envirnomnet
 */
 gulp.task('clean:dist', function() {
  return del.sync('dist');
});

/**
 * Cache clear task
 */
 gulp.task('cache:clear', function (callback) {
  return cache.clearAll(callback)
});

/**
 * Minify CSS files
 */
 function minifyCss(cfg) {
  return gulp.src(cfg.css.src)
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest(cfg.css.dest));
}

gulp.task('minify-css', function(){
  minifyCss(config.app);
});

/**
 * Copy the images folder to the dist folder
 */
 function copyImagesFolder(cfg){
  return gulp.src(cfg.images.src)
  .pipe(gulp.dest(cfg.images.dest));
}

gulp.task('copy-images-folder', function(){
  copyImagesFolder(config.app);
});

/**
 * Build task for production environment
 */
 gulp.task('build', function (callback) {
  runSequence('clean:dist',
    ['sass', 'minify-css', 'copy-images-folder', 'useref'],
    callback
    )
});