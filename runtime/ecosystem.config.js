/*eslint-disable*/
/**
 * @file pm2线上配置
 *      pm2教程 https://inviqa.com/blog/using-docker-local-typescript-development
 *      官方文档 http://pm2.keymetrics.io/docs/usage/application-declaration/
 *      https://nuxtjs.org/deployments/pm2/
 *      https://stackoverflow.com/questions/56566580/run-typescript-application-with-pm2
 */
const path = require('path');
const root = path.resolve(__dirname);
module.exports = {
    apps: [
        {
            script: 'npm',
            args: 'run server:prod',
            exec_mode: 'cluster',
            cwd: root,
            instances: 'max', // Or a number of instances
            watch: false, // 禁止watch，如果没有忽略监听logs等目录，会一直重启
            env: {
                PORT: process.env.PORT
            },
            error_file: root + '/logs/pm2/err.log',
            out_file: root + '/logs/pm2/out.log'
        }
    ]
};
