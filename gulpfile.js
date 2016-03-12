var gulp = require('gulp');


var paths = {
    src: ['src/*', 'README.md']
};

gulp.task('build', function() {
    return gulp.src(paths.src)
        // Pass in options to the task
        .pipe(gulp.dest('dist'));
});