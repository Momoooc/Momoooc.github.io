const bookmarkData = [
  {
    urlText: '百度',
    linkUrl: 'http://www.baidu.com/',
    linkTitle:
      '百度，中文搜索引擎，提供网页、图片、视频、新闻等搜索服务，是常用的信息检索入口。',
  },
  {
    urlText: 'Google',
    linkUrl: 'https://Google.com',
    linkTitle:
      'Google 谷歌，全球领先的搜索引擎，提供网页搜索、图片搜索、地图、Gmail等服务，是获取信息的强大工具。',
  },
  {
    urlText: 'GitHub',
    linkUrl: 'https://github.com/',
    linkTitle:
      'GitHub，全球最大的代码托管平台，面向开发者，提供代码托管、协作、版本控制（Git）等功能，是开源项目和团队协作的首选。',
  },
  {
    urlText: 'CPU 天梯图',
    linkUrl: 'https://tools.miku.ac/cpu_rank/',
    linkTitle:
      'CPU天梯图，用于评估和比较不同 CPU 性能的在线工具，帮助您选择合适的处理器型号。',
  },
  {
    urlText: 'GPU 天梯图',
    linkUrl: 'https://tools.miku.ac/gpu_rank/',
    linkTitle:
      'GPU天梯图，用于评估和比较不同 GPU 性能的在线工具，帮助您选择合适的显卡型号。',
  },
  {
    urlText: 'Cloudflare',
    linkUrl: 'https://dash.cloudflare.com/login',
    linkTitle:
      'Cloudflare 提供网站加速、安全和优化服务，用户可以通过此链接登录管理其域名和服务。cf赛博大善人',
  },
  {
    urlText: '123网盘',
    linkUrl: 'https://www.123pan.com/login?pageType=1',
    linkTitle: '123网盘，提供文件存储、同步和分享服务的云存储平台。',
  },
  {
    urlText: '阿里云盘',
    linkUrl: 'http://www.aliyundrive.com/drive/',
    linkTitle: '阿里云盘，阿里巴巴旗下的云存储服务，提供文件备份与管理。',
  },
  {
    urlText: '百度云',
    linkUrl: 'http://pan.baidu.com/disk/home#from=share_pan_logo',
    linkTitle: '百度网盘，百度提供的云存储服务，方便用户存储和分享文件。',
  },
  {
    urlText: '华为云空间',
    linkUrl: 'https://cloud.huawei.com/home#/',
    linkTitle: '华为云空间，华为提供的云存储服务，支持多设备数据同步。',
  },
  {
    urlText: 'iCloud',
    linkUrl: 'https://www.icloud.com.cn/#',
    linkTitle: 'Apple iCloud，苹果公司的云服务，用于存储照片、文件、备份等。',
  },
  {
    urlText: 'CSDN',
    linkUrl: 'http://www.csdn.net/',
    linkTitle: 'CSDN，中文开发者社区，提供IT技术文章、论坛、博客等服务。',
  },
  {
    urlText: '大学资源网',
    linkUrl: 'https://www.dxzy163.com/',
    linkTitle: '大学资源网，提供各类学习资源的视频网站。',
  },
  {
    urlText: '网易公开课',
    linkUrl: 'https://vip.open.163.com/center/myOrder',
    linkTitle: '网易旗下在线学习平台，提供国内外名校公开课及付费精品课程。',
  },
  {
    urlText: '菜鸟教程',
    linkUrl: 'https://www.runoob.com/',
    linkTitle: '一个提供 Web 技术、编程语言等基础教程的在线学习平台。',
  },
  {
    urlText: '五感法写作文',
    linkUrl:
      'https://www.bilibili.com/video/BV1KF411i7pj/?p=1&vd_source=4da93278542c2caddbe38330066950bf',
    linkTitle: '五感法写作文教学视频，B站上的一个视频，讲解如何运用五感写作。',
  },
  {
    urlText: '52破解',
    linkUrl: 'http://www.52pojie.cn/',
    linkTitle: '吾爱破解论坛，专注于软件安全与逆向工程的交流平台。',
  },
  {
    urlText: '恩山论坛',
    linkUrl: 'http://www.right.com.cn/forum/forum.php',
    linkTitle: '恩山无线论坛，专注于无线网络、路由器等技术交流的社区。',
  },
  {
    urlText: 'docker加速',
    linkUrl: 'https://do.nark.eu.org/',
    linkTitle: 'Docker 加速器，用于加速 Docker 镜像拉取速度的工具。',
  },
  {
    urlText: 'API易',
    linkUrl: 'https://www.apiyi.com/token',
    linkTitle: '提供各类 API 接口服务的平台，方便开发者集成和调用。',
  },
  {
    urlText: 'DeepSeek',
    linkUrl: 'https://chat.deepseek.com/',
    linkTitle:
      'DeepSeek 开发的 AI 对话模型，提供免费的智能问答和内容创作服务。',
  },
  {
    urlText: 'PDF24 Tools',
    linkUrl: 'https://tools.pdf24.org/zh/all-tools',
    linkTitle: '免费的在线 PDF 工具集，提供合并、拆分、转换等多种功能。',
  },
  {
    urlText: 'ProcessOn',
    linkUrl: 'https://www.processon.com/',
    linkTitle:
      'ProcessOn，免费的在线作图工具，支持流程图、思维导图、原型图等。',
  },
  {
    urlText: '哔哩哔哩',
    linkUrl: 'http://www.bilibili.com/',
    linkTitle: '哔哩哔哩bilibili，国内知名的年轻人文化社区和视频平台。',
  },
  {
    urlText: '网易云音乐',
    linkUrl: 'http://music.163.com/?from=infinity',
    linkTitle: '网易云音乐，提供音乐 streaming 和社交功能的音乐平台。',
  },
  {
    urlText: '抖音',
    linkUrl: 'https://www.douyin.com',
    linkTitle: '抖音短视频平台的官方网站。',
  },
  {
    urlText: 'Infinity游戏',
    linkUrl: 'https://games.infinitynewtab.com/',
    linkTitle: 'Infinity New Tab 扩展提供的在线小游戏平台。',
  },
  {
    urlText: '直播源采集',
    linkUrl: 'https://m3u.ibert.me/',
    linkTitle: '用于收集、整理或测试 IPTV 直播源（M3U格式）的工具网站。',
  },
  {
    urlText: '裁判文书网',
    linkUrl: 'https://wenshu.court.gov.cn/',
    linkTitle: '中国裁判文书网官方网站，公开法院裁判文书。',
  },
  {
    urlText: '法律数据库',
    linkUrl: 'https://flk.npc.gov.cn/',
    linkTitle: '国家法律法规数据库官方网站，由全国人大常委会提供。',
  },
  {
    urlText: '法院公告',
    linkUrl: 'https://rmfygg.court.gov.cn/',
    linkTitle: '人民法院公告网官方网站，发布法院相关公告信息。',
  },
  {
    urlText: '法院案例库',
    linkUrl: 'https://rmfyalk.court.gov.cn/',
    linkTitle: '人民法院案例库官方网站，收录各类司法案例。',
  },
  {
    urlText: '法院送达平台',
    linkUrl: 'https://songda.court.gov.cn/',
    linkTitle: '人民法院在线服务-电子送达平台官方网站。',
  },
  {
    urlText: 'NAS',
    linkUrl: 'http://192.168.2.201/',
    linkTitle: '服务器，私有网络环境下的服务器地址，用于本地服务访问。',
  },
  {
    urlText: '文件管理器',
    linkUrl: 'http://192.168.2.201:6081/',
    linkTitle: '部署在个人服务器上的简易 Web 文件管理器界面（本地实例）。',
  },
  {
    urlText: 'qBittorrent',
    linkUrl: 'http://192.168.2.201:8081/',
    linkTitle:
      'qBittorrent 的 Web UI 界面，用于远程管理 BT 下载任务（本地实例）。',
  },
  {
    urlText: 'v2rayA',
    linkUrl: 'http://192.168.2.201:20171/',
    linkTitle: 'V2Ray/Xray 代理客户端的图形化管理界面（本地实例）。',
  },
  {
    urlText: 'Grub-主题',
    linkUrl: 'https://github.com/RomjanHossain/Grub-Themes',
    linkTitle: 'Grub-Themes，GitHub 上的项目，提供各种 Grub 开机引导主题。',
  },
  {
    urlText: '海纳思官网',
    linkUrl: 'https://www.ecoo.top/docs/intro',
    linkTitle:
      '海纳思官网，可能是某公司或产品的官方网站，具体信息需要进一步了解。',
  },
  {
    urlText: '缙哥哥博客',
    linkUrl: 'https://www.dujin.org/',
    linkTitle: '缙哥哥博客，一个个人博客网站，分享技术、生活等内容。',
  },
  {
    urlText: 'Kimi AI',
    linkUrl: 'https://kimi.moonshot.cn/',
    linkTitle: 'Kimiai，一款国产AI助手，提供智能对话和问答服务。',
  },
  {
    urlText: '开源中国',
    linkUrl: 'http://www.oschina.net/',
    linkTitle:
      '开源中国，中国最大的开源技术社区，提供开源资讯、代码托管等服务。',
  },
  {
    urlText: '码云',
    linkUrl: 'http://git.oschina.net/',
    linkTitle:
      '码云 (Gitee)，中国本土的代码托管平台，为开发者提供代码管理服务。',
  },
  {
    urlText: '南京大学镜像站',
    linkUrl: 'https://mirrors.nju.edu.cn/',
    linkTitle: '南京大学开源镜像站，提供常用软件和操作系统镜像下载。',
  },
  {
    urlText: 'PEM资源分享',
    linkUrl: 'https://pan.xunlei.com/s/VOLgMnQdG7J1zcUOI85hS08AA1?pwd=kbbs',
    linkTitle: 'PEM资源分享，迅雷网盘',
  },
  {
    urlText: 'QQ邮箱',
    linkUrl: 'https://mail.qq.com',
    linkTitle: 'QQ邮箱，腾讯提供的电子邮件服务，用户广泛的邮箱选择。',
  },
  {
    urlText: '山东大学镜像',
    linkUrl: 'https://mirrors.sdu.edu.cn/#/about',
    linkTitle: '山东大学开源镜像站，提供软件和操作系统镜像加速下载服务。',
  },
  {
    urlText: 'WPS云文档',
    linkUrl: 'https://www.kdocs.cn/latest',
    linkTitle: 'WPS云文档，金山办公提供的在线文档协作平台，支持多人实时编辑。',
  },
  {
    urlText: '信创技术联盟',
    linkUrl: 'https://www.cnxclm.com/',
    linkTitle: '信创技术联盟，推动信息技术应用创新发展的组织。',
  },
  {
    urlText: '校园联合镜像',
    linkUrl: 'https://help.mirrors.cernet.edu.cn/',
    linkTitle: '中国教育科研网 CERNET 镜像站，为教育网用户提供快速镜像服务。',
  },
  {
    urlText: '油猴开发指南',
    linkUrl: 'https://learn.scriptcat.org/',
    linkTitle:
      '油猴 (Tampermonkey) 脚本开发指南，帮助用户学习编写油猴脚本的教程网站。',
  },
  {
    urlText: '远景论坛',
    linkUrl: 'http://bbs.pcbeta.com/',
    linkTitle: '远景论坛，电脑爱好者和系统玩家交流的平台。',
  },
  {
    urlText: '智慧教育平台',
    linkUrl: 'https://basic.smartedu.cn/',
    linkTitle: '国家智慧教育公共服务平台，提供教育资源和服务的官方平台。',
  },
  {
    urlText: '知乎',
    linkUrl: 'https://www.zhihu.com/',
    linkTitle: '知乎，中文互联网高质量的问答社区和知识分享平台。',
  },
  {
    urlText: '阿水AI',
    linkUrl: 'https://ai.rcouyi.com/home',
    linkTitle: '集成多种 AI 功能的在线工具平台，提供AI对话、写作等服务。',
  },
  {
    urlText: '冰灵云任务',
    linkUrl: 'https://www.bingly.cn/index.php?mod=user',
    linkTitle: '提供云端签到或其他自动化任务托管服务的平台。',
  },
  {
    urlText: 'ClouDNS',
    linkUrl: 'https://www.cloudns.net/index/lang/chs/',
    linkTitle: '提供 DNS 托管服务的网站，包括免费和付费套餐，支持动态 DNS。',
  },
  {
    urlText: 'Dify',
    linkUrl: 'http://192.168.2.201:1180',
    linkTitle: '开源的 LLM 应用开发平台，用于构建和部署 AI 应用（本地实例）。',
  },
  {
    urlText: '硅基流动',
    linkUrl: 'https://cloud.siliconflow.cn/i/PPLGXRjg',
    linkTitle: '硅基智能旗下 AI 云服务平台，提供 AI 模型推理、训练及算力服务。',
  },
  {
    urlText: 'iFixit维修',
    linkUrl: 'https://zh.ifixit.com/',
    linkTitle: '全球知名的免费维修指南社区，提供各种电子产品的拆解和维修教程。',
  },
  {
    urlText: 'qBittorrent',
    linkUrl: 'http://192.168.2.200:8081/',
    linkTitle:
      'qBittorrent 的 Web UI 界面，用于远程管理 BT 下载任务（本地实例）。',
  },
  {
    urlText: '青龙面板',
    linkUrl: 'http://192.168.2.201:15700/',
    linkTitle: '支持多种脚本的定时任务管理面板，常用于自动化任务（本地实例）。',
  },
  {
    urlText: 'serv00',
    linkUrl: 'https://www.serv00.com/',
    linkTitle: '提供免费的 SSH 账户和 Web 托管服务的平台，适合学习和小型项目。',
  },
  {
    urlText: 'Uptodown',
    linkUrl: 'https://cn.uptodown.com/',
    linkTitle:
      '提供各类软件和应用下载的平台，支持 Windows、Android、iOS 等多平台。',
  },
  {
    urlText: 'wifi',
    linkUrl:
      'https://lyingflat.info/2024/09/22/%e7%a0%b4%e8%a7%a3-%e3%80%8c%e9%9a%94%e5%a3%81%e8%80%81%e7%8e%8b%e3%80%8d%e7%9a%84wi-fi-%e5%af%86%e7%a2%bc/',
    linkTitle: '一篇关于kali破解 Wi-Fi 密码的技术讨论或教程文章。',
  },
  {
    urlText: '在线PS',
    linkUrl: 'https://www.nuanque.com/ps/',
    linkTitle: '一个功能强大的在线图片编辑工具，类似 PhotoShop。',
  },
  {
    urlText: '匿名电子邮件',
    linkUrl: 'https://temp-mail.org/zh/',
    linkTitle: '提供临时、一次性、匿名的电子邮件地址服务，用于接收邮件。',
  },
  {
    urlText: '匿名身份',
    linkUrl: 'https://www.ssnzk.com/',
    linkTitle: '生成虚拟身份信息（如姓名、地址、SSN等）的在线工具。',
  },
  {
    urlText: '刘明野的工具箱',
    linkUrl: 'https://tool.liumingye.cn/',
    linkTitle: '一个集合了多种实用在线工具的网站。',
  },
  {
    urlText: '图床',
    linkUrl: 'https://imgse.com/',
    linkTitle: '提供免费图片上传和托管服务的网站（图床）。',
  },
  {
    urlText: '智能家居',
    linkUrl: 'http://192.168.2.201:8123/',
    linkTitle:
      'Home Assistant 的 Web 界面，用于管理和控制智能家居设备（本地实例）。',
  },
  {
    urlText: 'AI前端',
    linkUrl: 'https://huggingface.co/spaces/enzostvs/deepsite',
    linkTitle:
      'Hugging Face Space 上的一个 AI 应用，可能用于生成网站前端代码或设计。',
  },
  {
    urlText: 'Ai文献挖掘',
    linkUrl: 'https://www.aminer.cn/',
    linkTitle: 'AMiner，一个专注于科技文献检索和挖掘的智能 AI 工具。',
  },
  {
    urlText: 'ChatExcel',
    linkUrl: 'https://www.chatexcel.com/#/',
    linkTitle: '通过自然语言对话操作 Excel 表格的 AI 工具。',
  },
  {
    urlText: 'CherryStudio',
    linkUrl: 'https://cherry-ai.com/download',
    linkTitle: 'Cherry AI 相关的应用或工具下载页面。',
  },
  {
    urlText: 'Chfs',
    linkUrl: 'http://iscute.cn/chfs',
    linkTitle:
      'CuteHttpFileServer (CHFS)，一个轻量级的 HTTP 文件共享服务器工具。',
  },
  {
    urlText: 'Everything',
    linkUrl: 'https://www.voidtools.com/zh-cn/downloads/',
    linkTitle: 'Voidtools 出品的 Everything 文件搜索工具官方下载页面。',
  },
  {
    urlText: '中立DNS',
    linkUrl: 'https://www.opennic.org/',
    linkTitle:
      'OpenNIC 项目，提供一个替代传统 ICANN DNS 根的、民主且中立的 DNS 服务。',
  },
  {
    urlText: '优选ip',
    linkUrl: 'https://vfarid.github.io/cf-ip-scanner/?max=30',
    linkTitle: '用于扫描 Cloudflare 优选 IP 的在线工具或脚本页面。',
  },
  {
    urlText: '免费域名',
    linkUrl: 'https://register.us.kg/',
    linkTitle: '提供免费 .us.kg 域名注册服务的网站。',
  },
  {
    urlText: '蓝点网',
    linkUrl: 'https://www.landiannews.com/',
    linkTitle: '蓝点网，关注科技资讯、软件应用、操作系统等的科技媒体。',
  },
  {
    urlText: '绿色软件下载',
    linkUrl: 'https://filehippo.com/zh/',
    linkTitle: 'FileHippo，提供各类免费软件下载的网站 (中文版)。',
  },
  {
    urlText: '诉讼服务网',
    linkUrl: 'https://ssfw.court.gov.cn/ssfww/',
    linkTitle: '中国法院诉讼服务网官方网站，提供在线立案、查询等服务。',
  },
  {
    urlText: '诉讼文书式样',
    linkUrl: 'https://www.court.gov.cn/susongyangshi/5.html',
    linkTitle: '最高人民法院官网提供的诉讼文书参考式样。',
  },
  {
    urlText: '诉讼资产网',
    linkUrl: 'https://www.rmfysszc.gov.cn/',
    linkTitle: '人民法院诉讼资产网官方网站，发布司法拍卖、变卖等信息。',
  },
  {
    urlText: '企信网',
    linkUrl: 'http://www.gsxt.gov.cn/index.html',
    linkTitle: '国家企业信用信息公示系统官方网站，查询企业工商信息。',
  },
  {
    urlText: '审判流程公开',
    linkUrl: 'https://splcgk.court.gov.cn',
    linkTitle: '中国审判流程信息公开网，查询案件审理进度。',
  },
  {
    urlText: '食品伙伴网',
    linkUrl: 'http://down.foodmate.net/wap/index.php?moduleid=23&itemid=42543',
    linkTitle: '食品伙伴网下载中心的特定资源页面（移动版链接）。',
  },
  {
    urlText: '手游源码网',
    linkUrl: 'https://www.syymw.com',
    linkTitle: '提供手机游戏源代码下载和交流的网站。',
  },
  {
    urlText: '红警地图',
    linkUrl: 'https://www.ra2.club/',
    linkTitle: '一个提供《红色警戒2》地图下载和交流的网站。',
  },
  {
    urlText: '红警下载',
    linkUrl: 'http://www.uc129.com/xiazai/',
    linkTitle: 'UC129 游戏网的红警相关资源下载区。',
  },
  {
    urlText: '华美系统',
    linkUrl: 'http://111.22.170.15:18080/login',
    linkTitle: '一个特定系统的登录入口（可能是内部或专用系统）。',
  },
  {
    urlText: '律师服务平台',
    linkUrl: 'https://lspt.court.gov.cn/',
    linkTitle: '中国律师服务平台，法院系统为律师提供的在线服务入口。',
  },
  {
    urlText: '律师管理系统',
    linkUrl: 'http://hunanlawyer.justice.org.cn:81/',
    linkTitle: '湖南省律师综合管理信息系统登录入口。',
  },
  {
    urlText: '律协集中培训',
    linkUrl: 'https://appgsoghlmo7596.pc.xiaoe-tech.com/',
    linkTitle: '基于小鹅通平台的律师协会在线集中培训系统。',
  },
  {
    urlText: '企标检索',
    linkUrl: 'https://www.qybz.org.cn/user/toSearch/',
    linkTitle: '企业标准信息公共服务平台，用于查询企业自我声明公开的标准。',
  },
  {
    urlText: '审判流程公开',
    linkUrl: 'https://splcgk.court.gov.cn',
    linkTitle: '中国审判流程信息公开网，查询案件审理进度。',
  },
  {
    urlText: '中国法律资源库',
    linkUrl: 'https://data.lawyee.net/',
    linkTitle: '北大法宝 (Lawyee) 法律数据库。',
  },
  {
    urlText: '中国检察网',
    linkUrl: 'https://www.12309.gov.cn/',
    linkTitle: '12309 中国检察网，检察机关统一对外综合服务平台。',
  },
  {
    urlText: '中国仲裁',
    linkUrl: 'http://www.china-arbitration.com/',
    linkTitle: '中国仲裁网，提供仲裁相关信息和服务的平台。',
  },
  {
    urlText: '专利检索',
    linkUrl: 'https://patents.qizhidao.com/',
    linkTitle: '企知道提供的专利信息检索平台。',
  },
  {
    urlText: '专利检索',
    linkUrl: 'https://patents.qizhidao.com/',
    linkTitle: '企知道提供的专利信息检索平台。',
  },
  {
    urlText: '路由器固件',
    linkUrl: 'https://fw.koolcenter.com/',
    linkTitle: 'KoolCenter 论坛提供的路由器固件下载站。',
  },
  {
    urlText: '字笑艺术字',
    linkUrl: 'https://fonthaha.com/edit',
    linkTitle: '一个在线艺术字生成器，允许用户创建和编辑多种字体样式。',
  },
  {
    urlText: 'Excalidraw草图',
    linkUrl: 'https://excalidraw.com/',
    linkTitle:
      '一个在线画草图白板工具，支持手绘风格的图形和图表绘制，方便团队协作和创意分享。',
  },
  {
    urlText: '码图编辑器',
    linkUrl: 'https://markdown.devtool.tech/app',
    linkTitle:
      '一个在线Markdown(.md)编辑器，支持实时预览和多种Markdown语法，方便用户撰写和格式化文本。',
  },
  {
    urlText: 'JPGHD',
    linkUrl: 'https://jpghd.com/',
    linkTitle:
      '一个在人工智能老照片无损修复，利用2025年最先进人工智能 AI 将老照片无损高清修复（支持老照片修复、老照片上色和魔法动态照片）',
  },
  {
    urlText: 'Nyaa',
    linkUrl: 'https://nyaa.si/',
    linkTitle:
      '一个以动漫和相关内容为主的BT种子分享网站，用户可以查找和下载各种类型的资源。',
  },
  {
    urlText: '微信网页版',
    linkUrl: 'https://wx.qq.com/',
    linkTitle:
      '微信的网页版，用户可以通过浏览器访问并使用微信的基本功能，如聊天、文件传输等。',
  },
  {
    urlText: '微博用户主页',
    linkUrl: 'https://weibo.com/u/5514680377/home?wvr=5',
    linkTitle: '用户在微博上的个人主页，展示其发布的内容、动态和互动。',
  },
  {
    urlText: '一网一匠',
    linkUrl: 'https://ywyj.cn/',
    linkTitle: '一网一匠极速版 - 一起发现有趣的新产品。',
  },
  {
    urlText: '微信公众平台',
    linkUrl: 'https://mp.weixin.qq.com/',
    linkTitle:
      '微信公众平台，为用户提供创建和管理公众号的服务，支持内容发布、用户互动等功能。',
  },
  {
    urlText: 'FOSSHub',
    linkUrl: 'https://www.fosshub.com/',
    linkTitle:
      '一个提供开源软件免费下载的平台，涵盖各种软件和工具，支持多种操作系统。',
  },
  {
    urlText: 'FreeFRP',
    linkUrl: 'https://freefrp.net/',
    linkTitle:
      '提供免费的FRP（反向代理）服务，帮助用户实现内网穿透，方便远程访问内网服务。',
  },
  {
    urlText: '法律图书网',
    linkUrl: 'http://www.law-lib.com/',
    linkTitle:
      '一个提供法律书籍、法律资料和在线学习资源的平台，致力于推广法律知识和法律研究。',
  },
  {
    urlText: '最高人民检察院法规库',
    linkUrl: 'https://www.spp.gov.cn/spp/flfgk/index.shtml',
    linkTitle:
      '最高人民检察院的法规库，提供有关法律、法规、政策及相关文件的查询和下载服务。',
  },
  {
    urlText: '执行信息公开网',
    linkUrl: 'https://zxgk.court.gov.cn/',
    linkTitle: '中国执行信息公开网，提供失信、限高',
  },
  {
    urlText: '国家自然科学基金委员会',
    linkUrl: 'https://kd.nsfc.cn/',
    linkTitle:
      '国家自然科学基金委员会官方网站，提供科研项目申报、管理和资助信息，为科研人员提供服务。',
  },
  {
    urlText: '岳阳市科技计划管理系统',
    linkUrl: 'http://47.122.45.246/site/#/home?login=true',
    linkTitle: '岳阳市科技计划管理系统。',
  },
  {
    urlText: '小霸王游戏机',
    linkUrl: 'https://www.yikm.net/',
    linkTitle:
      '小霸王，其乐无穷 。红白机，FC在线游戏，街机游戏，街机在线，NES games，NES games online，Super Mario',
  },
  {
    urlText: 'SVG 生成',
    linkUrl: 'https://iconce.com/',
    linkTitle: '在线 SVG 图标生成器',
  },
  {
    urlText: 'CloudFlareYes',
    linkUrl: 'https://stock.hostmonit.com/CloudFlareYes',
    linkTitle:
      'CloudFlare优质IP自动切换，全球主机监控 - 国内外VPS、云服务器的库存监控和优惠信息',
  },
];
