---
path: '/python-pytesseract-pillow-captcha.html'
date: '2019-01-13'
title: '用pytesseract-简单二维码识别'
category: 'Python'
---

### 用 pytesseract-简单二维码识别

用到的库 `pytesseract` `pillow`

```
pip3 install pytesseract
pip3 install pillow
```

识别二维码步骤可以分为`灰度化`，`二值化`，`降噪`，`切割`等，本位使用的技术只能识别简单的二维码（字母没有相互遮挡，重合）

打开图片，灰度化

```
im = Image.open('source/'+name)

#转化到灰度图
imgry = im.convert('L')
```

二值化，即定一个中间值，大于和小于改值的，分别用一个值表示，如（0，1）

```
#二值化，可调整threshold
threshold = 177
table = []
for j in range(256):
    if j < threshold:
        table.append(0)
    else:
        table.append(1)

out = imgry.point(table, '1')
```

降噪，即图像上孤立的点，或者线，常见的有 4 临域，8 临域等，4 临域即一个点上下左右相邻的像素值

```
def depoint(img):
    pixdata = img.load()
    w,h = img.size
    for y in range(0,h-1):
        for x in range(0,w-1):
            count = 0

            # 白色点直接跳过
            if pixdata[x,y] == 1:
                print('白色')
                continue

            if pixdata[x,y-1] == 1:
                count = count + 1
            if pixdata[x,y+1] == 1:
                count = count + 1
            if pixdata[x-1,y] == 1:
                count = count + 1
            if pixdata[x+1,y] == 1:
                count = count + 1
            # 该点周围白点个数超出阈值，则设为白色
            if count > 2:
                pixdata[x,y] = 1
    return img

```

完整代码
[github](https://github.com/jiangbo2015/pykit/tree/master/captcha-pytesseract)

```
# -*-encoding:utf-8-*-
import pytesseract
from PIL import Image

name = '5.png'

# 四邻域降噪，二值化后，0为黑色，1为白色
def depoint(img):
    pixdata = img.load()
    w,h = img.size
    for y in range(0,h-1):
        for x in range(0,w-1):
            count = 0

            # 白色点直接跳过
            if pixdata[x,y] == 1:
                print('白色')
                continue

            if pixdata[x,y-1] == 1:
                count = count + 1
            if pixdata[x,y+1] == 1:
                count = count + 1
            if pixdata[x-1,y] == 1:
                count = count + 1
            if pixdata[x+1,y] == 1:
                count = count + 1
            # 该点周围白点个数超出阈值，则设为白色
            if count > 2:
                pixdata[x,y] = 1
    return img



def main():
    im = Image.open('source/'+name)

    #转化到灰度图
    imgry = im.convert('L')

    #二值化，可调整threshold
    threshold = 177
    table = []
    for j in range(256):
        if j < threshold:
            table.append(0)
        else:
            table.append(1)

    out = imgry.point(table, '1')
    out.save('temp/two.png')

    out = depoint(out)
    out = depoint(out)

    out.save('temp/'+name)

    text = pytesseract.image_to_string(out)
    print(text)

if __name__ == '__main__':
    main()

```
