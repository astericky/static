var gulp = require('gulp');
var config = require('../../config').copyfonts.dev;

gulp.task('copy:fonts', function() {
    return gulp.src(config.src)
        .pipe(gulp.dest(config.dest));
});