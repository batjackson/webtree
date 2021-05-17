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