var gulp = require('gulp')
var sass = require('gulp-sass')
var htmlmin = require('gulp-htmlmin');

gulp.task('minify', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('sass', () => {
  return gulp.src('src/assets/styles/sass/estilo.sass')
    				 .pipe(sass().on('error', sass.logError))
    				 .pipe(gulp.dest('src/assets/styles/css'))
})

gulp.task('default', () => {
  gulp.watch('src/assets/styles/sass/**', ['sass'])
})