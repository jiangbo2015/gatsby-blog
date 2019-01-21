---
path: '/problem-resolve.html'
date: '2019-01-15'
title: '遇到的一些问题汇总，及解决方案'
category: '笔记'
---

### 遇到的一些问题汇总，及解决方案

### 安装时提示没有权限,解决方法：`npm i *** --unsafe-perm`

```
EACCES: permission denied, open ***
```

### matplotlib 在 virtualenv 中运行时报错： Python is not installed as a framework.

```
# 需要添加TkAgg
import matplotlib
matplotlib.use('TkAgg')
```
