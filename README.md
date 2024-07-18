# Ethereal

<div align="center"><img src="./docs/imgs/mockup.webp" alt="预览图" /></div>


<p align="center">fork 自 [wallleap/ethereal](https://github.com/wallleap/ethereal) </p>

<p align="center"><a href="#online-demo">查看预览</a> | <a href="./docs/guide.md">使用文档</a> | <a href="./docs/logs.md">更新日志</a></p>

## Features

:fairy: 基于 Vue 2 + Vue Router + Vuex 开发的 SPA 博客主题

:writing_hand: 使用 Vite 4 构建打包，开发体验更好，构建速度更快

:whale: 使用 GitHub Issue 编写文章，通过调用 GitHub API 获取文章数据

:octopus:	 内置 Twikoo 和 Utterances 评论系统，免费无广，方便后续迁移

:crab: 使用 GitHub Actions 自动构建部署，Token 仅用于构建，无需担心泄露

:sparkles: 使用 GitHub Pages / Vercel 部署在线访问，无需额外服务器


我不想用 twikoo 的评论功能，和 LeanCloud 的文章统计功能，直接干掉。 
还是要去掉的，不然会加载出错。  

Vite 加载 env 文件
```ini
.env                # 所有情况下都会加载
.env.local          # 所有情况下都会加载，但会被 git 忽略
.env.[mode]         # 只在指定模式下加载
.env.[mode].local   # 只在指定模式下加载，但会被 git 忽略
```



主题 Aurora 使用记录 https://myblog.wallleap.cn/#/post/5 
博客的具体部署参考作者的视频 https://www.bilibili.com/video/BV1Ru4y1R7wB    
 
主题颜色 就是莲花法轮 引用 suttacentral.net 的图标 
黄色 #F6C344  
褐色 #A4221A
菜单栏黄色 #BD8D30
徽章深黄色 #977125 


主题黄色 #c68b05
亮黄色 #f9b20f
亮透明色 rgba(249, 178, 15, 0.4)
暗黄色 #9e6f04

底部淡雅色 #f8ecde  
底部灰色文字 #675d4f 

## Online Demo

| 站点 | 链接 | 可访问性 |
|:----:|:----:|:----:|
| wallleap | <https://myblog.wallleap.cn> | ![online](https://img.shields.io/badge/online-true.svg) |


## 部署开发步骤 

### issues 仓库设置 
需要创建一个仓库，利用其 issues 存放博客的各种内容，我的仓库是 metanoia1989/blog    
再创建一个仓库，来托管这个博客的代码，我直接fork了作者的代码。  

存放issues仓库，需要创建两个label， About 用于写关于我的内容，Inspiration 用来放碎碎念。
然后各自创建一个 issue 关联这两个 label 即可。 

milestons 是用来存放文章分类的，创建好自己想设置的分类即可。 

然后创建 github token，授予这个仓库的 issues 只读访问权限。 

然后修改 .env.local 的 VITE_GITHUB_TOKEN，中间分隔出来 加上 `, ` 避免被 github 扫描检测出来。   

因为只有 issues 只读权限，即使泄露了，也无伤大雅。  

### 文章评论 

先创建一个存放评论的仓库 blog.comments ，然后访问 https://utteranc.es 点击安装 utterances app   
只让其访问评论仓库，然后勾选配置即可，勾选文章和评论映射【Issue title contains page title】     
然后拷贝最终生成的配置即可。    


## 加载部分issues

下载 github graphql public schema https://docs.github.com/en/graphql/overview/public-schema     

找上一个 issue和 下一个issue，除了增减 issueNumber 还真的没啥好办法 

github 没有提供根据id或者 createTime 筛选的参数。。。。只有游标，游标是提供给翻页用的。 

因为一个碎碎念也是一个issue，会跟文章混，所以最好碎碎念单独放一个仓库。 

