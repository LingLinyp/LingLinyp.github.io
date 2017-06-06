---
layout: post
title: Jekyll博客添加中文字数统计
catalog: true
category: Jekyll
tags: Jekyll
---

## 效果

<img src="/img/in-post/6_6_img.jpg">


爱折腾的人，总是忙碌不休，之前也给Jekyll博客做了一些优化。

- <a href="http://linglinyp.com/Jekyll/2017/06/03/jekyll.html" target="_blank">Jekyll博客中的日期格式总结</a>

- <a href="http://linglinyp.com/Jekyll/2017/05/17/busuanzi.html" target="_blank">Jekyll博客添加访问量统计</a>
 
- <a href="http://linglinyp.com/Jekyll/2017/05/22/add-disqus-to-blog.html" target="_blank">Jekyll博客添加Disqus(step by step)</a>

前一段时间看到简书上的中文字数统计，Medium上的阅读所需时间统计，觉得很有意思，就想添加到自己的博客。
<img src="/img/in-post/6_6_img1.jpg">
<img src="/img/in-post/6_6_img2.jpg">

## 字数统计

#### 英文字数统计

jekyll中有内置的英文字数统计方法```number_of_words```，我们来测试一下

添加代码

```js
page.content | number_of_words // 记得加大括号

```

<img src="/img/in-post/6_6_img4.jpg">
显示8，挺准确
<img src="/img/in-post/6_6_img5.jpg">

换成中文
<img src="/img/in-post/6_6_img6.jpg">
显示字数是1，这里明显有9个字
<img src="/img/in-post/6_6_img7.jpg">
结论：内置的字数统计方法遇到中文就蔫儿了~

#### 适合的中文字数统计

上代码

```js
content | strip_html | strip_newlines | split: "" | size // 记得加大括号
```
显示11个字，已经很接近了，我个人觉得已经很好了，相差不算大能接受。
<img src="/img/in-post/6_6_img8.jpg">

#### 阅读所需时间

最终我放弃了这项，原因如下

- 觉得意义不大，添加这个时间为了说明什么呢

- 怪怪的，报纸杂志上没见过标注文章所需的阅读时间

- 如果显示3分钟读完，有人却花了10分钟，会不会怀疑自己有阅读障碍呢，其实并不是，阅读有快有慢很正常

如果你需要的话，可以参考<a href="https://taoalpha.github.io/blog/2015/05/21/tech-jekyll-count-of-chinese-characters/" target="_blank">这篇文章</a>，讲的比较详细。
