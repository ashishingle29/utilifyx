export default {
  base: "/utilifyx/", 
  title: "utilifyx",
  description: "Modern utility toolkit for JavaScript & TypeScript",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/overview" },
      { text: "GitHub", link: "https://github.com/ashishingle29/utilifyx" }
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          collapsed: false,
          items: [
            { text: "Overview", link: "/guide/overview" },
            { text: "Object Utilities", link: "/guide/objects" },
            { text: "Array Utilities", link: "/guide/arrays" },
            { text: "String Utilities", link: "/guide/strings" },
            { text: "Async Utilities", link: "/guide/async" },
            { text: "Date Utilities", link: "/guide/dates" },
            { text: "Validation Utilities", link: "/guide/validation" }
          ]
        }
      ]
    }
  }
};
