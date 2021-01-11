let gulp = require('gulp'),
sass = require('gulp-sass'),
browserSync= require ('browser-sync'),
uglify = require('gulp-uglify'),
concat = require('gulp-concat'),
rename = require('gulp-rename');


// function scss to css(compressed)
gulp.task('scss' ,function(){
    return gulp.src('src/scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({stream:true}))
});
// function scss to css(compressed)

// livestream html
gulp.task('html',function(){
    return gulp.src('*.html')
    .pipe(browserSync.reload({stream:true}))
});
// livestream html

// livestream javascript
gulp.task('script',function(){
    return gulp.src('src/*.html')
    .pipe(browserSync.reload({stream:true}))
});
// livestream javascript

// function js to compressed js and other modules
gulp.task('js',function(){
    return gulp.src([
        'node_modules/slick-carousel/slick/slick.js',
        'node_modules/magnific-popup/dist/jquery.magnific-popup.js'
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('src/js'))
    .pipe(browserSync.reload({stream:true}))
});
// function js to compressed js and other modules

//function Live-server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./",
        }
    });
});
//function Live-server

//connected all function
gulp.task('watch' ,function(){
    gulp.watch('src/scss/**/*.scss',gulp.parallel('scss'))
    gulp.watch('*.html',gulp.parallel('html'))
    gulp.watch('src/js/*.js',gulp.parallel('script'))
});

gulp.task('default',gulp.parallel('browser-sync', 'watch'))
//connected all function