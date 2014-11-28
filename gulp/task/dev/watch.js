var gulp = require('gulp');
var config = require('../../config').watch;

gulp.task('watch', ['browsersync'], function() {
    gulp.watch(config.jekyll,  ['jekyll-rebuild']);
    gulp.watch(config.sass,    ['sass']); // 'scss-lint' can also be added: add config file
    gulp.watch(config.scripts, ['scripts', 'jshint']);
    gulp.watch(config.images,  ['images']);
    gulp.watch(config.sprites, ['sprites']);
    gulp.watch(config.copyfonts, ['copy:fonts']);
});