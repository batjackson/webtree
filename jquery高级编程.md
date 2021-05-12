[TOC]

# Jquery高级编程

## 第1部分Jquery基础

### 1.1 jquery的优势

1. 最大的优势：**消除了很多跨浏览器的兼容性问题**
2. **遍历Dom元素方面非常卓越**
3. **轻量级** 标准版本29kb 开发调试版本212kb
4. 较少代码就可以处理相当复杂的JavaScript代码实现的功能
5. 适用于构建功能丰富的，动态的Ajax web应用程序

### 1.2硬件和浏览器条件

- **几乎全部支持**

### 1.3获得jquery库和jqeury UI

### 1.4hello world 实例

```javascript
jQuery(document).ready(function(){
  alert("hello world");
});
```

### 1.5JavaScript规范

1. 除了意图明显要创建一个全局变量外，总是用var声明变量
2. 总是使用分号。这对压缩代码非常重要
3. 常量使用大写，每个单词之间用下划线分割
4. 函数、变量和方法名采用驼峰命名法，并且将整个变量名的第一个字母小写
5. 类和枚举名也采用驼峰命名法，但整个变量名第一个字母大写
6. 使代码有间隔 明确使用空格 代码行末尾不使用空格字符
7. 注释规范
8. 相等性：总是使用等同（===）进行比较，而不是简单使用等于（==）进行比较。例外：==null，!=null
9. 以块方式组织代码:(if/else/for/while/try)总是使用花阔号，建议不要使用三元操作符来取代if/else
10. 函数调用格式：在函数调用参数的两侧包含一个多余的空格 //f(arg );  f( g(arg) );
11. 数组和对象: 对于空对象和数据字面量不要使用额外的空格 ,但在逗号和冒号后使用一个空格: var a ={}; var b = []; var c = [ 1, 2, 3 ];
12. 类型检查 详细参考书籍
13. RegExp：在.text() 或.exec()中创建正则表达式(RegExp)
14. 字符串： google JavaScript style guide ：单引号 jquery style guide :双引号

### 1.6开发工具

### 1.7调试Javascript和jquery

### 1.8使用FireQuery插件

### 1.9小结

介绍获取构建运行jquery的多种方法

## 第2部分Javascript基础

- 先精通js 后精通jq
- js 是 ajax现代web应用程序的驱动力
- js继承了java的名称和命名规范
- js是一种动态类型的，面向对象的脚本语言。
- 没有类的概念，使用原型进行继承
- js具有函数式程序设计语言的特效：闭包，将函数座位第一类对象，匿名函数，高阶函数等

### 2.1理解数值

1. js中所有数值都是64位双精度的，取值范围从-5e-324到1.7976931348623157e308

2. js中整数和浮点数没有什么区别，两者都是数值

   ```javascript
   > typeof 1;
   number
   > typeof 1.5
   number
   ```

3. 所有js数值都按照IEEE-754双精度二进制数值标准进行表示。

   ```javascript
   > .1 + .2
   0.300000000000000004
   ```

4. js没有内置的十进制数据类型，但js为数值提供了两个方法:

   toPrecision 和 toFixed 这两个方法可以按照固定位置的小数格式化数值

   ```javascript
   >var num = 1234.12345123;
   >num.toFixed(2);
   123.12
   
   var num2 = 1234.12345123;
   num2.toPrecision(8);
   1234.1234
   ```

5. 如果使用一个超过64位范围数值 js 将返回 Infinity 和 - Infinity 除数为0则返回Infinity

6. 当试图将一个无效字符串对象转换为一个数值时，结果为NaN

   ```javascript
   > 10*1 +100 - 1 - NaN
   NaN
   
   >var x = NaN;
   >isNaN(x);
   true
   ```

7. js支持八进制和十六进制  

   八进制字面值使用一个0作为前缀

   十六进制数值则以一个x作为前缀

8. js内置的Math对象常用于常见的数学运算

### 2.2使用字符串

- 字符串是一个由0-16位unicode字符组成的系列，使用单引号或者双引号将字符串括起。

- js中没有为字符定义特殊的数据类型

- 字符串是不可变的对象

- ```javascript
  >"test string".index("s")
  5
  >"test string".charAt(5)
  s
  ```

### 2.3理解布尔类型

- Boolean类型表示true 和false 值。

- 空字符串、NaN值、null、undefined、数值0和flase都将被计算为false

