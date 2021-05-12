/*
对应名称
prototype ：原型 //当作节点
__proto__：内置对象 系统已经定义好的东西 //原型链x（原型的链接点） //当作指针
从属关系 ：
    prototype ->函数的一个属性  普通对象 {}
    __proto__ ->对象Object的一个属性 对象{}
    对象的__proto__保存着该对象的构造函数的prototype
*/

function Test() {
    this.a = 1
}
Test.prototype.b = 2
Object.prototype.c = 3
console.log(Test)
console.log(Object)
console.log(Test.prototype) //函数一声明出来 就有prototype这样一个属性 它是一个对象

const test = new Test()
console.log(test) 
console.log(test.__proto__)
    //console.log(test.__proto__ === Test.prototype.__proto__) //false

console.log(test.__proto__ === Test.prototype) //ture
    //Test.prototype =>{__proto__} 一个对象
console.log(Test.prototype.__proto__ === Object.prototype) //true
console.log(Object.prototype.__proto__) //null
    //Object.prototype 或者 Object.prototype.__proto__是原型最顶层

console.log(test)
    //原型链就是 以一个对象为基准 以proto为链接的 一直到Object.prototype为止的链
    /*
    test{
        //如果在对象里没有找到b 就往Test.prototype上面找
        //从底向高继承  原型链继承
        a:1
        __proto__:Test.prototype = {
            b:2
            __proto__:Object.prototype = {
                c:3,
        x       __proto__:null
            }
        }
    }
    */
console.log(test.a) //1
console.log(test.b) //2
console.log(test.c) //3

//function Object 函数 对象
console.log(Test.__proto__ === Function.prototype) //true

Test = new Function()