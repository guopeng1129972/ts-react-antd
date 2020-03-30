// 枚举  分为常量值（才能常量枚举） 计算值  
const enum fangxiang {
  Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}
// 、、类似于数组的双向绑定
// console.log(fangxiang[0]);
console.log(fangxiang.Up);

//常量枚举可以不直接编译进js，而是直接就是生成的值
const value: string = "UP";
if (value === fangxiang.Up) {
  console.log('is up');
}