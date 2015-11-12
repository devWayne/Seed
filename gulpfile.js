'use strict';

const path = require('path');


var gulp = require('gulp');
var pkg = JSON.parse(fs.readFileSync('./package.json'));


gulp.task('clean', function (callback) {
    fs.removeSync('./build');
    callback();
});


