const gulp = require("gulp");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const path = require("path");
const terser = require('gulp-terser');

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
      .pipe(terser())
      .pipe(rename({ suffix: ".min" }))
      .pipe(gulp.dest(`${dest}`));
  };
}
// Watch Task
function watchTask() {
  const cssFiles = [
    "css/headings-footer.css",
    "css/main-content.css",
    "css/universal-css.css",
    "TOOLS/Assignment-templates/css/main.css"
  ];
  cssFiles.forEach((file) => {
    const dest = path.dirname(file);
    gulp.watch(`${file}`, () => cssTask(`${file}`, dest));
  });
  const jsFiles = [
    "js/src/alljs.js",
    "js/src/cards.js",
    "js/src/commonforall.js",
    "js/src/for_all_page.js",
    "js/src/hdr_ftr.js",
    "js/src/index.js",
    "js/src/utilities.js",
    "Operating-system/scheduling-algorithms/commonthings.js",
    "Operating-system/Disk-scheduling/commonthings.js",
    "DSA/commonthings.js",
    "DBMS/DBMS_topics/relational_calculus/js/trc.js",
    "DBMS/js/commonthings.js",
    "commonthings.js",
    "Operating-system/Deadlocks/commonthings.js",
    "Operating-system/memory-management/commonthings.js",
    "Digital_Fundamentals/Boolean_Algebra/commonthing.js",
    "TOOLS/Assignment-templates/js/doc-request.js",
    "TOOLS/Assignment-templates/js/commonthings.js",
    "TOOLS/Assignment-templates/js/form-functionality.js"
  ];
// let dest = `js/src/`;
  jsFiles.forEach((file) => {
    const dest = path.dirname(file);
    gulp.watch(`${file}`, jsTask(`${file}`, dest));
  });
}
// Default task
exports.default = watchTask;