
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var babel = require("gulp-babel");


gulp.task('default', ['build-js','compress-js']);

gulp.task('build-js', function () {
	gulp.src(['src/js/rewind.js','src/js/player.js','src/js/video.js'])
	.pipe(concat('rewind.js'))
    .pipe(babel())
    .pipe(gulp.dest('build/js/'))
});

gulp.task('compress-js', function () {
	gulp.src(['src/js/rewind.js','src/js/player.js','src/js/video.js'])
	.pipe(concat('rewind.min.js'))
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest('build/js/'))
})