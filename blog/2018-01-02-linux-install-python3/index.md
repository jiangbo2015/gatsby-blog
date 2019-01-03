---
path: '/linux-install-python3.html'
date: '2018-01-02'
title: 'linux下安装python3'
category: 'Linux'
---

我的 ECS 阿里云服务器中，linux 系统默认安装的是 python2,这里在此基础上安装 python3,让其共存

首先使用 yum 安装开发工具

```
yum -y groupinstall "Development tools"
```

再安装 python 可能用到的库，以后安装 `scrapy` 等爬虫工具时会比较顺利（血的教训啊）
比较长，全部复制哦

```
yum -y install zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gdbm-devel db4-devel libpcap-devel xz-devel --skip-broken
```

下载，解压

```
wget https://www.python.org/ftp/python/3.5.5/Python-3.5.5.tgz
tar -zxvf Python-3.5.5.tgz

```

编译，安装 `--prefix`是安装目录

```
cd Python-3.5.5/
./configure --prefix=/usr/local/python3
make && make install
```

加到全局变量中，可以使用符号链接，也可以使用修改`～/.bash_profile`文件来实现

第一种，符号链接

```
ln -s /usr/local/python3/bin/python3 /usr/bin/python3
ln -s /usr/local/python3/bin/pip3 /usr/bin/pip3
```

第二种，修改`.bash_profile`

```
vi ~/.bash_profile
```

进入编辑模式，底部添加`export PATH=$PATH:/usr/local/python3/bin`

```
# .bash_profile

# Get the aliases and functions
if [ -f ~/.bashrc ]; then
        . ~/.bashrc
fi

# User specific environment and startup programs

PATH=$PATH:$HOME/bin

export PATH
export PATH=$PATH:/usr/local/python3/bin
export PATH=$PATH:/software/node-v10.15.0-linux-x64/bin

```

使其生效

```
source ~/.bash_profile
```

查看版本

```
python3 -V

Python 3.5.5

```
