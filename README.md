# Momoooc 导航

## 项目简介

**Momoooc 导航** 是一个简单易用的常用网站资源整合平台。用户可以通过搜索功能快速找到常用网站，界面简洁美观，适合日常使用。

## 功能特点

- **搜索功能**：用户可以输入网站名称或描述，快速过滤出匹配的网站。
- **响应式设计**：支持不同设备的屏幕大小，确保在手机、平板和电脑上都有良好的体验。
- **动态加载**：根据用户的搜索条件动态更新显示的网站列表。
- **网站图标展示**：每个网站都有对应的图标及名称，提供直观的视觉效果。

## 使用说明

1. **克隆项目**

   首先，您需要将项目克隆到本地。打开终端或命令提示符，输入以下命令：

   ```bash
   git clone https://github.com/yourusername/momoooc-navigation.git
   ```


2. **打开 HTML 文件**

   在浏览器中打开 `index.html` 文件即可使用该导航工具。

## 部署

### 使用 GitHub Pages 部署

GitHub Pages 是一个简单的静态页面托管服务，您可以按照以下步骤进行部署：

1. **登录 GitHub**：确保您已登录到您的 GitHub 帐户。

2. **创建新仓库**：
   - 转到 GitHub 网站，点击右上角的 "+" 图标，选择 "New repository"。
   - 输入仓库名称（例如：`momoooc-navigation`），选择 "Public" 并点击 "Create repository"。

3. **上传项目文件**：
   - 进入刚创建的仓库，点击 “Add file” 按钮，选择 "Upload files"。
   - 将 `momoooc-navigation` 文件夹中的所有文件（包括 `index.html` 和其他文件）上传到 GitHub。

4. **启用 GitHub Pages**：
   - 在仓库页面，点击 "Settings"。
   - 在左侧菜单中选择 "Pages"。
   - 在 "Source" 部分，选择 `main` 分支并点击 "Save"。
   - 您会看到 GitHub 为您的页面生成的链接，通常是 `https://yourusername.github.io/momoooc-navigation/`。

### 使用 Cloudflare Pages 部署

Cloudflare Pages 是另一个托管静态页面的服务，您可以按照以下步骤进行部署：

1. **登录 Cloudflare**：如果您没有账户，请注册一个 Cloudflare 帐户并登录。

2. **创建新项目**：
   - 转到 Cloudflare Pages，点击 "Create a Project"。
   - 选择 "GitHub" 作为代码源，授权 Cloudflare 访问您的 GitHub 账户。

3. **选择仓库**：
   - 从列表中选择刚刚创建的 `momoooc-navigation` 仓库，点击 "Begin setup"。

4. **设置构建配置**：
   - 在 "Framework preset" 中选择 "None"。
   - 在 "Build command" 留空，"Build output directory" 填写 `.`。
   - 点击 "Save and Deploy"。

5. **访问您的网站**：
   - 部署完成后，您将获得一个 Cloudflare Pages 的链接，访问该链接即可使用您的导航工具。

## 添加网站

您可以通过修改 `web_conf/script.js` 中的 JavaScript 部分来添加新的网站。找到以下代码片段：

```javascript
const websites = [
    { name: "百度", url: "http://www.baidu.com/", desc: "百度，全球最大的中文搜索引擎，提供全面的搜索服务。", color: "bg-gray" },
     …… ……
];
```

在这个数组中，您可以根据以下格式添加新的网站：

```javascript
{ name: "网站名称", url: "网站链接", desc: "网站描述", color: "背景颜色类名" }
```

例如，添加一个新网站：

```javascript
{ name: "示例网站", url: "https://example.com", desc: "这是一个示例网站。", color: "bg-blue" }
```

## 许可证

本项目遵循 [LICENSE](LICENSE) 协议。请查看该文件以获取详细信息。

## 联系方式

如有任何问题或建议，请联系：

- GitHub: [Momoooc](https://github.com/Momoooc)

感谢你的使用与支持！

