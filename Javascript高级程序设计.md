[TOC]

# Javascript高级程序设计

## 第一章 js简介

1. js诞生于1995年
2. 最早用于解决在客户端完成一些基本的验证任务
3. 如今js具备与浏览器窗口及其内容几乎全部所有方面交互的能力
4. 拥有闭包、匿名（lamda 拉姆达）函数，元编程特性

### 1.1js简史

1. 1995 Netscape公司 Brendan Eich 为 Netscape Navigator 2 开发 LiveScript脚本语言在浏览器和服务器使用
2. 发布前夕， Netscape为了搭上媒体热炒java的顺风车，把livescript改名为Javascript
3. 1996.8 微软 IE 进入浏览器领域 JScript   js迈入一大步
4. 1997 js1.1 蓝本建议 交给欧洲计算机制造商协会 指定ECMAScript 新的脚本语言标准
5. 1998 ISO/IEC 国际标准化组织和国际电工委员会 采用ECMAScript为标准
6. 自此，浏览器开发商开始致力于将ECMAScript作为各自js实现的基础，在不同程度上取得成功

### 1.2js实现

完整的js包括：

- 核心（ECMAScript）
- 文档对象模型（DOM）
- 浏览器对象模型（BOM）

#### 1.2.1 ECMAScript

规定：

1. 语法
2. 类型
3. 语句
4. 关键字
5. 保留字
6. 操作符
7. 对象

#### 1.2.2 文档对象模型DOM

​	分层节点

DOM2级引入了**新模块**

1. DOM视图（DOM Views）定义了跟踪不同文档（如应用css之前和之后的文档）视图的接口
2. DOM事件（DOM Events）定义了事件和事件处理的接口
3. DOM样式（DOM Style）定义了基于CSS为元素应用样式的接口
4. DOM遍历和范围（DOM Traversal and Range）：定义了遍历和操作文档树的接口

#### 1.2.3浏览器对象模型BOM

BOM只处理浏览器窗口和框架，人们习惯上把所有针对浏览器的js扩展算作BOM的一部分

1. 弹出新浏览器窗口的功能
2. 移动、缩放和关闭浏览器的功能
3. 提供浏览器详细信息的navigator对象
4. 提供浏览器所加载页面的详细信息的location对象
5. 提供用户显示器分辨率详细信息的screen对象
6. 对cookies的支持
7. 像XMLHttpRequest和IE的ActiveXObject这样的自定义对象

因为没有BOM标准可以遵循，所以每个浏览器偶遇自己的实现

一些事实标准（Window对象和navigator对象）

### 1.3js版本

### 1.4小结

js三个组成部分 ECMAScript ，DOM，BOM

## 第二章 在html中使用js

### 2.1<#script>元素

- ​	六个属性

  1. async : 立即下载脚本，不妨碍其他操作，只对外部脚本文件有效

  2. charset :可选。表示通过src属性置顶的代码的字符集。很少用

  3. defer : 可选。表示脚本可延迟到文档完全被解析和显示后再执行。只对外部脚本文件有效。

  4. language：已废弃。原用于表示编写代码使用的脚本语言。

  5. src ：可选。表示包含要执行代码的外部文件

  6. type： 可选。 可以看成是language的替代属性。默认为text/javascript 

     服务器在传送js文件使用的MIME类型通常是application/x-javascript，在type中设置这个值有可能导致脚本被忽略

- ```javascript
  <script type="text/javascript">
    function sayHi(){
    	alert('hi');
  }
  </script>
    禁止下面这样做，因js代码将从上到下依次解析，当浏览器遇到字符串</script>就会认为那是结束</script>标签。
  <script type="text/javascript">
    function sayHi(){
    	alert('</script>');
  }
  </script>
    通过把字符串分隔成两部分可以解决这个问题
  <script type = "text/javascript">
    function sayHi(){
    alert('<\/script>');
  }
  </script>
  
  ```

