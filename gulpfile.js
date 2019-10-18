const {src, series, parallel, task, dest, watch} = require('gulp'),
    concat = require('gulp-concat'),
    prefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    pug = require('gulp-pug'),
    browserSync = require('browser-sync').create();

// CSS
task('css', function () {
    return src('src/css/main.scss')
        .pipe(sass()) //{outputStyle: 'compressed'}
        .pipe(prefixer('last 2 versions'))
        .pipe(concat('main.css'))
        .pipe(dest('dist/assets/css'))
        .pipe(browserSync.reload({stream: true}));
});

// minCSS
task('minCss', function () {
    return src('src/css/*.min.css')
        .pipe(dest('dist/assets/css'));
});


// JS
task('js', function () {
    return src(['src/js/*.js', '!src/js/*.min.js'])
        .pipe(concat('main.js'))
        .pipe(dest('dist/assets/js'))
        .pipe(browserSync.reload({stream: true}));
});

// minJs
task('minJs', function () {
    return src('src/js/*.min.js')
        .pipe(dest('dist/assets/js'));
});

task('views', function () {
    return src('src/views/*.pug')
        .pipe(pug({pretty: true}))
        .pipe(dest('dist'))
        .pipe(browserSync.reload({stream: true}));
});


// images
task('img', () => {
    return src('src/img/*.+(png|jpg|gif|svg)')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            optimizationLevel: 5
        })))
        .pipe(dest('dist/assets/img'))
        .pipe(browserSync.reload({stream: true}));
});

task('watch', () => {
    watch('src/views/**/*.pug', series(['views']));
    watch('src/css/**/*.scss', series(['css']));
    watch('src/img/*.+(png|jpg|gif|svg)', series(['img']));
    watch('src/js/*.js', series(['js']));
    watch('src/js/*.min.js', series(['minJs']));
});

task('browserSync', () => {
    browserSync.init({
        watch: true,
        port: 3000,
        server: {
            baseDir: 'dist/'
        },
    })
});

// task('default', parallel('watch', 'browserSync'));

exports.default = series(
    parallel(
        "views",
        series("css"),
        series("js"),
        "img",
        "browserSync",
        "watch"
    )
);