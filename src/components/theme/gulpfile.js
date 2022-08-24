const { src, dest } = require('gulp');
const less = require('gulp-less');

function buildStyles(){
  return src('./index.less')
    .pipe(less())
    .pipe(dest('../../../lib'));
}

exports.build = buildStyles;