- 外部引入

  ```
  </script type ="text/javascript" src="example.js">XHTML可以这样写
  但html必须这样写，因为上面写法得不到浏览器解析
  <script type ="text/javascript" src="example.js">//中间不要加东西</script>
  中间加的东西得不到浏览器的解析
  ```

- 外部引入js扩展名不是必须的，浏览器不会检查包含js文件的扩展名。

- 使用jsp、php或其他服务器端语言动态生成js代码成为可能

- 但是服务器还是需要看扩展名决定为响应应用哪种MIME类型。

- 若不使用js扩展名，确保服务器返回正确的MIME类型

- 无论任何代码，只要不存在defer和async属性，浏览器都会按照<script#>元素在页面中出现的先后顺序对他们进行依次解析，在第一个sc元素解析完之后才会解析后面的

#### 2.1.1 标签的位置

- 按照惯例 放在

  ```html
  <head>
  	<title></title>
  	<script type="text/javascript" src = "example.js"></script>
  </head>
  <body>
  	这里放内容
  </body>
  ```

  这样做意味着等到所有的js都被下载解析完成后才能开始显示页面内容(浏览器遇到body标签才开始呈现内容)

  对于需要很多js代码的页面中，这会导致浏览器在呈现页面时出现明显的延迟

  延迟期间的浏览器窗口一片空白

- 为避免这个问题，把script标签放到body中

  ```html
  <html>
    <head>
     	<title></title>
    </head>
    <body>
      <!--这里放内容-->
      <script type="text/javascript" src="example.js"></script>
    </body>
  </html>
  ```

  ​	在解析js代码前页面就已经将内容全部呈现在了浏览器中，而用户也会因为浏览器显示空白页面的时间缩短而感到打开页面的速度加快了。

#### 2.1.2 延迟脚本

- defer

  ```html
  <head>
  	<title></title>
  	<script type="text/javascript" defer="defer" src = "example.js"></script>
  </head>
  <body>
  	这里放内容
  </body>
  ```

  脚本会延迟到整个页面都解析完毕后再运行。

  加defer属性相当于告诉浏览器立即下载，但是延迟执行。

  这个例子中，其中包含的延迟脚本会在浏览器遇到html标签后才执行，这两个脚本会先于DOMContentLoaded事件执行。

  但现实中，延迟脚本并不一定会按照顺序执行，也不一定会在DOMContentLoaded事件触发前执行，因此最好只包含一个延迟脚本。

  defer只适用于外部脚本文件

#### 2.1.3异步脚本

- ​	async

  ```html
  <head>
  	<title></title>
  	<script type="text/javascript" async src = "example1.js"></script>
    <script type="text/javascript" async src = "example2.js"></script>
  </head>
  <body>
  	这里放内容
  </body>
  ```

  以上代码，第二个脚本可能会先于第一个脚本之前执行，因此确保两者不依赖非常重要

  async属性目的是为了不让页面等待两个脚本下载和执行从而异步加载页面其他内容

  建议异步脚本不要在期间修改DOM

  异步脚本一定会在页面的load事件前执行。但可能会在DOMContentLoaded事件触发之前或之后执行

  支持异步脚本浏览器： Firefox 3.6 safari 5 chrome

#### 2.1.4 在xhtml中的用法（略）

#### 2.1.5 不推荐使用的语法（略）

### 2.2嵌入代码与外部文件

1. 可维护性：遍历不同html页面的js会造成维护问题，但把所有js放在一个文件夹中维护起来就轻松多了。

   开发人员因此也能在不触及html标记的情况下，集中精力编辑html代码。

2. 可缓存:浏览器能够根据具体的缓存链接的所有外部js文件。也就是说，如果有两个页面使用同一个文件，那么这个文件只需要下载一次。

3. 适应未来：通过外部文件来包含js无需使用前面提到xhml或者注释hack。

### 2.3文档模式

- 混杂模式(quirks mode)

  混杂模式让IE行为和IE5相同

- 标准模式(standards mode)

  让IE行为接近标准行为

- 若没有文档类型声明，默认混杂模式

- 采用混杂模式并不推荐，因为不同浏览器在这种模式下行为差异很大，不使用hack技术会让跨浏览器行为没有一致性

