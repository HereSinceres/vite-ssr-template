#!/bin/sh

HOST="127.0.0.1"

function info() {
    echo "INFO: $@"
}


# info "上传node环境【首次部署需要上传环境】"
# rsync -avz ./scripts/node-v16.13.1-linux-x64.tar.xz root@$HOST:~/www/noderuntime/
# info "✅上传node环境"

info "上传代码"
rsync -avz ./dist ./server ./ecosystem.config.js ./package.json root@$HOST:~/www/
info "✅上传代码"

info "上传启动脚本"
rsync -avz ./dist ./scripts/run.sh root@$HOST:~/www/
info "✅上传启动脚本"
 
info "执行启动脚本"
ssh root@$HOST 'cd ~/www && sh run.sh && echo "✅启动完成"'
info "✅执行启动脚本"