// 类（class）:定义了一切事物的抽象特点
// 对象（object）：类的实例
// 面向对象（OOP）三大特性：封装，继承，多态
// public 子类和父类都可以访问和修改
// private  子类不能访问和修改
// protected 子类和父类都可以访问
//readonly   只能读，不能改的属性
//static 属性和方法 子类和父类都可以访问和调用
class Animal {
  readonly name: string;
  static caregoies: string[] = ['mamal', 'bird']
  static isAnimal(a) {
    return a instanceof Animal
  }
  constructor(name: string) {
    this.name = name
  }
  run() {
    return `${this.name} is running`
  }
}

class Dog extends Animal {
  bark() {
    return `${this.name} is backing`
  }
}

const xiaobao = new Dog('xiaobao');
console.log(Animal.isAnimal(xiaobao));


class Cat extends Animal {
  constructor(name) {
    super(name)
    // console.log(this.name); //maomao
  }
  run() {
    return 'momo,' + super.run();
  }
}

const maomao = new Cat('maomao');
console.log(maomao.run())


//接口就是讲一些方法提出去

interface Radio {
  switchRadio(): void
}

interface open{
  open():void
}
//接口是可以继承的
interface CallAdnRadio extends Radio {
  call(): void
}
//调用两个接口时，implements 直接后面用,隔开
class Car implements Radio,open {
  switchRadio() {

  }
  open(){}
}

//当需要使用接口时，还要在对象里面调用接口的方法
class CellPheone implements CallAdnRadio {
  switchRadio() {}
  call() {}
}