import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import {
  CookingPot,
  Bath,
  Boxes,
  Broom,
  PersonStanding,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "日本整体厨卫™",
  description:
    "日本整体厨卫体系™ · 整体厨房、整体卫浴、收纳系统、家政系统与适老化系统。以日本住宅设计逻辑，重构居住效率。",
};

const MODULES = [
  {
    icon: CookingPot,
    title: "整体厨房",
    desc: "人机工学动线、模块化收纳与高效排烟，烹饪变成享受。",
  },
  {
    icon: Bath,
    title: "整体卫浴",
    desc: "干湿分离、同层排水与一体成型，洁净易打理。",
  },
  {
    icon: Boxes,
    title: "收纳系统",
    desc: "按家庭物品逻辑规划收纳，让家越住越大。",
  },
  {
    icon: Broom,
    title: "家政系统",
    desc: "洗衣、清洁与污净分流动线，家务效率倍增。",
  },
  {
    icon: PersonStanding,
    title: "适老化系统",
    desc: "无障碍动线、安防与辅助设施，陪伴长久居住。",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        en="Japanese Living™"
        title="日本整体厨卫™"
        subtitle="以日本住宅设计逻辑，重构居住效率。从厨卫到收纳、家政与适老化，让每一寸空间都被认真对待。"
        bgImage="/images/pexels/35680939.jpg"
      />

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <div className="mx-auto mb-5 h-px w-16 bg-keiqi-red" />
            <h2 className="font-display text-4xl text-keiqi-ink md:text-5xl">
              五大模块
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.title}
                  className="rounded-lg border border-keiqi-mist bg-keiqi-cream p-8"
                >
                  <Icon className="h-9 w-9 text-keiqi-red" strokeWidth={1.4} />
                  <h3 className="font-display mt-6 text-2xl text-keiqi-ink">
                    {m.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-keiqi-ink/60">
                    {m.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-keiqi-cream px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-8 h-px w-16 bg-keiqi-red" />
          <p className="font-display text-3xl leading-relaxed text-keiqi-ink md:text-4xl">
            以日本住宅设计逻辑，<br />
            重构居住效率。
          </p>
        </div>
      </section>

      <section className="bg-keiqi-cream px-6 pb-24 text-center">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-keiqi-red px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            预约厨卫规划 <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
