# Image2 Promptick

> 侧边栏里的提示词灵感工具 · 207 个图片生成模板 + 中英双向翻译

从 [Open Design](https://github.com/nexu-io/open-design) 和 [GPT-Image2-Skill](https://github.com/wuyoscar/GPT-Image2-Skill) 的提示词画廊中精选整合，提供 Chrome 侧边栏便捷浏览、编辑和翻译。

## 功能

- **207 个提示词模板** — 涵盖动漫、建筑、品牌、游戏、摄影、UI/UX 等 30+ 分类
- **参考图** — 每张模板配缩略图，可查看完整大图
- **中英翻译** — 一键调用 LLM 翻译为中文
- **双向同步** — 改中文同步回写英文，改英文更新中文翻译
- **一键复制** — 中英文两侧均有复制按钮
- **自定义 LLM** — 兼容 OpenAI 格式 API（GPT、DeepSeek、volcengine 等）

## 安装

1. 打开 Chrome，进入 `chrome://extensions`
2. 开启「开发者模式」
3. 点击「加载已解压的扩展程序」，选择本项目目录
4. 点击工具栏图标打开侧边栏
5. 进入 ⚙️ 设置 LLM API，开始使用

## 文件结构

```
├── manifest.json       # Chrome Extension Manifest V3
├── background.js       # 侧边栏后台逻辑
├── sidepanel.html      # 主界面
├── styles.css          # 样式
├── sidepanel.js        # 核心逻辑
└── templates.js        # 207 个模板数据
```

## 致谢

本项目的提示词模板来源于：

- **[nexu-io/open-design](https://github.com/nexu-io/open-design)** — 开源设计工具，46 个原始提示词模板 (Apache 2.0)
- **[wuyoscar/GPT-Image2-Skill](https://github.com/wuyoscar/GPT-Image2-Skill)** — GPT Image 2 提示词画廊与技能，162 个精选模板 (MIT)

预览图直接引用自上述项目的原始仓库，版权归原作者所有。

## 许可证

MIT