---
path: '/python-yield-for-in.html'
date: '2019-01-11'
title: 'python中使用yield和for in 循环处理文件'
category: 'Python'
---

```python
import os

"""
src 文件夹下有 fileA fileB fileC
"""

def get_files_normal():
lists = []
for filename in os.listdir('src/'):
lists.append(filename)
return lists

files1 = get_files_normal()
print(files1)

# [fileA, fileB, fileC]

def get_files_yield():
for filename in os.listdir('src/'):
yield filename

files2 = get_files_yield()
print(list(files2))

# [fileA, fileB, fileC]

def get_files_generate():
return (filename for filename in os.listdir('src/'))

files3 = get_files_generate()
print(list(files3))

# [fileA, fileB, fileC]
```
