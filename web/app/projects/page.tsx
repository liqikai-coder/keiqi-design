import { PageHero } from "@/components/layout/page-hero";
import { House, Building2, Gem } from "lucide-react";

export const metadata = {
  title: "案例中心",
  description:
    "凯奇设计案例中心 · 别墅、大平层与私人会所作品正在整理中，即将上线。",
};

const CATEGORIES = [
  {
    icon: House,
    en: "Villa",
    name: "别墅",
    desc: "独栋 / 联排 / 庄园住宅",
  },
  {
    icon: Building2,
    en: "Penthouse",
    name: "大平层",
    desc: "城市豪宅 / 顶层复式",
  },
  {
    icon: Gem,
    en: "Club",
    name: "会所",
    desc: "商务会所 / 茶空间",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        en="Projects"
        title="案例中心"
        subtitle="每一套作品，都是一次独立命题。精选项目正在整理中。"
      />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          {/* 更新中状态 */}
          <div className="mx-auto max-w-xl rounded-2xl border border-keiqi-mist bg-keiqi-cream px-10 py-16 text-center">
            <div className="mx-auto mb-6 h-px w-16 bg-keiqi-red" />
            <h2 className="font-display text-3xl text-keiqi-ink md:text-4xl">
              案例持续更新中
            </h2>
            <p className="mt-4 text-sm leading-7 text-keiqi-ink/60">
              凯奇精选作品正在整理。每一套案例都将以真实的设计思路与工艺细节呈现，敬请期待。
            </p>
          </div>

          {/* 三分类预留 */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {CATEGORIES.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.name}
                  className="rounded-lg border border-keiqi-mist p-8 text-center transition-colors hover:border-keiqi-red/40"
                >
                  <Icon
                    className="mx-auto h-8 w-8 text-keiqi-ink/60"
                    strokeWidth={1.4}
                  />
                  <p className="font-display mt-4 text-xs uppercase tracking-[0.3em] text-keiqi-red">
                    {c.en}
                  </p>
                  <h3 className="font-display mt-2 text-2xl text-keiqi-ink">
                    {c.name}
                  </h3>
                  <p className="mt-2 text-sm text-keiqi-ink/50">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
