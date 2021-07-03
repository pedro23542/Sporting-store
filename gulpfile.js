let gulp = require('gulp'),
    webpack = require('webpack-stream'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer');

let isDev = true;
let isProd = !isDev;

let webpakConfig ={
  output: {
    filename: 'main.js'
  },
  module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: '/node_modules/'
        }
      ]
  },
  mode: isDev ? 'development' : 'production',

};

gulp.task('scss', function(){
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 8 versions']
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('html', function(){
  return gulp.src('src/*.html')
  .pipe(gulp.dest('dist'))
  .pipe(browserSync.reload({stream: true}))
});

gulp.task('img', function(){
  return gulp.src('src/images/**/*.*')
    .pipe(gulp.dest('dist/images'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('script', function(){
  return gulp.src('src/js/main.js')
    .pipe(webpack(webpakConfig))                       
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "dist/"
      }
  });
});


gulp.task('watch', function(){
  gulp.watch('src/scss/**/*.scss', gulp.parallel('scss'));
  gulp.watch('src/*.html', gulp.parallel('html'));
  gulp.watch('src/js/**/*.js', gulp.parallel('script'));
  gulp.watch('src/images/**/*.*', gulp.parallel('img'));

});


gulp.task('default', gulp.parallel('scss', 'browser-sync', 'watch', 'script', 'img', 'html'));

gulp.task('test', gulp.series('script'));

//webpack менификация js происходит автоматически плагин uglify в него уже встроен.
// npm install -D babel-loader @babel/core @babel/preset-env

// devtool: isDev ? 'eval-source-map' : 'none'  //soursmap for production and development mode