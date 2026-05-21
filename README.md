<div align="center">

<h1>Image2 Promptick</h1>

<p>A Chrome sidebar extension featuring <strong>207 curated AI image prompt templates</strong> with a bilingual <strong>EN/CN translation editor</strong>.</p>

<p>
  <b>English</b> | <a href="README.zh-CN.md">中文</a>
</p>

<p>
  <img src="https://img.shields.io/github/license/yuemokm/image2-promptick" alt="License">
  <img src="https://img.shields.io/badge/Chrome%20Extension-Manifest%20V3-blue?logo=googlechrome" alt="Chrome V3">
  <img src="https://img.shields.io/badge/LLM-OpenAI%20Compatible-green" alt="LLM">
</p>

<img src="icon.png" width="80" alt="logo">

</div>

---

## ✨ Features

| | |
|---|---|
| 🖼️ **207 Curated Templates** | 30+ categories — anime, gaming, photography, UI/UX, fashion, infographics, and more |
| 🔍 **Search & Filter** | Find templates by keyword or category instantly |
| 🌐 **One-click Translation** | Translate any English prompt to Chinese via your own LLM |
| 🔄 **Bidirectional Sync** | Edit the Chinese → LLM rewrites the English to match |
| 📋 **Independent Copy** | Copy EN or CN separately — both sides have copy buttons |
| 📷 **Full-size Image Viewer** | Lightbox overlay for reference images |
| ⚙️ **BYOK (Bring Your Own Key)** | Any OpenAI-compatible API — GPT, DeepSeek, volcengine, etc. |

---

## 🚀 Installation

1. Open Chrome and go to `chrome://extensions`
2. Enable **Developer mode** (top-right toggle)
3. Click **Load unpacked** and select this repository's folder
4. Click the extension icon in the toolbar to open the sidebar
5. Go to ⚙️ Settings to configure your LLM API

---

## 🎮 Usage

**Browse & Explore**
- Scroll through the template gallery with thumbnails
- Use the search bar or category filter to narrow down

**Edit & Translate**
1. Click any template card to open the editor
2. Click **🌐 Translate to Chinese** to translate via LLM
3. Modify the Chinese text
4. Click **🔄 Sync English** — the LLM rewrites the English to match your edits
5. Click **📋 Copy** to copy either side

**Image Viewer**
- Click **📷 View Full Image** at the top of the editor for a lightbox preview
- Click the dark overlay to close

---

## 🖼️ Template Gallery

Here's a preview of what's inside the extension. Click any image to view full size.

<details open>
<summary><strong>🎌 Anime & Manga</strong></summary>

<table>
  <tr>
    <td width="50%" align="center">
      <a href="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/anime-manga/anime-expression-grid.png"><img src="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/anime-manga/anime-expression-grid.png" width="100%" alt="16-panel anime expression grid"></a>
      <sub><strong>16-panel anime expression grid</strong> · <code>"anime"</code> <code>"character design"</code></sub>
    </td>
    <td width="50%" align="center">
      <a href="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/gaming/anime-open-world.png"><img src="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/gaming/anime-open-world.png" width="100%" alt="Anime open-world adventure HUD"></a>
      <sub><strong>Anime open-world adventure HUD</strong> · <code>"gaming"</code> <code>"UI"</code></sub>
    </td>
  </tr>
</table>
</details>

<details>
<summary><strong>🎬 Cinematic & Gaming</strong></summary>

<table>
  <tr>
    <td width="50%" align="center">
      <a href="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/cinematic-animation/noir-detective.png"><img src="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/cinematic-animation/noir-detective.png" width="100%" alt="1940s film-noir still"></a>
      <sub><strong>1940s film-noir detective still</strong> · <code>"cinematic"</code> <code>"noir"</code></sub>
    </td>
    <td width="50%" align="center">
      <a href="https://raw.githubusercontent.com/nexu-io/open-design/main/assets/prompt-templates/image/game-screenshot-anime-fighting-game-captain-ryuuga-vs-kaze-renshin.jpg"><img src="https://raw.githubusercontent.com/nexu-io/open-design/main/assets/prompt-templates/image/game-screenshot-anime-fighting-game-captain-ryuuga-vs-kaze-renshin.jpg" width="100%" alt="Anime fighting game screenshot"></a>
      <sub><strong>Anime fighting game screenshot</strong> · <code>"game"</code> <code>"action"</code></sub>
    </td>
  </tr>
</table>
</details>

<details>
<summary><strong>👗 Fashion & 📷 Photography</strong></summary>

<table>
  <tr>
    <td width="50%" align="center">
      <a href="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/fashion-editorial/haute-couture-sculptural-runway.png"><img src="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/fashion-editorial/haute-couture-sculptural-runway.png" width="100%" alt="Avant-garde haute couture"></a>
      <sub><strong>Avant-garde Haute Couture Runway</strong> · <code>"fashion"</code></sub>
    </td>
    <td width="50%" align="center">
      <a href="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/photography/panorama-jungle.png"><img src="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/photography/panorama-jungle.png" width="100%" alt="360° jungle panorama"></a>
      <sub><strong>360° equirectangular jungle panorama</strong> · <code>"photography"</code></sub>
    </td>
  </tr>
</table>
</details>

<details>
<summary><strong>🔬 Research &  Scientific</strong></summary>

