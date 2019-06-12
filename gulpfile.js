const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
const cssnano = require("gulp-cssnano");
const uglify = require("gulp-uglify");
const minify = require("gulp-minify");

gulp.task("html", function() {
  return gulp
    .src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist"));
});

gulp.task("css", function() {
  return gulp
    .src("src/css/*.css")
    .pipe(cssnano())
    .pipe(gulp.dest("dist"));
});

gulp.task("js", function() {
  return gulp
    .src("src/*.js")
    .pipe(minify())
    .pipe(gulp.dest("dist"));
});

gulp.task("default", gulp.series(["html", "css", "js"]));
