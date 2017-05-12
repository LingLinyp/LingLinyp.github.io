---
layout: post
title: CSS样式优先级
subtitle: CSS Style Priority Level
tags: 
      - 前端开发
      - 学习笔记
---

### 首先谈谈CSS引入方式的优先级
 
CSS有三种引入方式：

**1.外部样式**（External Style Sheet）: 在```head```内插入```link```来引用外部样式文件

```
<head>
  <link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
```
**2.内部样式**（Internal Style Sheet）： 在```head```中插入```style```,在style中直接定义样式

```
<head>
	<style>
		h1 {
		    color: maroon;
		    margin-left: 40px;
		} 
	</style>
</head>
```
**3.内联样式**(Inline Style Sheet)： 直接在HTML元素中定义样式
```
<h1 style="color:blue;">This is a heading</h1>
```
那如果这三种方法同时应用到一个元素中，会是什么情况？下面我们来比较一下。

先看内部样式与外部样式

```
<head>
	<link rel="stylesheet" type="text/css" href="./css">//  h1{color:orange;} 外部样式
	<style type="text/css">
		h1{
			color:blue;
		}// 内部样式
	</style>
</head>
<body>
	<h1>This is a heading</h1>
</body>
```
结果是蓝色
<img src="/img/in-post/css_img1.jpg" >

但是如果将外部样式与内部样式的顺序调换一下，内部样式在前，外部样式在后

```
<head>
	<style type="text/css">
		h1{
			color:blue;
		}// 内部样式
	</style>
	<link rel="stylesheet" type="text/css" href="./css">//  h1{color:orange;} 外部样式
</head>
```
结果是橙色

<img src="/img/in-post/css_img2.jpg" >

所以一般情况下，```内部样式 > 外部样式```，但如果外部样式在内部样式的**后面**出现，外部样式就会覆盖内部样式。
**(关于这一点，我表示疑问，查询了很多资料，说法不一，有说内部 = 外部； 有说内部 > 外部，请大神们赐教)**

我们再加入内联样式比较：

```
<head>
	<link rel="stylesheet" type="text/css" href="./css">//  h1{color:orange;} 外部样式
	<style type="text/css">
		h1{
			color:blue;
		}// 内部样式
	</style>
</head>
<body>
	<h1 style="color:green;">This is a heading</h1> // 内联样式
</body>
```
结果是绿色
<img src="/img/in-post/css_img3.jpg" >

```CSS引入优先级总结：内联样式 > 内部样式 > 外部样式```。 需要注意的是外部样式与内部样式的先后问题。

### 下面再来谈CSS选择器

定义： CSS选择器用来定位HTML文档中的任何部分，给之相应的样式。（下面要说的是三种最基础的选择器）

**元素（标签）选择器（Type Selector）**：用来定位文档中指定的HTML元素

```
<body>
  <p>This is a paragraph</p>
</body>
```
在没有给元素```p```样式前，显示的是浏览器默认的样式
<img src="/img/in-post/css_img4.jpg" >
给```p```一个样式
```
p{
	color:blue;
	font-size:30px;
}
```
结果
<img src="/img/in-post/css_img5.jpg" >

所以： ```元素（标签）选择器 > 浏览器默认```

**类选择器（Class Selector）**： 当给HTML中的元素一个类时，可以用这些类来定位元素

给p元素一个类```orange-text```,并定义样式
```
<p class="orange-text">This is a paragraph</p>

.orange-text{
			color:orange;
		}// 样式
```
结果
<img src="/img/in-post/css_img6.jpg" >

如果我们给p再添加一个类```blue-text```，并给出样式
```
<p class="orange-text blue-text">This is a paragraph</p>

.orange-text{
			color:orange;
		}// 样式

.blue-text{
			color:blue;
		}// 样式
```
结果却是蓝色
<img src="/img/in-post/css_img5.jpg" >

将类的样式顺序调换一下，blue在前，orange在后

```
<p class="orange-text blue-text">This is a paragraph</p>

.blue-text{
			color:blue;
		}// 样式

.orange-text{
			color:orange;
		}// 样式

```
结果是橙色
<img src="/img/in-post/css_img6.jpg" >

由此看出，在给拥有不同类的同一元素定义样式时，后出现的类样式会覆盖先出现类的样式。

**ID选择器（ID Selector）**： ID具有唯一性，一个元素只能有一个ID

给p一个id```pink-text```，并给它定义样式
```
<p id="pink-text" class="orange-text blue-text">This is a paragraph</p>

#pink-text{
			color:pink;
		}// 样式

.blue-text{
			color:blue;
		}// 样式

.orange-text{
			color:orange;
		}// 样式
```
结果是粉色
<img src="/img/in-post/css_img7.jpg" >

所以： ```ID选择器 > 类选择器 > 元素选择器```

下面来看看内联样式与ID 选择器的优先级

```
<p id="pink-text" class="orange-text blue-text" style="color:black;">This is a paragraph</p>

#pink-text{
			color:pink;
		}// 样式

.blue-text{
			color:blue;
		}// 样式

.orange-text{
			color:orange;
		}// 样式

```
结果是黑色
<img src="/img/in-post/css_img8.jpg" >

所以： ```内联 > ID选择器```

**CSS优先级总结： 内联 > ID > 类 > 元素 > 浏览器默认** 


### 还有一个！important 规则

在一个样式上使用!important时，会覆盖其他所有样式

比如在orange样式上使用!important规则
```
<p id="pink-text" class="orange-text blue-text" style="color:black;">This is a paragraph</p>

#pink-text{
			color:pink;
		}// 样式

.blue-text{
			color:blue;
		}// 样式

.orange-text{
			color:orange !important;
		}// 样式
```
结果是橙色
<img src="/img/in-post/css_img6.jpg" >

在很多时候我们会用到一些CSS库，这些CSS可能会覆盖掉我们设定的CSS，所以当需要给一个元素一个特定的CSS时，我们可以用!important。但也不能滥用，具体什么时候用，怎么用。可以参考 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity" target="-black">MDN!important 规则一些经验法则</a>









