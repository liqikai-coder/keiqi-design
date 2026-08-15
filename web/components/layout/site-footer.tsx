import Link from "next/link";
import { Logo } from "@/components/brand/logo";

const COLUMNS = [
  {
    title: "导航",
    links: [
      { label: "首页", href: "/" },
      { label: "案例中心", href: "/projects" },
      { label: "AI 设计顾问", href: "/ai-designer" },
      { label: "关于凯奇", href: "/about" },
    ],
  },
  {
    title: "四大体系",
    links: [
      { label: "定制设计", href: "/design" },
      { label: "凯奇精工体系™", href: "/craftsmanship" },
      { label: "健康住宅体系™", href: "/healthy-home" },
      { label: "日本整体厨卫™", href: "/japanese-living" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-keiqi-line bg-keiqi-night-2 text-keiqi-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <Logo inverted />
          <p className="mt-4 max-w-xs text-sm leading-7 text-keiqi-cream/55">
            凯奇设计 · 高端住宅空间定制机构。设计的不只是房子，而是未来十年的生活方式。
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-keiqi-gold-soft/80">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-keiqi-cream/70 transition-colors hover:text-keiqi-gold-soft"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-keiqi-gold-soft/80">
            联系
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-keiqi-cream/70">
            <li>电话：400-888-0688</li>
            <li>微信：keiqi-design</li>
            <li>邮箱：hello@keiqi.design</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-keiqi-line/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-keiqi-cream/35 sm:flex-row pb-24 md:pb-6">
          <span>© 2026 KEIQI DESIGN 凯奇设计 · 高端住宅空间定制机构</span>
          <Link
            href="/submissions"
            className="transition-colors hover:text-keiqi-gold-soft"
          >
            需求汇总
          </Link>
        </div>
      </div>
    </footer>
  );
}
