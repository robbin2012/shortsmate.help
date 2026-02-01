import type { ReactNode } from "react";
import { Layout, Navbar, Footer, ThemeSwitch } from "nextra-theme-docs";
import Link from "next/link";
import { getPageMap } from "nextra/page-map";
import { notFound } from "next/navigation";
import "nextra-theme-docs/style.css";

const localeConfig: Record<
  string,
  { editLink: string; feedback: string; searchPlaceholder: string }
> = {
  "zh-CN": {
    editLink: "在 GitHub 编辑此页",
    feedback: "反馈或提问",
    searchPlaceholder: "搜索文档...",
  },
  en: {
    editLink: "Edit this page",
    feedback: "Give feedback",
    searchPlaceholder: "Search docs...",
  },
};

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "zh-CN";
  if (!localeConfig[lang]) {
    notFound();
  }
  const config = localeConfig[lang];
  const pageMap = await getPageMap(`/${lang}`);
  const navbar = (
    <Navbar logo={
      <div className="x:flex x:items-center x:gap-3">
        <img src="/logo.svg" alt={lang === "zh-CN" ? "帮助中心" : "Help Center"} width={40} height={40} />
        <span>{lang === "zh-CN" ? "帮助中心" : "Help Center"}</span>
      </div>
    } align="right" className="x:items-center x:gap-4">
      <div className="x:flex x:items-center x:gap-3">
        <ThemeSwitch />
        <details className="x:relative group">
          <summary className="x:list-none x:flex x:items-center x:gap-1 x:text-sm x:px-3 x:py-1 x:bg-gray-100 x:rounded-full x:cursor-pointer x:hover:bg-gray-200 x:text-gray-900 x:dark:bg-white/10 x:dark:text-gray-100 x:dark:hover:bg-white/20 x:select-none" tabIndex={0}>
            <span className="x:text-stone-900 x:dark:text-stone-200">🌍</span>
            {lang === "zh-CN" ? "中文" : "English"}
          </summary>
          <div className="x:rounded-lg x:border x:border-gray-200 x:bg-white x:shadow-lg x:absolute x:right-0 x:mt-2 x:min-w-[96px] x:py-1 x:text-sm x:dark:border-gray-700 x:dark:bg-neutral-900">
              {[
              { locale: "zh-CN", label: "中文" },
              { locale: "en", label: "English" },
            ].map((option) => (
              <Link
                key={option.locale}
                href={`/${option.locale}`}
                className="x:flex x:w-full x:items-center x:px-3 x:py-1 x:text-left x:text-gray-900 x:hover:bg-gray-100 x:dark:text-gray-100 x:dark:hover:bg-white/10"
              >
                {option.label}
              </Link>
            ))}
          </div>
        </details>
      </div>
    </Navbar>
  );
  const localeBase = `/${lang}`;

  return (
    <Layout
      navbar={navbar}
      search={null}
      footer={
        <Footer className="x:flex x:justify-center x:md:justify-center">
          <div className="x:w-full x:flex x:flex-col x:items-center x:gap-3 x:text-sm x:text-center">
            <div className="x:flex x:flex-wrap x:items-center x:justify-center x:gap-4">
              <a href="/" className="x:text-current x:hover:text-blue-500">
                {lang === "zh-CN" ? "首页" : "Home"}
              </a>
              <a href={localeBase} className="x:text-current x:hover:text-blue-500">
                {lang === "zh-CN" ? "帮助中心" : "Help Center"}
              </a>
              <a
                href="https://x.com/shortsmate"
                target="_blank"
                rel="noreferrer"
                className="x:text-current x:hover:text-blue-500"
              >
                {lang === "zh-CN" ? "Twitter(X)" : "Twitter(X)"}
              </a>
              <a
                href="https://www.tiktok.com/@shortsmate"
                target="_blank"
                rel="noreferrer"
                className="x:text-current x:hover:text-blue-500"
              >
                {lang === "zh-CN" ? "TikTok" : "TikTok"}
              </a>
              <a
                href="https://www.youtube.com/@shortsmate"
                target="_blank"
                rel="noreferrer"
                className="x:text-current x:hover:text-blue-500"
              >
                {lang === "zh-CN" ? "YouTube" : "YouTube"}
              </a>
            </div>
            <span>© 2026 ShortsMate</span>
          </div>
        </Footer>
      }
      editLink={config.editLink}
      docsRepositoryBase="https://github.com/your-org/help-center/blob/main"
      feedback={{ content: config.feedback }}
      pageMap={pageMap}
    >
      {children}
    </Layout>
  );
}
