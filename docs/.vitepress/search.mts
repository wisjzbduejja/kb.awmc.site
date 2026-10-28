import type { DefaultTheme } from 'vitepress'

export const search = {
  provider: 'local',
  options: {
    miniSearch: {
      searchOptions: {
        combineWith: 'AND',
        // Chinese fragments should match exactly; retain typo tolerance for Latin words.
        fuzzy: (term: string) => /\p{Script=Han}/u.test(term) ? false : 0.2
      },
      options: {
        // Keep this function self-contained: VitePress serializes it for the browser.
        tokenize: (text: string) => Array.from(
          new Intl.Segmenter('zh-CN', { granularity: 'word' }).segment(text)
        ).filter((part) => part.isWordLike).map((part) => part.segment)
      }
    },
    locales: {
      root: {
        translations: {
          button: {
            buttonText: '搜索文档...',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            displayDetails: '显示详细列表',
            resetButtonTitle: '重置搜索',
            backButtonTitle: '关闭搜索',
            noResultsText: '没有结果',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: '回车',
              navigateText: '切换',
              navigateUpKeyAriaLabel: '上箭头',
              navigateDownKeyAriaLabel: '下箭头',
              closeText: '关闭',
              closeKeyAriaLabel: 'Esc'
            }
          }
        }
      }
    }
  }
} satisfies DefaultTheme.Config['search']
