import gulp from 'gulp';
import shell from 'gulp-shell';
import rimraf from 'rimraf';
import run from 'run-sequence';
import watch from 'gulp-watch';
import server from 'gulp-live-server';
import browserify from "browserify";
import source from "vinyl-source-stream";
import glob from 'glob';


const paths = {
  js: ['./src/**/*.js'],
  destination: './app',
  destinationServer: './app/server'
}

gulp.task('default', cb => {
  run('server', 'build', 'watch', cb);
});

gulp.task('build', cb => {
  run('clean', 'clientTranspile', 'serverTranspile', 'restart', cb);
});

gulp.task('clean', cb => {
  rimraf(paths.destination, cb);
});

gulp.task("clientTranspile", () => {

  var srcFiles = glob.sync('./src/client/**/*.js');
  return browserify({
      entries: srcFiles,
      debug: true
    })
    .transform("babelify")
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest("app"));

});

gulp.task('serverTranspile', shell.task([
  'mkdirp -p app/server/routes/',
  'babel src/server --out-dir app/server'
]));

gulp.task('babel', shell.task([
  'babel src --out-dir app'
]));

let express;

gulp.task('server', () => {
  express = server.new(paths.destinationServer);
});

gulp.task('restart', () => {
  express.start.bind(express)();
});

gulp.task('watch', () => {
  return watch(paths.js, () => {
    gulp.start('build');
  });
});