- 其他的解析为true

  ```JavaScript
  if(''){
    console.log('something happens');
  }else{
  console.log('nothing happens')
  }
  nothing happens
  ```

- 逻辑与(&&)或(||)非(!)

- demo

  ```javascript
  function validate(){
    var name_input = 'Jimmy';
    var age_input;
    return name_input && age_input;
  }
  if(validate()){
    console.log('pass');
  }else{
    console.log('fail');
  }
  //输出 fail
  ```

- NaN值表示一个非数值的值 typeof操作符奇怪行为之一

- ```javascript
  >typeof NaN
  number
  ```

### 2.4类型之间比较

- (==)操作符 执行比较前进行强制类型转换

- 

  ```javascript
  >1 == "1";
  true
  ```

- (===)如果左操作数和右操作数完全相同才会返回true

- 

  ```javascript
  >1==="1"
  false
  ```

- 还有 != !==操作符 请总是使用=== 与!==

### 2.5日期简介

- js内置Date对象 可以使用new操作符和Date() 构造函数来创建Date对象

- Date对象用于表示日期和时间。

- 不带任何参数创建一个新的Date对象获得的是当前日期和Date对象

  ```javascript
  >var thisMoment = new Date();
  >console.log(thisMoment);
  Sun Jan 30 2011 21:36:19 GMT-400 (AST)
  
  >thisMoment.getFullYear()
  2021
  ```

### 2.6其他类型

- 声明一个变量未对其赋值或访问一个不存在的对象属性，结果都会产生一个undefined的类型

- null是js的一个内置对象它表示没有值

- 执行比较操作时，null undefined都被转换为false值

- 最好避免使用undefined

- 在很多js解释器中 undefined是可以重新赋值的，因而产生存在弊端的代码

- ```JavaScript
  undefined = true
  if(undefined){
    console.log('tricked you!');
  }
  //输出 tricked you!
  ```

- js支持的各种数据类型

  1. Number
  2. String
  3. Boolean
  4. Object
  5. Function
  6. Array
  7. Date
  8. RegEx
  9. Null
  10. Undefined

- 在使用try/catch 时，某些附加的内置error类型非常有用。通常在throw语句中创建error对象

- ```javascript
  try{
    throw new Error('Something really bad happend');
  }catch(e){
    console.log(e.name + ":" + e.message)
  }
  
  //Error :something really bad happend
  ```

- 不同的error类型

  1. EvalError
  2. RangeError
  3. ReferenceError
  4. SyntaxError
  5. TypeError
  6. URIError

### 2.7变量

- 可以通过赋值操作（隐式声明）or使用var关键字（显式声明）来声明变量。

- 如果用var关键字来声明变量。则该变量是持久的，且不能删除该变量。

- 对于一个变量可以进行多次声明，而不会产生任何错误

  ```javascript
  i = 0; // 隐式声明
  var i = 0; //显式声明
  var x; //undefined
  ```

- 作用域(Scope)指的是变量或对象的可见范围

- global全局变量在应用程序中任何地方可见

- local局部变量仅在声明变量的函数内可见

- 隐式声明的变量总是具有全局作用域，即使该变量是在某个函数体内声明的

- 为避免问题，总是使用var关键字声明变量

- 若在函数内和海曙外声明了相同的变量，那么在函数题内局部变量将取代外部声明的变量

### 2.8理解对象

1. 对象是属性的集合，属性有key value

2. 数组 函数 正则表达式都是对象

3. number string boolean 是不可变对象

4. 创建对象 

   ```javascript
   //new关键字
   var myObject = new Object();
   //构造函数
   function Zombie( name ){
     this.name = name;
   }
   var smallZombie = new Zombie( "Booger" );
   //字面量
   var myObject = {};
   var objectWithProperties = {
     "property1": "a string value",
     "myObjectAsproperty":myObject
   };
   
   鼓励开发人员使用点操作符方式，因为属性也可以是对象，可以在任意层次上嵌套对象
   var species = {
     'mammals' :{
       'biped': {
         'monkey' : 'George',
         'humen' : 'Tim'
       }
     }
   }
   console.log(species.mamals.biped.human);
   ```

5. js是一种动态类语言，更新一个属性只需要重新赋值即可

6. 要从对象中删除一个属性只需要使用delete操作符。删除一个并不存在的属性并不会造成任何危险

   ```javascript
   var obj = {
     'property1' :1,
     'property2' :2
   }
   
   var i;
   for(i in obj ){
     console.log(i)
   }
   >>property1
   >>property2
   ```

