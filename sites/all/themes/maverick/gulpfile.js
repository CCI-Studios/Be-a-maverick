var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    sass        = require('gulp-sass'),
    prefix      = require('gulp-autoprefixer'),
    shell       = require('gulp-shell');

/**
 * @task sass
 * Compile files from scss
 */
gulp.task('sass', function () {
  return gulp.src('sass/screen.scss') // the source .scss file
  .pipe(sass()) // pass the file through gulp-sass
  .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // pass the file through autoprefixer
  .pipe(gulp.dest('stylesheets')) // output .css file to css folder
  .pipe(browserSync.reload({stream:true})) // reload the stream
});

/**
 * @task clearcache
 * Clear all caches
 */
gulp.task('clearcache', function() {
  return shell.task([
   'drush cc all'
  ]);
});

/**
 * @task reload
 * Refresh the page after clearing cache
 */
gulp.task('reload', ['clearcache'], function () {
  browserSync.reload();
});


/**
 * @task watch
 * Watch scss files for changes & recompile
 * Clear cache when Drupal related files are changed
 */
gulp.task('watch', function () {
  gulp.watch(['sass/_*.scss'], ['sass']);
  gulp.watch('**/*.{php,inc,info}',['reload']);
});

/**
 * Launch the Server
 */
 gulp.task('browser-sync', ['sass'], function() {
 browserSync.init({
   // Change as required
   proxy: "maverick.local",
   socket: {
       // For local development only use the default Browsersync local URL.
       domain: 'localhost:3000'
       // For external development (e.g on a mobile or tablet) use an external URL.
       // You will need to update this to whatever BS tells you is the external URL when you run Gulp.
       //domain: '192.168.0.13:3000'
   }
 });
});

 gulp.task('default', ['browser-sync', 'watch']);
