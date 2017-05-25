---
layout: post
title: 给Jekyll博客添加访问量统计
categories: Skills
tags: 
    - 小技巧
---

博客搭建完已经有一段时间了，但有不少插件需要补充，比如多说要关闭了，得选择别的社会化评论；添加网站访问量；添加阅读标签；作品集等等。很零碎也琐碎，总是想不起来去做，今天倒是完成了一项，给博客添加了访问统计。通过
 <a href="http://ibruce.info/2015/04/04/busuanzi/#more" target="_blank">**不蒜子**</a>实现了网站计数功能。

具体效果如下：

文章阅读量：
<img src="/img/in-post/busuanzi-img3.jpg">
网站访客数：
<img src="/img/in-post/busuanzi-img1.jpg">

### 为什么选不蒜子

（1）一行脚本+一行标签，搞定一切

（2）永久免费试用啊

统计就是这么简单 哈
<img src="/img/in-post/busuanzi-img.jpg">

### 如何添加

（1）引入js脚本

```js
<script async src="//dn-lbstatics.qbox.me/busuanzi/2.3/busuanzi.pure.mini.js"></script>
```

（2）添加站点的访问量

 - pv的方式，单个用户连续点击```n篇```文章，记录```n次```访问量。

 ```css
 <span id="busuanzi_container_site_pv">
    本站总访问量<span id="busuanzi_value_site_pv"></span>次
</span>
 ```
 - uv的方式，单个用户连续点击```n篇```文章，只记录```1次```访客数。

 ```css
 <span id="busuanzi_container_site_uv">
  本站访客数<span id="busuanzi_value_site_uv"></span>人次
</span>
 ```
我添加的是uv方式，凭自己喜好选择。里面的文字可以任意修改，随自己喜欢，只要id不变就可以了。

（3）添加单页访问量

 pv的方式，单个用户点击```1篇```文章，本篇文章记录```1次```阅读量。

 ```css
 <span id="busuanzi_container_page_pv">
  本文总阅读量<span id="busuanzi_value_page_pv"></span>次
</span>
 ```

 将代码放在你需要显示阅读量的地方，文字随自己喜好修改。

### 小问题

当我开开心心的为博客添加完站点统计后，我一看，我滴个大西瓜，怎么会有这么多访问量！！！！
<img src="/img/in-post/busuanzi-img1.jpg">
原来不蒜子是通过页面url来标识一个计数值，我是在本地运行的，localhost应该被用了很多次，所以累计了这么多。更新同步后会显示正常的数字。
<img src="/img/in-post/busuanzi-img2.jpg">

哎，多说就要关闭了，希望不蒜子能坚强活下去。


  
