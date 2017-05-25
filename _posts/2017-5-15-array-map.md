---
layout: post
title: JS中Array方法之map()
subtitle: JavaScript Array map() Method
categories: Study
tags: 
    - 前端开发
    - JavaScript
---

### 是什么

map()：对数组的每一项运行给定函数，返回每次函数调用的结果组成新数组。

简化下：

map()：用来将一个数组中的每一项(element)通过一个特定的函数做一次转换，返回的结果组成一个新数组，**新旧数组长度一致**。

### 基本语法

```js
a.map(function(currentValue, index, arr), thisValue);
```
```a```: 代表需要处理的数组
 
```currentValue```: 函数的第一个参数，代表数组中的**元素**

```index```: 函数的第二个参数，代表数组中元素的**索引**（第几个元素）

```arr```: 函数的第三个参数，代表map 方法被调用的原数组本身

```thisValue```: 可选的参数，代表函数中this的指向

这么多参数有点晕，以上是比较复杂的语法，不是太常用。简单常用的语法是

```js
a.map(function(currentValue));
```
解释：将数组a中的每一项(element)通过特定的函数function()做一次转换，返回的结果生成一个新数组。

### 实例

```js
var numbers = [1, 4, 9];
var newNambers = numbers.map(Math.sqrt);
// 结果是[1, 2, 3]
```
原数组```numbers```中有1,4,9三个元素，新数组```newNumbers```的值为```numbers```中对应数字的平方根1,2,3。

```js
var array = [1,2,3,4,5];
var newArray = array.map(function(val){
  return val + 3;
});
// 结果是[4,5,6,7,8]
```
原数组```array```有1,2,3,4,5四个元素，新数组```newArray```中的元素是原数组中每一项元素加上3后的值。

如果对Math对象不是太清楚，可以回顾一下
<a href="http://localhost:4000/2017/04/26/math-object.html" target="_blank">JavaScript中的Math对象</a>

### 为什么要用

下面是一个客户信息列表

```js
var customers = [

    {
	    firstname : "Wen", 
	    lastname: "Xie",
	    age: 25
    },
    {
    	firstname : "Li", 
    	lastname: "Huang",
    	age: 26
    },
    {
    	firstname : "Yu", 
    	lastname: "Kan",
        age: 23
    }
    {
    	firstname : "Ting", 
    	lastname: "Ni",
        age: 28
    }

];
```
现在我们需要知道所有客户的年龄，怎么办？.map()方法可以轻松实现。

```js
console.log(customerAge =  customers.map(function(item){
	return  item.age;
}));
// [25, 26, 23, 28]
```
如上例，在遍历```customers```这个数组中的每一项元素后，返回值就组成了新的数组```customerAge```。

### 注意

1.map()方法只会在有值的索引上被调用函数。没有被赋过值或者delete 删除的索引是不会被调用的。

```js
var array = [1,,3,4,5]
 delete array[3];
 var newArray = array.map(function(x){
    return x * 2;
 })
 // [2, undefined × 1, 6, undefined × 1, 10]

```
2.新旧数组长度一致，即使删除了一些索引

```js
var array = [1,2,3,4,5]
 delete array[3];
 var newArray = array.map(function(x){
    return x * 2;
 })
// array.length 5
// newArray.length 5
```



3.map()方法不会改变原数组。

```js
 var numbers = [1, 5, 10, 15];
var newNumbers = numbers.map(function(x) {
    return x * 2;
});
// newNumbers 是 [2, 10, 20, 30]
// numbers 依旧是 [1, 5, 10, 15]
```


