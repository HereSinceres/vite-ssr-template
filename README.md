## 开发

```
### step1: 启动运行时
cd runtime
yarn
yarn start
打开测试导航界面 http://localhost:3000/menu

### 部署某一个业务模块
cd app-shop
yarn
yarn build      ----    可选，某些应用程序是单页面应用程序，需要将产出部署到server端
yarn dev        ----    可选，某些应用程序是单页面应用程序，可以直接景象开发
yarn deploy     ----    将业务模块的代码发送到运行时
```

# 地址

测试环境地址

http://127.0.0.1:3000/menu

## 说明

-   非特别独立模块暂时不用 ts，api 服务可以用
-   app-业务名，为业务仓库名，路由为 /{业务名}/，shop 特殊处理为 / 顶级路由
-   lib-名称 为公用的，或者是需要提取的 lib 仓库

## 项目拆分

项目分为两部分：

-   基础框架 server side 运行时，基于 vite-plugin-ssr
-   app 业务模块代码，命名方式统一以 app-开头（例如 用户系统，路由为/user/\* ，模块名为 user-app ）

## 代码结构

```
app-项目 业务模块
lib-common common lib 模块
runtime 运行时
```

业务模块只能使用 lib，如果需要用到运行时，建议讨论下，或者提取到 lib-common

### runtime

```
app/        ---- 业务模块
    app-shop/   ---- shop 业务模块 参考 https://vite-plugin-ssr.com/filesystem-routing
render/     ---- render 默认 client/server render
server/     ---- express node 服务 入口
```

### 业务模块

根据 ua 切换 PC 还是 mobile 样式

-   app-shop 商家前台
-   app-manage 商家后台
-   app-mis 运营后台
-   app-doc 文档 暂时无用 以后可以作为文档

#### 通用结构

```
dist/client/{业务名}        ---- 静态资源路径
pages                      ---- 模版和服务端代码
```

#### 单页应用程序

#### ssr 应用程序

## common 模块

### 常量

### API

### 组件

登陆组件上传组件

# QA

## 开发模式

主干开发 主干发布，发布打一个 release 即可/或者不用后期人多了转为分支开发分支发布

## Q: 路径别名

A：https://vite-plugin-ssr.com/path-aliases

## Q：如何部署

参考：runtime/scripts/README.md

## Q：如何使用样式 统一使用 module class，less 或者 scss

```
import c from './index.module.css'
```

## 如何引入 lib-common 模块

使用 file:// 例如："@ProjectName/lib-common": "file:../lib-common" 参考：https://github.com/lerna/lerna/blob/main/commands/import/package.json


# 已知问题

-   如何部署

1. 部署到服务器在本地可以使用 pm2

-   i18 国际化 按照业务模块来 TODO: onBeforeRoute
-   ua 判断 PC 还是 mobile TODO:
-   路径别名 业务模块如何使用 runtime 下的的内容 https://vite-plugin-ssr.com/path-aliases

-   API 服务需要根据 swagger 生成 TODO: cross-fetch 手写也写 crud
-   header 如何设置 TODO:
-   PC 和 wap 组件如何拆分 TODO:
-   passport TODO:
