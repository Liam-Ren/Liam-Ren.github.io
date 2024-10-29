---
title: Hexo写作
date: 2024-10-29 16:06:00
tags: Hexo
categories: 个人笔记
top_img: 
cover: 
---

## 写作流程

在_posts文件夹下新增`.md`文件或通过指令创建

```Bash
hexo n 你的文章名
```

![image-20241029160626400](https://liam123.oss-cn-hangzhou.aliyuncs.com/blog/image-20241029160626400.png)

使用Typora创建`.md`文件后进行写作

![image-20241029161709945](https://liam123.oss-cn-hangzhou.aliyuncs.com/blog/image-20241029161709945.png)

## 文件配置

### Front-matter

Front-matter 是 markdown 文件最上方以 --- 分隔的区域，用于指定文件配置。

- Page Front-matter 用于**页面**配置
- Post Front-matter 用于**文章页**配置

#### Page Front-matter

```markdown
---
title:页面标题
date:页面创建日期
updated:页面更新日期
type:标签、分类和友情链接三个页面需要配置
comments:显示页面评论模块(默认true)
description:页面描述
keywords:页面关键词
top_img:页面顶部图片
---

```

#### Post Front-matter

```markdown
---
title:文章标题
date:文章创建日期
updated:文章更新日期
tags:文章标签
categories:文章分类
keywords:文章关键字
description:文章描述
top_img:文章顶部图片
comments:显示文章评论模块(默认 true)
cover:文章缩略图(如果没有设置 top_img,文章页顶部将显示缩略图，可设为 false/图片地址/留空)
---

```

自定义文章 Post Front-matter 配置项

在 `scaffolds` 文件夹下找到 `post.md` 文件进行修改

```markdown
---
# 标题
title: {{ title }}
date: {{ date }}
author: Liam
# 简述
img: 
# 文章顶部图片
top_img:
# 是否置顶
top: 
# 文章缩略图(如果没有设置 top_img,文章页顶部将显示缩略图，可设为 false/图片地址/留空)
cover:
# 轮播图
coverImg: 
# 标签
tags: 
# 分类
categories: 
# 是否加密文章，SHA256加密
password: 
---
```

#### 标签页、分类页、友链

> 此处使用标签页作为示例，其他页面设置与其类似
> 标签页文件名不一定是 tags, 例子中的 tags 只是一个示例
> 记得添加 type: "tags"

**创建步骤**

1. 前往你的 Hexo 的根目录
2. 输入 hexo new page tags
3. 你会找到 source/tags/index.md 这个文件
4. 修改这个文件

**参数说明**

- type	【必须】页面类型，必须为 tags
- orderby	【可选】排序方式 ：
- random - 随机排序 / name - 标签名字排序 / length - 标签数量排序
- order	【可选】排序次序： 1（升序），-1（降序）

#### 阿里云 + Picgo创建图床

1. 登录阿里云网站，进入工作台页面，搜索对象存储，进入该页面，然后点击bucket列表

![image-20241029171112732](https://liam123.oss-cn-hangzhou.aliyuncs.com/blog/image-20241029171112732.png)

2. 进入页面，点击创建bucket.

   - Bucket名称和地域必填。地域选择一个距离自己近一些的地方。

   - 读写权限选择为公共读，其余均默认

3. 在右上角头像处进入并创建一个key

![image-20241029171526199](https://liam123.oss-cn-hangzhou.aliyuncs.com/blog/image-20241029171526199.png)

4. 打开Picgo，点击图床设置，选择阿里云OSS，填写如下信息。

![image-20241029172026575](https://liam123.oss-cn-hangzhou.aliyuncs.com/blog/image-20241029172026575.png)

5. 结合Typora使用

![image-20241029172425118](https://liam123.oss-cn-hangzhou.aliyuncs.com/blog/image-20241029172425118.png)