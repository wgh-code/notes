import { defineConfig } from "vitepress";
import nav from "./navigation/nav";
import sidebar from "./navigation/sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/notes/",
  title: "notes",
  description: "a study notes site",
  appearance: "dark",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    socialLinks: [
      { icon: "github", link: "https://github.com/wgh-code/notes" },
    ],
  },
  markdown: {
    theme: "github-dark",
  },
});
