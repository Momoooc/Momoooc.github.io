# 星标 - 你的站点灯塔

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Stars](https://img.shields.io/github/stars/Momoooc/Momoooc.github.io?style=social)](https://github.com/Momoooc/Momoooc.github.io)
[![GitHub Forks](https://img.shields.io/github/forks/Momoooc/Momoooc.github.io?style=social)](https://github.com/Momoooc/Momoooc.github.io)


## 项目介绍

星标，是一款极简、优雅的个人书签管理器，旨在帮助你高效地收集、整理和访问散落在网络中的优质资源。它像一座灯塔，照亮你数字世界的航程，让知识触手可及。

**主要特性：**

*   **极简设计**：告别臃肿，回归纯粹。我们追求极致的简洁，让你专注于内容本身。
*   **高效管理**：轻松添加、编辑和删除书签，打造专属的知识库。
*   **快速访问**：一键直达目标网站，节省宝贵时间。
*   **GitHub Pages 部署**：无需服务器，即可免费部署到 GitHub Pages，随时随地访问你的书签。


## 部署教程 (GitHub Pages)

想让你的星标书签在网上也能访问吗？使用 GitHub Pages 可以免费部署！

1.  **创建 GitHub 仓库**：
    *   在 GitHub 上创建一个新的仓库，仓库名随意，例如 `my-bookmarks`。
2.  **上传项目代码**：
    *   将本项目的所有文件（包括 `index.html`、`.prettierrc` 和 `web_conf` 文件夹）上传到你刚创建的 GitHub 仓库中。
3.  **启用 GitHub Pages**：
    *   进入你的 GitHub 仓库，点击 "Settings"（设置）选项卡。
    *   在左侧菜单中找到 "Pages"（页面）选项。
    *   在 "Source"（来源）部分，选择你的主分支（通常是 `main` 或 `master`），然后点击 "Save"（保存）。
4.  **等待部署**：
    *   GitHub Pages 会自动部署你的网站，这可能需要几分钟时间。
5.  **访问你的网站**：
    *   部署完成后，你可以在 "GitHub Pages" 设置页面找到你的网站地址，通常是 `https://你的用户名.github.io/你的仓库名`。

## 目录结构

```
.
├── .prettierrc          # Prettier 配置文件，用于代码格式化
├── index.html           # 网站入口文件
└── web_conf/            # 网站配置文件目录
    ├── data.js          # 书签数据
    ├── favicon.ico      # 网站图标
    ├── logo.png         # 网站 Logo
    ├── script.js        # 网站主要逻辑
    └── style.css        # 网站样式
```

## 如何添加书签

1.  **编辑 `web_conf/data.js` 文件**：
    *   打开 `web_conf/data.js` 文件，你会看到一些示例书签。
    *   按照示例格式，添加你自己的书签信息。每个书签都包含网站的名称和 URL。
    *   保存文件后，刷新你的网站，就能看到你新添加的书签啦！

**例如：**

```javascript
{
  urlText: '百度',
  linkUrl: 'http://www.baidu.com/',
  linkTitle:'百度，中文搜索引擎，提供网页、图片、视频、新闻等搜服务，是常用的信息检索入口。',
}
```


## 贡献

我们非常欢迎你为星标贡献代码！无论是修复 Bug、添加新功能，还是改进文档，你的贡献都将使星标变得更好。

**贡献步骤：**

1.  **Fork 仓库**：点击 GitHub 页面上的 "Fork" 按钮，将仓库复制到你的 GitHub 账号下。
2.  **Clone 仓库**：将 Fork 后的仓库克隆到本地：

    ```bash
    git clone https://github.com/你的用户名/你的仓库名.git
    ```
3.  **创建分支**：创建一个新的分支，用于开发你的功能或修复 Bug：

    ```bash
    git checkout -b feature/你的分支名称
    ```
4.  **提交更改**：在本地进行更改，并提交到你的分支：

    ```bash
    git add .
    git commit -m "feat: 你的提交信息"
    ```
5.  **推送分支**：将你的分支推送到 GitHub：

    ```bash
    git push origin feature/你的分支名称
    ```
6.  **创建 Pull Request**：在 GitHub 页面上，点击 "Compare & pull request" 按钮，创建一个 Pull Request，将你的更改合并到主仓库。

**贡献规范：**

*   请遵循 [Conventional Commits](https://www.conventionalcommits.org/zh-cn/v1.0.0/) 规范编写提交信息。
*   请保持代码风格一致，可以使用 Prettier 进行代码格式化。
*   如果添加了新功能，请编写相应的测试用例。


## 感谢

本页面设计灵感来源于 Via 浏览器主页，如果涉及侵权，请联系我删除。

## 联系方式

如有任何问题或建议，请联系：

- GitHub: [Momoooc](https://github.com/Momoooc)

感谢您的使用与支持！

## 许可证

本项目遵循 [LICENSE](LICENSE) 协议。请查看该文件以获取详细信息。