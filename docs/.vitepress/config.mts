import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

export default defineConfig({
  title: "首页",
  lang: 'zh-CN',
  description: "基于 Markdown 驱动的个人知识库",
  
  // 【重要】markdown 配置必须与 themeConfig 平级，放在最外层对象中
  markdown: {
    math: true, // ⚠️ 关键修复：你原来这里漏掉了一个逗号，会导致配置文件报错崩溃！
  },
  
  themeConfig: {
    // 侧边栏配置
    sidebar: generateSidebar({
      documentRootPath: 'docs',   // 🎯 修复 1：去掉前面的斜杠，改为相对路径
      scanStartPath: null,        // 🎯 修复 2：明确扫描起点，防止路径偏移
      collapsed: false,
      capitalizeFirst: true,
      useTitleFromFileHeading: false,
      excludeFolders: ['.vitepress', 'node_modules'] // 🎯 修复 3：排除掉不需要扫描的系统文件夹
    }),

    // 搜索汉化配置
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档...',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    }
  }
})