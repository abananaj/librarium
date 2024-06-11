const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

async function buildStyles() {
  return src('*.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

async function watchTask() {
  watch(['*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)