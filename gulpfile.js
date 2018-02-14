var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Start browserSync server
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
        stream: true
    }))
})

// Watchers
gulp.task('watch', ['browserSync', 'sass'], function (){
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/js/*.js', browserSync.reload);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/pages/*.html', browserSync.reload);
})

