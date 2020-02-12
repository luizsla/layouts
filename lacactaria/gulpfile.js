var gulp = require("gulp"),
    gulpclean = require("gulp-clean"),
    imagemin = require("gulp-imagemin"),
    gulpconcat = require("gulp-concat"),
    gulpuglify = require("gulp-uglify"),
    gulpusemin = require("gulp-usemin"),
    gulpcssmin = require("gulp-cssmin"),
    gulppostcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    gulphtmlmin = require("gulp-htmlmin"),
    gulpuseref = require("gulp-useref");


//Default gulp task.
gulp.task("default", ["clean"], function() {
  gulp.start("replace-html", "minifica-imgs");
});

gulp.task("clean", function() {
  return gulp.src("dist")
      .pipe(gulpclean());
});


//Minificação de imagens.
  //Limpeza das imagens da pasta dist.
gulp.task("limpa-imgs", function() {
  return gulp.src("dist/assets/img")
             .pipe(gulpclean());
});

  //Minificação das imagens.
    //devDependencies -> gulp-imagemin.
gulp.task("minifica-imgs", ["limpa-imgs"], function() {
  gulp.src("assets/img/**/*")
      .pipe(imagemin())
      .pipe(gulp.dest("dist/assets/img"));
});

//Concatenação e minificação de JavaScript.
  //Limpeza dos Js da pasta dist.
gulp.task("limpa-js", function() {
  return gulp.src("dist/assets/js")
             .pipe(gulpclean());
});

  //Concatenação e minificação de arquivos js.
    //devDependencies -> gulp-concat, gulp-uglify.
gulp.task("build-js", ["limpa-js"], function() {
  gulp.src([
    "assets/js/carregadorDeFuncoes.js",
    "assets/js/menu.js",
    "assets/js/unveil.js",
    "assets/js/lazzyLoadingGaleria.js",
    "assets/js/jquery.event.move.js",
    "assets/js/jquery.twentytwenty.js",
    "assets/js/encomendas.js",
    "assets/js/animations.js",
    "assets/js/mapa.js"
  ])
    .pipe(gulpconcat("all.js"))
    .pipe(gulpuglify())
    .pipe(gulp.dest("dist/assets/js"));
});

//Concatenação, minificação e fixação de prefixos nos arquivos css.
  //Limpeza dos Js da pasta dist.
gulp.task("limpa-css", ["build-js"], function() {
return gulp.src("dist/assets/css")
           .pipe(gulpclean());
});

  //Concatenação e minificação de arquivos css.
    //devDependencies -> gulp-usemin, gulp-cssmin.
gulp.task("build-css", ["limpa-css"], function() {
  return gulp.src("index.html")
      .pipe(gulpusemin({
        css: [gulpcssmin]
      }))
      .pipe(gulp.dest("dist"));
});

  //Fixação de prefixos para navegadores mais antigos.
    //devDependencies -> gulp-postcss, autoprefixer.
gulp.task("tratar-prefixos", ["build-css"], function() {
  gulp.src("dest/assets/css/*.css")
      .pipe(gulppostcss([ autoprefixer() ]))
      .pipe(gulp.dest("dist/assets/css"));
});

//Replace das tags de import.
  //devDependencies -> gulp-useref.
gulp.task("replace-html", ["tratar-prefixos"], function() {
  gulp.src("index.html")
      .pipe(gulpuseref())
      .pipe(gulp.dest("dist"));
});
