const { src, dest, watch, series, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();
const cssnano = require("gulp-cssnano");
const terser = require("gulp-terser");

const files = {
  htmlPath: "src/**/*.html",
  jsPath: "src/**/*.js",
  scssPath: "src/**/*.scss",
};

// html Task
function htmlTask() {
  return src(files.htmlPath).pipe(dest("pub"));
}

//scss task
function scssTask() {
  return src(files.scssPath) //väljer scss filer
    .pipe(sass()) //konvertera scss till css
    .pipe(concat("main_style.css")) //slår ihop ihop scss filerna
    .pipe(cssnano()) //miniferar css
    .pipe(dest("pub/css")); //publicerar till pub mappen
}

function jsTask() {
  return src(files.jsPath) //väljer js filer
    .pipe(concat("main.js")) //slår ihop js filer
    .pipe(terser()) //miniferar js
    .pipe(dest("pub/js")); //publicerar till
}

//Browsersync server start

function browsersyncServer(cb) {
  browserSync.init({
    server: {
      baseDir: "pub",
    },
  });
  cb();
}

//Browsersync reload
function browsersyncReload(cb) {
  browserSync.reload();
  cb();
}

//watch task
function watchTask() {
  watch(
    [files.htmlPath, files.scssPath, files.jsPath],
    series(parallel(htmlTask, scssTask, jsTask), browsersyncReload)
  );
}

//Export default för att start med kommand "gulp"
exports.default = series(
  parallel(htmlTask, scssTask, jsTask),

  browsersyncServer,
  watchTask
);
