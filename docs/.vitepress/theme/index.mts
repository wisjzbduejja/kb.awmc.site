import DefaultTheme from 'vitepress/theme-without-fonts'
import { useData, type Theme } from 'vitepress'
import { defineComponent, h, nextTick, provide } from 'vue'
import './style.css'

export default {
  ...DefaultTheme,
  Layout: defineComponent({
    name: 'KnowledgeLayout',
    setup(_, { slots }) {
      const { isDark } = useData()
      let switching = false

      // Reuse VitePress's switch and saved preference; only replace its transition.
      provide('toggle-appearance', async () => {
        if (switching) return
        const nextDark = !isDark.value
        const updateTheme = async () => {
          isDark.value = nextDark
          await nextTick()
        }

        if (!document.startViewTransition ||
          matchMedia('(prefers-reduced-motion: reduce)').matches ||
          document.visibilityState !== 'visible') {
          await updateTheme()
          return
        }

        const root = document.documentElement
        switching = true
        root.dataset.themeTransition = nextDark ? 'dark' : 'light'
        try {
          await document.startViewTransition(updateTheme).finished
        } catch {
          // If the browser cannot capture the page, still apply the requested theme.
          await updateTheme()
        } finally {
          delete root.dataset.themeTransition
          switching = false
        }
      })

      return () => h(DefaultTheme.Layout, null, slots)
    }
  })
} satisfies Theme