- 对于标准模式，可以使用过渡型(transitional) 或框架集型(frameset)文档来触发

### 2.4noscript元素

1. ​	浏览器不支持脚本

2. 浏览器支持脚本，但脚本被禁用

   ```html
   <head>
   	<title></title>
   	<script type="text/javascript" async src = "example1.js"></script>
     <script type="text/javascript" async src = "example2.js"></script>
   </head>
   <body>
   	<noscript>
       <p>
         本页面需要浏览器支持（启用）js
       </p>
     </noscript>
   </body>
   ```

### 2.5小结

- 引入外部要url 可以是本地 可以是服务器
- 不使用defer和async情况下 按顺序解析
- 浏览器会先解析完不使用defer属性的script元素代码，再解析后面内容，所以一般吧script元素放在页面足后，主要内容后，<#/body>前
- defer属性可以让脚本在文档完全呈现后再执行，延迟脚本总是按照它们的顺序执行
- 使用async属性可以让当前脚本不等待任何其他脚本，也不必阻塞文档呈现，不能保证异步脚本按照它们在页面中出现的顺序执行
- 使用noscript提示不支持js 的浏览器

## 第三章 基本概念

### 3.1 语法

借鉴C java

#### 3.1.1区分大小写

ECMAScript中一切区分大小写

#### 3.1.2 标识符

- 第一个字符必须是字母、下划线、$
- 其他字符可以是字母下划线$

#### 3.1.3 注释

- //单行
- /**/多行

#### 3.1.5 语句

- 有分号
- 控制语句中使用代码块{}

#### 3.2 关键字和保留字

- 按规则保留，不可用作标识符

### 3.3 变量

- ECMAScript的变量是松散型的，可以保存任何类型的数据

- ```javascript
  var m = "hi";
  m = 100;
  
  有效但不推荐
  function test(){
    var message1 = "hi"; //局部变量  函数退出后销毁
    message2 = "ohhhh"; //全局变量
  }
  test();
  alert(message1); //错误
  alert(message2); //正确
  ```

- 虽然省略var可以定义全局变量，但不推荐。

- 因为在局部作用域中定义的全局变量很难维护。

- 而且如果有意忽略了var操作符，也会由于相应变量不会马上就有定义而导致不必要的混乱。

- 给未经声明的变量赋值在严格模式下会抛出Reference错误

- 注意:在严格模式下，不能定义名为eval或arguments的变量，否则会导致语法错误

### 3.4数据类型

1. Undefined
2. Null
3. Boolean
4. Number
5. String
6. 复杂数据类型 Object

因为ECMAScript数据类型具有动态性，因此没有再定义其他数据类型的必要

#### 3.4.1 typeof操作符

从技术角度来讲，函数在ECMAScipt中是对象，不是一种数据类型。

然而函数确实有一些特殊的属性，因此通过typeof操作符来区分函数和其他对象是有必要的。

#### 3.4.2 undefined

- var meassage
- 等价
- var message = undefined
- ECMA-262第3版引入这个值为了正确区分空对象指针与未经初始化的变量。
- 作用:在非严格模式下判断一个变量是否声明。
- 即使未初始化变量会被自动赋予undefined值，但显式地初始化变量依然是明确的选择。
- 如果做到这一点，当typeof操作符返回undefined时，我们知道被检测的变量还没有被声明，而不是未初始化。

#### 3.4.3 Null类型

- Null类型时第二个只有一个值的数据类型，这个特殊的值是null。

- 逻辑上看，null表示一个空对象指针。

- 这也是为什么使用typeof操作符检测null值时会返回object的原因

- ```javascript
  var car = null;
  alert(car); //'object'
  ```

- 如果定义的变量准备在将来保存变量，那么最好将该变量值初始化为null而不是其他值。

- 这也以来只要查看null值就知道相应变量是否已经保存了一个对象的引用

