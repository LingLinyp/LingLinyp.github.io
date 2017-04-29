---
layout: post
title: JavaScript中的Math对象
subtitle: "JavaScript: The Math Object"
date: 2017-04-26
header-img: "img/in-post/post-04-bg.jpg"
tags: 
    - 前端开发
    - JavaScript
---

**Math对象**

 Math对象为数学常量和数学函数提供了属性和方法，不像其他的函数对象，Math不是一个函数构造器。Math所有属性和方法都是静态的，可以通过使用Math作为对象而不用创建它来调用。

 调用Math属性和方法的语法：

 ```
 var x = Math.PI;
 var y = Math.round(3.4);
 ```

---------

**Math的属性**

- E: 返回欧拉常数，也是<a href="http://baike.baidu.com/item/%E8%87%AA%E7%84%B6%E5%AF%B9%E6%95%B0" target="_blank">自然对数</a>的底数, 约等于 2.718

```
Math.E;//2.718281828459045
```
- LN2： 返回2的自然对数, 约等于0.693

```
Math.LN2;//0.6931471805599453
```

- LN10: 返回10的自然对数，约等于2.303

```
Math.LN10;//2.302585092994046
```

- LOG2E: 返回以2为底E的对数, 约等于 1.443

```
Math.LOG2E;//1.4426950408889634
```

- LOG10E: 返回以10为底E的对数, 约等于 0.434

```
Math.LOG10E;//0.4342944819032518
```


- PI: 返回圆周率，圆的周长：直径，约等于 3.14159（记得当年各种背诵记忆这个数字）

```
Math.PI;//3.141592653589793
```

- SQRT1_2: 返回1/2的平方根, 约等于 0.707

```
Math.SQRT1_2;//0.7071067811865476
```

- SQRT2: 返回2的平方根, 约等于 1.414

```
Math.SQRT2;//1.4142135623730951
```

**Math的常用方法**

**1.Math.abs(x)**：返回x的绝对值

```
var val = Math.abs(-1.9);
 document.write("First value is: " + val ); 
         
var val = Math.abs(null);
 document.write("<br />Second value is: " + val ); 
         
var val = Math.abs(2.8);
 document.write("<br />Third value is: " + val ); 
         
var val = Math.abs("string");
  document.write("<br />Fourth value is: " + val ); 
```
结果：

```
First value is: 1.9
Second value is: 0
Third value is: 2.8
Fourth value is: NaN
```
**注意**：输入```null```，返回值会是```0```；输入非数字类型的变量如字符串，会返回```NaN```。


**2.Math.random()**: 返回一个[0,1)之间的随机数
```
 var val = Math.random();
 document.write(val);
  var val = Math.random();
 document.write("<br />" + val);
```
结果：

```
0.027685192566733408
0.3054081853981876
```

**3.Math.floor(x)**: 返回一个x向下取整后的整数值，简单点就是直接省略掉小数点后面的,保留整数

```
 var val = Math.floor(3.4);
 document.write(val);

 var val = Math.floor(4.9);
 document.write("<br />" + val);
 ```
 结果：
 ```
 3
 4
 ```

 **4.Math.ceil(x)**: 返回一个x向上取整后的整数值，简单点就是只要小数点后有数值，就向前进一位，与```Math.floor(x)```相反

```
var val = Math.ceil(3.4);
 document.write(val);

 var val = Math.ceil(4.1);
 document.write("<br />" + val);
```
结果：

```
4
5
```

**5.Math.round(x)**：返回x四舍五入后的整数
```
var val = Math.round(3.4);
 document.write(val);

 var val = Math.round(4.5);
 document.write("<br />" + val);
```
结果：
```
3
5
```
除了以上介绍的这些属性，方法外，Math还包含其他的属性，方法，可以参考<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math" target="_blank">MDN:Math</a>。

