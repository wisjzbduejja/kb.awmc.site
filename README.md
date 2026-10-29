# AWMC 知识库

个人学习笔记与课程资料，使用 Markdown 编写，
通过 VitePress 生成静态网站，推送到 GitHub 后由 腾讯EdgeOne 构建发布。
可以访问kb.awmc.site在线阅读。

## 内容说明

笔记主要用于个人学习与复习，可能存在遗漏或错误。
校内课程内容以本人修读课程时的教学要求和作业为参考，
不同学期的要求可能有所不同。

## 本地运行

需要安装 Node.js 和 npm。在仓库根目录执行：

```sh
npm ci
npm run docs:dev
```

在浏览器中打开终端显示的地址。按 Ctrl+C 停止服务。

## 编写文档

- 在 docs/ 中按主题创建文件夹和 Markdown 文件。
- 侧边栏根据目录和文件名自动生成，无需逐篇配置。
- 可以使用数字文件名前缀控制同类文档的排列顺序。
- 新增、删除或重命名文档后，重启本地开发服务以更新侧边栏。
- 网站首页为 docs/index.md。
- Markdown 和公式写法可参考站内的 Markdown 与 LaTeX 使用指南。

## 项目结构

```text
docs/
├─ .vitepress/
│  ├─ config.mts       # 站点配置
│  ├─ sidebar.mts      # 自动生成侧边栏
│  ├─ search.mts       # 本地搜索与中文分词
│  └─ theme/           # 主题与样式
├─ index.md           # 网站首页
├─ Markdown指南/
└─ SUES校内课程/

package.json           # 项目依赖和运行命令
package-lock.json      # 依赖锁文件
```

## 构建与发布

发布前可在本地构建并预览：

```sh
npm run docs:build
npm run docs:preview
```

EdgeOne 构建配置：

| 项目 | 配置 |
| --- | --- |
| 项目根目录 | 仓库根目录 |
| 构建命令 | npm run docs:build |
| 输出目录 | docs/.vitepress/dist |

将修改推送到 EdgeOne 关联的 GitHub 部署分支后，由平台构建发布。