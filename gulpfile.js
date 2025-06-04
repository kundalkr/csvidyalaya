const gulp = require("gulp");
const uglify = require("gulp-uglify");
const renames = require("gulp-rename");

function cards(src,dest) {
  return gulp
    .src(`${src}`)
    .pipe(uglify())
    .pipe(renames({ suffix: ".min" }))
    .pipe(gulp.dest(`${dest}`));
}
const dest = "C:/Users/kundal kumar/Desktop/csvidyalaya/js/src/";
gulp.watch("C:/Users/kundal kumar/Desktop/csvidyalaya/js/src/alljs.js", () => {
  return cards("C:/Users/kundal kumar/Desktop/csvidyalaya/js/src/alljs.js",dest);
});

gulp.watch("C:/Users/kundal kumar/Desktop/csvidyalaya/js/src/cards.js", () => {
  return cards("C:/Users/kundal kumar/Desktop/csvidyalaya/js/src/cards.js",dest);
});

gulp.watch(
  "C:/Users/kundal kumar/Desktop/csvidyalaya/js/src/commonforall.js",
  () => {
    return cards(
      "C:/Users/kundal kumar/Desktop/csvidyalaya/js/src/commonforall.js",dest
    );
  }
);

gulp.watch(
  "C:/Users/kundal kumar/Desktop/csvidyalaya/js/src/externalcss.js",
  () => {
    return cards(
      "C:/Users/kundal kumar/Desktop/csvidyalaya/js/src/externalcss.js",dest
    );
  }
);

gulp.watch(
  "C:/Users/kundal kumar/Desktop/csvidyalaya/js/src/hdr_ftr.js",
  () => {
    return cards("C:/Users/kundal kumar/Desktop/csvidyalaya/js/src/hdr_ftr.js",dest);
  }
);

gulp.watch("C:/Users/kundal kumar/Desktop/csvidyalaya/js/src/index.js", () => {
  return cards("C:/Users/kundal kumar/Desktop/csvidyalaya/js/src/index.js",dest);
});

gulp.watch(
  "C:/Users/kundal kumar/Desktop/csvidyalaya/js/src/utilities.js",
  () => {
    return cards(
      "C:/Users/kundal kumar/Desktop/csvidyalaya/js/src/utilities.js",dest
    );
  }
);

exports.default = gulp.series(cards);
