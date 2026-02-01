import type { useThemeConfig } from "nextra-theme-docs";

const config = {
  logo: {
    text: "帮助中心 / Help Center",
  },
  docsRepositoryBase: "https://github.com/your-org/help-center/tree/main",
  footer: {
    content: {
      "zh-CN": "帮助中心文档",
      "en": "Help Center Docs",
    },
  },
  feedback: {
    content: {
      "zh-CN": "反馈或提问",
      "en": "Feedback or Questions",
    },
  },
  editLink: {
    content: {
      "zh-CN": "在 GitHub 编辑此页",
      "en": "Edit this page on GitHub",
    },
  },
  toc: {
    title: {
      "zh-CN": "",
      "en": "On This Page",
    },
  },
  i18n: [
    { locale: "zh-CN", text: "中文" },
    { locale: "en", text: "English" },
  ],
};

export default config;
