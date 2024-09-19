import javascriptSidebar from "./javascript";
import typescriptSidebar from "./typescript";

export default {
  "/": [
    {
      text: '导读',
      items: [{ text: "javascript大纲", link: "/" }],
    },
  ],
  "/javascript/": javascriptSidebar,
  "/typescript/": typescriptSidebar,
};
