// import mermaidPlugin from "./plugins/mermaidPlugin";

// const commonPath = "/menu3";
// // 从环境变量读取版本号
// const version = process.env.DOCS_VERSION || "latest";

// // 解析所有可用版本
// let allVersions = ["latest"];
// try {
//   const versionsEnv = process.env.ALL_VERSIONS;

//   if (versionsEnv) {
//     allVersions = ["latest", ...JSON.parse(versionsEnv)];
//   }
// } catch (e) {
//   console.warn("Failed to parse ALL_VERSIONS:", e);
// }

// export default {
//   base: `/VitePress-Pages-Vsersions/${version}/`,
//   title: `小甘博客 ${version === "latest" ? "latest" : version}`,
//   // 默认语言（中文）
//   lang: "zh-CN",
//   description: "小甘博客", // 会渲染成<meta>标签，SEO用
//   markdown: {
//     config: (md) => {
//       md.use(mermaidPlugin);
//     },
//   },
//   locales: {
//     root: {
//       label: "简体中文",
//       lang: "zh-CN",
//       themeConfig: {
//         siteTitle: "小甘博客",
//         logo: "/logo.jpg",
//         nav: [
//           {
//             text: "前端",
//             link: "/Pages/FrontEnd/index",
//             activeMatch: "/Pages/FrontEnd/",
//           },
//           {
//             text: "python",
//             link: "/Pages/Python/index",
//             activeMatch: "/Pages/Python/index",
//           },
//           {
//             text: "后端",
//             link: "/Pages/RearEnd/index",
//             activeMatch: "/Pages/RearEnd/index",
//           },
//           { text: "测试", link: "/menu3/", activeMatch: "/menu3/" },
//           {
//             text: version === "latest" ? "📌 最新版" : `📌 ${version}`,
//             items: allVersions.map((v) => ({
//               text: v === "latest" ? "最新版 (latest)" : v,
//               link: `https://xiaoganwudi.github.io/VitePress-Pages-Vsersions/${v}/`,
//             })),
//           },
//         ],
//         // 设置nav的侧边导航栏
//         sidebar: {
//           "/Pages/FrontEnd/": [
//             {
//               text: "Quill富文本组件",
//               collapsible: true,
//               collapsed: false,
//               items: [
//                 { text: "测试1", link: `/Pages/FrontEnd/01-Quill.md` }, // /guide/index.md
//                 { text: "测试2", link: `/Pages/FrontEnd/02-Quill.md` }, // /guide/one.md
//               ],
//             },
//             {
//               text: "section 菜单3",
//               collapsible: true,
//               collapsed: false,
//               items: [
//                 { text: "测试3", link: `/Pages/FrontEnd/01-Quill.md` }, // /guide/index.md
//                 { text: "测试4", link: `/Pages/FrontEnd/02-Quill.md` }, // /guide/one.md
//               ],
//             },
//           ],
//           "/menu3/": [
//             {
//               text: "section 菜单3",
//               collapsible: true,
//               collapsed: false,
//               items: [
//                 { text: "a", link: `${commonPath}/a.md` }, // /guide/index.md
//                 { text: "b", link: `${commonPath}/b.md` }, // /guide/one.md
//               ],
//             },
//             {
//               text: "menu3 section 2",
//               collapsible: true,
//               collapsed: false,
//               items: [
//                 { text: "c", link: `${commonPath}/c.md` }, // /guide/two.md
//                 { text: "d", link: `${commonPath}/d.md` }, // /guide/one.md
//               ],
//             },
//           ],
//         },
//         socialLinks: [
//           { icon: "github", link: "https://github.com/vuejs/vitepress" },
//           { icon: "twitter", link: "..." },
//           { icon: "discord", link: "..." },
//         ],

//         footer: {
//           message: "Released under the MIT License.",
//           copyright: "Copyright © 2022-present feiye",
//         },

//         docFooter: {
//           prev: "上一篇",
//           next: "下一篇",
//         },

//         darkModeSwitchLabel: "主题",
//         sidebarMenuLabel: "菜单",
//         returnToTopLabel: "回到顶部",
//         langMenuLabel: "多语言",
//         outlineTitle: "所有内容👇",
//       },
//     }
//   },
// };

import mermaidPlugin from "./plugins/mermaidPlugin";

const commonPath = "/menu3";
const version = process.env.DOCS_VERSION || "latest";

// 动态版本列表
let allVersions = ["latest"];
try {
  const versionsEnv = process.env.ALL_VERSIONS;
  if (versionsEnv) {
    allVersions = ["latest", ...JSON.parse(versionsEnv)];
  }
} catch (e) {
  console.warn("Failed to parse ALL_VERSIONS:", e);
}

