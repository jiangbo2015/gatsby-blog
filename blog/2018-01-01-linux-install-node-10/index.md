---
path: '/linux-install-node-10.html'
date: '2018-01-01'
title: '只需三步，linux下安装最新node10.x版本'
category: 'Linux'
---

### 只需三步，linux 下安装最新 node10.x 版本

### 第一步，下载最新 node 安装包

这里是从`http://nodejs.cn/download/`中文网下载， 注意是.xz 结尾的文件
我这里下载到根目录下的 software 文件下
/software

可以直接下载到本地在上传到服务器，也可以使用 wget, apt-get 等

```
wget https://npm.taobao.org/mirrors/node/v10.15.0/node-v10.15.0-linux-x64.tar.xz
```

### 第二步，解压到当前文件夹，也可以是别的文件夹，但是要确保符号连接正确

```
tar -xvf node-v10.15.0-linux-x64.tar.xz
```

第三步，建立`node`符号连接

```
ln -s /software/node-v10.15.0-linux-x64/bin/node /usr/local/bin/node
```

查看版本

```
node -v
v10.15.0
```

建立`npm`符号连接，这也是第三步一起的

```
ln -s /software/node-v10.15.0-linux-x64/bin/npm /usr/local/bin/npm
```

```
npm -v
6.4.1

```

### 补充

修改`～/.bash_profile`也可以全局使用 node,npm, 不用建立符号连接了

```
export PATH=$PATH:/software/node-v10.15.0-linux-x64/bin
```

使其生效

```
source ~/.bash_profile
```
