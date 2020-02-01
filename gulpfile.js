// Inicializa modulos
const gulp = require('gulp');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

// Coloca o caminho dos arquivos aqui
const files = {
  scssPath: 'src/scss/*.scss',
  cssDest: 'src/css',
}
// Sass task
function scssTask() {

  return gulp.src(files.scssPath)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(files.cssDest));

}

// Watch task
function watchTask() {
  gulp.watch('src/scss/style.scss', scssTask);
}

// Default task
exports.default = gulp.series(
  scssTask,
  watchTask
);