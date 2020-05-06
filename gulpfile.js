const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');


gulp.task('minify-html', function() {
    return gulp.src('html/*.html')
    .pipe(htmlmin({
        collapseWhitespace: true,
    }))
    .pipe(gulp.dest('./'));
});
gulp.task('minify-html2', function() {
    return gulp.src('html_sections/*.html')
    .pipe(htmlmin({
        collapseWhitespace: true,
    }))
    .pipe(gulp.dest('html_sections/'));
});



gulp.task('minify-css', () => {
    return gulp.src('css/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('css'));
  });


gulp.task('styles', () => {
    return gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css/'));
});

gulp.task('compress', function() {
    gulp.src(['./*.js'])
      .pipe(minify())
      .pipe(gulp.dest('./'))
  });

gulp.task('clean', () => {
    return del([
        'css/main.css',
    ]);
});

gulp.task('default', gulp.series(['clean', 'styles' ,'minify-css' ,'minify-html' ,'minify-html2', 'compress']));