7. js 使用原型继承(prototype inheritance) 对象直接从其他对象继承，从而创建新的对象

8. 简而言之，对象继承了另外一个对象的属性

9. js中没有类

10. 原型就是其他对象的模型

11.  原型继承相对于基于类/对象的继承更加简单。一个内置对象Object.prototype位于继承层次的顶端，所有其他对象都继承了该对象

12. 继承树中的每一个对象，都可以通过prototype属性链接起来

13. 获取属性是通过delegation实现的。

14. 当试图获取一个并不存在的属性时，js将沿着原型树prototype tree向上查找直到查找到原始的Object.prototype

15. 若没有找到则返回一个undefined

16. 如果对象的某个属性是一个函数，则称该函数为方法。

17. 可以通过将函数添加到原型对象创建方法，也可以直接将函数添加到对象

18. 方法有参数this，绑定于作用域范围内，this是对调用该方法对象的一个引用

19. 原型链继承实例

    ```javascript
    function Monster( type ){
      this.type = type;
    }
    Monster.prototype.getType = function(){
      return this.type;
    }
    function Zombie( name ){
      this.name = name;
    }
    Zombie.prototype = new Monster();
    Zombie.prototype.eatPeople = function(){
      console.log('tastes like chicken');
    }
    引用(reference) 是一个指向对象实例位置的指针。
    object是引用类型，对象都是通过引用传递的。
    修改绑定于一个原型的属性，将修改基于该原型的所有其他对象的原型
    >smallZombie.eatPeople();
    Tastes like checken
    >delete Zombie.prototype.eatPeople;
    true
    >smallZombie.eatPeople();
    TypeError:Object #<a Zombie> has no method 'eatPeople'
    ```

20. 创建对象注意

    ```javascript
    var obj1 = obj2 = {};
    obj1 obj2 引用的是同一个对象
    var obj1 = {};
    obj2 = {}
    引用的是不同的对象
    ```

21. 用hasOwnProperty()方法检查某个属性是否存在

22. 避免使用全局变量，有一些方法可以避免扰乱全局变量名称空间，一种办法是用单个全局变量作为顶层对象，包含程序或框架中的所有方法和属性。名称空间全部大写

    ```
    ZOMBIE_GENERATOR = {};
    ZOMBIE_GENERATOR.Zombies = {
    	smallZombie : 'Booger',
    	largeZombie : 'Bruce'
    }
    ```

### 2.9使用函数

1. 函数是一个代码块

2. 没有返回值将返回undefined

3. js函数是第一类的对象，可以将函数赋予一个变量，或者保存在另一个数据结构中

4. js函数重要特性

   1. 将函数作为参数传给其他函数
   2. 匿名函数

   ```javascript
   function repoter( fn ){
   	console.log('the return value of your function is '+ fn() );
   }
   reporter( function(){} );
   >>the return value of your function is undefined
   reporter( function(){
     return 'a simple string'
   })
   >>the return value of your function is a simple string
   function calc(){
     return 4*2;
   }
   reporter( calc() );
   >>the return value of your function is 8
   ```

   关于匿名函数一个重要变体就是立即调用的函数表达式，或者称为自执行匿名函数

   立即调用的函数表达式 // 自执行匿名函数

   ```javascript
   (function (x,y){
     console.log( x+y );
   })(5,6);
   >>11
   ```

   由于这样的函数表达式被立即调用，因此该模式用于确保代码块的执行上下文按照预期的效果执行。

   通过参数传入函数，在执行时就可以捕获函数所创建闭包中的变量。

5. 闭包是这样一个函数：处在函数体中，并引用了函数体当前执行上下文中的变量。

   ```javascript
   var x = 42;
   console.log(x);
   var message = (function(x) {
   	return function() {
   		console.log("x is " + x);
   	}
   })(x);
   message();
   x = 12;
   console.log(x);
   message();
   >>都是42
   ```

   当我们把变量x的初始值作为参数传入函数时，可以在函数执行时所创建的闭包中捕获变量x的值。

   无论在外部作用域中x的值发生了什么变化，闭包将只记住函数执行时变量x的值。

