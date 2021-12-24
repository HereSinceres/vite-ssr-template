const gulp = require('gulp');
const {watch, series} = gulp;

// 业务名称，路由由此作为顶级路由
// eg: /${appName}/*
const appName = 'manage';

function release(cb) {
    // body omitted
    return gulp.src('./pages/**/*').pipe(gulp.dest(`../runtime/app/pages/${appName}/pages`));
}
function listen(cb) {
    watch('pages/**/*', release);
    cb();
}

// 监听文件改变 直接部署代码
exports.deploy = listen;
