/**
 * gulp主文件
 * Created by Jason on 2016/9/20.
 */
'use strict';
//此处代码由node执行
//载入Gulp模块
var gulp = require('gulp');
//css压缩
var cssnano = require('gulp-cssnano');
//js合并
var concat = require('gulp-concat');
//js压缩混淆
var uglify = require('gulp-uglify');
//更名
var rename = require('gulp-rename');
//html压缩
var htmlmin = require('gulp-htmlmin');
//html路径更名
var htmlreplace = require('gulp-html-replace');
//图片压缩
var imagemin = require('gulp-imagemin');

//注册一个任务
gulp.task('copy', function () {
    //当gulp执行这个say任务时会自动执行该函数
    //合并压缩之类的操作
    return gulp.src('./build/view/*.html')
        .pipe(htmlreplace({'css':'../css/styles.min.css','js':'../js/app.min.js'}))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist/view/'));
});

gulp.task('imgmin', function () {
    return gulp.src('./build/src/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/src/'));
});

gulp.task('nano', function () {
    return gulp.src('./build/css/*.css')
        .pipe(concat('styles.css'))
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('concat', function () {
    return gulp.src('./build/js/*.js')
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/js/'));
})

//批量处理
gulp.task('do', function () {
    gulp.src('./build/view/*.html')
        .pipe(htmlreplace({'css':'../css/styles.min.css','js':'../js/app.min.js'}))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist/view/'));
    gulp.src('./build/src/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/src/'));
    gulp.src('./build/css/*.css')
        .pipe(concat('styles.css'))
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css/'));
    gulp.src('./build/js/*.js')
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/js/'));
})

gulp.task('dist', function () {
    //监听任务
    gulp.watch('./build/view/*.html', ['copy']);
    gulp.watch('./build/css/*.css', ['nano']);
});