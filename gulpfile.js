var gulp = require('gulp')
var sass = require('gulp-sass')
var htmlmin = require('gulp-htmlmin')
var clean = require('gulp-clean')


gulp.task('minify', () => {
  return gulp.src('src/*.html')
    				 .pipe(htmlmin({collapseWhitespace: true}))
    				 .pipe(gulp.dest('dist'))
})

gulp.task('sass', () => {
  return gulp.src('src/assets/styles/sass/estilo.sass')
    				 .pipe(sass().on('error', sass.logError))
    				 .pipe(gulp.dest('src/assets/styles/css'))
})

gulp.task('default', () => {
  gulp.watch('src/assets/styles/sass/**', ['sass'])
})

gulp.task('copy', () => {
  return gulp.src(['src/assets/**/*', '!src/assets/styles/sass/'])
        		 .pipe(gulp.dest('dist/assets/'))
})

gulp.task('clean', () => {
  return gulp.src('dist/**', {read: false})
        		 .pipe(clean());
})