- ```javascript
  if(car !=null){
    //do sth to car
  }
  //实际上undefined值是派生于null的，因此ECMA-262规定对它们的相等性测试要返回true
  alert(null == undefined); // true
  这个操作符处于比较目的会转换其操作数
  尽管它们有这样的关系，但是用途完全不同。
  无论在什么情况下都没有必要将一个变量的值显式地设置为undefined，可同样的规则对null却不适用
  换句话说，只要意在保存对象的变量还没有真正保存对象，就应该明确地让该变量保存null值。
  这样做不仅体现null作为空对象指针的惯例，也有助于进一步区分null和undefined
  ```

#### 3.4.4 boolean类型

- true false 区分大小写

- True False 只是标识符 不是boolean值

- ```javascript
  var meassage = "hello world";
  var messageAsBoolean = Boolean(message); // true
  ```

- 数据类型         转为true的值               转换为false的值

- Boolean           ture                               false

- String               任何非空字符串         ""（空字符串）

- Number           任何非0数值               0和NaN

- Object              任何对象                     null

- Undefined       n/a (不适用)                undefined

  ```javascript
  var message = "hello world";
  if(){
     alert("value is true");
     }
  自动转boolean。
  确切知道在控制流总使用的是什么变量至关重要。
  错误使用一个对象而不是boolean值，可能彻底改变应用程序流程
  ```

#### 3.4.5Number类型

```javascript
var octalNum1 = 070; //八进制56 严格模式下无效，会导致js引擎抛出错误
var octalNum2 = 070; //无效八进制 解析为79
var octalNum3 = 08; //无效八进制 解析为8

var hexNum1 = 0xA; //十六进制10
var hexNum2 = 0x1f; //十六进制的31
```

- 注：js中可以保存-0 +0；被认为相等

- 1.浮点数

- ```javascript
  var floatNum1 = .1 //有效，不推荐
  //由于保存浮点数的内存空间是保存整数的两杯，因此ECMAScript会不失时机地把浮点数转换为整数
  var floatNum1 = 1.; //1
  var floatNum2 = 10.0;  //10
  
  var floatNum = 3.125e7 // 31250000
  ```

  - 0.0000003 == 3e-7
  - 0.1 + 0.2 !=0.3
  - !!永远不要测试某个特定的浮点数值
  - 错误例子：

- ```javascript
  if(a + b == 0.3){
  alert("you got 0.3");
  }
  
  ```

  - 这是IEEE754通病

- 2.数值范围

- ```javascript
  var reslut = Number.Max_VALUE + Number.Max_Value;
  alert(isFinite(reslut)); //flase
  ```

  - -无穷: Number.NEGATIVE_INFINITY
  - +无穷:Number.POSITIVE_INFINITY

