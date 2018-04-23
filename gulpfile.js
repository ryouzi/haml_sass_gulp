var gulp = require('gulp');
var uglify = require('gulp-uglify');
var haml = require('gulp-ruby-haml');
var sass = require('gulp-sass');

gulp.task('haml', function() {
  gulp.src('./src/haml/*.haml')
    .pipe(haml())
    .pipe(gulp.dest('./web/html/'));
});

gulp.task('haml-watch', ['haml'], function(){
  var watcher = gulp.watch('./src/haml/*.haml', ['haml']);
  watcher.on('change', function(event) {
  });
});

gulp.task('sass', function(){
  gulp.src('./src/sass/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('./web/css/'));
});


gulp.task('sass-watch', ['sass'], function(){
  var watcher = gulp.watch('./src/sass/*.scss', ['sass']);
  watcher.on('change', function(event) {
  });
});

gulp.task('default', ['haml-watch', 'sass-watch']);
