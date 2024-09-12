import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/notes/",
  title: "notes",
  description: "a study notes site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Javascript", link: "/javascript/" },
      { text: "Typescript", link: "/typescript/" },
    ],

    sidebar: {
      "/": [
        {
          text: "简介",
          items: [{ text: "导读", link: "/" }],
        },
      ],
      "/javascript/": [
        {
          text: "js进阶",
          items: [{ text: "作用域、作用域链", link: "/javascript/" }],
        },
      ],
      "/typescript/": [
        {
          text: "Typescript进阶",
          items: [{ text: "泛型", link: "/typescript/" }],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/wgh-code/notes" },
    ],
  },
});
