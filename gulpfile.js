// Generated on 2017-01-02 using generator-angular 0.15.1
'use strict';

let gulp = require('gulp');
let connect = require('gulp-connect');
let watch = require('gulp-watch');
let proxy = require('http-proxy-middleware');

gulp.task(
  'serve',
  () => {
    connect.server({
      livereload:true,
      middleware: (connect, opt) => {
        return [
          proxy('/mlab', {
            target: 'https://api.mlab.com',
            changeOrigin:true,
            logLevel: 'debug',
            protocolRewrite: 'https'
          })
        ]
      }
    });
  }
);

gulp.task(
  'livereload',
  () => {
    gulp
      .src(['app/*.js'])
      .pipe(watch(['app/*.js']))
      .pipe(connect.reload());
  }
);

gulp.task('default', ['serve', 'livereload']);
