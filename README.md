<p align="center">
  <img src="icon.png" width="80" alt="Image2 Promptick logo">
</p>

<h1 align="center">Image2 Promptick</h1>

<p align="center">
  <strong>Chrome 侧边栏 · 207 个 AI 图片提示词模板 · 中英双向翻译</strong>
</p>

<p align="center">
  <em>Chrome Sidebar · 207 AI Image Prompt Templates · Bilingual EN/CN Editor</em>
</p>

<p align="center">
  <a href="https://github.com/yuemokm/image2-promptick/blob/main/LICENSE"><img src="https://img.shields.io/github/license/yuemokm/image2-promptick" alt="License"></a>
  <a href="https://github.com/yuemokm/image2-promptick"><img src="https://img.shields.io/github/stars/yuemokm/image2-promptick?style=social" alt="Stars"></a>
  <a href="https://chrome.google.com/webstore"><img src="https://img.shields.io/badge/Chrome%20Extension-Manifest%20V3-blue" alt="Chrome Extension"></a>
</p>

---

## 📋 简介 / Overview

**Image2 Promptick** 是一个 Chrome 侧边栏插件，将 **207 个高质量的 AI 图片生成提示词模板** 与 **中英双语翻译编辑工具** 整合在一起，让你在浏览网页时随时随地方便地浏览、翻译、编辑提示词。

*A Chrome sidebar extension that brings together 207 curated AI image generation prompt templates with a bilingual (EN/CN) translation editor — browse, translate, and edit prompts without leaving your current tab.*

---

## ✨ 功能 / Features

| 中文 | English |
|------|---------|
| 🖼️ **207 个精选模板** — 涵盖 30+ 分类，每张带参考缩略图 | 🖼️ **207 Curated Templates** — 30+ categories with preview thumbnails |
| 🔍 **分类筛选 / 关键词搜索** — 快速定位需要的风格 | 🔍 **Filter by category & keyword search** — find what you need instantly |
| 🌐 **一键翻译** — 调用 LLM 将英文提示词译成中文 | 🌐 **One-click Translation** — EN → CN via your own LLM |
| 🔄 **双向同步** — 修改中文可同步回写英文，反之亦然 | 🔄 **Bidirectional Sync** — edit CN, sync to EN and vice versa |
| 📋 **两侧复制按钮** — 中英文独立复制，不遗漏 | 📋 **Copy buttons** — copy EN or CN independently |
| 📷 **参考图查看** — 大图灯箱预览，不跳转新窗口 | 📷 **Full-size image viewer** — lightbox overlay, no tab switch |
| ⚙️ **自定义 LLM** — 兼容 OpenAI 格式，BYOK | ⚙️ **Bring Your Own Key** — any OpenAI-compatible API |

---

## 📸 截图 / Screenshots

> *待补充 — 欢迎提交 PR 添加截图*
>
> *TODO: Add screenshots — PRs welcome*

---

## 🚀 安装 / Installation

### 方式一：手动加载 / Load Unpacked

1. 打开 Chrome，进入 `chrome://extensions`
2. 开启右上角 **开发者模式** / *Developer mode*
3. 点击 **加载已解压的扩展程序** / *Load unpacked*
4. 选择本项目文件夹
5. 点击工具栏插件图标打开侧边栏
6. 进入 ⚙️ 设置 LLM API 后即可使用

### 方式二：从源码构建 / Build from source

```bash
git clone https://github.com/yuemokm/image2-promptick.git
# 然后按方式一的步骤加载
# Then follow the manual load steps above
```

---

## 🔧 使用指南 / Usage

### 首次使用 / First Use

1. 点击 Chrome 工具栏的拼图图标 🧩 → 找到 Image2 Promptick → 固定到工具栏
2. 点击图标，右侧打开侧边栏
3. 点击右上角 ⚙️ **设置 LLM**
4. 填入 API 地址、Key 和模型名，保存

### 浏览模板 / Browse Templates

- 侧边栏列表浏览所有模板卡片，每张带缩略图、分类和标签
- 使用顶部的搜索框和分类下拉筛选

### 编辑翻译 / Edit & Translate

1. 点击任意模板卡片进入编辑视图
2. 点击 **🌐 翻译为中文** 调用 LLM 翻译
3. 修改中文内容
4. 点击 **🔄 同步英文** 让 LLM 根据新中文更新英文提示词
5. 点击 **📋 复制** 复制任意一侧

### 查看参考图 / View Reference Image

- 编辑视图顶部点击 **📷 查看完整图** 打开灯箱大图
- 点击大图旁边的暗色区域关闭

---

## 🗂️ 模板分类 / Categories

```
🎌 Anime & Manga        🏛️ Architecture        💄 Beauty & Lifestyle
🏷️ Brand & Identity     👤 Character Design     🎬 Cinematic
🎥 Film References      📊 Data Visualization   👗 Fashion Editorial
🎨 Fine Art             🎮 Gaming               🖼️ Illustration
📋 Infographics         🖌️ Ink & Chinese        📐 Isometric
📚 OpenAI Cookbook      📷 Photography          👾 Pixel Art
🍔 Product & Food       🔬 Research Figures     🌃 Retro & Cyberpunk
🔭 Scientific           💻 Screen Photo         💉 Tattoo Design
⚙️ Technical Illustration 🔤 Typography         📱 UI/UX
... and more
```

---

## 🛠️ 技术栈 / Tech Stack

| Layer | Technology |
|-------|-----------|
| **Platform** | Chrome Extension (Manifest V3) |
| **Sidebar** | `chrome.sidePanel` API |
| **UI** | Vanilla HTML + CSS (dark theme) |
| **LLM** | OpenAI-compatible API via `fetch` |
| **Storage** | `chrome.storage.local` |
| **Template Data** | Aggregated from 207 JSON sources |

---

## 📄 致谢 / Acknowledgments

本项目的提示词模板来源于以下开源项目：

*The prompt templates in this project are sourced from:*

- **[nexu-io/open-design](https://github.com/nexu-io/open-design)** — 开源设计工具 (Apache 2.0)
- **[wuyoscar/GPT-Image2-Skill](https://github.com/wuyoscar/GPT-Image2-Skill)** — GPT Image 2 提示词画廊 (MIT)

预览图片通过热链接引用自上述项目原始仓库，未在本地托管。
*Preview images are hot-linked from the original repositories above.*

详情请见 [NOTICE.md](./NOTICE.md)。

---

## 📝 许可证 / License

[MIT](./LICENSE)

---

<p align="center">
  Made with ❤️ for the AI art community
</p>