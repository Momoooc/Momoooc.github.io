const bookmarkData = [
  {
    urlText: '百度',
    linkUrl: 'http://www.baidu.com/',
    linkTitle: '百度 Baidu 中文搜索引擎 网页 图片 视频 新闻',
  },
  {
    urlText: 'Google',
    linkUrl: 'https://Google.com',
    linkTitle: 'Google 谷歌 全球搜索引擎 网页 图片 地图 Gmail',
  },
  {
    urlText: 'QQ邮箱',
    linkUrl: 'https://mail.qq.com',
    linkTitle: 'QQ邮箱 腾讯 mail.qq.com 电子邮件服务',
  },
  {
    urlText: '执行公开',
    linkUrl: 'https://zxgk.court.gov.cn/',
    linkTitle: '中国执行信息公开网 失信被执行人查询 限高',
  },
  {
    urlText: '哔哩哔哩',
    linkUrl: 'http://www.bilibili.com/',
    linkTitle: '哔哩哔哩 bilibili B站 视频弹幕网站 年轻人社区',
  },
  {
    urlText: '网易音乐',
    linkUrl: 'http://music.163.com/?from=infinity',
    linkTitle: '网易云音乐 音乐平台 听歌 社交',
  },
  {
    urlText: 'CPU 天梯',
    linkUrl: 'https://tools.miku.ac/cpu_rank/',
    linkTitle: 'CPU天梯图 处理器性能排行 性能比较 选购参考',
  },
  {
    urlText: 'GPU 天梯',
    linkUrl: 'https://tools.miku.ac/gpu_rank/',
    linkTitle: 'GPU天梯图 显卡性能排行 性能比较 选购参考',
  },
  {
    urlText: 'GitHub',
    linkUrl: 'https://github.com/',
    linkTitle: 'GitHub 代码托管平台 Git 版本控制 开源项目 开发者协作',
  },
  {
    urlText: 'CF 面板',
    linkUrl: 'https://dash.cloudflare.com/login',
    linkTitle: 'Cloudflare CF 面板登录 网站加速 安全优化 CDN DNS',
  },
  {
    urlText: 'EdgeOne',
    linkUrl: 'https://www.tencentcloud.com/account/login',
    linkTitle: "腾讯云国际|境外服务器|免备案|CVM|轻量|一站式登录",
  },
  {
    urlText: '123网盘',
    linkUrl: 'https://www.123pan.com/login?pageType=1',
    linkTitle: '123网盘 云盘 文件存储 同步 分享',
  },
  {
    urlText: '阿里云盘',
    linkUrl: 'http://www.aliyundrive.com/drive/',
    linkTitle: '阿里云盘 阿里巴巴出品 云存储 文件备份 管理',
  },
  {
    urlText: '百度云盘',
    linkUrl: 'http://pan.baidu.com/disk/home#from=share_pan_logo',
    linkTitle: '百度网盘 百度云 文件存储 分享',
  },
  {
    urlText: '华为云盘',
    linkUrl: 'https://cloud.huawei.com/home#/',
    linkTitle: '华为云空间 华为云盘 多设备数据同步',
  },
  {
    urlText: '苹果云盘',
    linkUrl: 'https://www.icloud.com.cn/',
    linkTitle: 'Apple iCloud 苹果云盘 云服务 照片 文件 备份',
  },
  {
    urlText: 'CSDN',
    linkUrl: 'http://www.csdn.net/',
    linkTitle: 'CSDN 中文开发者社区 IT技术文章 博客 论坛',
  },
  {
    urlText: '大学资源',
    linkUrl: 'https://www.dxzy163.com/',
    linkTitle: '大学资源网 在线学习 视频教程',
  },
  {
    urlText: '网易公开',
    linkUrl: 'https://vip.open.163.com/center/myOrder',
    linkTitle: '网易公开课 在线学习平台 国内外名校公开课 精品课程',
  },
  {
    urlText: '菜鸟教程',
    linkUrl: 'https://www.runoob.com/',
    linkTitle: '菜鸟教程 Web技术 编程语言 基础教程 在线学习',
  },
  {
    urlText: '五感作文',
    linkUrl:
      'https://www.bilibili.com/video/BV1KF411i7pj/?p=1&vd_source=4da93278542c2caddbe38330066950bf',
    linkTitle: 'Bilibili B站 五感法写作文 写作技巧 教学视频',
  },
  {
    urlText: '吾爱破解',
    linkUrl: 'http://www.52pojie.cn/',
    linkTitle: '吾爱破解 52pojie 软件安全 逆向工程 论坛',
  },
  {
    urlText: '恩山论坛',
    linkUrl: 'http://www.right.com.cn/forum/forum.php',
    linkTitle: '恩山无线论坛 路由器 OpenWrt 无线网络 技术交流',
  },
  {
    urlText: '关于我们',
    linkUrl: 'https://github.com/Momoooc/Momoooc.github.io',
    linkTitle: '星标-站点灯塔 个人书签管理器 GitHub项目地址',
  },
  {
    urlText: 'API 易',
    linkUrl: 'https://api.apiyi.com/login',
    linkTitle: 'API 易 API接口服务 开发者工具',
  },
  {
    urlText: 'DeepSeek',
    linkUrl: 'https://chat.deepseek.com/',
    linkTitle: 'DeepSeek AI对话模型 智能问答 内容创作',
  },
  {
    urlText: 'PDF24',
    linkUrl: 'https://tools.pdf24.org/zh/all-tools',
    linkTitle: 'PDF24 免费在线PDF工具集 合并 拆分 转换',
  },
  {
    urlText: '在线作图',
    linkUrl: 'https://www.processon.com/',
    linkTitle: 'ProcessOn 免费在线作图工具 流程图 思维导图 原型图',
  },
  {
    urlText: '抖音',
    linkUrl: 'https://www.douyin.com',
    linkTitle: '抖音 Douyin 短视频 官方网站',
  },
  {
    urlText: 'Infinity',
    linkUrl: 'https://games.infinitynewtab.com/',
    linkTitle: 'Infinity New Tab 在线小游戏平台',
  },
  {
    urlText: '直播源',
    linkUrl: 'https://m3u.ibert.me/',
    linkTitle: 'IPTV直播源 M3U 整理测试工具',
  },
  {
    urlText: '裁判文书',
    linkUrl: 'https://wenshu.court.gov.cn/',
    linkTitle: '中国裁判文书网 法院判决书查询 官方',
  },
  {
    urlText: '法律库',
    linkUrl: 'https://flk.npc.gov.cn/',
    linkTitle: '国家法律法规数据库 全国人大 官方',
  },
  {
    urlText: '法院公告',
    linkUrl: 'https://rmfygg.court.gov.cn/',
    linkTitle: '人民法院公告网 法院公告查询 官方',
  },
  {
    urlText: '法院案例',
    linkUrl: 'https://rmfyalk.court.gov.cn/',
    linkTitle: '人民法院案例库 司法案例查询 官方',
  },
  {
    urlText: '法院送达',
    linkUrl: 'https://songda.court.gov.cn/',
    linkTitle: '人民法院电子送达平台 在线服务 官方',
  },
  {
    urlText: 'Grub主题',
    linkUrl: 'https://github.com/RomjanHossain/Grub-Themes',
    linkTitle: 'GitHub Grub-Themes 开机引导主题 美化',
  },
  {
    urlText: '海纳思',
    linkUrl: 'https://www.ecoo.top/docs/intro',
    linkTitle: '海纳思官网 产品介绍 公司信息',
  },
  {
    urlText: '缙哥哥',
    linkUrl: 'https://www.dujin.org/',
    linkTitle: '缙哥哥博客 技术生活分享',
  },
  {
    urlText: 'Kimi AI',
    linkUrl: 'https://kimi.moonshot.cn/',
    linkTitle: 'Kimi AI Moonshot 国产AI助手 智能对话 问答',
  },
  {
    urlText: '开源中国',
    linkUrl: 'http://www.oschina.net/',
    linkTitle: '开源中国 OSCHINA 开源技术社区 资讯 代码托管',
  },
  {
    urlText: '码云',
    linkUrl: 'http://git.oschina.net/',
    linkTitle: '码云 Gitee 代码托管平台 Git',
  },
  {
    urlText: '南大镜像',
    linkUrl: 'https://mirrors.nju.edu.cn/',
    linkTitle: '南京大学开源镜像站 NJU Mirrors 软件 系统 下载',
  },
  {
    urlText: 'PEM分享',
    linkUrl: 'https://pan.xunlei.com/s/VOLgMnQdG7J1zcUOI85hS08AA1?pwd=kbbs',
    linkTitle: 'PEM资源分享 迅雷网盘',
  },
  {
    urlText: '山大镜像',
    linkUrl: 'https://mirrors.sdu.edu.cn/#/about',
    linkTitle: '山东大学开源镜像站 SDU Mirrors 软件 系统 下载',
  },
  {
    urlText: 'WPS在线',
    linkUrl: 'https://www.kdocs.cn/latest',
    linkTitle: 'WPS云文档 金山文档 在线Office 协作编辑',
  },
  {
    urlText: '信创联盟',
    linkUrl: 'https://www.cnxclm.com/',
    linkTitle: '信创技术联盟 信息技术应用创新',
  },
  {
    urlText: '校园镜像',
    linkUrl: 'https://help.mirrors.cernet.edu.cn/',
    linkTitle: '中国教育科研网 CERNET 镜像站 教育网加速',
  },
  {
    urlText: '油猴开发',
    linkUrl: 'https://learn.scriptcat.org/',
    linkTitle: '油猴脚本开发指南 Tampermonkey Greasemonkey 教程',
  },
  {
    urlText: '远景论坛',
    linkUrl: 'http://bbs.pcbeta.com/',
    linkTitle: '远景论坛 PCBeta Windows macOS 系统玩家社区',
  },
  {
    urlText: '智慧教育',
    linkUrl: 'https://basic.smartedu.cn/',
    linkTitle: '国家智慧教育公共服务平台 在线教育资源 官方',
  },
  {
    urlText: '知乎',
    linkUrl: 'https://www.zhihu.com/',
    linkTitle: '知乎 问答社区 知识分享 发现更大的世界',
  },
  {
    urlText: '阿水 AI',
    linkUrl: 'https://ai.rcouyi.com/home',
    linkTitle: '阿水 AI 集成AI工具平台 对话 写作',
  },
  {
    urlText: '冰灵云',
    linkUrl: 'https://www.bingly.cn/index.php?mod=user',
    linkTitle: '冰灵云 云端签到 自动化任务托管',
  },
  {
    urlText: 'ClouDNS',
    linkUrl: 'https://www.cloudns.net/index/lang/chs/',
    linkTitle: 'ClouDNS DNS托管 免费动态DDNS',
  },
  {
    urlText: '硅基流动',
    linkUrl: 'https://cloud.siliconflow.cn/i/PPLGXRjg',
    linkTitle: '硅基流动 SiliconFlow AI云服务 模型推理 训练',
  },
  {
    urlText: 'iFixit',
    linkUrl: 'https://zh.ifixit.com/',
    linkTitle: 'iFixit 免费维修指南 电子产品拆解教程',
  },
  {
    urlText: 'serv00',
    linkUrl: 'https://www.serv00.com/',
    linkTitle: 'serv00 免费SSH账户 免费Web托管',
  },
  {
    urlText: 'Uptodown',
    linkUrl: 'https://cn.uptodown.com/',
    linkTitle: 'Uptodown 软件应用下载 多平台支持',
  },
  {
    urlText: 'WIFI破解',
    linkUrl:
      'https://lyingflat.info/2024/09/22/%e7%a0%b4%e8%a7%a3-%e3%80%8c%e9%9a%94%e5%a3%81%e8%80%81%e7%8e%8b%e3%80%8d%e7%9a%84wi-fi-%e5%af%86%e7%a2%bc/',
    linkTitle: 'Kali破解Wi-Fi密码 技术教程',
  },
  {
    urlText: 'PS在线',
    linkUrl: 'https://www.nuanque.com/ps/',
    linkTitle: '在线PS PhotoShop网页版 图片编辑工具',
  },
  {
    urlText: '匿名邮件',
    linkUrl: 'https://temp-mail.org/zh/',
    linkTitle: '临时邮箱 匿名邮件 一次性邮箱 Temp Mail',
  },
  {
    urlText: '匿名身份',
    linkUrl: 'https://www.ssnzk.com/',
    linkTitle: '虚拟身份信息生成器 姓名 地址 SSN',
  },
  {
    urlText: '明野工具',
    linkUrl: 'https://tool.liumingye.cn/',
    linkTitle: '刘明野工具箱 在线工具集合',
  },
 {
    urlText: 'AI前端',
    linkUrl: 'https://huggingface.co/spaces/enzostvs/deepsite',
    linkTitle: 'Hugging Face AI前端代码生成 DeepSite',
  },
  {
    urlText: 'AI文献',
    linkUrl: 'https://www.aminer.cn/',
    linkTitle: 'AMiner AI科技文献检索 挖掘',
  },
  {
    urlText: 'AI Excel',
    linkUrl: 'https://www.chatexcel.com/#/',
    linkTitle: 'ChatExcel AI操作Excel表格 自然语言',
  },
  {
    urlText: 'Cherry',
    linkUrl: 'https://cherry-ai.com/download',
    linkTitle: 'Cherry Studio AI对话客户端 多服务商集成',
  },
  {
    urlText: 'Chfs',
    linkUrl: 'http://iscute.cn/chfs',
    linkTitle: 'CuteHttpFileServer CHFS 轻量级HTTP文件共享',
  },
  {
    urlText: '文件搜索',
    linkUrl: 'https://www.voidtools.com/zh-cn/downloads/',
    linkTitle: 'Everything 文件搜索工具 Voidtools 官方下载',
  },
  {
    urlText: '中立DNS',
    linkUrl: 'https://www.opennic.org/',
    linkTitle: 'OpenNIC 中立DNS服务 ICANN替代',
  },
  {
    urlText: '优选ip',
    linkUrl: 'https://vfarid.github.io/cf-ip-scanner/?max=30',
    linkTitle: 'Cloudflare优选IP扫描工具 CF IP Scanner',
  },
  {
    urlText: '免费域名',
    linkUrl: 'https://register.us.kg/',
    linkTitle: '免费域名注册 .us.kg',
  },
  {
    urlText: '蓝点网',
    linkUrl: 'https://www.landiannews.com/',
    linkTitle: '蓝点网 科技资讯 软件应用 操作系统',
  },
  {
    urlText: '绿色软件',
    linkUrl: 'https://filehippo.com/zh/',
    linkTitle: 'FileHippo 免费软件下载 绿色软件',
  },
  {
    urlText: '诉讼服务',
    linkUrl: 'https://ssfw.court.gov.cn/ssfww/',
    linkTitle: '最高人民法院诉讼服务网 在线立案 查询 官方',
  },
  {
    urlText: '诉讼文书',
    linkUrl: 'https://www.court.gov.cn/susongyangshi/5.html',
    linkTitle: '最高法诉讼文书模板 参考式样 官方',
  },
  {
    urlText: '诉讼资产',
    linkUrl: 'https://www.rmfysszc.gov.cn/',
    linkTitle: '人民法院诉讼资产网 司法拍卖查询 官方',
  },
  {
    urlText: '企信网',
    linkUrl: 'http://www.gsxt.gov.cn/index.html',
    linkTitle: '国家企业信用信息公示系统 查公司 工商信息查询 官方',
  },
  {
    urlText: '审判流程',
    linkUrl: 'https://splcgk.court.gov.cn',
    linkTitle: '中国审判流程信息公开网 案件流程查询 官方',
  },
  {
    urlText: '食品伙伴',
    linkUrl: 'http://down.foodmate.net/wap/index.php',
    linkTitle: '食品伙伴网 食品行业标准 资料下载',
  },
  {
    urlText: '红警地图',
    linkUrl: 'https://www.ra2.club/',
    linkTitle: '红色警戒2 RA2 地图下载 交流',
  },
  {
    urlText: '红警下载',
    linkUrl: 'http://www.uc129.com/xiazai/',
    linkTitle: 'UC129 红警游戏下载',
  },
  {
    urlText: '华美系统',
    linkUrl: 'http://111.22.170.15:18080/login',
    linkTitle: '岳阳市检验检测中心业务管理平台 登录',
  },
  {
    urlText: '中国律师',
    linkUrl: 'https://passport.acla.org.cn/',
    linkTitle: '中国律师身份核验 律师在线服务入口',
  },
  {
    urlText: '湖南律师',
    linkUrl: 'http://hunanlawyer.justice.org.cn:81/',
    linkTitle: '湖南律师综合管理信息系统 登录',
  },
  {
    urlText: '企标检索',
    linkUrl: 'https://www.qybz.org.cn/user/toSearch/',
    linkTitle: '企业标准信息公共服务平台 企业标准查询',
  },
  {
    urlText: '法律库',
    linkUrl: 'https://data.lawyee.net/',
    linkTitle: '法意 中国法律资源库',
  },
  {
    urlText: '检察网',
    linkUrl: 'https://www.12309.gov.cn/',
    linkTitle: '12309中国检察网 检察服务平台',
  },
  {
    urlText: '中国仲裁',
    linkUrl: 'http://www.china-arbitration.com/',
    linkTitle: '中国仲裁网 仲裁信息服务',
  },
  {
    urlText: '专利检索',
    linkUrl: 'https://patents.qizhidao.com/',
    linkTitle: '企知道 专利信息检索平台',
  },
  {
    urlText: '路由固件',
    linkUrl: 'https://fw.koolcenter.com/',
    linkTitle: 'KoolCenter 路由器固件下载 梅林 OpenWrt',
  },
  {
    urlText: '字笑艺术',
    linkUrl: 'https://fonthaha.com/edit',
    linkTitle: '字笑哈哈 在线艺术字生成器',
  },
  {
    urlText: '在线白板',
    linkUrl: 'https://excalidraw.com/',
    linkTitle: 'Excalidraw 在线手绘风格白板 协作 分享',
  },
  {
    urlText: '码图编辑',
    linkUrl: 'https://markdown.devtool.tech/app',
    linkTitle: '在线Markdown编辑器 .md实时预览',
  },
  {
    urlText: 'JPG HD',
    linkUrl: 'https://jpghd.com/',
    linkTitle: 'JPGHD AI老照片修复 上色 动态照片',
  },
  {
    urlText: 'Nyaa',
    linkUrl: 'https://nyaa.si/',
    linkTitle: 'Nyaa 动漫 BT种子 分享站',
  },
  {
    urlText: '微信WEB',
    linkUrl: 'https://wx.qq.com/',
    linkTitle: '微信网页版 浏览器登录微信',
  },
  {
    urlText: '微博',
    linkUrl: 'https://weibo.com/',
    linkTitle: '新浪微博 社交媒体平台',
  },
  {
    urlText: '公众号',
    linkUrl: 'https://mp.weixin.qq.com/',
    linkTitle: '微信公众平台 公众号管理 内容发布',
  },
  {
    urlText: 'FOSSHub',
    linkUrl: 'https://www.fosshub.com/',
    linkTitle: 'FOSSHub 免费开源软件下载',
  },
  {
    urlText: 'FreeFRP',
    linkUrl: 'https://freefrp.net/',
    linkTitle: 'FreeFRP 免费内网穿透 反向代理',
  },
  {
    urlText: '法律图书',
    linkUrl: 'http://www.law-lib.com/',
    linkTitle: '法律图书馆 在线法律书籍 资料',
  },
  {
    urlText: '最高检',
    linkUrl: 'https://www.spp.gov.cn/spp/flfgk/index.shtml',
    linkTitle: '最高人民检察院法规库 法律文件查询',
  },
  {
    urlText: '国自然',
    linkUrl: 'https://kd.nsfc.cn/',
    linkTitle: '国家自然科学基金委员会 科研项目申报 管理',
  },
  {
    urlText: '岳阳科技',
    linkUrl: 'http://47.122.45.246/site/#/home?login=true',
    linkTitle: '岳阳市科技计划管理系统',
  },
  {
    urlText: '小霸王',
    linkUrl: 'https://www.yikm.net/',
    linkTitle: '小霸王 FC在线游戏 红白机 街机 超级玛丽',
  },
  {
    urlText: 'SVG 生成',
    linkUrl: 'https://iconce.com/',
    linkTitle: 'Iconce 在线SVG图标生成器',
  },
  {
    urlText: 'CF 优选',
    linkUrl: 'https://stock.hostmonit.com/CloudFlareYes',
    linkTitle: 'CloudFlare优选IP自动切换 Hostmonit主机监控',
  },
  {
    urlText: 'Claw云',
    linkUrl: 'https://ap-northeast-1.run.claw.cloud/',
    linkTitle: 'ClawCloud 爪云 高性能云服务 容器托管',
  },
  {
    urlText: '南大测速',
    linkUrl: 'https://test.nju.edu.cn/',
    linkTitle: '南京大学测速站 网络速度测试',
  },
  {
    urlText: '搞快点',
    linkUrl: 'https://github.com/gkd-kit/gkd',
    linkTitle: 'GKD 安卓自动点击器 订阅规则 快照审查',
  },
  {
    urlText: '洛雪音源',
    linkUrl: 'https://github.com/pdone/lx-music-source',
    linkTitle: '洛雪音乐源 LX Music Source',
  },
  {
    urlText: 'lx音乐',
    linkUrl: 'https://github.com/lyswhut/lx-music-desktop',
    linkTitle: 'LX Music 洛雪音乐桌面版',
  },
  {
    urlText: 'Gemini',
    linkUrl: 'https://ai.125925.xyz/',
    linkTitle: 'Gemini Balance Google Gemini API代理 负载均衡',
  },
  {
    urlText: 'MS Store',
    linkUrl: 'https://apps.microsoft.com/home?hl=zh-CN&gl=CN',
    linkTitle: 'Microsoft Store 微软官方应用商店',
  },
  {
    urlText: 'MS商店',
    linkUrl: 'https://store.rg-adguard.net/',
    linkTitle: '微软商店离线下载 .appxbundle安装包',
  },
  {
    urlText: '私人图床',
    linkUrl: 'https://tc.125925.xyz/',
    linkTitle: 'CloudFlare开源图床 文件托管解决方案',
  },
  {
    urlText: '免费VPS',
    linkUrl: 'http://hostingem.ru/',
    linkTitle: 'HostingEM 免费VPS PHP MySQL 域名托管',
  },
  {
    urlText: '打字训练',
    linkUrl: 'https://qwerty.kaiyi.cool/',
    linkTitle: 'Qwerty打字训练 记单词 练指法',
  },
  {
    urlText: 'MX 影院',
    linkUrl: 'https://tv.125925.xyz/',
    linkTitle: 'MX影院 免费在线影院 私人搭建',
  },
  {
    urlText: 'Cron生成',
    linkUrl: 'https://cron.ciding.cc/',
    linkTitle: 'Cron表达式在线生成器 定时任务',
  },
  {
    urlText: '小熊工具',
    linkUrl: 'https://xx.ciding.cc/',
    linkTitle: '小熊在线工具箱 JSON格式化 加解密 编码',
  },
  {
    urlText: '蚂蚁压图',
    linkUrl: 'https://ant.ciding.cc/',
    linkTitle: '蚂蚁图片压缩 在线图像压缩',
  },
  {
    urlText: '视频去印',
    linkUrl: 'https://video.ciding.cc/',
    linkTitle: '在线视频去水印 支持抖音 快手',
  },
  {
    urlText: 'PARSEC',
    linkUrl: 'https://parsec.app/',
    linkTitle: 'Parsec 低延迟远程桌面 游戏串流',
  },
  {
    urlText: '爱快云',
    linkUrl: 'https://yun.ikuai8.com/',
    linkTitle: 'iKuai 爱快云平台 路由器远程管理',
  },
  {
    urlText: "Aiven",
    linkUrl: "https://console.aiven.io/",
    linkTitle: "Aiven云控制台|Kafka PostgreSQL Redis托管|多云运维",
  },
  {
    urlText: '麻雀云',
    linkUrl: 'https://help.niulinkcloud.cn/',
    linkTitle: '麻雀云帮助中心,麻雀云利用PCDN赚钱的工具',
  },
  {
    urlText: 'DK HUB',
    linkUrl: 'https://hub.docker.com/',
    linkTitle: "DockerHub|镜像仓库|官方镜像|容器仓库|CI/CD",
  },
  {
    urlText: "学而思编程",
    linkUrl: "https://code.xueersi.com/scratch/index.html",
    linkTitle: "Scratch图形化编程|学而思少儿编程|在线IDE|STEAM教育",
  },
  {
    urlText: "SKR BT",
    linkUrl: "https://skrfabu.org/",
    linkTitle: "skrBT下载|磁力搜索|种子聚合|影视资源",
  },
  {
    urlText: "天堂磁力",
    linkUrl: "https://tt6.ttcl.cc/",
    linkTitle: "天堂磁力搜索|BT种子|影视资源",
  },
  {
    urlText: "AnyBT",
    linkUrl: "https://anybt.eth.limo/",
    linkTitle: "ETH.limo去中心化BT搜索|磁力聚合",
  },
  {
    urlText: "BT联盟",
    linkUrl: "https://btlm.info/",
    linkTitle: "BT联盟磁力|影视音乐资源|BT种子",
  },
  {
    urlText: "音范丝",
    linkUrl: "https://www.yinfans.me/",
    linkTitle: "4K蓝光电影下载|高码原盘|杜比视界|字幕特效|BT种子磁力",
  },

  {
    urlText: "RARBG",
    linkUrl: "https://rargb.to/",
    linkTitle: "RARBG镜像|高清电影种子|剧集|游戏软件|BT种子磁力",
  },
  {
    urlText: "ZeroTier",
    linkUrl: "https://www.zerotier.com/",
    linkTitle: "ZeroTier内网穿透|虚拟局域网|远程组网|P2P",
  },
  {
    urlText: "TG网页版",
    linkUrl: "https://web.telegram.org/a/",
    linkTitle: "Telegram网页登录|即时加密聊天|多端同步|频道机器人",
  },
  {
    urlText: "Ventoy",
    linkUrl: "https://www.ventoy.net/cn/index.html",
    linkTitle: "Ventoy多系统启动盘|ISO直拷|U盘装机|开源免费",
  },
  {
    urlText: "IT狗",
    linkUrl: "https://www.itdog.cn/",
    linkTitle: "ITDOG网络检测|ping/dns/路由追踪|备案黑名单|站长工具箱",
  },
  {
    urlText: "传播检查",
    linkUrl: "https://dnschecker.org/",
    linkTitle: "全球DNS传播查询|多节点检测|A/AAAA/MX/TXT|即时刷新",
  },
  {
    urlText: "GLaDOS",
    linkUrl: "https://glados.rocks/console",
    linkTitle: "GLaDOS控制台|机场订阅|流量续费|节点状态|Clash/V2Ray",
  },
  {
    urlText: "昔映NAS",
    linkUrl: "https://web.xiyingnas.com/login",
    linkTitle: "昔映NAS登录|私有云|远程下载|影音中心|离线下载",
  },
  {
    urlText: "FOFA",
    linkUrl: "https://fofa.info",
    linkTitle: "FOFA网络空间测绘|资产搜索|漏洞扫描|IP域名测绘",
  },
  {
    urlText: "证件照",
    linkUrl: "https://id-photo.cn",
    linkTitle: "证件照在线生成|一键换底色|AI美颜|冲印裁剪",
  },
  {
    urlText: "照片打印",
    linkUrl: "https://photo.lizhe.org",
    linkTitle: "李小蜗证件照打印排版",
  },
  {
    urlText: "知网",
    linkUrl: "https://www.cnki.net",
    linkTitle: "中国知网CNKI|论文查重|学术期刊|硕博论文|文献下载",
  },
  {
    urlText: "Z2H字帖",
    linkUrl: "https://z2h.cn",
    linkTitle: "Z2H字帖|超级好用的字帖生成工具|这是一个优雅实用的在线字帖生成工具，可轻松自定义所需字帖，支持汉字和英文任意排版、灵活设置描红样式和大小、自选字体、生成控笔练习字帖、导出图片等。",
  },
  {
    urlText: "软仓",
    linkUrl: "https://www.ruancang.net",
    linkTitle: "软仓是一个集合大型专业软件的导航网站，提供软件介绍和软件安装教程，包含Adoebe系列软件、AutoCad系列软件、3dsMax、达芬奇软件、CINEMA 4D、matlab软件等。",
  },
  {
    urlText: "图表魔方",
    linkUrl: "https://chartcube.alipay.com",
    linkTitle: "ChartCube 图表魔方|在线图表制作工具 拖拽之间快速搞定图表制作",
  },
  {
    urlText: "闪剪",
    linkUrl: "https://app.shanjian.tv",
    linkTitle: "闪剪,闪剪数字人,闪剪智能,数字人定制,数字人分身,声音复刻,形象克隆,ai,数字人,ai数字人,AI数字人一键成片,照片说话,照片数字人,克隆人分身,数字人直播,数字人软件,无人直播,视频数字人,闪剪直播切片,趣推,严华培,闪剪APP,闪剪要钱吗,闪剪破解版,闪剪下载,闪剪免费,闪剪ai数字人,闪剪教程,数字克隆人,ai矩阵,虚拟克隆人,虚拟人,智能剪辑,批量剪辑,,虚拟形象,短视频制作,微剪辑,配音,配音神器,自媒体营销助手,自媒体创作,自媒体必备,口播,直播切片,短视频,复活亲人,声音复刻,形象克隆,声音克隆,AI智能成片,一键生成,ai工具,小和尚，ai视频",
  },
  {
    urlText: "装饰神器",
    linkUrl: "https://planner5d.com/",
    linkTitle: "Planner5D|装饰神器|一键生成装修图纸",
  },
  {
    urlText: "文生图",
    linkUrl: "https://text2img.125925.xyz/",
    linkTitle: "基于 Cloudflare AI 的在线文生图服务",
  },
  {
    urlText: "网上立案",
    linkUrl: "https://zxfw.court.gov.cn/",
    linkTitle: "人民法院在线服务网登录页面，用于网上立案",
  },
  {
    urlText: "查询律师",
    linkUrl: "https://credit.acla.org.cn/",
    linkTitle: "全国律师执业诚信信息公示平台，律师、公示、找律师、查律师、找律所、查律所、找律师事务所、查律师事务所",
  },
  {
    urlText: "Markdown",
    linkUrl: "https://md.doocs.org/",
    linkTitle: "Wechat Markdown Editor | 一款高度简洁的微信 Markdown 编辑器",
  },
  {
    urlText: "扫描全能",
    linkUrl: "https://www.camscanner.com/login",
    linkTitle: "扫描全能王 - 文字图片扫描识别, PDF转Word, 文档格式转换, 在线编辑器",
  },
  {
    urlText: "过码平台",
    linkUrl: "https://yescaptcha.com/i/kwymsQ",
    linkTitle: "Yes, Captcha|基于机器学习的图像识别服务、自动识别验证码",
  },
  {
    urlText: "MinerU",
    linkUrl: "https://huggingface.co/spaces/opendatalab/MinerU",
    linkTitle: "MinerU是一款将PDF转化为机器可读格式的工具（如markdown、json），可以很方便地抽取为任意格式。",
  },
  {
    urlText: "电子税务",
    linkUrl: "https://etax.chinatax.gov.cn",
    linkTitle: "自然人电子税务局|个人所得税、专项附加扣除信息填报查询、纳税记录开具、年度汇算",
  },
  {
    urlText: "人社平台",
    linkUrl: "https://www.12333.gov.cn/",
    linkTitle: "中华人民共和国人力资源和社会保障部|社保业务办理查询",
  },
];
