import { readdirSync, statSync } from 'node:fs'
import { dirname, extname, relative, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress'

const docsRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const excludedDirs = new Set(['.vitepress', '.obsidian', 'node_modules'])
const excludedFiles = new Set(['index.md'])

function normalizePath(path: string) {
  return path.split(sep).join('/')
}

function trimMarkdownExt(fileName: string) {
  return fileName.replace(/\.md$/i, '')
}

function compareByName(a: string, b: string) {
  return a.localeCompare(b, 'zh-CN', {
    numeric: true,
    sensitivity: 'base'
  })
}

function createSidebarItems(dir: string): DefaultTheme.SidebarItem[] {
  const entries = readdirSync(dir)
    .map((name) => {
      const fullPath = resolve(dir, name)
      const stats = statSync(fullPath)

      return {
        name,
        fullPath,
        isDirectory: stats.isDirectory(),
        isMarkdown: stats.isFile() && extname(name).toLowerCase() === '.md'
      }
    })
    .filter((entry) => {
      if (entry.isDirectory) return !excludedDirs.has(entry.name)
      if (entry.isMarkdown) return !excludedFiles.has(entry.name)
      return false
    })
    .sort((a, b) => {
      if (a.isDirectory !== b.isDirectory) return a.isDirectory ? 1 : -1
      return compareByName(a.name, b.name)
    })

  return entries.flatMap((entry): DefaultTheme.SidebarItem[] => {
    if (entry.isDirectory) {
      const items = createSidebarItems(entry.fullPath)

      return items.length
        ? [{ text: entry.name, collapsed: false, items }]
        : []
    }

    const relativePath = normalizePath(relative(docsRoot, entry.fullPath))
    const link = `/${trimMarkdownExt(relativePath)}`

    return [{ text: trimMarkdownExt(entry.name), link }]
  })
}

const sidebar = createSidebarItems(docsRoot)

export default defineConfig({
  lang: 'zh-CN',
  title: 'AWMC 知识库',
  description: '基于 Markdown 驱动的个人知识库',

  markdown: {
    math: true
  },

  themeConfig: {
    sidebar,

    outline: {
      level: [2, 3],
      label: '本页目录'
    },

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
    }
  }
})
