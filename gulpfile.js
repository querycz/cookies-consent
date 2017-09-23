// Gulp Vars
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');



// SASS Compile
gulp.task('style', function(){
    gulp.src('scss/style.scss')
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(rename('style.css'))
	    .pipe(gulp.dest('css'))
});
