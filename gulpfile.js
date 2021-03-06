//Remove if node >= v0.12
require('harmonize')();

var autoprefixer = require('gulp-autoprefixer');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var gutil = require('gulp-util');
var jest = require('jest-cli');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var newer = require('gulp-newer');
var reactify = require('reactify');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var watchify = require('watchify');

var jsAppFile = './src/js/app.js';
var lessAppFile = './src/less/app.less';
var lessFiles = './src/less/**/*.less';

var distDirectory = './dist/';
var jsBundleFilename = 'bundle.js';
var cssBundleFilename = 'bundle.css';

var fontFiles = './node_modules/bootstrap/fonts/*';
var distFontDirectory = distDirectory + 'fonts';

var debug = true;

var bundler = browserify({
    entries: [jsAppFile],
    transform: [reactify],
    extensions: ['.js'],
    debug: debug,
    cache: {},
    packageCache: {}
});

var jestConfig = {
    rootDir: 'src',
    testDirectoryName: 'tests',
    scriptPreprocessor: 'tests/support/preprocessor.js',
    testPathIgnorePatterns: ['support'],
    unmockedModulePathPatterns: ['react']
};


function errorHandler(error) {
    gutil.log(gutil.colors.red('Error'), error.message);
    this.end();
}

function bundleJs() {
    bundler
        .bundle()
        .on('error', errorHandler)
        .pipe(source(jsBundleFilename))
        .pipe(buffer())
        .pipe(gulpif(debug, sourcemaps.init({ loadMaps: true })))
        .pipe(gulpif(debug, sourcemaps.write('./')))
        .pipe(gulpif(!debug, rename({ suffix: '.min' })))
        .pipe(gulpif(!debug, uglify()))
        .pipe(gulp.dest(distDirectory));
}

function bundleLess() {
    gulp.src(lessAppFile)
        .pipe(less())
        .on('error', errorHandler)
        .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
        .pipe(rename(cssBundleFilename))
        .pipe(gulpif(!debug, rename({ suffix: '.min' })))
        .pipe(gulpif(!debug, minifyCSS({ keepBreaks:true })))
        .pipe(gulp.dest(distDirectory));
}

function copyFonts() {
    gulp.src(fontFiles)
        .pipe(newer(distFontDirectory))
        .pipe(gulp.dest(distFontDirectory));
}

function build() {
    bundleJs();
    bundleLess();
    copyFonts();
}

gulp.task('default', function() {
    build();

    var watcher = watchify(bundler);
    watcher.on('update', function() {
        bundleJs();
        gutil.log(jsBundleFilename, 'updated');
    });

    gulp.watch(lessFiles, function() {
        bundleLess();
        gutil.log(cssBundleFilename, 'updated');
    });
});

gulp.task('test', function(done) {
    jest.runCLI({ config : jestConfig }, '.', function() {
        done();
    });
});

gulp.task('build', function() {
    debug = false;
    build();
});