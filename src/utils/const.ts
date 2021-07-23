export const SIDEDATA = [
  {
    label: '前端',
    value: 'web',
    childList: [
      {
        label: '官网',
        value: 'w3c',
      },
      {
        label: '社区',
        value: 'bbs',
      },
    ],
  },
  {
    label: 'node',
    value: 'node',
    childList: [
      {
        label: '官网',
        value: 'w3c',
      },
    ],
  },
  {
    label: '数据库',
    value: 'sql',
    childList: [
      {
        label: '官网',
        value: 'w3c',
      },
    ],
  },
  {
    label: 'UI',
    value: 'ui',
    childList: [
      {
        label: '官网',
        value: 'w3c1',
      },
    ],
  },
]

interface Opage {
  title: string
  value: string
  icon: string
  childList: any[]
}

// {
//   name: "",
//   url: "",
//   icon: "",
//   desc: ""
// }

export const PAGEDATA: Opage[] = [
  {
    title: '我常用',
    value: '',
    icon: '',
    childList: [
      {
        name: "今日热榜",
        url: "https://tophub.today/c/news",
        icon: "https://file.ipadown.com/tophub/assets/images/logo.png",
        desc: "今日热榜提供各站热榜聚合：微信、今日头条、百度、知乎、V2EX、微博、贴吧、豆瓣、天涯、虎扑、Github、抖音...追踪全网热点、简单高效阅读。"
      },
      {
        name: "知乎",
        url: "https://www.zhihu.com/",
        icon: "https://static.zhihu.com/heifetz/assets/apple-touch-icon-152.a53ae37b.png",
        desc: "知乎，中文互联网高质量的问答社区和创作者聚集的原创内容平台"
      },
      {
        name: "简书",
        url: "https://www.jianshu.com/",
        icon: "https://cdn2.jianshu.io/assets/apple-touch-icons/57-a6f1f1ee62ace44f6dc2f6a08575abd3c3b163288881c78dd8d75247682a4b27.png",
        desc: "简书是一个优质的创作社区，在这里，你可以任性地创作，一篇短文、一张照片、一首诗、一幅画……我们相信，每个人都是生活中的艺术家，有着无穷的创造力。"
      }
    ],
  },
  {
    title: '社区',
    icon: '',
    value: '',
    childList: [
      {
        name: '掘金',
        url: 'https://juejin.cn/',
        icon: 'https://juejin.cn/favicons/favicon-32x32.png',
        desc: '掘金是一个帮助开发者成长的社区,是给开发者用的 Hacker News,给设计师用的 Designer News,和给产品经理用的 Medium。',
      },
      {
        name: 'segmentfault',
        url: 'https://segmentfault.com/',
        icon: 'https://cdn.segmentfault.com/r-740095dd/touch-icon.png',
        desc: 'SegmentFault,思否,开发者社区,技术新闻资讯,技术问答社区,技术博客专栏,技术笔记',
      },
      {
        name: '幕课',
        url: 'https://juejin.cn/',
        icon: 'https://www.imooc.com/static/img/common/touch-icon-iphone-retina.png',
        desc: '慕课网（IMOOC）是IT技能学习平台。慕课网(IMOOC)课程涉及JAVA、前端、Python、大数据等60类主流技术语言，覆盖了面试就业、职业成长、自我提升等需求场景，帮助用户实现从技能提升到岗位提升的能力闭环。',
      },
      {
        name: 'CSDN',
        url: 'https://www.csdn.net',
        icon: '',
        desc: 'CSDN是全球知名中文IT技术交流平台,创建于1999年,包含原创博客、精品问答、职业培训、技术论坛、资源下载等产品服务,提供原创、优质、完整内容的专业IT技术开发社区.',
      },
      {
        name: 'MDN',
        url: 'https://developer.mozilla.org/zh-CN/docs/orphaned/Web/JavaScript',
        icon: 'https://developer.mozilla.org/apple-touch-icon.0ea0fa02.png',
        desc: 'The MDN Web Docs site provides information about Open Web technologies including HTML, CSS, and APIs for both Web sites and progressive web apps.',
      },
    ],
  },
  {
    title: 'UI',
    value: '',
    icon: '',
    childList: [
      {
        name: 'TinyPNG',
        url: 'https://tinypng.com',
        icon: 'https://tinypng.com/images/apple-touch-icon.png',
        desc: 'TinyPNG – Compress PNG images while preserving transparency',
      },
      {
        name: 'iconfont',
        url: 'https://www.iconfont.cn/',
        icon: '',
        desc: 'iconfont-国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能。阿里巴巴体验团队倾力打造，设计和前端开发的便捷工具',
      },
      {
        name: '设计订阅 - 腾讯设计导航',
        url: 'https://idesign.qq.com',
        icon: '',
        desc: '腾讯设计导航云集高质量设计网站的内容，云集大量设计素材，随时随地访问收藏为设计灵感保驾护航。每天定时更新，网罗全网高逼格的设计站点，是最优秀的设计资讯网站。',
      },
    ],
  },
  {
    title: '新闻',
    value: '',
    icon: '',
    childList: [
      {
        name: "澎湃新闻",
        url: "https://www.thepaper.cn/",
        icon: "",
        desc: "澎湃是植根于中国上海的时政思想类互联网平台，以最活跃的原创新闻与最冷静的思想分析为两翼，是互联网技术创新与新闻价值传承的结合体，致力于问答式新闻与新闻追踪功能的实践，澎湃，澎湃新闻，澎湃新闻网，新闻与思想"
      },
      {
        name: "新京报",
        url: "https://www.bjnews.com.cn/",
        icon: "",
        desc: ""
      },
      {
        name: "大河网",
        url: "https://www.dahe.cn/",
        icon: "",
        desc: "大河网，河南省首家全国重点新闻网站，由中共河南省委宣传部主管，河南日报报业集团主办。大河网眼遇客户端，是河南最热闹的移动兴趣圈子和社交平台。"
      },
      {
        name: "观察者网",
        url: "https://www.guancha.cn/",
        icon: "",
        desc: "观察者网，致力于荟萃中外思想者精华，鼓励青年学人探索，建中西文化交流平台，为崛起中的精英提供决策参考。"
      },
      {
        name: "北京时间",
        url: "https://www.btime.com/",
        icon: "",
        desc: "北京时间是中国新型主流媒体，拥有广电级视频采集制作能力和国内一流的调查记者队伍，首创云记者和云媒体理念，以移动互联网理念和方式重构新闻生产传播全链条，成为中国传统媒体向融媒体转型的领导者。"
      },
      {
        name: "数英",
        url: "https://www.digitaling.com/",
        icon: "",
        desc: "数英网 DIGITALING是大中华区权威数字媒体及职业招聘社交平台,内容涵盖市场营销、广告传媒、创意设计、电商、移动互联网等各数字相关领域.致力于整合数字业界信息,受益于访问者数英网@DIGITALING"
      },
      {
        name: "数字尾巴",
        url: "https://www.dgtle.com/",
        icon: "",
        desc: "致力于分享美好数字生活体验，囊括你闻所未闻的最丰富数码资讯，触所未触最抢鲜产品评测"
      },
      {
        name: "36氪_让一部分人先看到未来",
        url: "https://36kr.com/",
        icon: "",
        desc: "36氪通过全面，独家的视角为用户深度剖析最前沿的资讯，致力于让一部分人先看到未来，内容涵盖快讯，科技，金融，投资，房产，汽车，互联网，股市，教育，生活，职场等，秉承着新商业媒体人的使命砥砺前行"
      },
    ]
  },
  {
    title: '面试',
    value: '',
    icon: '',
    childList: [
      {
        name: "前端进阶之道",
        url: "https://yuchengkai.cn/",
        icon: "",
        desc: "不容错过的前端进阶资料"
      },
      {
        name: "山月的琐碎博客记录",
        url: "https://shanyue.tech/",
        icon: "",
        desc: ""
      },
      {
        name: "前端开发博客",
        url: "http://caibaojian.com/c/weekly/",
        icon: "",
        desc: ""
      },
      {
        name: "FE-Interview",
        url: "https://blog.poetries.top/FE-Interview-Questions/",
        icon: "",
        desc: "前端进阶之路"
      }
    ]
  },

  {
    title: '知识',
    value: '',
    icon: '',
    childList: [
      {
        name: "网易公开课",
        url: "https://open.163.com/",
        icon: "",
        desc: "网易公开课汇集清华、北大、哈佛、耶鲁等世界名校共上千门课程，覆盖科学、经济、人文、哲学等22个领域，在这里你可以开拓视野看世界，获取有深度的好知识。"
      }
    ]
  },

  {
    title: 'UI框架',
    value: '',
    icon: '',
    childList: [
      {
        name: "Vue资源精选",
        url: "http://vue.awesometiny.com/",
        icon: "",
        desc: "vue资源精选-前端组件库资源-前端选型"
      },
      {
        name: "Element",
        url: "https://element.eleme.cn/",
        icon: "",
        desc: "Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库"
      },
      {
        name: "ant.design",
        url: "https://ant.design/index-cn",
        icon: "",
        desc: ""
      }
    ]
  },

  {
    title: '框架插件',
    value: '',
    icon: '',
    childList: [
      {
        name: "mockjs",
        url: "http://mockjs.com/",
        icon: "",
        desc: ""
      }
    ]
  },

  {
    title: '工具',
    value: '',
    icon: '',
    childList: [
      {
        name: "蓝湖",
        url: "https://lanhuapp.com/",
        icon: "",
        desc: ""
      }
    ]
  },
]
