var gulp        = require('gulp');
var browsersync = require('browser-sync');
var config      = require('../../config').browsersync.prod;

gulp.task('browsersync:prod', ['build:prod'], function() {
    browsersync(config);
});