import gulp = require('gulp')

gulp.task('serve', ['build'], () => {
  const connect: any = require('gulp-connect')
  connect.server({
    root: 'dist'
  })
})
