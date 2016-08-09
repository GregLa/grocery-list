var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    })
});

gulp.task('sass', function() {
    return gulp.src('src/styles/scss/main.scss') // Gets all files ending with .scss in app/scss
        .pipe(sass())
        .pipe(gulp.dest('src/styles/'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('watch', ['browserSync', 'sass'], function (){
    gulp.watch('src/styles/scss/main.scss', ['sass']);
    gulp.watch('src/app/**/*.js', browserSync.reload);
    gulp.watch('src/app/**/*.html', browserSync.reload);
    gulp.watch('src/*.html', browserSync.reload);
});