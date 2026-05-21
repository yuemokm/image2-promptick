<div align="center">

<h1>Image2 Promptick</h1>

<p>A Chrome sidebar extension featuring <strong>207 curated AI image prompt templates</strong> with a bilingual <strong>EN/CN translation editor</strong>.</p>

<p>
  <b>English</b> | <a href="README.zh-CN.md">中文</a>
</p>

<img src="https://img.shields.io/badge/Chrome-Extension-blue?logo=googlechrome" alt="Chrome Extension">
<img src="https://img.shields.io/badge/Manifest-V3-green" alt="Manifest V3">
<img src="https://img.shields.io/badge/License-MIT-yellow" alt="MIT License">

</div>

## Overview

**Image2 Promptick** is a Chrome sidebar extension that aggregates **207 curated AI image generation prompt templates** from open-source galleries ([Open Design](https://github.com/nexu-io/open-design) + [GPT-Image2-Skill](https://github.com/wuyoscar/GPT-Image2-Skill)), then lets you **translate** them into Chinese, **edit** bilingually, and **sync** changes between languages — all without leaving your current tab.

## Features

- **Browse & Filter** — 207 templates across 30+ categories with search and category filter
- **Translate** — One-click EN → CN translation via your own LLM
- **Bidirectional Sync** — Edit the Chinese, the LLM rewrites the English to match
- **Copy Buttons** — Copy EN or CN independently
- **Full-size Image Viewer** — Lightbox overlay for reference images, no tab switch
- **BYOK (Bring Your Own Key)** — Any OpenAI-compatible API (GPT, DeepSeek, volcengine, etc.)

## Installation

1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the extension folder.
5. Click the extension icon in the toolbar to open the side panel.
6. Click ⚙️ Settings to configure your LLM API.

## Usage

1. Scroll through the template gallery with thumbnails, or use the search bar and category filter.
2. Click any template card to open the editor.
3. Click **🌐 Translate to Chinese** to translate via LLM.
4. Modify the Chinese text.
5. Click **🔄 Sync English** — the LLM rewrites the English to match your edits.
6. Click **📋 Copy** to copy either side.
7. Click **📷 View Full Image** at the top of the editor for a lightbox preview.

## Gallery

> Preview images below are sourced from [Open Design](https://github.com/nexu-io/open-design) (Apache 2.0). Click any image to view full size.

| | | | |
|---|---|---|---|
| <a href="https://cms-assets.youmind.com/media/1776661968404_8a5flm_HGQc_KOaMAA2vt0.jpg"><img src="https://cms-assets.youmind.com/media/1776661968404_8a5flm_HGQc_KOaMAA2vt0.jpg" width="100%"></a><br><sub>3D Stone Staircase Evolution Infographic</sub> | <a href="https://cms-assets.youmind.com/media/1776756799880_c8u8w7_HGUKjjaasAAvVRa.jpg"><img src="https://cms-assets.youmind.com/media/1776756799880_c8u8w7_HGUKjjaasAAvVRa.jpg" width="100%"></a><br><sub>Anime Martial Arts Battle Illustration</sub> | <a href="https://cms-assets.youmind.com/media/1776699445498_ga2ry5_HGO7H0DWkAApdKK.jpg"><img src="https://cms-assets.youmind.com/media/1776699445498_ga2ry5_HGO7H0DWkAApdKK.jpg" width="100%"></a><br><sub>E-commerce Live Stream UI Mockup</sub> | <a href="https://raw.githubusercontent.com/nexu-io/open-design/main/assets/prompt-templates/image/game-screenshot-anime-fighting-game-captain-ryuuga-vs-kaze-renshin.jpg"><img src="https://raw.githubusercontent.com/nexu-io/open-design/main/assets/prompt-templates/image/game-screenshot-anime-fighting-game-captain-ryuuga-vs-kaze-renshin.jpg" width="100%"></a><br><sub>Game Screenshot - Anime Fighting Game: Captain Ryuuga vs Kaze Renshin</sub> |
| <a href="https://raw.githubusercontent.com/nexu-io/open-design/main/assets/prompt-templates/image/game-screenshot-three-kingdoms-guanyu-slaying-yanliang.jpg"><img src="https://raw.githubusercontent.com/nexu-io/open-design/main/assets/prompt-templates/image/game-screenshot-three-kingdoms-guanyu-slaying-yanliang.jpg" width="100%"></a><br><sub>Game Screenshot - Three Kingdoms ARPG: Guan Yu Slaying Yan Liang</sub> | <a href="https://raw.githubusercontent.com/nexu-io/open-design/main/assets/prompt-templates/image/game-screenshot-three-kingdoms-lyubu-yuanmen-archery.jpg"><img src="https://raw.githubusercontent.com/nexu-io/open-design/main/assets/prompt-templates/image/game-screenshot-three-kingdoms-lyubu-yuanmen-archery.jpg" width="100%"></a><br><sub>Game Screenshot - Three Kingdoms ARPG: Lü Bu's Yuanmen Archery</sub> | <a href="https://raw.githubusercontent.com/nexu-io/open-design/main/assets/prompt-templates/image/game-screenshot-three-kingdoms-zhaoyun-cradle-escape.jpg"><img src="https://raw.githubusercontent.com/nexu-io/open-design/main/assets/prompt-templates/image/game-screenshot-three-kingdoms-zhaoyun-cradle-escape.jpg" width="100%"></a><br><sub>Game Screenshot - Three Kingdoms ARPG: Zhao Yun's Cradle Escape at Changbanpo</sub> | <a href="https://raw.githubusercontent.com/nexu-io/open-design/main/assets/prompt-templates/image/game-ui-ancient-china-open-world-mmo-hud.jpg"><img src="https://raw.githubusercontent.com/nexu-io/open-design/main/assets/prompt-templates/image/game-ui-ancient-china-open-world-mmo-hud.jpg" width="100%"></a><br><sub>Game UI - Ancient China Open-World MMO HUD</sub> |
| <a href="https://cms-assets.youmind.com/media/1776662673014_nf0taw_HGRMNDybsAAGG88.jpg"><img src="https://cms-assets.youmind.com/media/1776662673014_nf0taw_HGRMNDybsAAGG88.jpg" width="100%"></a><br><sub>Illustrated City Food Map</sub> | <a href="https://raw.githubusercontent.com/nexu-io/open-design/main/assets/prompt-templates/image/illustration-crayon-kid-drawing-rework.jpg"><img src="https://raw.githubusercontent.com/nexu-io/open-design/main/assets/prompt-templates/image/illustration-crayon-kid-drawing-rework.jpg" width="100%"></a><br><sub>Illustration - Crayon Kid-Drawing Rework</sub> | <a href="https://raw.githubusercontent.com/nexu-io/open-design/main/assets/prompt-templates/image/infographic-otaku-dance-choreography-breakdown-gokurakujodo-16-panels.jpg"><img src="https://raw.githubusercontent.com/nexu-io/open-design/main/assets/prompt-templates/image/infographic-otaku-dance-choreography-breakdown-gokurakujodo-16-panels.jpg" width="100%"></a><br><sub>Infographic - Otaku Dance Choreography Breakdown (Gokuraku Jodo, 16 Panels)</sub> | <a href="https://cms-assets.youmind.com/media/1776699414289_t6mebs_HGQQxukbUAA_qc0.jpg"><img src="https://cms-assets.youmind.com/media/1776699414289_t6mebs_HGQQxukbUAA_qc0.jpg" width="100%"></a><br><sub>Momotaro Explainer Slide in Hybrid Style</sub> |
| <a href="https://cms-assets.youmind.com/media/1777453169843_ceq758_HG-nC89aQAApDXC.jpg"><img src="https://cms-assets.youmind.com/media/1777453169843_ceq758_HG-nC89aQAApDXC.jpg" width="100%"></a><br><sub>Profile / Avatar - Anime Girl to Cinematic Photo</sub> | <a href="https://cms-assets.youmind.com/media/1777367267771_teyn0r_HG74_nJaoAEM5oD.jpg"><img src="https://cms-assets.youmind.com/media/1777367267771_teyn0r_HG74_nJaoAEM5oD.jpg" width="100%"></a><br><sub>Profile / Avatar - Casual Fashion Grid Photoshoot</sub> | <a href="https://cms-assets.youmind.com/media/1777453132629_dmkonb_HG9Und1aYAAyo9g.jpg"><img src="https://cms-assets.youmind.com/media/1777453132629_dmkonb_HG9Und1aYAAyo9g.jpg" width="100%"></a><br><sub>Profile / Avatar - Cinematic South Asian Male Portrait with Vultures</sub> | <a href="https://cms-assets.youmind.com/media/1777453164993_mt5b69_HHDoWfeaUAEA6Vt.jpg"><img src="https://cms-assets.youmind.com/media/1777453164993_mt5b69_HHDoWfeaUAEA6Vt.jpg" width="100%"></a><br><sub>Profile / Avatar - Cyberpunk Anime Portrait with Neon Face Text</sub> |
| <a href="https://cms-assets.youmind.com/media/1777453164857_ghcikd_HG9U5wnbYAE3-76.jpg"><img src="https://cms-assets.youmind.com/media/1777453164857_ghcikd_HG9U5wnbYAE3-76.jpg" width="100%"></a><br><sub>Profile / Avatar - Hyper-Realistic Selfie Texture Prompts</sub> | <a href="https://cms-assets.youmind.com/media/1777367273368_hp9n0c_HG7mqKmb0AA1ecq.jpg"><img src="https://cms-assets.youmind.com/media/1777367273368_hp9n0c_HG7mqKmb0AA1ecq.jpg" width="100%"></a><br><sub>Profile / Avatar - Monochrome Studio Portrait</sub> | <a href="https://cms-assets.youmind.com/media/1777453186815_er6vgp_HG-IvNXaIAALR4b.jpg"><img src="https://cms-assets.youmind.com/media/1777453186815_er6vgp_HG-IvNXaIAALR4b.jpg" width="100%"></a><br><sub>Profile / Avatar - Old Photo Restoration to DSLR Portrait</sub> | <a href="https://cms-assets.youmind.com/media/1777453183422_nu32e1_HG9s-kFbMAACMYA.jpg"><img src="https://cms-assets.youmind.com/media/1777453183422_nu32e1_HG9s-kFbMAACMYA.jpg" width="100%"></a><br><sub>Profile / Avatar - Poetic Woman in Garden Portrait</sub> |
| <a href="https://cms-assets.youmind.com/media/1777453121103_le4xip_HG958SlbsAAESjg.jpg"><img src="https://cms-assets.youmind.com/media/1777453121103_le4xip_HG958SlbsAAESjg.jpg" width="100%"></a><br><sub>Profile / Avatar - Professional Identity Portrait Wallpaper</sub> | <a href="https://cms-assets.youmind.com/media/1777453151202_3usbgm_HHAkoXnaMAAFvsx.jpg"><img src="https://cms-assets.youmind.com/media/1777453151202_3usbgm_HHAkoXnaMAAFvsx.jpg" width="100%"></a><br><sub>Profile / Avatar - Realistically Imperfect AI Selfie</sub> | <a href="https://cms-assets.youmind.com/media/1777367317129_2rohn0_HG8hIdab0AAwzdp.jpg"><img src="https://cms-assets.youmind.com/media/1777367317129_2rohn0_HG8hIdab0AAwzdp.jpg" width="100%"></a><br><sub>Profile / Avatar - Signed Marker Portrait on Shikishi</sub> | <a href="https://cms-assets.youmind.com/media/1777453211568_as7go2_HG_dAFracAA38vJ.jpg"><img src="https://cms-assets.youmind.com/media/1777453211568_as7go2_HG_dAFracAA38vJ.jpg" width="100%"></a><br><sub>Profile / Avatar - Snowy Rabbit Hanfu Portrait</sub> |
| <a href="https://cms-assets.youmind.com/media/1777453209807_szh7zz_HG_c_-ca4AAz43H.jpg"><img src="https://cms-assets.youmind.com/media/1777453209807_szh7zz_HG_c_-ca4AAz43H.jpg" width="100%"></a><br><sub>Profile / Avatar - Snowy Rabbit Spirit Portrait</sub> | <a href="https://cms-assets.youmind.com/media/1777453126318_sew6kg_HG-PNvQbsAAup2e.jpg"><img src="https://cms-assets.youmind.com/media/1777453126318_sew6kg_HG-PNvQbsAAup2e.jpg" width="100%"></a><br><sub>Profile / Avatar - Song Dynasty Hanfu Portrait</sub> | <a href="https://cms-assets.youmind.com/media/1777453222738_l3artn_HG_koUwaAAAk7hW.jpg"><img src="https://cms-assets.youmind.com/media/1777453222738_l3artn_HG_koUwaAAAk7hW.jpg" width="100%"></a><br><sub>Social Media Post - Anime Pokémon Shop Outfit Teaser Poster</sub> | <a href="https://cms-assets.youmind.com/media/1777453149026_gd2k50_HHCSvymboAAVscc.jpg"><img src="https://cms-assets.youmind.com/media/1777453149026_gd2k50_HHCSvymboAAVscc.jpg" width="100%"></a><br><sub>Social Media Post - Cinematic Elevator Scene</sub> |
| <a href="https://cms-assets.youmind.com/media/1777453203838_2bzdt9_HHAXnBlbwAA5Ke4.jpg"><img src="https://cms-assets.youmind.com/media/1777453203838_2bzdt9_HHAXnBlbwAA5Ke4.jpg" width="100%"></a><br><sub>Social Media Post - Confused Elf Girl at Pastel Desk</sub> | <a href="https://cms-assets.youmind.com/media/1777453137877_aqjk7l_HHAumFda4AAVbjJ.jpg"><img src="https://cms-assets.youmind.com/media/1777453137877_aqjk7l_HHAumFda4AAVbjJ.jpg" width="100%"></a><br><sub>Social Media Post - Editorial Fashion Photography</sub> | <a href="https://cms-assets.youmind.com/media/1777453119180_2300fp_HHAlV58a8AA3CWq.jpg"><img src="https://cms-assets.youmind.com/media/1777453119180_2300fp_HHAlV58a8AA3CWq.jpg" width="100%"></a><br><sub>Social Media Post - Fashion Editorial Collage</sub> | <a href="https://cms-assets.youmind.com/media/1777453173788_tb78r0_HHDu7nUWQAAWH7O.jpg"><img src="https://cms-assets.youmind.com/media/1777453173788_tb78r0_HHDu7nUWQAAWH7O.jpg" width="100%"></a><br><sub>Social Media Post - PSG Transfer Announcement Poster</sub> |
| <a href="https://raw.githubusercontent.com/nexu-io/open-design/main/assets/prompt-templates/image/social-media-post-sensational-girl-dance-storyboard-8-shots.jpg"><img src="https://raw.githubusercontent.com/nexu-io/open-design/main/assets/prompt-templates/image/social-media-post-sensational-girl-dance-storyboard-8-shots.jpg" width="100%"></a><br><sub>Social Media Post - Sensational Girl Dance Storyboard (8 Shots)</sub> | <a href="https://cms-assets.youmind.com/media/1777453174956_qapj6l_HGy7GDlbYAAR6Np.jpg"><img src="https://cms-assets.youmind.com/media/1777453174956_qapj6l_HGy7GDlbYAAR6Np.jpg" width="100%"></a><br><sub>Social Media Post - Showa Day Retro Culture Magazine Cover</sub> | <a href="https://cms-assets.youmind.com/media/1777453151822_tkaefc_HG_wnqGbAAAq416.jpg"><img src="https://cms-assets.youmind.com/media/1777453151822_tkaefc_HG_wnqGbAAAq416.jpg" width="100%"></a><br><sub>Social Media Post - Social Media Fashion Outfit Generation</sub> | <a href="https://cms-assets.youmind.com/media/1777453145397_amcmoh_HG_1BaQb0AAKXrk.jpg"><img src="https://cms-assets.youmind.com/media/1777453145397_amcmoh_HG_1BaQb0AAKXrk.jpg" width="100%"></a><br><sub>Social Media Post - Travel Snapshot Collage Prompt</sub> |
| <a href="https://cms-assets.youmind.com/media/1777453138935_3hpxkg_HHC-7jObsAAWmsk.jpg"><img src="https://cms-assets.youmind.com/media/1777453138935_3hpxkg_HHC-7jObsAAWmsk.jpg" width="100%"></a><br><sub>Social Media Post - Vintage Sign-Painter Sketch</sub> | <a href="https://cms-assets.youmind.com/media/1776658772018_lukyfw_HGSUfldbIAEiMWZ.jpg"><img src="https://cms-assets.youmind.com/media/1776658772018_lukyfw_HGSUfldbIAEiMWZ.jpg" width="100%"></a><br><sub>VR Headset Exploded View Poster</sub> |

## Tech Stack

- Chrome Extension Manifest V3
- Side Panel API
- Vanilla HTML + CSS (dark theme)
- OpenAI-compatible LLM API
- chrome.storage.local

## File Structure

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
├── README.md           # This file (English)
└── README.zh-CN.md     # Chinese version
```

## Acknowledgments

The prompt templates in this project are sourced from:

- [nexu-io/open-design](https://github.com/nexu-io/open-design) — 46 original prompt templates (Apache 2.0)
- [wuyoscar/GPT-Image2-Skill](https://github.com/wuyoscar/GPT-Image2-Skill) — 162 curated prompt templates (MIT)

See [NOTICE.md](./NOTICE.md) for full attribution.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request on [GitHub](https://github.com/yuemokm/image2-promptick).

<div align="center">

Made with ❤️ for the AI art community.

</div>
