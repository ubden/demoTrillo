const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


// Compile Sass & Inject Into Browser
gulp.task('sass', function() {
    return gulp.src(['./sass/**/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
});

// Watch Sass & Serve
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./"  
    });

    gulp.watch(['./sass/**/*.scss'], ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

// Default Task
gulp.task('default', ['serve']);