var gulp = require("gulp");
var connect = require ("gulp-connect");
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');
var concatCss = require('gulp-concat-css');

// Запуск сервера 
gulp.task("connect", function() {
	connect.server({
		root: "app",
		livereload: true,
		port: 8888
	});
});

// Работа с html 
gulp.task("connect", function() {
      gulp.src("./app/*.html")
      .pipe(connect.reload());
      gulp.src("./app/css/*.css")
		.pipe(connect.reload());
});

// Работа с css 
gulp.task("css", function(){
			
});

// Слежка
gulp.task ("watch", function(){
	gulp.watch(["./app/*.html"], ["html"]);
	gulp.watch(["./app/css/*.css"], ["css"]);
	gulp.run("build");
});

// Задача по умолачанию
gulp.task("default", ["connect",/*"watch","html","css",*/ "build"]);

//Cборка css
gulp.task("build", function(){
	gulp.src("app/css/*.css")
	.pipe(concatCss("style.css"))
	.pipe(rename("build.css"))
	.pipe(gulp.dest("build/"));
});