- 3.NaN

  - 非数值

  - 任何涉及NaN的操作都会返回NaN，这个特点在多步计算中都有可能导致问题

  - NaN与任何值都不想等包括NaN本身

  - ```javascript
    alert(NaN == NaN); //false
    ```

  - isNaN() 接收到一个数值后会尝试将这个值转换为数值，任何不能转换为数值的值都会导致这个函数返回true

  - ```javascript
    alert(isNaN(NaN)); //true
    alert(isNaN(10)); //false
    alert(isNaN('10')); //false 可以被转换为数值
    alert(isNaN('blue')); //true 不可以转换为数值
    alert(isNaN(true)); //true 可以被转换为数值1
    ```

  - isNaN 适用于对象

  - 对对象使用isNaN时，会调用对象的valueOf方法，然后确定该方法的返回值能否转换为数值

  - 如果不能，则基于这个返回值再调用toString方法，再测试返回值

  - 这个过程也是ECMAScript中内置函数和操作符的一般执行流程

  4.数值转换

  三个函数把非数值转换为数值

  1. Number()

     - 如果是boolean ，true 1 false 0

     - 数字值 简单的传入和传回

     - null。0

     - undefined NaN

     - 字符串：

       - 字符串只包含数字（包括正负号） 将其转换为十进制 '011' - > 11
       - 字符串包含有效的浮点格式，"1.1"转换为浮点数值 忽略前导0
       - 包含十六进制格式 '0xf'--》15
       - 字符串空 0
       - 字符串包含除了上述格式外的字符 转换为NaN

     - 如果是对象 则调用对象 valueOf() 然后再按照前面规则转换为返回的值

     - 转换的结果为NaN 则调用对象的toString()方法，再按前面的规则返回字符串的值

     - ```javacsript
       var num1 = Number("Hello World") //NaN
       var num2 = Number("") //0
       var num3 = Number("00011") //11
       var num4 = Number(true) //1
       ```

  2. parseInt()

     - 比Number()更常用（Number（）太复杂且不合理）

     - 转换字符串时忽略空格，若第一个字符不是数字字符或者-号则返回NaN

     - 对空字符串返回NaN

     - 如果第一个字符是数字字符 会继续解析后续所有字符或遇到了一个非数字字符

     - 能识别八进制 十六进制

     - ```javascript
       var num = parseInt("1234blue"); //1234
       var num = parseInt(""); //NaN
       var num = parseInt("0xA"); //10
       var num = parseInt("22.5"); //22
       var num = parseInt("070"); //56
       var num = parseInt("70"); //70
       var num = parseInt("0xf"); //15
       ```

       由于ECMAScript3 js引擎和ECMAScript 5 存在分歧

       var num = parseInt("070"); 3认为是56 八进制(当作八进制字面量)。5认为是0 十进制

       为了消除疑惑，指定基数

       ```javascript
       var num = parseInt("0xAF",16); //175
       //可以不带0x
       var num1 = parseInt("AF",16); //175
       var num2 = parseInt("AF"); // NaN
       var num2 = parseInt("10",2); // 2
       var num2 = parseInt("10",8); // 8
       var num2 = parseInt("10",10); // 10
       var num2 = parseInt("10",16); // 16
       ```

     c. parseFloat()函数类似

     - ```javascript
       var num1 = parseFloat("1234blue"); // 1234
       var num1 = parseFloat("0xA"); //0
       var num1 = parseFloat("22.5");//22.5
       var num1 = parseFloat("22.34.5");//22.34
       var num1 = parseFloat("0908.5"); // 908.5
       var num1 = parseFloat("3.125e7"); //31250000
       ```

#### 3.4.6 String类型

php对字符单双引号解释不同

1. 字符字面量

   - \n 换行
   - \t 制表
   - \b 空格
   - \r 回车
   - \f 进纸
   - \\ 斜杠
   - \\' 单引号
   - \\" 双引号
   - \xnn  以十六进制代码nn表示的一个字符
   - \unnn 以十六进制代码nnnn表示的一个unicode字符 n为0～f

2. 字符串的特点

   ```javascript
   var lang = "Java";
   lang = lang + "script";
   ```

   首先创建一个能容纳10个字符串的新字符串

   然后这个字符串中填充java 和 script 

   最后一步销毁 java 和script

   这个过程是后台发生的，这也是旧版本浏览器中拼接字符串速度很慢的原因所在

3. 转换为字符串

   要把一个值转换为字符串有两种方式，一种是使用几乎每个值都有的toString()方法

   ```javascript
   var num = 10;
   alert(num.toString()); //'10'
   alert(num.toString(2)); //'1010'
   alert(num.toString(8)); //'12'
   alert(num.toString(10)); //'10'
   alert(num.toString(16)); //"a"
   var val = true;
   var va2 = null;
   var va3;
   alert(String(val1)); // 'true'
   alert(String(val2)); // 'null'
   alert(String(val3)); // 'undefined'
   ```

#### 3.4.7Object 类型

- 一组功能或数据的集合

- ```javascript
  var o = new Object(); 
  var 0 = new Object; //可以但不推荐
  ```

- obj类型是所有它的实例的基础，obj类型所具有任何属性和方法也同样存在于更具体的对象中

