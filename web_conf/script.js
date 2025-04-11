        // 网站数据
        const websites = [
            // ================== 搜索类 ==================
            { name: "百度", url: "http://www.baidu.com/", desc: "百度，全球最大的中文搜索引擎，提供全面的搜索服务。", color: "bg-gray" },
            { name: "Google", url: "https://Google.com", desc: "谷歌，搜索引擎，全球使用最广泛的搜索引擎，提供强大的信息检索能力。", color: "bg-gray" },
            { name: "GitHub", url: "https://github.com/", desc: "GitHub，全球最大的代码托管平台，开发者协作和版本控制的首选。", color: "bg-green" },
            { name: "CPU 天梯图", url: "https://tools.miku.ac/cpu_rank/", desc: "CPU Rank 是一个在线工具，用于评估和比较不同 CPU 的性能，帮助用户选择合适的处理器。", color: "bg-yellow" },
            { name: "GPU 天梯图", url: "https://tools.miku.ac/gpu_rank/", desc: "GPU Rank 是一个在线工具，用于评估和比较不同 GPU 的性能，帮助用户选择合适的显卡。", color: "bg-green" },
            { name: "Cloudflare", url: "https://dash.cloudflare.com/login", desc: "Cloudflare 提供网站加速、安全和优化服务，用户可以通过此链接登录管理其域名和服务。cf赛博大善人", color: "bg-yellow" },
            { name: "123网盘", url: "https://www.123pan.com/login?pageType=1", desc: "123网盘，提供文件存储、同步和分享服务的云存储平台。", color: "bg-indigo" },
            { name: "阿里云盘", url: "http://www.aliyundrive.com/drive/", desc: "阿里云盘，阿里巴巴旗下的云存储服务，提供文件备份与管理。", color: "bg-indigo" },
            { name: "百度云", url: "http://pan.baidu.com/disk/home#from=share_pan_logo", desc: "百度网盘，百度提供的云存储服务，方便用户存储和分享文件。", color: "bg-indigo" },
            { name: "华为云空间", url: "https://cloud.huawei.com/home#/", desc: "华为云空间，华为提供的云存储服务，支持多设备数据同步。", color: "bg-indigo" },
            { name: "Apple", url: "https://www.icloud.com.cn/#", desc: "iCloud，苹果公司的云服务，用于存储照片、文件、备份等。", color: "bg-indigo" },
            { name: "CSDN", url: "http://www.csdn.net/", desc: "CSDN，中文开发者社区，提供IT技术文章、论坛、博客等服务。", color: "bg-green" },
            { name: "大学资源网", url: "https://www.dxzy163.com/", desc: "大学资源网，提供各类大学学习资源的网站。", color: "bg-teal" },
            { name: "网易公开课", url: "https://vip.open.163.com/center/myOrder", desc: "网易旗下在线学习平台，提供国内外名校公开课及付费精品课程。", color: "bg-yellow" },
            { name: "菜鸟教程", url: "https://www.runoob.com/", desc: "一个提供 Web 技术、编程语言等基础教程的在线学习平台。", color: "bg-green" },
            { name: "五感法写作文", url: "https://www.bilibili.com/video/BV1KF411i7pj/?p=1&vd_source=4da93278542c2caddbe38330066950bf", desc: "五感法写作文教学视频，B站上的一个视频，讲解如何运用五感写作。", color: "bg-yellow" },
            { name: "52破解", url: "http://www.52pojie.cn/", desc: "吾爱破解论坛，专注于软件安全与逆向工程的交流平台。", color: "bg-orange" },
            { name: "恩山论坛", url: "http://www.right.com.cn/forum/forum.php", desc: "恩山无线论坛，专注于无线网络、路由器等技术交流的社区。", color: "bg-orange" },
            { name: "docker加速", url: "https://do.nark.eu.org/", desc: "Docker 加速器，用于加速 Docker 镜像拉取速度的工具。", color: "bg-cyan" },
            { name: "API易", url: "https://www.apiyi.com/token", desc: "提供各类 API 接口服务的平台，方便开发者集成和调用。", color: "bg-cyan" },
            { name: "DeepSeek", url: "https://chat.deepseek.com/", desc: "DeepSeek 开发的 AI 对话模型，提供免费的智能问答和内容创作服务。", color: "bg-purple" },
            { name: "PDF24 Tools", url: "https://tools.pdf24.org/zh/all-tools", desc: "免费的在线 PDF 工具集，提供合并、拆分、转换等多种功能。", color: "bg-orange" },
            { name: "ProcessOn", url: "https://www.processon.com/", desc: "ProcessOn，免费的在线作图工具，支持流程图、思维导图、原型图等。", color: "bg-indigo" },
            { name: "B哔哩哔哩", url: "http://www.bilibili.com/", desc: "哔哩哔哩bilibili，国内知名的年轻人文化社区和视频平台。", color: "bg-pink" },
            { name: "网易云音乐", url: "http://music.163.com/?from=infinity", desc: "网易云音乐，提供音乐 streaming 和社交功能的音乐平台。", color: "bg-red" },
            { name: "抖音", url: "https://www.douyin.com", desc: "抖音短视频平台的官方网站。", color: "bg-pink" },
            { name: "Infinity游戏", url: "https://games.infinitynewtab.com/", desc: "Infinity New Tab 扩展提供的在线小游戏平台。", color: "bg-red" },
            { name: "直播源采集", url: "https://m3u.ibert.me/", desc: "用于收集、整理或测试 IPTV 直播源（M3U格式）的工具网站。", color: "bg-red" },
            { name: "裁判文书网", url: "https://wenshu.court.gov.cn/", desc: "中国裁判文书网官方网站，公开法院裁判文书。", color: "bg-red" },
            { name: "法律数据库", url: "https://flk.npc.gov.cn/", desc: "国家法律法规数据库官方网站，由全国人大常委会提供。", color: "bg-red" },
            { name: "法院公告", url: "https://rmfygg.court.gov.cn/", desc: "人民法院公告网官方网站，发布法院相关公告信息。", color: "bg-red" },
            { name: "法院案例库", url: "https://rmfyalk.court.gov.cn/", desc: "人民法院案例库官方网站，收录各类司法案例。", color: "bg-red" },
            { name: "法院送达平台", url: "https://songda.court.gov.cn/", desc: "人民法院在线服务-电子送达平台官方网站。", color: "bg-red" },
            { name: "NAS", url: "http://192.168.2.201/", desc: "服务器，私有网络环境下的服务器地址，用于本地服务访问。", color: "bg-gray" },
            { name: "文件管理器", url: "http://192.168.2.201:6081/", desc: "部署在个人服务器上的简易 Web 文件管理器界面（本地实例）。", color: "bg-gray" },
            { name: "qBittorrent", url: "http://192.168.2.201:8081/", desc: "qBittorrent 的 Web UI 界面，用于远程管理 BT 下载任务（本地实例）。", color: "bg-gray" },
            { name: "v2rayA", url: "http://192.168.2.201:20171/", desc: "V2Ray/Xray 代理客户端的图形化管理界面（本地实例）。", color: "bg-dark-blue" },
            { name: "Grub-主题", url: "https://github.com/RomjanHossain/Grub-Themes", desc: "Grub-Themes，GitHub 上的项目，提供各种 Grub 开机引导主题。", color: "bg-purple" },
            { name: "海纳思官网", url: "https://www.ecoo.top/docs/intro", desc: "海纳思官网，可能是某公司或产品的官方网站，具体信息需要进一步了解。", color: "bg-blue" },
            { name: "缙哥哥博客", url: "https://www.dujin.org/", desc: "缙哥哥博客，一个个人博客网站，分享技术、生活等内容。", color: "bg-yellow" },
            { name: "Kimi AI", url: "https://kimi.moonshot.cn/", desc: "Kimiai，一款国产AI助手，提供智能对话和问答服务。", color: "bg-purple" },
            { name: "开源中国", url: "http://www.oschina.net/", desc: "开源中国，中国最大的开源技术社区，提供开源资讯、代码托管等服务。", color: "bg-green" },
            { name: "码云", url: "http://git.oschina.net/", desc: "码云 (Gitee)，中国本土的代码托管平台，为开发者提供代码管理服务。", color: "bg-green" },
            { name: "南京大学镜像", url: "https://mirrors.nju.edu.cn/", desc: "南京大学开源镜像站，提供常用软件和操作系统镜像下载。", color: "bg-teal" },
            { name: "PEM资源分享", url: "https://www.kdocs.cn/l/chcQbBlZw25g", desc: "PEM资源分享，可能是在金山文档 (kdocs.cn) 上分享的 PEM 格式资源，具体内容需打开链接查看。", color: "bg-orange" },
            { name: "QQ邮箱", url: "https://mail.qq.com", desc: "QQ邮箱，腾讯提供的电子邮件服务，用户广泛的邮箱选择。", color: "bg-cyan" },
            { name: "山东大学镜像", url: "https://mirrors.sdu.edu.cn/#/about", desc: "山东大学开源镜像站，提供软件和操作系统镜像加速下载服务。", color: "bg-teal" },
            { name: "WPS云文档", url: "https://www.kdocs.cn/latest", desc: "WPS云文档，金山办公提供的在线文档协作平台，支持多人实时编辑。", color: "bg-blue" },
            { name: "信创技术联盟", url: "https://www.cnxclm.com/", desc: "信创技术联盟，推动信息技术应用创新发展的组织。", color: "bg-blue" },
            { name: "校园联合镜像", url: "https://help.mirrors.cernet.edu.cn/", desc: "中国教育科研网 CERNET 镜像站，为教育网用户提供快速镜像服务。", color: "bg-teal" },
            { name: "油猴开发指南", url: "https://learn.scriptcat.org/", desc: "油猴 (Tampermonkey) 脚本开发指南，帮助用户学习编写油猴脚本的教程网站。", color: "bg-yellow" },
            { name: "远景论坛", url: "http://bbs.pcbeta.com/", desc: "远景论坛，电脑爱好者和系统玩家交流的平台。", color: "bg-orange" },
            { name: "智慧教育平台", url: "https://basic.smartedu.cn/", desc: "国家智慧教育公共服务平台，提供教育资源和服务的官方平台。", color: "bg-teal" },
            { name: "知乎", url: "https://www.zhihu.com/", desc: "知乎，中文互联网高质量的问答社区和知识分享平台。", color: "bg-blue" },
            { name: "阿水AI", url: "https://ai.rcouyi.com/home", desc: "集成多种 AI 功能的在线工具平台，提供AI对话、写作等服务。", color: "bg-purple" },
            { name: "冰灵云任务", url: "https://www.bingly.cn/index.php?mod=user", desc: "提供云端签到或其他自动化任务托管服务的平台。", color: "bg-cyan" },
            { name: "ClouDNS", url: "https://www.cloudns.net/index/lang/chs/", desc: "提供 DNS 托管服务的网站，包括免费和付费套餐，支持动态 DNS。", color: "bg-teal" },
            { name: "Dify", url: "http://192.168.2.201:1180", desc: "开源的 LLM 应用开发平台，用于构建和部署 AI 应用（本地实例）。", color: "bg-purple" },
            { name: "硅基流动", url: "https://cloud.siliconflow.cn/i/PPLGXRjg", desc: "硅基智能旗下 AI 云服务平台，提供 AI 模型推理、训练及算力服务。", color: "bg-purple" },
            { name: "iFixit维修", url: "https://zh.ifixit.com/", desc: "全球知名的免费维修指南社区，提供各种电子产品的拆解和维修教程。", color: "bg-orange" },
            { name: "qBittorrent", url: "http://192.168.2.200:8081/", desc: "qBittorrent 的 Web UI 界面，用于远程管理 BT 下载任务（本地实例）。", color: "bg-gray" },
            { name: "青龙面板", url: "http://192.168.2.201:15700/", desc: "支持多种脚本的定时任务管理面板，常用于自动化任务（本地实例）。", color: "bg-dark-blue" },
            { name: "serv00", url: "https://www.serv00.com/", desc: "提供免费的 SSH 账户和 Web 托管服务的平台，适合学习和小型项目。", color: "bg-blue" },
            { name: "Uptodown", url: "https://cn.uptodown.com/", desc: "提供各类软件和应用下载的平台，支持 Windows、Android、iOS 等多平台。", color: "bg-green" },
            { name: "wifi", url: "https://lyingflat.info/2024/09/22/%e7%a0%b4%e8%a7%a3-%e3%80%8c%e9%9a%94%e5%a3%81%e8%80%81%e7%8e%8b%e3%80%8d%e7%9a%84wi-fi-%e5%af%86%e7%a2%bc/", desc: "一篇关于破解 Wi-Fi 密码的技术讨论或教程文章。", color: "bg-orange" },
            { name: "在线PS", url: "https://www.nuanque.com/ps/", desc: "一个功能强大的在线图片编辑工具，类似 PhotoShop。", color: "bg-pink" },
            { name: "匿名电子邮件", url: "https://temp-mail.org/zh/", desc: "提供临时、一次性、匿名的电子邮件地址服务，用于接收邮件。", color: "bg-cyan" },
            { name: "匿名身份", url: "https://www.ssnzk.com/", desc: "生成虚拟身份信息（如姓名、地址、SSN等）的在线工具。", color: "bg-cyan" },
            { name: "刘明野的工具箱", url: "https://tool.liumingye.cn/", desc: "一个集合了多种实用在线工具的网站。", color: "bg-yellow" },
            { name: "图床", url: "https://imgse.com/", desc: "提供免费图片上传和托管服务的网站（图床）。", color: "bg-pink" },
            { name: "智能家居", url: "http://192.168.2.201:8123/", desc: "Home Assistant 的 Web 界面，用于管理和控制智能家居设备（本地实例）。", color: "bg-indigo" },
            { name: "AI前端", url: "https://huggingface.co/spaces/enzostvs/deepsite", desc: "Hugging Face Space 上的一个 AI 应用，可能用于生成网站前端代码或设计。", color: "bg-purple" },
            { name: "Ai文献挖掘", url: "https://www.aminer.cn/", desc: "AMiner，一个专注于科技文献检索和挖掘的智能 AI 工具。", color: "bg-teal" },
            { name: "ChatExcel", url: "https://www.chatexcel.com/#/", desc: "通过自然语言对话操作 Excel 表格的 AI 工具。", color: "bg-green" },
            { name: "CherryStudio", url: "https://cherry-ai.com/download", desc: "Cherry AI 相关的应用或工具下载页面。", color: "bg-pink" },
            { name: "Chfs", url: "http://iscute.cn/chfs", desc: "CuteHttpFileServer (CHFS)，一个轻量级的 HTTP 文件共享服务器工具。", color: "bg-gray" },
            { name: "Everything", url: "https://www.voidtools.com/zh-cn/downloads/", desc: "Voidtools 出品的 Everything 文件搜索工具官方下载页面。", color: "bg-gray" },
            { name: "中立DNS", url: "https://www.opennic.org/", desc: "OpenNIC 项目，提供一个替代传统 ICANN DNS 根的、民主且中立的 DNS 服务。", color: "bg-teal" },
            { name: "优选ip", url: "https://vfarid.github.io/cf-ip-scanner/?max=30", desc: "用于扫描 Cloudflare 优选 IP 的在线工具或脚本页面。", color: "bg-dark-blue" },
            { name: "免费域名", url: "https://register.us.kg/", desc: "提供免费 .us.kg 域名注册服务的网站。", color: "bg-blue" },
            { name: "蓝点网", url: "https://www.landiannews.com/", desc: "蓝点网，关注科技资讯、软件应用、操作系统等的科技媒体。", color: "bg-blue" },
            { name: "绿色软件下载", url: "https://filehippo.com/zh/", desc: "FileHippo，提供各类免费软件下载的网站 (中文版)。", color: "bg-gray" },
            { name: "诉讼服务网", url: "https://ssfw.court.gov.cn/ssfww/", desc: "中国法院诉讼服务网官方网站，提供在线立案、查询等服务。", color: "bg-red" },
            { name: "诉讼文书式样", url: "https://www.court.gov.cn/susongyangshi/5.html", desc: "最高人民法院官网提供的诉讼文书参考式样。", color: "bg-red" },
            { name: "诉讼资产网", url: "https://www.rmfysszc.gov.cn/", desc: "人民法院诉讼资产网官方网站，发布司法拍卖、变卖等信息。", color: "bg-red" },
            { name: "企信网", url: "http://www.gsxt.gov.cn/index.html", desc: "国家企业信用信息公示系统官方网站，查询企业工商信息。", color: "bg-red" },
            { name: "审判流程公开", url: "https://splcgk.court.gov.cn", desc: "中国审判流程信息公开网官方网站，查询案件审理进度。", color: "bg-red" },
            { name: "食品伙伴网", url: "http://down.foodmate.net/wap/index.php?moduleid=23&itemid=42543", desc: "食品伙伴网下载中心的特定资源页面（移动版链接）。", color: "bg-green" },
            { name: "手游源码网", url: "https://www.syymw.com", desc: "提供手机游戏源代码下载和交流的网站。", color: "bg-pink" },
            { name: "红警地图", url: "https://www.ra2.club/", desc: "一个提供《红色警戒2》地图下载和交流的网站。", color: "bg-red" },
            { name: "红警下载", url: "http://www.uc129.com/xiazai/", desc: "UC129 游戏网的红警相关资源下载区。", color: "bg-red" },
            { name: "华美系统", url: "http://111.22.170.15:18080/login", desc: "一个特定系统的登录入口（可能是内部或专用系统）。", color: "bg-gray" },
            { name: "律师服务平台", url: "https://lspt.court.gov.cn/", desc: "中国律师服务平台，法院系统为律师提供的在线服务入口。", color: "bg-red" },
            { name: "律师管理系统", url: "http://hunanlawyer.justice.org.cn:81/", desc: "湖南省律师综合管理信息系统登录入口。", color: "bg-red" },
            { name: "律协集中培训", url: "https://appgsoghlmo7596.pc.xiaoe-tech.com/", desc: "基于小鹅通平台的律师协会在线集中培训系统。", color: "bg-yellow" },
            { name: "企标检索", url: "https://www.qybz.org.cn/user/toSearch/", desc: "企业标准信息公共服务平台，用于查询企业自我声明公开的标准。", color: "bg-teal" },
            { name: "审判流程公开", url: "https://splcgk.court.gov.cn", desc: "中国审判流程信息公开网，查询案件审理进度。", color: "bg-red" },
            { name: "中国法律资源库", url: "https://data.lawyee.net/", desc: "北大法宝 (Lawyee) 法律数据库。", color: "bg-teal" },
            { name: "中国检察网", url: "https://www.12309.gov.cn/", desc: "12309 中国检察网，检察机关统一对外综合服务平台。", color: "bg-red" },
            { name: "中国仲裁", url: "http://www.china-arbitration.com/", desc: "中国仲裁网，提供仲裁相关信息和服务的平台。", color: "bg-teal" },
            { name: "专利检索", url: "https://patents.qizhidao.com/", desc: "企知道提供的专利信息检索平台。", color: "bg-teal" },
            { name: "专利检索", url: "https://patents.qizhidao.com/", desc: "企知道提供的专利信息检索平台。", color: "bg-teal" },
            { name: "路由器固件", url: "https://fw.koolcenter.com/", desc: "KoolCenter 论坛提供的路由器固件下载站。", color: "bg-orange" },
            { name: "字笑艺术字", url: "https://fonthaha.com/edit", desc: "一个在线艺术字生成器，允许用户创建和编辑多种字体样式。", color: "bg-blue" },
            { name: "Excalidraw草图", url: "https://excalidraw.com/", desc: "一个在线画草图白板工具，支持手绘风格的图形和图表绘制，方便团队协作和创意分享。", color: "bg-green" },
            { name: "码图编辑器", url: "https://markdown.devtool.tech/app", desc: "一个在线Markdown(.md)编辑器，支持实时预览和多种Markdown语法，方便用户撰写和格式化文本。", color: "bg-purple" },
            { name: "JPGHD", url: "https://jpghd.com/", desc: "一个在人工智能老照片无损修复，利用2025年最先进人工智能 AI 将老照片无损高清修复（支持老照片修复、老照片上色和魔法动态照片）", color: "bg-red" },
            { name: "Nyaa", url: "https://nyaa.si/", desc: "一个以动漫和相关内容为主的BT种子分享网站，用户可以查找和下载各种类型的资源。", color: "bg-blue" },
            { name: "微信网页版", url: "https://wx.qq.com/", desc: "微信的网页版，用户可以通过浏览器访问并使用微信的基本功能，如聊天、文件传输等。", color: "bg-green" },
            { name: "微博用户主页", url: "https://weibo.com/u/5514680377/home?wvr=5", desc: "用户在微博上的个人主页，展示其发布的内容、动态和互动。", color: "bg-red" },
            { name: "一网一匠", url: "https://ywyj.cn/", desc: "一网一匠极速版 - 一起发现有趣的新产品。", color: "bg-purple" },
            { name: "微信公众平台", url: "https://mp.weixin.qq.com/", desc: "微信公众平台，为用户提供创建和管理公众号的服务，支持内容发布、用户互动等功能。", color: "bg-blue" },
            { name: "FOSSHub", url: "https://www.fosshub.com/", desc: "一个提供开源软件免费下载的平台，涵盖各种软件和工具，支持多种操作系统。", color: "bg-green" },
            { name: "FreeFRP", url: "https://freefrp.net/", desc: "提供免费的FRP（反向代理）服务，帮助用户实现内网穿透，方便远程访问内网服务。", color: "bg-purple" },
            { name: "法律图书网", url: "http://www.law-lib.com/", desc: "一个提供法律书籍、法律资料和在线学习资源的平台，致力于推广法律知识和法律研究。", color: "bg-blue" },
            { name: "最高人民检察院法规库", url: "https://www.spp.gov.cn/spp/flfgk/index.shtml", desc: "最高人民检察院的法规库，提供有关法律、法规、政策及相关文件的查询和下载服务。", color: "bg-red" },
            { name: "执行信息公开网", url: "https://zxgk.court.gov.cn/", desc: "中国执行信息公开网，提供失信、限高", color: "bg-yellow" },
            { name: "国家自然科学基金委员会", url: "https://kd.nsfc.cn/", desc: "国家自然科学基金委员会官方网站，提供科研项目申报、管理和资助信息，为科研人员提供服务。", color: "bg-blue" },
            { name: "岳阳市科技计划管理系统", url: "http://47.122.45.246/site/#/home?login=true", desc: "岳阳市科技计划管理系统。", color: "bg-blue" },
            { name: "小霸王游戏机", url: "https://www.yikm.net/", desc: "小霸王，其乐无穷 。红白机，FC在线游戏，街机游戏，街机在线，NES games，NES games online，Super Mario", color: "bg-green" },
            { name: "CloudFlareYes", url: "https://stock.hostmonit.com/CloudFlareYes", desc: "CloudFlare优质IP自动切换，全球主机监控 - 国内外VPS、云服务器的库存监控和优惠信息", color: "bg-green" },
        ];
        
        // 渲染网站图标
        function renderWebsites(websitesToRender) {
            const container = document.getElementById('websiteContainer');
            const emptyState = document.getElementById('emptyState');
            
            container.innerHTML = '';
            
            if (websitesToRender.length === 0) {
                emptyState.classList.add('show');
                return;
            }
            
            emptyState.classList.remove('show');
            
            websitesToRender.forEach(website => {
                const firstChar = website.name.charAt(0);
                
                const item = document.createElement('a');
                item.className = 'website-item';
                item.href = website.url;
                item.target = '_blank';
                item.setAttribute('data-name', website.name.toLowerCase());
                item.setAttribute('data-desc', website.desc.toLowerCase());
                item.innerHTML = `
                    <div class="website-icon ${website.color}">${firstChar}</div>
                    <span class="website-name">${website.name}</span>
                `;
                
                container.appendChild(item);
            });
        }
        
        // 搜索功能
        function handleSearch() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
            
            if (!searchTerm) {
                renderWebsites(websites);
                return;
            }
            
            const filtered = websites.filter(website => 
                website.name.toLowerCase().includes(searchTerm) || 
                website.desc.toLowerCase().includes(searchTerm)
            );
            
            renderWebsites(filtered);
        }
        
        // 防抖函数
        function debounce(func, wait) {
            let timeout;
            return function() {
                const context = this;
                const args = arguments;
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    func.apply(context, args);
                }, wait);
            };
        }
        
        // 初始化
        document.addEventListener('DOMContentLoaded', () => {
            renderWebsites(websites);
            
            // 搜索事件监听（带防抖）
            document.getElementById('searchInput').addEventListener(
                'input', 
                debounce(handleSearch, 300)
            );
            
            // 确保页面加载后滚动到顶部
            document.getElementById('websiteScroller').scrollTo(0, 0);
        });
        
        // 响应式调整
        window.addEventListener('resize', debounce(() => {
            // 可以根据需要添加响应式逻辑
        }, 100));