---
layout: post
title: 为Jekyll博客添加Disqus(step by step)
subtitle: How to add disqus to your website
category: Skills
catalog: true
tags:
    - 小技巧
---
多说要关闭了，尼玛又得做抉择了，对于我这个选择恐惧症患者来说这是多么揪心的一件事。友言，畅言，网易云跟帖，还是Disqus?经过多番挣扎纠结后，我决定用Disqus。毕竟是非常专业的评论系统，功能强大，口碑又好，我坚信短期内Disqus不会关闭，哈~

已经安装成功，觉得很好用，下面分享一下我的安装过程。

## 第一步： 注册 <a href="https://disqus.com/" target="_blank">Disqus</a>账号



注册过程很简单(GET STARTED)
<img src="/img/in-post/dis_img.jpg" alt="disqus">
进入注册页面，你可以选择现有的社交账号登陆，也可以重新用邮箱注册
<img src="/img/in-post/dis_img5.jpg">

## 第二步：添加你的网站
注册后会直接到下面的这个页面，选择安装disqus
<img src="/img/in-post/dis_img1.jpg">
进入站点添加页面，里面有两项需要填写

- 你的网站名称（Website Name）:
此项会显示在最终评论框的左上方位（叫什么由你来定啦），我设置的站点名是Ling's Blog。

<img src="/img/in-post/dis_img8.jpg">

- Shortname

没看到这一项？你点击一下```Customize Your URL```就会出现。这就是你的```disqus_shortname```，设置后不可更改。 我们在用博客模板的时候，一般会有说明文档，里面强调的比较多的就是将一些ID替换成自己的，这个Shortname就是你的Disqus用户名。


<img src="/img/in-post/dis_img2.jpg">

至于Category，根据自己的网站选一个吧~

设置完成后进入下一页，Select a plan，看自己需不需要，我就选了第一个Basic。
<img src="/img/in-post/dis_img6.jpg">

## 第三步： 生成并添加自己的JS代码

进入Install Disqus页面，首先需要选择所要嵌入的博客类型，有很多选择，看有没有适合自己的类型。我是Jekyll的嘛，就选```universal code```即最基本的JS代码。

<img src="/img/in-post/dis_img3.jpg">
之后Disqus就生成了一段代码，将这段代码放在 ```layout```里的```post.html```页面下，当然可以根据自己的博客需求，看需要放在什么位置，一般都是放在文章页嘛。
<img src="/img/in-post/dis_img10.jpg">


## 第四步：一些简单配置

最后一步进入Configure Disqus页面，比如添加一下你的网址Website URL啦，完成后去试试评论一下吧。

<img src="/img/in-post/dis_img9.jpg">
<img src="/img/in-post/dis_img11.jpg">

## 以下可参考做更深入配置：

<a href="https://help.disqus.com/customer/portal/articles/472098-javascript-configuration-variables" target="_blank">JavaScript configuration variables</a>

<a href="http://www.perfectlyrandom.org/2014/06/29/adding-disqus-to-your-jekyll-powered-github-pages/" target="_blank">Adding Disqus to your Jekyll
</a>

<a href="https://help.disqus.com/customer/portal/articles/466208" target="_blank">关于Shortname</a>

最后纪念一下多说，再见了~~
<img src="/img/in-post/duoshuo.jpg">