6. 闭包

   - 代码

   ```javascript
   function a(){
   
   var i=0;
   
   function b(){
   
   alert(++i);
   
   }
   
   return b;
   
   }var c=a();
   
   c();
   ```

   - 特点

     1、函数b嵌套在函数a内部；

     2、函数a返回函数b。

     这样在执行完var c=a( )后，变量c实际上是指向了函数b，再执行c( )后就会弹出一个窗口显示i的值（第一次为1）。这段代码其实就创建了一个闭包，这是因为函数a外的变量c引用了函数a内的函数b。也就是说，当函数a的内部函数b被函数a外的一个变量引用的时候，就创建了一个闭包。

   - 作用

     简而言之，闭包的作用就是在a执行完并返回后，闭包使得Javascript的垃圾回收机制不会收回a所占用的资源，因为a的内部函数b的执行需要依赖a中的变量。

     在上面的例子中，由于闭包的存在使得函数a返回后，a中的i始终存在，这样每次执行c()，i都是自加1后alert出i的值。

     那 么我们来想象另一种情况，如果a返回的不是函数b，情况就完全不同了。因为a执行完后，b没有被返回给a的外界，只是被a所引用，而此时a也只会被b引 用，因此函数a和b互相引用但又不被外界打扰（被外界引用），函数a和b就会被回收。

### 2.10执行理解上下文

- 执行上下文是一种对象，代码在上下文环境中执行。

- 可以通过this关键字访问执行上下文，this关键字是对当前执行上下文对象的引用

- 没有定义具体上下文的函数，将它们this关键字的值绑定与undefined值

  ```javascript
  console.log(this);
  >>[object DOMWindow]
  ```

- 当开始执行一个函数或方法时，js创建一个新的执行上下文并进入该函数的执行上下文。

- 当函数执行完毕并返回时，控制权交还给原来的执行上下文

- 创建闭包时当前上下文将继续保留下来，否则当前上下文将被视为垃圾收集。

### 2.11作用域和闭包

1. 考虑作用域时，考虑 变量定义位置 和 变量生存期 非常重要

2. 作用域指的是在什么地方可以访问该变量，

3. 在js中作用域维持在函数级别，而非块级别。

4. 除了不能访问this关键字和参数之外，嵌套函数可以访问外部函数中定义的变量。这一机制是通过闭包来实现的。

5. 它指的是，即使在外部函数结束执行之后，内部嵌套的函数极限保持它对外部函数的引用。

6. 闭包还有助于减少名称空间的冲突

7. 每次调用一个包裹（enclosed）的函数时，虽然函数的代码并没有改变，但是js将为每一次调用创建一个新的作用域 ，下面的代码说明这一行为。

   ```javascript
   function getFunction(value){
     return function (value){
   		return value;
     }
   }
   var a = getFunction(),b = getFunction(),c = getFunction();
   console.log(a(0));
   >>0
   console.log(b(1));
   >>1
   console.log(c(2));
   >>2
   console.log(a===b);
   >>false
   function get(value) {
   // return function(value) {
   //     return value;
   // }
   	return value;
   }
   var a = get(),
   b = get();
   console.log(a === b)
   >>true
   ```

8. 当定义一个独立函数（不绑定任何对象）时，this关键字就会绑定于全局名称空间。

9. 作为一个最直接的结果，当在一个方法内创建一个内部函数时，内部函数的this关键字将绑定于全局名称空间，而不是绑定于该方法。

10. 为解决这一问题，可以将包裹方法的this关键字简单地赋值给一个名为that的变量

    ```javascript
    obj = {};
    obj.method = function(){
      var that = this;
      this.conter = 0;
      
      var count = function(){
        that.counter +=1;
        console.log(that.counter);
      }
      count();
      count();
      console.log(this.counter);
    }
    obj.method();
    >>1
    >>2
    >>2
    
    ```

### 2.12理解访问级别

1. 在js中并没有官方访问级别语法，js没有类似于java中的private/protected这样的访问级别关键字，对象中所有成员都是共有和可访问的。

2. 但在js中可以实现与私有或专属属性类似的访问级别效果。

3. **要实现私有方法或属性类似的访问效果**，**请使用闭包**

   ```javascript
   function TimeMachine(){
     //私有成员
     var destination = 'October 5,1955';
     //公有成员
     this.getDestination = function(){
       return destination;
     }；
   }
   var delorean = new TimeMachine();
   console.log(delorean.getDestination());
   >>October 5,1955
   >console.log(deloreon.destination);
   //undefined
   ```

   getDestination方法是一个专有方法，它可以访问TimeMachine中的私有成员，变量destination是私有的，它的值只能通过专有方法get Destination进行访问

### 2.13使用模块

- js没有内置的包语法，模块模式。

