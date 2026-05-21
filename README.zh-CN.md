<div align="center">

<h1>Image2 Promptick</h1>

<p>一个 Chrome 侧边栏插件，集成 <strong>207 个精选 AI 图片提示词模板</strong> 与 <strong>中英双语翻译编辑器</strong>。</p>

<p>
  <a href="README.md">English</a> | <b>中文</b>
</p>

<p>
  <img src="https://img.shields.io/github/license/yuemokm/image2-promptick" alt="License">
  <img src="https://img.shields.io/badge/Chrome%20Extension-Manifest%20V3-blue?logo=googlechrome" alt="Chrome V3">
  <img src="https://img.shields.io/badge/LLM-OpenAI%20Compatible-green" alt="LLM">
</p>

<img src="icon.png" width="80" alt="logo">

</div>

---

## ✨ 功能亮点

| | |
|---|---|
| 🖼️ **207 个精选模板** | 30+ 分类 — 动漫、游戏、摄影、UI/UX、时尚、信息图等 |
| 🔍 **搜索与筛选** | 按关键词或分类快速定位 |
| 🌐 **一键翻译** | 调用自有 LLM 将英文提示词翻译为中文 |
| 🔄 **双向同步** | 修改中文 → LLM 自动更新英文，反之亦然 |
| 📋 **独立复制** | 中英文两侧均有复制按钮 |
| 📷 **大图预览** | 灯箱弹窗查看参考图，不跳新窗口 |
| ⚙️ **BYOK** | 兼容任意 OpenAI 格式 API — GPT、DeepSeek、火山引擎等 |

---

## 🚀 安装

1. 打开 Chrome，进入 `chrome://extensions`
2. 开启右上角 **开发者模式**
3. 点击 **加载已解压的扩展程序**，选择本项目文件夹
4. 点击工具栏插件图标打开侧边栏
5. 进入 ⚙️ 设置 LLM API 后即可使用

---

## 🎮 使用指南

**浏览与筛选**
- 侧边栏滚动浏览模板卡片，每张带缩略图
- 使用顶部搜索框和分类下拉筛选

**编辑与翻译**
1. 点击任意模板卡片进入编辑视图
2. 点击 **🌐 翻译为中文** —— LLM 自动翻译
3. 修改中文内容
4. 点击 **🔄 同步英文** —— LLM 根据新中文重写英文提示词
5. 点击 **📋 复制** 复制任意一侧

**查看参考图**
- 编辑视图顶部点击 **📷 查看完整图** 弹出灯箱大图
- 点击旁边暗色区域关闭

---

## 🖼️ 模板画廊

以下是插件内部分模板预览。点击图片查看完整尺寸。

<details open>
<summary><strong>🎌 动漫</strong></summary>

<table>
  <tr>
    <td width="50%" align="center">
      <a href="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/anime-manga/anime-expression-grid.png"><img src="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/anime-manga/anime-expression-grid.png" width="100%" alt="动漫表情网格"></a>
      <sub><strong>16 格动漫表情网格</strong> · <code>"anime"</code> <code>"character design"</code></sub>
    </td>
    <td width="50%" align="center">
      <a href="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/gaming/anime-open-world.png"><img src="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/gaming/anime-open-world.png" width="100%" alt="动漫开放世界 HUD"></a>
      <sub><strong>动漫开放世界游戏 HUD</strong> · <code>"gaming"</code> <code>"UI"</code></sub>
    </td>
  </tr>
</table>
</details>

<details>
<summary><strong>🎬 影视与游戏</strong></summary>

<table>
  <tr>
    <td width="50%" align="center">
      <a href="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/cinematic-animation/noir-detective.png"><img src="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/cinematic-animation/noir-detective.png" width="100%" alt="1940s 黑色电影"></a>
      <sub><strong>1940 年代黑色电影侦探</strong> · <code>"cinematic"</code> <code>"noir"</code></sub>
    </td>
    <td width="50%" align="center">
      <a href="https://raw.githubusercontent.com/nexu-io/open-design/main/assets/prompt-templates/image/game-screenshot-anime-fighting-game-captain-ryuuga-vs-kaze-renshin.jpg"><img src="https://raw.githubusercontent.com/nexu-io/open-design/main/assets/prompt-templates/image/game-screenshot-anime-fighting-game-captain-ryuuga-vs-kaze-renshin.jpg" width="100%" alt="格斗游戏截图"></a>
      <sub><strong>动漫格斗游戏场景</strong> · <code>"game"</code> <code>"action"</code></sub>
    </td>
  </tr>
</table>
</details>

<details>
<summary><strong>👗 时尚与 📷 摄影</strong></summary>

<table>
  <tr>
    <td width="50%" align="center">
      <a href="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/fashion-editorial/haute-couture-sculptural-runway.png"><img src="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/fashion-editorial/haute-couture-sculptural-runway.png" width="100%" alt="高级定制时装"></a>
      <sub><strong>前卫高级定制时装周</strong> · <code>"fashion"</code></sub>
    </td>
    <td width="50%" align="center">
      <a href="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/photography/panorama-jungle.png"><img src="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/photography/panorama-jungle.png" width="100%" alt="360° 丛林全景"></a>
      <sub><strong>360° 等距柱状丛林全景</strong> · <code>"photography"</code></sub>
    </td>
  </tr>
</table>
</details>

<details>
<summary><strong>🔬 科研与科普</strong></summary>

