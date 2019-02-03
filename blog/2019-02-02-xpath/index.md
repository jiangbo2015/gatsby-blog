---
path: '/xpath.html'
date: '2019-02-02'
title: 'xpath 用法'
category: 'scrapy'
---

### 使用 scrapy 爬取网站时，对页面元素进行提取处理，通常会使用 xpath, 一些常见用法做个记录

-   相对定位使用`//`,

`res.xpath(//h1)` 相对整个 html 文档

`res.xpath(.//h1)` 相对当前路径

-   通过属性获取

res.xpath(//h1[@class="red"])

res.xpath(//h1[@id="one"])

res.xpath(//h1[start-with(@class, "red")]) 以 class=red*开头的 h1
res.xpath(//h1[end-with(@class, "red")]) 以 class=*red 结尾的 h1
res.xpath(//h1[contains(@class, "red")]) class 中包含 red 的好 h1
res.xpath(//h1[@class="red" and @id="one"])
res.xpath(//h1[@class="red" or @id="one"])

-   多个子节点文本

```
<div class="multiply">
<a href="">first</a>
<span>second</span>
third
</div>
```

res.xpath(string(//div[@class="multiply"]))
