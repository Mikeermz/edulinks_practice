var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('sass', () => {
  return gulp.src('src/assets/styles/sass/styles.scss')
    				 .pipe(sass().on('error', sass.logError))
    				 .pipe(gulp.dest('src/assets/styles/css'))
})

gulp.task('default', () => {
  gulp.watch('src/assets/styles/sass/**', ['sass'])
})