- obj的每个实例都具有下列属性和方法

  1. Constructor: 保存着用于创建当前对象的函数。对于前面的例子而言，构造函数就是Object()

  2. hasOwnProperty(propertyName):用于检查给定的属性再当前对象实例中（不是在实例的原型中）,

     propertyName必须以字符串形式指定

  3. isPrototupeOf(object)：用于检查传入的对象是否是另一个对象的原型

  4. propertyIsEnumerable(propertyName):用于检查给定的属性是否能够使用for-in语句来枚举

  5. toLocaleString():返回对象的字符串表示 该字符串与执行环境的地区对应

  6. toString(): 返回对象的字符串表示

  7. valueOf():返回对象的字符串、数值或布尔值表示。通常与toString()返回方法相同

### 3.5 操作符

应用于对象时会调用valueOf() 或 toString()方法 获取可操作值

#### 3.5.1一元操作符

1. ++ --

   - 包含数字字符串: 先转换为数字值，再执行加一减一操作

   - 应用不包含有效数字字符串 变量的值摄制为NaN，字符串变量变成数值变量

   - 应用于false 转换为0 再执行加减1操作 布尔值变数值 true同理

   - 浮点数值 执行加减1操作

   - 对象，调用valueOf() 对值进行前述规则，若结果为NaN，则在调用toString()后再应用前述规则

   - ```javascript
     var s1 = "2";
     var s2 = "z";
     var b = "false";
     var f = 1.1;
     var o = {
     	valueOf:function(){
     		return -1;
     	}
     }
     s1++;  //值变成数值3
     s2++; // 值变成NaN
     b++; // 值变成数值1
     f--; //值变成0。10000000000000000009（浮点数舍入错误)
     o--; //值变成-2
     ```

2. +—

   对非数值应用+-会像Number()对这个值执行转换

#### 3.5.2位操作符

- ​	按数值的位来操作数值
- ecmascript中所有数值以ieee754 64位格式存储
- 位操作符不直接操作64位的值，而是将64位转32位再执行操作
- 对数值进行位操作时，先转32位再将结果转回64位
- 副效应: NaN 和Infinity值应用位操作符时，两个值都会被当成0处理

1. 按位非(NOT)~

   返回数值的反码

2. 按位与(AND)

   & 

3. 按位或(OR)

   |

4. 按位抑或(XOR)

   ^

5. 左移

   <<位数

6. 有符号右移

   \>> 保留符号位 用符号值填充空位

7. 无符号右移

   \>>> 以0填充空位

   负数会以绝对值的二进制补码形式表示，因此会导致右移后的结果非常大

#### 3.5.3布尔操作符

1. ​	逻辑非

   !

   !! 的效果等同 Boolean()

2. 逻辑与

   左&&右

   规则

   - 左为对象，则返回右
   - 右为对象，则左为true时返回右
   - 如果都为对象，则返回右
   - 如果有一个null 则返回null
   - 如果有一个NaN则返回NaN
   - 如果有一个undefined则返回undefined

   短路运算符，如果第一个操作数能决定结果，则不会对第二个操作数求值

3. 逻辑或

   左||右

   规则

   - ​	如果左是对象，则返回左
   
   - 如果左是false则返回右
   
   - 如果都是对象，则返回左
   
   - 如果都是null 返回null
   
   - 如果都是NaN 返回NaN
   
   - 如果都是undefined 返回undefined
   
     ```javascript
     var myObj = preObj || backObj;
     ```
   
     若pre值为null，则赋值back 否则赋值pre

#### 3.5.4 乘性运算符

1. 乘法
   1. 如果都是数值，则常规
   2. 含一个NaN 返回NaN
   3. Infinity与0乘 返回NaN
   4. Infinity 与非0 乘 返回负无穷或无穷
   5. 无穷乘无穷=无穷
   6. 如果有一个操作数不是数值则后台调用Number()将其转为数值再执行
2. 除法
   1. 操作数都是数值，常规
   2. 一个NaN 返回NaN
   3. Infinity被Infinity除，返回NaN
   4. 0被0除 返回NaN
   5. 非0有限数被0除 返回infinity或- infinity
   6. 如果是infinity被任何非0除，结果是+-infinity
   7. 如果有一个操作数不是数值，后台调用Number()
