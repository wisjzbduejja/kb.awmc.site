import { readdirSync } from 'node:fs'
import { dirname, extname, relative, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { DefaultTheme } from 'vitepress'

const docsRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const excludedDirs = new Set(['.vitepress', '.obsidian', 'node_modules'])
const compareNames = new Intl.Collator('zh-CN', { numeric: true, sensitivity: 'base' }).compare

export function createSidebar(dir = docsRoot): DefaultTheme.SidebarItem[] {
  return readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory()
      ? !excludedDirs.has(entry.name)
      : entry.isFile() && extname(entry.name).toLowerCase() === '.md' && entry.name !== 'index.md')
    .sort((a, b) => Number(a.isDirectory()) - Number(b.isDirectory()) || compareNames(a.name, b.name))
    .flatMap((entry): DefaultTheme.SidebarItem[] => {
      const fullPath = resolve(dir, entry.name)
      if (entry.isDirectory()) {
        const items = createSidebar(fullPath)
        return items.length ? [{ text: entry.name, collapsed: true, items }] : []
      }
      return [{
        text: entry.name.replace(/\.md$/i, ''),
        link: '/' + relative(docsRoot, fullPath).split(sep).join('/').replace(/\.md$/i, '')
      }]
    })
}
