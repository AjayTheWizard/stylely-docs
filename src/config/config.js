const { description } = require("../../package");
const { defaultTheme } = require("vuepress");

module.exports = {
  title: "Stylely",
  description,
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],
  theme: defaultTheme({
    repo: "AjayTheWizard/stylely",
    repoLabel: "Github",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    search: false,
    navbar: [
      {
        text: "Docs",
        link: "/docs/intro",
      },
      {
        text: "Configure",
        link: "/configure",
      },
    ],
    sidebar: {
      "/docs/": [
        {
          title: "Guide",
          collapsable: false,
          children: [
            "/docs/intro",
            "/docs/getting-started",
            "/docs/shorthand-props",
            "/docs/pseudo-selector",
            "/docs/responsive",
            {
              link: "/docs/color",
              text: "Colors",
            },
          ],
        },
      ],
    },
    editLink: false,
  }),
};
