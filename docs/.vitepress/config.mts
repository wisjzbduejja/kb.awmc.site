import { defineConfig } from 'vitepress'
import { createSidebar } from './sidebar.mts'
import { search } from './search.mts'

export default defineConfig({
  lang: 'zh-CN',
  title: 'AWMC 知识库',
  description: '基于 Markdown 驱动的个人知识库',
  appearance: 'dark',
  markdown: {
    math: true,
    breaks: true
  },
  themeConfig: {
    sidebar: createSidebar(),
    outline: { level: [2, 3], label: '本页目录' },
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色主题',
    darkModeSwitchTitle: '切换到深色主题',
    sidebarMenuLabel: '文档目录',
    returnToTopLabel: '返回顶部',
    skipToContentLabel: '跳转到正文',
    docFooter: { prev: '上一篇', next: '下一篇' },
    search
  }
})
