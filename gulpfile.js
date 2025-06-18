const gulp = require("gulp");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const path = require("path");

// CSS Task
function cssTask(src, dest) {
  return gulp
    .src(`${src}`)
    .pipe(postcss([cssnano()]))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(`${dest}`));
}

// JS Task
function jsTask(src, dest) {
  return function () {
    return gulp
      .src(`${src}`)
      .pipe(uglify())
      .pipe(rename({ suffix: ".min" }))
      .pipe(gulp.dest(`${dest}`));
  };
}

// Watch Task
function watchTask() {
  const cssFiles = [
    "css/headings-footer.css",
    "css/main_content.css",
    "css/universal-css.css",
  ];

  cssFiles.forEach((file) => {
    const dest = path.dirname(file);
    gulp.watch(`${file}`, () => cssTask(`${file}`, dest));
  });

  const jsFiles = [
    "js/src/alljs.js",
    "js/src/cards.js",
    "js/src/commonforall.js",
    "js/src/externalcss.js",
    "js/src/hdr_ftr.js",
    "js/src/index.js",
    "js/src/utilities.js",
    "os/scheduling_algorithms/commonthings.js",
    "os/Disk_scheduling/commonthings.js",
    "dsa_in_c/commonthings.js"
  ];
  // let dest = `js/src/`;

  jsFiles.forEach((file) => {
    const dest = path.dirname(file);
    gulp.watch(`${file}`, jsTask(`${file}`, dest));
  });
}

// Default task
exports.default = watchTask;