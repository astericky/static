var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build:prod', function(done) {

    runSequence(
        'delete', 'jekyll:prod',
        [
            'sass',
            'scripts',
            'images',
            'copy:fonts'
        ],
        [
            'optimize:css',
            'optimize:js',
            'optimize:images',
            'optimize:html',
            'copy:fonts:prod'
        ],
        'revision',
        'rev:collect',
        done);
});