var gulp = require('gulp'),
	clean = require('gulp-clean'),
	cleanCSS = require('gulp-clean-css'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	browserSync = require('browser-sync').create();
//	argv = require('yargs').argv,
//	shell = require('gulp-shell');

var reload = browserSync.reload;


var CLIENT_BASE = 'public';
var BUILD_DIR = 'build';

var paths = {
	htmlSrcPath: [CLIENT_BASE + '/**/*.html'],
	stylesSrcPath: [
		CLIENT_BASE + '/**/*.css'
	],
	stylesSrcLibPath: [
		'bower_components/bootstrap/dist/css/bootstrap*.css'
	],
	scriptsSrcPath: [CLIENT_BASE + '/**/*.js'],
	libsSrcPath: [
		'bower_components/angular/angular*.js',
        'bower_components/bootstrap/dist/js/bootstrap*.js'
	],
	fontsSrcPath: ['bower_components/bootstrap/dist/fonts/**/*'],
	imageSrcPath: [CLIENT_BASE + '/images/**/*.*']
};

gulp.task('default', ['process-html', 'process-styles', 'process-scripts', 'process-libs', 'process-fonts', 'process-images']);

gulp.task('build', ['clean', 'default']);

gulp.task('process-html', function() {
	return gulp.src(paths.htmlSrcPath)
		.pipe(gulp.dest(BUILD_DIR));
});

gulp.task('process-styles', ['process-project-styles', 'process-lib-styles']);

gulp.task('process-project-styles', function() {
	console.log("processing styles");
	return gulp.src(paths.stylesSrcPath)
		.pipe(gulp.dest(BUILD_DIR))
		.pipe(concat('wow.min.css'))
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest(BUILD_DIR + '/css'))
});

gulp.task('process-lib-styles', function() {
	return gulp.src(paths.stylesSrcLibPath)
		.pipe(gulp.dest(BUILD_DIR + '/css'))
});

gulp.task('process-dev-scripts', function() {
	console.log("processing dev scripts");
	return gulp.src(paths.scriptsSrcPath)
		.pipe(gulp.dest(BUILD_DIR));
});

gulp.task('process-prod-scripts', function() {
	console.log("processing scripts");
	return gulp.src(paths.scriptsSrcPath)
		.pipe(uglify())
		.pipe(concat('wow.min.js'))
		.pipe(gulp.dest(BUILD_DIR + '/css'));
});

gulp.task('process-scripts', ['process-dev-scripts', 'process-prod-scripts']);

gulp.task('process-libs', function() {
	return gulp.src(paths.libsSrcPath)
		.pipe(gulp.dest(BUILD_DIR + '/lib'));
});

gulp.task('process-fonts', function() {
	return gulp.src(paths.fontsSrcPath)
		.pipe(gulp.dest(BUILD_DIR + '/fonts'));
});

gulp.task('process-images', function() {
	return gulp.src(paths.imageSrcPath)
		.pipe(gulp.dest(BUILD_DIR + '/images'));
});

gulp.task('clean', function() {
	gulp.src(BUILD_DIR, {read: false}).pipe(clean());
});

gulp.task('devWatch', function () {
	gulp.watch(CLIENT_BASE + '/**/*.html', ['process-html']).on('change', reload);
	gulp.watch(CLIENT_BASE + '/**/*.js', ['process-dev-scripts']).on('change', reload);
	gulp.watch(CLIENT_BASE + '/**/*.css', ['process-styles']).on('change', reload);
});
