import * as gulp from 'gulp'

gulp.task('serve', ['build'], () => {
  const connect: any = require('gulp-connect')
  connect.server({
    root: 'dist'
  })
})
