const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const img = require('gulp-imagemin');
const ugli = require('gulp-uglify');
const obf = require('gulp-obfuscate');
const sm = require('gulp-sourcemaps');

function compImg() {
    return gulp.src('./source/assets/*')
    .pipe(img())
    .pipe(gulp.dest('./build/assets'));
} // comprime imagem

function compressJs() {
    return gulp.src('./source/js/*.js')
    .pipe(ugli())
    .pipe(obf())
    .pipe(gulp.dest('./build/js'));
} //comprime arquivos js

function compSass() {
    return gulp.src('./source/css/*scss')
    .pipe(sm.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sm.write('./maps'))
    .pipe(gulp.dest('./build/css'));
} //compila arquivos sass

exports.task = gulp.parallel(compressJs,compSass, compImg);