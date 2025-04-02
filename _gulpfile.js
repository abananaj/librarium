'use strict';

const { src, dest, watch, parallel } = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const webpack = require('webpack-stream');

const filePaths = {
    js: '',
    css: ''
}

function buildStyles(cb) {
    src('./assets/scss/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./assets/dist/css'));
    cb();
};
function buildScripts(cb) {
    src('./assets/js/main.js')
        .pipe(webpack())
        .pipe(dest('./assets/dist/js'));
    cb();
}
function watchFiles(cb) {
    watch(['./assets/scss/**/*.scss', './assets/js/**/*.js'], parallel(buildStyles, buildScripts));
    cb();
}

exports.buildStyles = buildStyles;
exports.buildScripts = buildScripts;
exports.watch = watchFiles;