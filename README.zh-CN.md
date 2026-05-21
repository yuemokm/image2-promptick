<div align="center">

<h1>Image2 Promptick</h1>

<p>一个 Chrome 侧边栏插件，集成 <strong>207 个精选 AI 图片提示词模板</strong> 与 <strong>中英双语翻译编辑器</strong>。</p>

<p>
  <a href="README.md">English</a> | <b>中文</b>
</p>

<img src="https://img.shields.io/badge/Chrome-Extension-blue?logo=googlechrome" alt="Chrome 扩展">
<img src="https://img.shields.io/badge/Manifest-V3-green" alt="Manifest V3">
<img src="https://img.shields.io/badge/License-MIT-yellow" alt="MIT License">

</div>

## 概述

**Image2 Promptick** 是一个 Chrome 侧边栏插件，聚合了来自开源画廊（[Open Design](https://github.com/nexu-io/open-design) + [GPT-Image2-Skill](https://github.com/wuyoscar/GPT-Image2-Skill)）的 **207 个精选 AI 图片生成提示词模板**，并提供**中英双语翻译编辑器**——浏览、翻译、编辑、同步，无需离开当前页面。

## 功能

- **浏览与筛选** — 207 个模板，30+ 分类，支持搜索和分类筛选
- **一键翻译** — 调用自有 LLM 将英文提示词翻译为中文
- **双向同步** — 修改中文后，LLM 自动更新英文，反之亦然
- **独立复制** — 中英文两侧均有复制按钮
- **大图预览** — 灯箱弹窗查看参考图，不跳新窗口
- **BYOK** — 兼容任意 OpenAI 格式 API（GPT、DeepSeek、火山引擎等）

## 安装

1. 克隆或下载本仓库。
2. 打开 Chrome，进入 `chrome://extensions/`。
3. 开启右上角 **开发者模式**。
4. 点击 **加载已解压的扩展程序**，选择本项目文件夹。
5. 点击工具栏插件图标打开侧边栏。
6. 点击 ⚙️ 设置 LLM API 后即可使用。

## 使用方法

1. 侧边栏滚动浏览模板卡片，使用搜索框和分类下拉筛选。
2. 点击任意模板卡片进入编辑视图。
3. 点击 **🌐 翻译为中文** —— LLM 自动翻译。
4. 修改中文内容。
5. 点击 **🔄 同步英文** —— LLM 根据新中文重写英文提示词。
6. 点击 **📋 复制** 复制任意一侧。
7. 点击 **📷 查看完整图** 弹出灯箱大图预览。

## 模板预览

> 以下预览图来自 [Open Design](https://github.com/nexu-io/open-design) (Apache 2.0)。点击图片查看完整尺寸。

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

## 技术栈

- Chrome Extension Manifest V3
- Side Panel API
- 原生 HTML + CSS（暗色主题）
- OpenAI 兼容 LLM API
- chrome.storage.local

## 文件结构

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
├── README.md           # 英文说明
└── README.zh-CN.md     # 中文说明
```

## 致谢

本项目提示词模板来源于：

- [nexu-io/open-design](https://github.com/nexu-io/open-design) — 46 个原始提示词模板 (Apache 2.0)
- [wuyoscar/GPT-Image2-Skill](https://github.com/wuyoscar/GPT-Image2-Skill) — 162 个精选提示词模板 (MIT)

详见 [NOTICE.md](./NOTICE.md)。

## 贡献

欢迎提交 Issue 或 Pull Request：[GitHub](https://github.com/yuemokm/image2-promptick)。

<div align="center">

为 AI 创作社区而生 ❤️

</div>