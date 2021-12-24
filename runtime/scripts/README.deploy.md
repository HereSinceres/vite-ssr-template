


## 基础环境
CentOS 7.5


## 部署流程

1. 部署nodejs环境，设置全局变量【只需要部署一次】
2. 部署代码
3. 使用pm2启动服务

```
cd ./runtime // 注意一定要在runtime 目录下
npm run server:build
sh ./scripts/deploy.sh
```

## 常用到命令
 pm2 start ecosystem.config.js
 pm2 restart ecosystem.config.js
 pm2 reload ecosystem.config.js
 pm2 delete ecosystem.config.js
## 参考资料
https://nuxtjs.org/deployments/pm2/

https://nodejs.org/en/download/
node-v16.13.1-linux-x64.tar.xz  Linux Binaries (x64)