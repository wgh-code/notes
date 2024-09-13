import javascriptSidebar from "./javascript";
import typescriptSidebar from "./typescript";

export default {
  "/": [
    {
      items: [{ text: "导读", link: "/" }],
    },
  ],
  "/javascript/": javascriptSidebar,
  "/typescript/": typescriptSidebar,
};