- 模块模式是一种简单而流行的方式，用于创建自包含的、模块化的代码块

- 要创建一个模块，只需要声明一个名称空间、将有关函数绑定于该命名空间，并定义私有成员和专有成员即可，下面将使用模块重写TimeMachine对象

- ```javascript
  TIMEMACHINE = {};
  TIMEMACHINE.createDeloean = (function(){
    //私有成员
    var destination = '';
    var model = '';
    var fuel = '';
    //公有访问方法
    return {
      //设置器
      setDestination:function(dest){
        this.destination = dest;
      },
      setModel:function(model){
        this.model = model;
      },
      setFuel:function(fuel){
        this.fuel = fuel;
      },
      //访问器
      getDestination:function(){
        return this.destination;
      },
      getModel:function(){
        return this.model;
      },
      getFuel:function(){
        return this.fuel;
      },
      //其他成员
      toString:function(){
        console.log(this.getModel()+'- Fuel Type: ' + this.getFuel() + '-Headed:' + this.getDestination());
      }
    //在这里初始化执行过程
    }
  };());
  var myTimeMachine = TIMEMACHINE.createDelorean;
  myTimeMachine.setModel('1985 Delorean');
  myTimeMachine.setFule('plutonium');
  myTimeMachine.setDestination('October 5,1955');
  myTimeMachine.toString();
  1985 Delorean - Fuel Type: plutonium - Headed: October 5, 1955
  ```

### 2.14js数组

1. ```javascript
   var array1 = new Array()
   array1[0] =1;
   array1[1] = 'a string'
   
   var niceArray = [1,2,3];
   在数组字面量中混合使用对象字面量，它是js对象表示法 json(javascript object notation)的基础
   json是一种流行的数据交换格式，它可用于多种语言而不仅仅是js语言
   var myDate = {
     'root' :{
       'number' :[1,2,3],
       'letters' :['a','b']
     }
   }
   ```

### 2.15扩展类型

- ​	js支持将方法和其他属性绑定到内置类型，如字符串、数值和数组类型

- 与其他任何方法类似，string也有prototype属性

- 开发人员可以对String对象扩充一些便利的方法

- 如Stirng没有将字符串false或true转换为布尔值的方法

  ```javascript
  String.prototype.boolean = function(){
    return "true" == this;
  }
  
  var t = 'true'.boolean();
  var f = 'false'.boolean();
  
  console.log(t);
  console.log(f);
  
  >>true
  >>false
  ```

- 每次输入prototype有点累赘 

- Douglas Crockford提供了一段简洁代码 ，它使用一个名为method的方法扩充了Function.prototype,下面为该方法代码

  ```javascript
  Function.prototype.method = function(name,func){
    this.prototype[name] = func;
    return this;
  };
  ```

- 接下来重写String类的boolean方法:

  ```javascript
  String.method('boolean',function(){
    return "true" == this;
  })
  
  'true'.boolean();
  >>true
  ```

  对于编写工具方法库并将其包含在项目中，这一技术非常有用

### 2.16js最佳实践

**避免事项**

1. 使用parseInt()函数将字符串转换为整数，请确保总是指定基数。更好方法是使用一元操作符号+将字符串转换为数值

   ```
   good: parseInt('010',10);//转换为十进制而不是八进制
   Bettor: +"010" //简单高效
   ```

2. 使用===操作符比较两个值 避免意料之外的类型转换

3. 在定义对象字面量时，在最后一个值不要使用逗号

4. eval()函数可以接受一个字符串，并将其视为js代码执行。应限制eval()函数的使用，它很容易在代码中引入个样严重的安全问题

5. 使用分号进行代码结尾，当精简代码时这特别有用

6. 应该避免使用全局变量。应该总是使用var关键字来声明变量。将代码包裹在匿名函数中，以避免明明冲突，请使用模块来组织代码

7. 对函数名使用首字母大写来表示该函数将作为new操作符的构造函数，但请不要对其他任何函数的函数名使用首字母大写

8. 不要使用with语句

9. 在循环中创建函数应该谨慎小心，这种方式非常低效

### 2.17综合示例

jq示例

```javascript
$('#submit_button_id').click(function(){
  $.ajax({
    'url':'/place2post.php',
    'type':'post',
    'success':function(){
      //代码放在这里
    }
  })
})
```

使用一个对象字面量来传递一个参数列表、匿名函数、$作为有效标识符

jq使用了闭包来隐藏数据

### 2.18小结

介绍了js作为动态语言的特性

