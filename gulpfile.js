let gulp = require("gulp");
let rename = require("gulp-rename");
let uglify = require('gulp-uglify-es').default;

gulp.task('build', function(){
  return gulp.src('./dist/frontend-compress.js')
    .pipe(uglify())
    .pipe(rename('frontend-compress.min.js'))
    .pipe(gulp.dest('./dist'))
})