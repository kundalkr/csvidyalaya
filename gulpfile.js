const gulp = require("gulp");
const uglify = require("gulp-uglify");
const renames = require("gulp-rename");

function cards(arg) {
  return gulp
    .src(`${arg}`)
    .pipe(uglify())
    .pipe(renames({ suffix: ".min" }))
    .pipe(gulp.dest("C:/Users/kundal kumar/Desktop/csvidyalaya/js/src/"));
}

gulp.watch("C:/Users/kundal kumar/Desktop/csvidyalaya/js/src/alljs.js", () => {
  return cards("C:/Users/kundal kumar/Desktop/csvidyalaya/js/src/alljs.js");
});

gulp.watch("C:/Users/kundal kumar/Desktop/csvidyalaya/js/src/cards.js", () => {
  return cards("C:/Users/kundal kumar/Desktop/csvidyalaya/js/src/cards.js");
});

gulp.watch(
  "C:/Users/kundal kumar/Desktop/csvidyalaya/js/src/commonforall.js",
  () => {
    return cards(
      "C:/Users/kundal kumar/Desktop/csvidyalaya/js/src/commonforall.js"
    );
  }
);

gulp.watch(
  "C:/Users/kundal kumar/Desktop/csvidyalaya/js/src/externalcss.js",
  () => {
    return cards(
      "C:/Users/kundal kumar/Desktop/csvidyalaya/js/src/externalcss.js"
    );
  }
);

gulp.watch(
  "C:/Users/kundal kumar/Desktop/csvidyalaya/js/src/hdr_ftr.js",
  () => {
    return cards("C:/Users/kundal kumar/Desktop/csvidyalaya/js/src/hdr_ftr.js");
  }
);

gulp.watch("C:/Users/kundal kumar/Desktop/csvidyalaya/js/src/index.js", () => {
  return cards("C:/Users/kundal kumar/Desktop/csvidyalaya/js/src/index.js");
});

gulp.watch(
  "C:/Users/kundal kumar/Desktop/csvidyalaya/js/src/utilities.js",
  () => {
    return cards(
      "C:/Users/kundal kumar/Desktop/csvidyalaya/js/src/utilities.js"
    );
  }
);

exports.default = gulp.series(cards);
