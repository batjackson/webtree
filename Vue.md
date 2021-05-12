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
- 提前编译(强烈建议这种方式，不影响浏览器渲染时间)