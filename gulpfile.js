var gulp = require("gulp");
var connect = require ("gulp-connect");
var    livereload = require('gulp-livereload');

// Запуск сервера 
gulp.task("connect", function(){
	connect.server({
		root: "app",
		livereload:true,
		port: 8888
	});
});

// Работа с html 
gulp.task("html", function () {
          gulp.src("./app/*.html")
          .pipe(connect.reload());
});

// Работа с css 
gulp.task("css", function(){
		gulp.src("./app/css/*.css")
		.pipe(connect.reload());	
});

// Слежка
gulp.task ("watch", function(){
	gulp.watch(["./app/*.html"], ["html"]);
	gulp.watch(["./app/css/*.css"], ["css"]);
});

// Задача по умолачанию
gulp.task("default", ["connect","watch","html","css"]);