# Momoooc 导航

## 项目简介

**Momoooc 导航** 是一个旨在提供便捷、高效的常用网站资源整合平台。它通过简洁美观的界面和强大的搜索功能，帮助用户快速找到所需的网站资源，提升日常使用效率。该项目采用响应式设计，确保在各种设备上都能提供良好的用户体验。

## 功能特点

- **强大的搜索功能**：
  - 用户可以输入网站的名称或描述关键词，系统将实时过滤并显示匹配的网站列表。
  - 搜索功能支持模糊匹配，即使输入部分关键词也能找到相关网站。
- **响应式设计**：
  - 网站采用响应式布局，能够自动适应不同屏幕尺寸的设备，包括手机、平板电脑和桌面电脑。
  - 在不同设备上，网站的布局和元素大小会进行相应调整，以保证最佳的浏览体验。
- **动态加载**：
  - 网站列表根据用户的搜索条件动态更新，无需刷新页面即可查看搜索结果。
  - 动态加载技术提高了搜索效率，减少了不必要的资源加载。
- **直观的网站图标展示**：
  - 每个网站都配有独特的图标和名称，方便用户快速识别和选择。
  - 图标采用矢量图形，保证在不同分辨率下都能清晰显示。
- **可定制性**：
  - 用户可以通过修改 `web_conf/script.js` 文件，轻松添加、删除或修改网站信息，定制个性化的导航页面。
  - 支持自定义网站图标的背景颜色，让导航页面更具个性化。

## 使用说明

1. **克隆项目到本地**

   首先，您需要将项目克隆到本地计算机。请确保您已安装 Git，然后在终端或命令提示符中执行以下命令：

   ```bash
   git clone https://github.com/yourusername/momoooc-navigation.git
   ```

   请将 `https://github.com/yourusername/momoooc-navigation.git` 替换为您的仓库地址。

2. **打开 HTML 文件**

   克隆完成后，进入项目目录，在浏览器中打开 `index.html` 文件即可开始使用 Momoooc 导航。

   您可以使用以下方法打开 `index.html` 文件：

   - **直接双击**：在文件管理器中找到 `index.html` 文件，双击即可在默认浏览器中打开。
   - **使用浏览器打开**：打开浏览器，按下 `Ctrl + O`（或 `Cmd + O`），选择 `index.html` 文件即可。

## 部署指南

### 部署到 GitHub Pages

GitHub Pages 提供免费的静态网站托管服务。按照以下步骤，您可以将 Momoooc 导航快速部署到 GitHub Pages：

1. **登录 GitHub**

   确保您已登录到您的 GitHub 帐户。

2. **创建新的代码仓库**

   - 在 GitHub 网站上，点击右上角的 "+" 图标，选择 "New repository"。
   - 在 "Repository name" 字段中输入仓库名称（例如：`momoooc-navigation`）。
   - 确保选择 "Public" 选项，然后点击 "Create repository" 按钮。

3. **上传项目文件**

   - 进入刚创建的仓库，点击 “Add file” 按钮，选择 "Upload files"。
   - 将 `momoooc-navigation` 文件夹中的所有文件（包括 `index.html`、`web_conf` 文件夹和 `LICENSE` 文件）上传到 GitHub 仓库。

4. **启用 GitHub Pages**

   - 在仓库页面，点击 "Settings" 选项卡。
   - 在左侧导航菜单中，选择 "Pages"。
   - 在 "Source" 部分，选择 `main` 分支（或您上传文件的分支），然后点击 "Save" 按钮。
   - GitHub 将会自动为您生成一个链接，通常格式为 `https://yourusername.github.io/momoooc-navigation/`。请注意，首次部署可能需要几分钟才能生效。

### 部署到 Cloudflare Pages

Cloudflare Pages 是另一个流行的静态网站托管服务，提供快速的 CDN 加速和免费的 SSL 证书。以下是部署步骤：

1. **注册并登录 Cloudflare**

   如果您还没有 Cloudflare 帐户，请先注册一个。然后登录到 Cloudflare 控制面板。

2. **创建新的 Cloudflare Pages 项目**

   - 在 Cloudflare 控制面板中，选择 "Pages"，然后点击 "Create a project" 按钮。
   - 选择 "Connect to Git" 并授权 Cloudflare 访问您的 GitHub 帐户。

3. **选择代码仓库**

   - 在代码仓库列表中，选择您刚刚创建的 `momoooc-navigation` 仓库，然后点击 "Begin setup" 按钮。

4. **配置构建选项**

   - 在 "Framework preset" 中选择 "None"。
   - "Build command" 字段留空。
   - 在 "Build output directory" 字段中输入 `.`（表示根目录）。
   - 点击 "Save and deploy" 按钮。

5. **访问您的网站**

   - Cloudflare Pages 将会自动构建和部署您的网站。部署完成后，您将获得一个 Cloudflare Pages 的链接，通过该链接即可访问您的 Momoooc 导航。

## 添加自定义网站

您可以根据个人需求，自定义 Momoooc 导航中的网站列表。以下是详细步骤：

1. **打开 `web_conf/script.js` 文件**

   使用文本编辑器（如 VS Code、Sublime Text 等）打开项目目录下的 `web_conf/script.js` 文件。

2. **编辑 `websites` 数组**

   在 `script.js` 文件中，找到以下代码片段：

   ```javascript
   const websites = [
     {
       name: '百度',
       url: 'http://www.baidu.com/',
       desc: '百度，全球最大的中文搜索引擎，提供全面的搜索服务。',
       color: 'bg-gray'
     }
     // ... 其他网站
   ]
   ```

   `websites` 数组包含了所有网站的信息。您可以按照以下格式添加新的网站：

   ```javascript
   { name: "网站名称", url: "网站链接", desc: "网站描述", color: "背景颜色类名" }
   ```

   - `name`：网站的名称，将显示在导航页面上。
   - `url`：网站的链接地址。
   - `desc`：网站的描述，用于搜索功能。
   - `color`：网站图标的背景颜色类名。您可以选择以下颜色类名：
     - `bg-blue`
     - `bg-indigo`
     - `bg-purple`
     - `bg-pink`
     - `bg-red`
     - `bg-orange`
     - `bg-yellow`
     - `bg-green`
     - `bg-teal`
     - `bg-cyan`
     - `bg-gray`
     - `bg-dark-blue`

   例如，要添加一个名为 "示例网站"，链接为 "https://example.com"，描述为 "这是一个示例网站"，背景颜色为 "bg-blue" 的网站，您可以这样添加：

   ```javascript
   { name: "示例网站", url: "https://example.com", desc: "这是一个示例网站。", color: "bg-blue" }
   ```

3. **保存文件**

   完成编辑后，保存 `web_conf/script.js` 文件。

4. **刷新导航页面**

   刷新您的 Momoooc 导航页面，即可看到新添加的网站。

## 许可证

本项目遵循 [LICENSE](LICENSE) 协议。请查看该文件以获取详细信息。

## 联系方式

如有任何问题或建议，请联系：

- GitHub: [Momoooc](https://github.com/Momoooc)

感谢您的使用与支持！
