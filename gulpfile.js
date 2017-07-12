var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
uglify = require('gulp-uglify'),
clean = require('clean-css'),
cssmin = require('gulp-cssmin'),
rename = require('gulp-rename');

gulp.task('build-img', function(){
	gulp.src(['app/images/**/*', '!app/images/**/Thumbs.db'])
	.pipe(imagemin())
	.pipe(gulp.dest('app/images'));	
});

gulp.task('uglify-js', function () {
    gulp.src(['app/js/**/*', '!app/js/**/Thumbs.db'])
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))    
    .pipe(gulp.dest('app/js'));
})

gulp.task('cssmin', function () {
    gulp.src(['app/css/*.css','!app/css/**/Thumbs.db'])
    .pipe(cssmin({
        exclude: ['tasks'],
        ignoreFiles: ['.map',
                      '.scss',
                      '.map.scss',
                      '.min']
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css'));
    
});