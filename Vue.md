# Vue

## Npm

(Node package Manager)

是node.js 默认的，以js编写的软件包管理系统

http://npmjs.com

- 包管理器

- 使用过程
- npm init --yes
- npm install jquery -save //运行时依赖
- npm install bootstrap -save-dev //安装时依赖 运行时渲染完成后删除
- 拷贝项目时候不发扩展包
- 拿到时候直接用 npm install 所有软件包的记录都会还原
- 删去^3.5.1 的^会一直以这个版本
- ^保留 则表示大版本不变，小版本会进行更新 ^3.x.x
- ~表示 ~3.5.x 只更新最后一位

## ES6兼容性解决

兼容低版本浏览器

- 在线转换(这种编译会加大页面渲染的时间)

- 提前编译(强烈建议这种方式，不影响浏览器渲染时间) 开发时是es6 上线es5

  - 去静态资源库去找包：babel jsx 等

    ```js
    <script type="text/babel">
      const name = 'xxx'
    	console.log(name)
      </script>
    ```

## Webpack5

- 用webpack搭建开发环境
- 用webpack打包优化项目

1. 初识webpack5

   1. 是一个模块打包器，主要目标是将js文件打包在一起，打包后的文件在浏览器中使用，但它也能胜任转换(transform)、打包(bundle)或包裹(package) 任何资源(resource or asset)
   2. http://webpack.js.org/
   3. https://webpack.docschina.org/
   4. webpack原理和概念
      1. 树结构：在一个入口文件引入所有资源，形成所有依赖关系树状图
      2. 模块：模块可以是es6模块也可以是commonJs或AMD模块，对于webpack来说，所有资源都是模块
      3. chunk：打包过程中被操作的模块文件被称为chunk，例如异步加载一个模块就是一个chunk
      4. 翻译。优化。压缩 ⬇️
      5. bundel：bundel是最后打包后的文件，最终文件可以和chunk长得一模一样，但是大部分情况下他是多个chunk的集合

2. webpack安装和基本体验

   1. 创建项目目录 webpack-demo

   2. 进入目录初始化npm操作。npm init -y

   3. 安装webpack及webpack-cli :npm install webpack webpack-cli --D -g

   4. 创建src目录或根据需要创建下面的子目录

   5. 在src下创建一些js文件和一个主入口文件index.js

   6. 控制台运行命令 ：webpack --mode development (开发环境)

      ​								  webpack --mode production (生产环境)

   7. 可以用node运行打包后的资源，也可以使用HTML引入打包后的资源

      

3. webpack的五个核心概念

   1. Entry 

      1. 入口(entry)指示webpack以哪个文件作为入口起点开始打包，分析构建内部依赖图

   2. output

      1. 输出(output)指示webpack打包后的资源bundles输出到哪里，以及如何命名
         1. webpack ./src/index.js -o ./build/build.js --mode development

   3. loader

      1. loader让webpack能够去除那些非js资源如css img等，将它们处理成webpack能够识别的资源，可以理解为一个翻译过程(webpack自身职能理解js和json)

   4. plugins

      1. 插件(plugins)可用于执行范围更广的任务，插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量等等

   5. mode

      1. 模式(mode)指示webpack使用相应模式的配置
         1. 开发模式(development) ：配置比较简单，能让代码本地调试运行的环境
         2. 生产模式(production):代码需要不断优化达到性能最好，能让代码优化上线运行的环境，
      2. 都会启用一些插件，生产模式启用的插件更多

   6. webpack.config.js

      ```js
      const { resolve } = require('path'); //node.js放法
      
      
      module.exports = {
          entry: './src/index.js', //指示webpack以哪个文件作为入口，分析构建内部依赖图
          output: {
              filename: 'build.js', //输出文件名
              path: resolve(__dirname, 'build') // __dirname当前项目的根目录 build是输出后的目录名
          }, //打完包后的资源输出到哪里，以及如何命名
          module: {
              rules: [
              ]
          }, //让webpack处理那些非js资源 css img等 将他们处理何曾webpack能够识别等资源，可以理解为一个翻译过程 webpack自身只能理解js json
          plugins: [
          ], //plugins 插件 执行范围更广的任务，从打包优化到压缩，一直到重新定义环境中的变量等
          mode: 'development' //开发环境
      }
      ```

      终端: webpack

4. 打包样式资源库

5. 打包html资源

6. 打包图片资源

7. 打包其他资源

8. devServer配置与应用

9. 配置可用的基本开发环境

10. 开发环境优化

11. 生产环境优化

12. webpack配置文件详解

13. 配置标准的开发环境和生产环境实例

14. 配置jq+bootstrap的开发环境