<table>
  <tr>
    <td width="50%" align="center">
      <a href="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/research-paper-figures/ablation-bars.png"><img src="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/research-paper-figures/ablation-bars.png" width="100%" alt="Ablation bar chart"></a>
      <sub><strong>Ablation bar chart with error bars</strong> · <code>"research"</code> <code>"charts"</code></sub>
    </td>
    <td width="50%" align="center">
      <a href="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/scientific-educational/human-anatomy-muscular-poster.png"><img src="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/scientific-educational/human-anatomy-muscular-poster.png" width="100%" alt="Anatomy poster"></a>
      <sub><strong>Human anatomy muscular system poster</strong> · <code>"scientific"</code> <code>"educational"</code></sub>
    </td>
  </tr>
</table>
</details>

<details>
<summary><strong>🏛️ Architecture & Technical</strong></summary>

<table>
  <tr>
    <td width="50%" align="center">
      <a href="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/architecture-interior/biophilic-biotech-lab-render.png"><img src="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/architecture-interior/biophilic-biotech-lab-render.png" width="100%" alt="Biophilic biotech lab"></a>
      <sub><strong>Biophilic Biotech Lab render</strong> · <code>"architecture"</code></sub>
    </td>
    <td width="50%" align="center">
      <a href="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/technical-illustration/car-powertrain-transparent-cutaway.png"><img src="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/technical-illustration/car-powertrain-transparent-cutaway.png" width="100%" alt="Car powertrain cutaway"></a>
      <sub><strong>Car Powertrain Transparent Cutaway</strong> · <code>"technical"</code> <code>"illustration"</code></sub>
    </td>
  </tr>
</table>
</details>

<details>
<summary><strong>📦 Product & 📋 Infographics</strong></summary>

<table>
  <tr>
    <td width="50%" align="center">
      <a href="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/product-food/product-dieline-box.png"><img src="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/product-food/product-dieline-box.png" width="100%" alt="3D product box from dieline"></a>
      <sub><strong>3D product box from dieline</strong> · <code>"product"</code> <code>"packaging"</code></sub>
    </td>
    <td width="50%" align="center">
      <a href="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/infographics-field-guides/camera-styles-infographic.png"><img src="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/infographics-field-guides/camera-styles-infographic.png" width="100%" alt="Camera styles infographic"></a>
      <sub><strong>Camera styles reference infographic</strong> · <code>"infographic"</code></sub>
    </td>
  </tr>
</table>
</details>

<details>
<summary><strong>📝 Typography & UI/UX</strong></summary>

<table>
  <tr>
    <td width="50%" align="center">
      <a href="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/typography-posters/pulp-scifi-cover.png"><img src="https://raw.githubusercontent.com/wuyoscar/GPT-Image2-Skill/main/docs/typography-posters/pulp-scifi-cover.png" width="100%" alt="Pulp sci-fi cover"></a>
      <sub><strong>1950s pulp sci-fi magazine cover</strong> · <code>"typography"</code> <code>"poster"</code></sub>
    </td>
    <td width="50%" align="center">
      <img src="icon.png" width="100%" alt="200+ more templates inside the extension">
      <sub><strong>...and 200+ more templates</strong> <br> Install the extension to browse the full collection</sub>
    </td>
  </tr>
</table>
</details>

> [!NOTE]
> All template preview images above are hot-linked from their original open-source repositories. Full prompt texts are available inside the Chrome extension.

---

## 🗂️ Full Category List

```
🎌 Anime & Manga         🏛️ Architecture           💄 Beauty & Lifestyle
🏷️ Brand & Identity      👤 Character Design        🎬 Cinematic & Animation
🎥 Film References       📊 Data Visualization      ✂️ Edit Endpoint
🎪 Events & Experience   👗 Fashion Editorial       🎨 Fine Art Painting
🎮 Gaming                🖼️ Illustration           📋 Infographics
🖌️ Ink & Chinese         📐 Isometric               📚 OpenAI Cookbook
📷 Photography           👾 Pixel Art               🍔 Product & Food
🔬 Research Paper Figs   🌃 Retro & Cyberpunk       🔭 Scientific & Educational
💻 Screen Photography    💉 Tattoo Design            ⚙️ Technical Illustration
🔤 Typography & Posters  📱 UI/UX Mockups           🖍️ Watercolor
🏛️ Game UI               📦 App / Web Design
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Platform | Chrome Extension — Manifest V3 |
| Sidebar | `chrome.sidePanel` API |
| UI | Vanilla HTML + CSS (dark theme) |
| LLM | OpenAI-compatible API via `fetch` |
| Storage | `chrome.storage.local` |
| Data | 207 templates aggregated from open-source galleries |

---

## 📄 File Structure

```
├── manifest.json       # Extension manifest (V3)
├── background.js       # Sidebar activation logic
├── sidepanel.html      # Main UI
├── styles.css          # Dark-theme styles
├── sidepanel.js        # Core logic (translate, sync, copy, lightbox)
├── templates.js        # 207 aggregated templates
├── icon.png            # Extension icon
├── NOTICE.md           # Attribution & license notices
├── LICENSE             # MIT
└── README.md           # This file
```

---

## 🙏 Acknowledgments

The prompt templates in this project are sourced from the following open-source projects:

- **[nexu-io/open-design](https://github.com/nexu-io/open-design)** — 46 original prompt templates (Apache 2.0)
- **[wuyoscar/GPT-Image2-Skill](https://github.com/wuyoscar/GPT-Image2-Skill)** — 162 curated prompt templates (MIT)

Preview images are hot-linked from the original repositories. See [NOTICE.md](./NOTICE.md) for full attribution.

---

## 📝 License

[MIT](./LICENSE) © 2026

---

<p align="center">
  <sub>Made for the AI art community · <a href="https://github.com/yuemokm/image2-promptick/issues">Feedback & Contributions welcome</a></sub>
</p>