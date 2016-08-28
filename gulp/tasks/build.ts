import * as gulp from 'gulp'
import * as path from 'path'
import * as gulpIf from 'gulp-if'
const pug: any = require('gulp-pug')

import { global, dist } from '../config'

gulp.task('build', function (callback: Function) {

  return gulp.src(path.join(global, 'src/**'))
    .pipe(gulpIf('*.pug', pug({
      locales: 'en-us'
    })))
    .pipe(gulp.dest(dist))
})
