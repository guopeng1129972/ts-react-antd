cnpm install node-sass --save-dev
rem 与  em的区别？
node中导入require与import的区别？
****************
css 中的import会发额外的http请求；
****************
scss中定义文件的下划线的意思是告诉scss，
不要将其编入css文件
****************
记一个问题
This usually happens because your environment has changed since running `npm install`.
Run `npm rebuild node-sass` to download the binding for your current environment.
****************
npm install classnames --save
npm @types/install classnames --save
****************
****************
auto rename Tag
setting sync
自动格式化代码保存后
不建议改别人代码的时候
format as xml
chinese
color highlight
Better Align
如何编写一个vscode插件？
****************
记几个问题
x匹马，y条赛道，取前z名，需要比n轮？
傅里叶变换
https://www.cnblogs.com/h2zZhou/p/8405717.html
****************
优秀游戏与音乐的相同之处
不断的重复与简单的修改
使用node.js编写一个cli
****************
npm 清除node本地缓存
rm -rf node_modules
npm cache clean
npm install
或者
npm cache clean --force
npm install
****************
如何计时?
console.time()
console.timeEnd()
这种方法不能返回值，也不能保存变量，只能显示时间。
第二种
var start = new Date().getTime();
var end = new Date().getTime();
var duration = end - start

****************
npx jest jest.test.js --watch 报错
npm run test 报错
****************
如果是老版本的安装新的esting-librart
npm install --save-dev @testing-librart/react
"react-scripts": "3.3.0",
npm run test
安装测试小工具jest-dom
npm install --save-dev @testing-librart/jest-dom
****************
rm -rf .node-gyp/  
npm install -g node-gyp  
rm -rf /node_modules 

npm ERR! Maximum call stack size exceeded npm解决方法
sudo npm install npm -g
执行过程中会报错
npm ERR! Error: EACCES: permission denied, access '/usr/local/lib/node_modules/npm/node_modules/chownr'
继续执行
sudo npm install npm -g
sudo cnpm install cnpm -g
最后就成功了
Error: EMFILE: too many open files, watch
    at FSEvent.FSWatcher._handle.onchange (internal/fs/watchers.js:123:28)
这个错误就
****************
****************
****************
****************