#!/bin/sh

function info() {
    echo "INFO: $@"
}
# info "解压node"
# cd ./noderuntime/
# tar -xvf ./node-v16.13.1-linux-x64.tar.xz
# cd ../
# info "✅解压node环境"


info "设置node环境变量"
info $PATH
NODE_HOME=/root/www/noderuntime/node-v16.13.1-linux-x64/bin
export PATH=$NODE_HOME:$PATH
info $PATH
info "✅设置node环境变量"

npm install pm2 -g
npm install
# 首次启动需要使用start
# pm2 start ecosystem.config.js
pm2 reload ecosystem.config.js