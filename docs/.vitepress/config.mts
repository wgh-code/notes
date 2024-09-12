import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/notes/',
  title: "notes",
  description: "a study notes site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Javascript', link: '/javascript/index' },
    ],

    sidebar: [
      {
        text: '进阶',
        items: [
          { text: '作用域、作用域链', link: '/javascript/index' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wgh-code/notes' }
    ]
  }
})