export default {
  base: `/VitePress-Pages-Vsersions/${version}/`,
  title: `小甘博客 ${version === "latest" ? "latest" : version}`,
  lang: "zh-CN",
  description: "小甘博客",
  markdown: {
    config: (md) => {
      md.use(mermaidPlugin);
    },
  },

  // 🚀 多语言配置入口
  locales: {
    // ------------------------------
    // 中文（默认 root）
    // ------------------------------
    root: {
      label: "简体中文",
      lang: "zh-CN",
      themeConfig: {
        siteTitle: "小甘博客",
        logo: "/logo.jpg",

        nav: [
          {
            text: "前端",
            link: "/Pages/FrontEnd/index",
            activeMatch: "/Pages/FrontEnd/",
          },
          {
            text: "python",
            link: "/Pages/Python/index",
            activeMatch: "/Pages/Python/index",
          },
          {
            text: "后端",
            link: "/Pages/RearEnd/index",
            activeMatch: "/Pages/RearEnd/index",
          },
          { text: "测试", link: "/menu3/", activeMatch: "/menu3/" },
          {
            text: version === "latest" ? "📌 最新版" : `📌 ${version}`,
            items: allVersions.map((v) => ({
              text: v === "latest" ? "最新版 (latest)" : v,
              link: `https://xiaoganwudi.github.io/VitePress-Pages-Vsersions/${v}/`,
            })),
          },
        ],

        sidebar: {
          "/Pages/FrontEnd/": [
            {
              text: "Quill富文本组件",
              collapsible: true,
              collapsed: false,
              items: [
                { text: "测试1", link: `/Pages/FrontEnd/01-Quill.md` },
                { text: "测试2", link: `/Pages/FrontEnd/02-Quill.md` },
              ],
            },
          ],
          "/menu3/": [
            {
              text: "section 菜单3",
              collapsible: true,
              collapsed: false,
              items: [
                { text: "a", link: `${commonPath}/a.md` },
                { text: "b", link: `${commonPath}/b.md` },
              ],
            },
          ],
        },

        // ---------- ↓ 语言菜单（中文） ----------
        langMenuLabel: "多语言",
        darkModeSwitchLabel: "主题",
        sidebarMenuLabel: "菜单",
        returnToTopLabel: "回到顶部",
        outlineTitle: "所有内容👇",
      },
    },

    // ------------------------------
    // 英文（新增）
    // ------------------------------
    en: {
      label: "English",
      lang: "en-US",
      link: "/en/", // 英文根目录

      themeConfig: {
        siteTitle: "XiaoGan Blog",
        logo: "/logo.jpg",

        nav: [
          {
            text: "Frontend",
            link: "/en/Pages/FrontEnd/index",
            activeMatch: "/en/Pages/FrontEnd/",
          },
          {
            text: "Python",
            link: "/en/Pages/Python/index",
            activeMatch: "/en/Pages/Python/",
          },
          {
            text: "Backend",
            link: "/en/Pages/RearEnd/index",
            activeMatch: "/en/Pages/RearEnd/",
          },
          { text: "Menu3", link: "/en/menu3/", activeMatch: "/en/menu3/" },
          {
            text: version === "latest" ? "📌 Latest" : `📌 ${version}`,
            items: allVersions.map((v) => ({
              text: v === "latest" ? "Latest (latest)" : v,
              link: `https://xiaoganwudi.github.io/VitePress-Pages-Vsersions/${v}/en/`,
            })),
          },
        ],

        sidebar: {
          "/en/Pages/FrontEnd/": [
            {
              text: "Quill Editor",
              collapsible: true,
              collapsed: false,
              items: [
                { text: "Demo1", link: `/en/Pages/FrontEnd/01-Quill.md` },
                { text: "Demo2", link: `/en/Pages/FrontEnd/02-Quill.md` },
              ],
            },
          ],
          "/en/menu3/": [
            {
              text: "Menu 3 Section",
              collapsible: true,
              collapsed: false,
              items: [
                { text: "a", link: `/en/menu3/a.md` },
                { text: "b", link: `/en/menu3/b.md` },
              ],
            },
          ],
        },

        // ----------- ↓ 英文标签 ----------
        langMenuLabel: "Languages",
        darkModeSwitchLabel: "Theme",
        sidebarMenuLabel: "Menu",
        returnToTopLabel: "Back to top",
        outlineTitle: "Contents👇",
      },
    },
  },
};