3. 求模
   1. 如果都是数值，常规除法返回余数
   2. 如果被除数是无穷大除数有穷大则返回NaN
   3. 被除数是有限大而除数为0 ，返回NaN
   4. Infinity被Infinity除，返回NaN
   5. 如果被除数是有限大的数值，而除数无限大，则结果是被除数
   6. 如果被除数为0，结果为0
   7. 如果有一个操作数不是数值，则在后台调用Number()将其转换为数值再进行上述操作

3.5.5加性操作符

1. 加法
   1. 如果有一个操作数为NaN，返回NaN
   2. +-Infinity + +-Infinity == +-Infinity
   3. +infinity + -infinity == NaN
   4. -+0 + -+0 == -+0
   5. +0 + -0 == +0
   6. 都是字符串，拼接
   7. 其中一个不是，则转为字符串，再拼接
   8. 对象，布尔值，数值+字符串 则用toString()转字符串后再操作
2. 减法
   1. 都是数值，正常
   2. 一个NaN 返NaN
   3. In-In == NaN
   4. -In - -In == NaN
   5. In - -In ==In
   6. -In - In ==-In
   7. +0 - +0 == +0
   8. +0 - -0 ==-0
   9. -0 - -0 ==+0
   10. 若有一个操作数为字符串、布尔、null、undefined则在后台用Number()转换为数值，再进行前述
   11. 若一个操作数是对象，则调用valueO()获取该对象数值，若得到NaN，则减法结果为NaN，若没有valueOf(),则调用其toString()得到字符串转数值

#### 3.5.6关系操作符

\> < <= >=

- 数值直接比较

- 字符串比较字符编码值

- 一个数值，另一个操作数转为数值

- 对象，调用valueOf()再用前述，无valueOf(),调用toString(),再用前述

- 布尔值转换为数值再进行比较

- ```javascript
  var res = "Brick" < "alphabet"; //true
  B:66 a:97
  var res = "Brick".toLowerCase() < "alphabet".toLowerCase(); // false
  var res = "23" < "3" //true
  var res = "23" < 3  //false
  var res = "a" < 3 //false. "a"被转成NaN
  var res = NaN < 3 // false
  var res = NaN >= 3 //false
  ```

#### 3.5.7相等操作符

1. ==&!=:

   1. 如果有一个为布尔值，则转换为数值
   2. 如果一个字符串一个数值，比较前将字符串转换为数值
   3. 如果一个操作数是对象，则用valueOf(),得到基本类型再与前面规则进行比较

   规则：

   1. null与undefined相等

   2. 比较相等前不能将null和undefined转换为其他任何值

   3. 一个NaN 则返回false，不相等则返回true

   4. 若都是NaN，相等返回False，按照规则NaN不等于NaN

   5. 如果两个操作数都是对象，想比较它们是不是同一个对象。如果都指向同一个对象，则返回true，否则返回false

   6. ```
      undefined == 0 //false
      null == 0 //false
      ```

2. ===&!==

   1. > var res = ("55"==55); //true 转换后相等
      >
      > var res = ("55"===55); //false 因为不同的数据类型不相等

   2. null === undefined //false

   为了保证数据类型完整性，推荐使用全等与不全等

#### 3.5.8 条件操作符

​	

```javascript
var max = (num1 > num2) ? num1 : num2;
```

​	max会保存一个最大的值，如果num1大于num2，关系表达式返回true，则将num1的值赋给max

#### 3.5.9 赋值操作符

- =
- += *= /= %= -= <<= >>= >>>=

#### 3.5.10 逗号操作符

```
var num = (1,2,3); //num值为3
```

### 3.6语句

#### 3.6.1 if(略)

#### 3.6.2 do-while

```javascript
var i = 0;
do {
	i+=2;
} while(i < 10);
alert(i);
```

#### 3.6.3 while(略)

#### 3.6.4 for

```javascript
var count = 10;
for(var i = 0; i < count; i++){
  alert(i);
}
alert(i); // 10
//i在外部可以访问到，因为js没有块级作用域
for(;;){ //无限循环
  do();
}
for(;i < count;){
  alert(i);
  i++;
}
//相当于while
```

