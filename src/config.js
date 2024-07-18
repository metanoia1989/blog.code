/**
 * 博客配置文件，没有说明的就是必填项
 * @type {Object}
 * @property {String} title         博客标题
 * @property {String} subtitle      博客副标题
 * @property {String} description   博客描述
 * @property {String} keywords      博客关键字
 * @property {String} logo          博客图标 180x180
 * @property {String} favicon16     博客图标 16x16
 * @property {String} favicon32     博客图标 32x32
 * @property {String} createdTime   博客创建时间
 * @property {String} icp           ICP 备案号
 * @property {String} icpLink       ICP 备案链接
 * @property {String} beian         [选填] 公安备案号 '京公网安备 00000000000000号'
 * @property {String} beianLink     [选填] 公安备案链接 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=00000000000000'
 * @property {String} username      GitHub 用户名
 * @property {String} repository    GitHub 仓库名
 * @property {String} friendsRepo   友链仓库名
 * @property {String} author        博客作者
 * @property {String} email         博客作者邮箱
 * @property {String} link          个人链接
 * @property {String} github        GitHub 链接
 * @property {String} name          友链名称
 * @property {String} url           友链链接
 * @property {String} avatar        友链头像
 * @property {String} desc          友链描述
 * @property {String} pageSize      文章列表每页显示文章数
 * @property {String} defaultCover  文章默认封面图
 */

export default {
  // 博客基础配置
  title: "进击的自媒体",
  subtitle: '自由人',
  description: 'Adam\'s blog',
  keywords: 'Adam Smith, personal blog, ',
  logo: './logo.svg',
  favicon16: './favicon.ico',
  favicon32: './favicon.ico',
  createdTime: '2024-07-17',
  icp: '天字第一号',
  icpLink: '//beian.miit.gov.cn/',
  beian: '',
  beianLink: '',
  // 关于页二维码
  alipay_qr: '//cdn.wallleap.cn/img/custom/donate/alipayQr.jpg',

  // GitHub Issues 配置
  username: 'metanoia1989',
  repository: 'blog', // 文章，文章跟碎碎念分开，保证获取上下篇文章时，不会查询到碎碎念  
  friendsRepo: 'blog.friends', // 友链 
  inspirationRepo: 'blog.thoughts', // 碎碎念 

  // 您的信息
  author: 'Adam Smith',
  email: 'sogaxili@gmail.com',
  link: '//blog.52laoge.com',
  github: '//github.com/metanoia1989',

  // 友链信息
  name: 'AdamSmith',
  url: '//blog.52laoge.com',
  avatar: '//pics.52laoge.com/images/19261473.jpeg',
  desc: 'Adam Smith\'s blog',

  // 文章相关
  pageSize: 12,
  defaultCover: '//pics.52laoge.com/images/default-cover.jpg',
  // 图片加载失败时显示，请将图片下载至你自己的存储空间，并使用自己的 CDN 引入
  errorImg: '//pics.52laoge.com/images/loading.gif',

  // 评论配置
  utterances: {
    code: `<script src="https://utteranc.es/client.js"
        repo="metanoia1989/blog.comments"
        issue-term="title"
        label="✨💬✨"
        theme="github-light"
        crossorigin="anonymous"
        async>
      </script>`,
  },

  twikoo: {
    src: '//cdn.staticfile.org/twikoo/1.6.22/twikoo.all.min.js',
  },

  // Clarity 微软数据分析服务
  clarity: 'jtdbmcusnq',
}
