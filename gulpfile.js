const gulp        = require('gulp');
const browserSync = require('browser-sync');

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});