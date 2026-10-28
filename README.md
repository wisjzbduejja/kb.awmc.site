# AWMC 知识库

使用 Markdown 维护笔记，VitePress 生成静态网站，推送 GitHub 后由 EdgeOne 构建发布。

## 本地运行

本地需要 Node.js（含 npm）。本次构建使用 Node.js 24.22.1。浏览器需支持 `Intl.Segmenter`。

在项目文件夹打开终端，首次使用或锁文件更新后先安装依赖：

```sh
npm ci
npm run docs:dev
```

终端显示地址后，用浏览器打开，默认是 `http://localhost:5173/`；若端口已被占用，以终端实际显示的地址为准。编辑已有文档会自动刷新；新增、删除或重命名文档后，重启命令以更新侧边栏。按 `Ctrl+C` 停止服务。

若依赖已经安装，也可直接运行 `node node_modules/vitepress/bin/vitepress.js dev docs`。

发布前检查：

```sh
npm run docs:build
npm run docs:preview
```

预览生成的网站默认使用 `http://localhost:4173/`。

## 使用 Obsidian 编辑

在 Obsidian 中选择“打开文件夹作为仓库”，打开本项目的 `docs/` 文件夹即可。原有的两套旧电脑配置已清理；Obsidian 会按需生成本机 `.obsidian/`，该目录已加入 Git 忽略规则，不影响文档发布。

## 界面约定

默认深色，可通过右上角的太阳／月亮按钮切换浅色，选择会在本机浏览器保存。使用系统字体，不加载默认 Inter 字体资源。

主题切换复用 VitePress 的 `toggle-appearance` 扩展点和浏览器原生 View Transitions API：变浅时从左向右展开，变深时从右向左展开，按钮本身不做渐变。逻辑在 `docs/.vitepress/theme/index.mts`，裁切动画在 `style.css`，时长由 `--kb-theme-motion` 控制（默认 280ms）。不支持 API、页面不可见或系统开启“减少动态效果”时直接切换；动画期间忽略重复切换，避免重叠。

颜色、字号、间距、控件尺寸、圆角与动效集中在 `docs/.vitepress/theme/style.css` 的 `--kb-*` 变量中。正文 16px，控件文字 14px，辅助文字 13px，标题采用 32／24／20px。换行仅设置 `markdown.breaks: true`，使用默认渲染器和正文空白规则：一次回车换行，空一行换段，行尾反斜杠或两个空格也可换行。代码块的原始换行保持不变。

圆角统一使用原生 CSS `corner-shape: squircle`，轮廓随组件实际尺寸计算；该接口没有 0～1 的平滑参数。旧浏览器不支持时会降级为普通 `border-radius`，降级后不是连续曲率圆角。界面尊重系统的“减少动态效果”设置。

导航样式针对当前无顶部菜单、无多语言菜单的结构，让主题按钮在桌面和手机上直接可见；以后添加这些菜单时，应同步调整 `style.css` 中隐藏 `VPNavBarExtra`、`VPNavBarHamburger` 的规则。

EdgeOne 构建命令为 `npm run docs:build`，输出目录为 `docs/.vitepress/dist`。云端安装应包含开发依赖，因为生成静态页面需要 VitePress 和公式插件。

## 依赖与锁文件

`package.json` 声明依赖范围；`package-lock.json` 记录确切版本及完整依赖关系，需一起提交。日常安装使用 `npm ci`；有意调整依赖时使用 `npm install` 更新锁文件，再验证干净安装与构建。

## 代码位置

- `docs/`：笔记正文，不需要为普通笔记添加脚本或样式。
- `docs/.vitepress/config.mts`：站点配置入口。
- `docs/.vitepress/sidebar.mts`：自动扫描目录；保持文件名排序，目录默认收起，当前文章的祖先目录由 VitePress 自动展开。
- `docs/.vitepress/search.mts`：搜索翻译与中文分词。分词函数会被序列化到浏览器，不能引用仅存在于构建端的外部变量。查询词采用 AND 组合，中文不做拼写模糊匹配。
- `docs/.vitepress/theme/style.css`：现有外观、正文宽度、换行及公式滚动样式。

数学支持依赖 `markdown-it-mathjax3`，由 `markdown.math: true` 间接启用，不应删除。DSP 已按章节拆为三篇文档；公式密集的单篇仍可能产生大 chunk 提示，这是警告，不影响构建完成。

原有 `npm run deploy` 会暂存全部改动、提交并推送；使用前请检查待提交文件，并先运行构建。