#### 3.6.5 for-in语句

for-in 是一种精准的迭代语句，可以用来枚举对象的属性。

```javascript
for(var propName in window){
  document.write(propName);
}
```

用for-in循环来显示BOM中window对象中所有的属性。

每次执行循环时候，都会将window对象中存在的一个属性名复制给变量propName

对象为null或者undefined时，不执行循环体。

推荐在使用for-in前确认该对象值不是null或undefined

#### 3.6.6 label(略)

#### 3.6.7break continue(略)

#### 3.6.8 with (不要用)

会使性能下降！

也会给调试造成困难

#### 3.6.9 switch语句

```javascript
switch(x){
  case val:stament
  	break;
  case val2:stament
  	break;
  default:stament
}
```

switch在比较时采用全等操作符因此不发生类型转换

### 3.7函数

(略)

推荐做法是，要么让函数始终有一个返回值，要么永远不会返回值，否则如果函数有时候返回值有时候不返回值，会给调试代码带来不便

严格模式下对函数的限制:

- 不能把函数命名为eval或arguments
- 不能把参数命名为eval或argumens
- 不能出现两个参数命名相同的情况
- 如果发生以上情况将导致语法错误，代码无法执行

#### 3.7.1 理解参数

函数不限制传入参数数量

会形成伪数组 argumens对象只是与数组类似，并不是Array的实例

```javascript
function sayHi(){
	alert("hello" + arguments[0] +"," + arguments[1])
}
sayHi('a','b');
```

体现了ECMAScript函数的一个重要特点，命名的参数只提供便利，但不是必须的

ECMAScript中解析器不会验证命名函数

```javascript
function doAdd(num1,num2){
  if(arguments.length ==1){
    alert(num1 +10);
  }else if(arguments.length == 2){
    alert(arguments[0] + num2);
  }
}
//arguments[0]==num1

```

虽然这个特性算不上完美的重载，但是足够弥补ECMASCript的缺憾

```javascript
function doAdd(num1,num2){
  arguments[1]= 10;
  alert(arguments[0]+num2);
}
每次执行这个函数都会重写第二个参数，将第二个参数的值修改为10。
因为arguments对象中的值会自动反映到对应的命名参数，所以修改arguments[1]也修改了num2，
结果他们的值都会变成10
不过这不是说这两个值访问相同的内存空间，它们的内存空间是独立的，但他们的值会同步
但这种影响是单向的，修改命名参数并不会改变argumens中的值，另外还要记住如果只传入了一个参数，那么argumens[1]设置的值不会反映到命名参数中，因为argumens对象的长度是由传入的参数个数决定的，不是由定义函数时命名的参数个数决定的
如果只给函数传一个参数，则num2中就会保存undefined
```

ECMAScript中所有的参数传递都是值，不可能通过引用传参数

#### 3.7.2 没有重载

ECMAScript不能像传统意义上那样实现重载。

在java中可以一个函数编写两个定义，只要两个定义的签名(接受的参数的类型和数量)不同即可.

ECMAScript函数没有签名，真正的重载是无法做到的。

如果在ECMAScript中定义了两名字相同的函数，则该名字只属于后面定义的函数。

后定义覆盖前定义

### 3.8小结

js的核心语言特性在ECMA-262中以名为ECMAScript的伪语言的形式来定义的。

ECMAScript中包含了所有基本的语法、操作符、数据类型和完成基本运算所必须的对象，但没有对取得输入和产生输出的机制做出规定。

理解ECMAScript中纷繁复杂的细节，是理解其在Web浏览器中的实现- JavaScript的关键

1. ECMAScript中基本数据类型undefined、null、boolean、number、string
2. 一种复杂数据类型 object
3. 严格模式为这门语言在容易出错的地方施加了限制
4. ecmascript提供了很多类C操作符
5. 函数无须指定返回值
6. 没有函数签名概念
7. 不能重载

### 第四章 变量、作用域和内存问题