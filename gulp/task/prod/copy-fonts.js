var gulp   = require('gulp');
var config = require('../../config').copyfonts.prod;

gulp.task('copy:fonts:prod', function() {
    return gulp.src(config.src)
        .pipe(gulp.dest(config.dest));
});