/// <reference path='../../typings/index.d.ts' />
import gulp = require('gulp');

gulp.task('build', function (callback: Function) {
  const path: any = require('path')
  const config: any = require('../config')
  const pug: any = require('gulp-pug')
  const gulpIf: any = require('gulp-if')

  return gulp.src(path.join(config.root, 'src/**'))
    .pipe(gulpIf('*.pug', pug({
      locales: 'en-us'
    })))
    .pipe(gulp.dest(config.dist));
});
