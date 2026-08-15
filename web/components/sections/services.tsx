import Link from "next/link";
import { PenTool, Hammer, HeartPulse, LayoutGrid } from "lucide-react";

const SYSTEMS = [
  {
    icon: PenTool,
    title: "定制设计",
    desc: "一户一案，从生活方式出发，不复制任何方案。",
    href: "/design",
  },
  {
    icon: Hammer,
    title: "凯奇精工体系™",
    desc: "标准化工艺与精细化施工，让高端可被验收。",
    href: "/craftsmanship",
  },
  {
    icon: HeartPulse,
    title: "凯奇健康住宅体系™",
    desc: "无醛板材与辅材，环保验收交付。",
    href: "/healthy-home",
  },
  {
    icon: LayoutGrid,
    title: "日本整体厨卫™",
    desc: "以日本住宅逻辑重构厨卫、收纳与家政效率。",
    href: "/japanese-living",
  },
];

export function Services() {
  return (
    <section className="bg-keiqi-cream px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <div className="mx-auto mb-5 h-px w-16 bg-keiqi-red" />
          <h2 className="font-display text-4xl text-keiqi-ink md:text-5xl">
            四大体系 · 凯奇标准
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-lg border border-keiqi-mist bg-keiqi-mist md:grid-cols-2 lg:grid-cols-4">
          {SYSTEMS.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.title}
                href={s.href}
                className="group flex flex-col bg-keiqi-cream p-8 transition-colors hover:bg-white"
              >
                <Icon
                  className="h-8 w-8 text-keiqi-ink transition-colors group-hover:text-keiqi-red"
                  strokeWidth={1.4}
                />
                <h3 className="font-display mt-6 text-2xl text-keiqi-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-keiqi-ink/60">
                  {s.desc}
                </p>
                <span className="mt-6 text-xs tracking-wide text-keiqi-red opacity-0 transition-opacity group-hover:opacity-100">
                  了解详情 →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