<table>
  <tr>
    <td width="50%" align="center">
      <a href="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/research-paper-figures/ablation-bars.png"><img src="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/research-paper-figures/ablation-bars.png" width="100%" alt="消融实验柱状图"></a>
      <sub><strong>带误差棒的消融实验柱状图</strong> · <code>"research"</code> <code>"charts"</code></sub>
    </td>
    <td width="50%" align="center">
      <a href="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/scientific-educational/human-anatomy-muscular-poster.png"><img src="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/scientific-educational/human-anatomy-muscular-poster.png" width="100%" alt="解剖学海报"></a>
      <sub><strong>人体肌肉系统解剖海报</strong> · <code>"scientific"</code> <code>"educational"</code></sub>
    </td>
  </tr>
</table>
</details>

<details>
<summary><strong>🏛️ 建筑与工程</strong></summary>

<table>
  <tr>
    <td width="50%" align="center">
      <a href="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/architecture-interior/biophilic-biotech-lab-render.png"><img src="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/architecture-interior/biophilic-biotech-lab-render.png" width="100%" alt="生物科技实验室渲染"></a>
      <sub><strong>亲生物科技实验室效果图</strong> · <code>"architecture"</code></sub>
    </td>
    <td width="50%" align="center">
      <a href="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/technical-illustration/car-powertrain-transparent-cutaway.png"><img src="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/technical-illustration/car-powertrain-transparent-cutaway.png" width="100%" alt="汽车动力系统剖面"></a>
      <sub><strong>汽车动力总成透明剖视图</strong> · <code>"technical"</code> <code>"illustration"</code></sub>
    </td>
  </tr>
</table>
</details>

<details>
<summary><strong>📦 产品与 📋 信息图</strong></summary>

<table>
  <tr>
    <td width="50%" align="center">
      <a href="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/product-food/product-dieline-box.png"><img src="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/product-food/product-dieline-box.png" width="100%" alt="产品包装盒"></a>
      <sub><strong>从刀模图生成 3D 包装盒</strong> · <code>"product"</code> <code>"packaging"</code></sub>
    </td>
    <td width="50%" align="center">
      <a href="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/infographics-field-guides/camera-styles-infographic.png"><img src="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/infographics-field-guides/camera-styles-infographic.png" width="100%" alt="相机风格信息图"></a>
      <sub><strong>相机风格参考信息图</strong> · <code>"infographic"</code></sub>
    </td>
  </tr>
</table>
</details>

<details>
<summary><strong>📝 排版与 UI/UX</strong></summary>

<table>
  <tr>
    <td width="50%" align="center">
      <a href="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/typography-posters/pulp-scifi-cover.png"><img src="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/typography-posters/pulp-scifi-cover.png" width="100%" alt="科幻杂志封面"></a>
      <sub><strong>1950 年代科幻杂志封面</strong> · <code>"typography"</code> <code>"poster"</code></sub>
    </td>
    <td width="50%" align="center">
      <img src="icon.png" width="100%" alt="还有 200+ 模板">
      <sub><strong>……还有 200+ 模板</strong> <br>安装插件浏览完整收藏</sub>
    </td>
  </tr>
</table>
</details>

> [!NOTE]
> 以上模板预览图均热链接自原始开源仓库。完整提示词文本在 Chrome 插件中。

---

## 🗂️ 完整分类列表

```
🎌 动漫 & 漫画      🏛️ 建筑 & 室内      💄 美容 & 生活
🏷️ 品牌 & 标识       👤 角色设计         🎬 电影 & 动画
🎥 电影参考         📊 数据可视化       ✂️ 图片编辑
🎪 活动 & 体验       👗 时尚编辑         🎨 绘画
🎮 游戏             🖼️ 插画             📋 信息图
🖌️ 水墨 & 国风       📐 等距             📚 OpenAI 食谱
📷 摄影             👾 像素艺术         🍔 产品 & 美食
🔬 论文图表         🌃 复古 & 赛博朋克   🔭 科学 & 教育
💻 屏幕摄影         💉 刺青设计         ⚙️ 技术插图
🔤 排版 & 海报       📱 UI/UX 原型       🖍️ 水彩
🏛️ 游戏 UI          📦 应用 & 网页设计
```

---

## 🛠️ 技术栈

| 层 | 技术 |
|-------|-----------|
| 平台 | Chrome Extension — Manifest V3 |
| 侧边栏 | `chrome.sidePanel` API |
| UI | 原生 HTML + CSS（暗色主题） |
| LLM | OpenAI 兼容 API，通过 `fetch` 调用 |
| 存储 | `chrome.storage.local` |
| 数据 | 207 个模板，聚合自开源画廊 |

---

## 📄 文件结构

```
├── manifest.json       # 插件配置 (V3)
├── background.js       # 侧边栏激活逻辑
├── sidepanel.html      # 主界面
├── styles.css          # 暗色主题样式
├── sidepanel.js        # 核心逻辑（翻译、同步、复制、灯箱）
├── templates.js        # 207 个聚合模板
├── icon.png            # 插件图标
├── NOTICE.md           # 致谢与许可证说明
├── LICENSE             # MIT
└── README.md           # 英文说明
```

---

## 🙏 致谢

本项目提示词模板来源于以下开源项目：

- **[nexu-io/open-design](https://github.com/nexu-io/open-design)** — 46 个原始提示词模板 (Apache 2.0)
- **[wuyoscar/GPT-Image2-Skill](https://github.com/wuyoscar/GPT-Image2-Skill)** — 162 个精选提示词模板 (MIT)

预览图热链接自原始仓库。详见 [NOTICE.md](./NOTICE.md)。

---

## 📝 许可证

[MIT](./LICENSE) © 2026

---

<p align="center">
  <sub>为 AI 创作社区而生 · <a href="https://github.com/yuemokm/image2-promptick/issues">欢迎反馈与贡献</a></sub>
</p>