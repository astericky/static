var gulp    = require('gulp')
var ghPages = require('gulp-gh-pages');
var config  = require('../../config').ghPages;

console.log(config);

gulp.task('deploy', function() {
  return gulp.src(config.dest)
    .pipe(ghPages());
});