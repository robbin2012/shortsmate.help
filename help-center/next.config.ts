import type { NextConfig } from "next";
import nextra from "nextra";

const withNextra = nextra({
  contentDirBasePath: "/",
  staticImage: true,
  unstable_shouldAddLocaleToLinks: true,
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  i18n: {
    locales: ["zh-CN", "en"],
    defaultLocale: "zh-CN",
  },
};

export default withNextra(nextConfig);
