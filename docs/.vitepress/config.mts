import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

export default defineConfig({
  title: "目录",
  lang: 'zh-CN',
  description: "基于 Markdown 驱动的个人知识库",
  
  // 【重要】markdown 配置必须与 themeConfig 平级，放在最外层对象中
  markdown: {
    math: true
  },
  
  themeConfig: {
    // 侧边栏配置
    sidebar: generateSidebar({
      documentRootPath: '/docs',
      collapsed: false,
      capitalizeFirst: true,
      useTitleFromFileHeading: true
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