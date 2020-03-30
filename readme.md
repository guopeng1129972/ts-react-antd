安装ts
sudo npm install -g typescript
sudo npm install -g typescript@3.7.2

tsc -v
3.7.2

5种基础数据类型

undefined 与 null 的区别？

相同点：
所有类型的子类型，
null 是原型链的起始点

npm install -D ts-node
sudo npm install -D ts-node@8.5.0

ts-node script.ts
就等同于
tsc script.ts
node script.ts

1.如何调用定义的值，在字符串中？
`$this.name is xxx`;
注意，这里不是用的单引号