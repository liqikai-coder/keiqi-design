import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { Droplets, Plug, Trees, Paintbrush, ClipboardCheck, ArrowRight } from "lucide-react";

export const metadata = {
  title: "凯奇精工体系™",
  description:
    "凯奇精工体系™ · 标准化工艺与精细化施工，建立水电、防水、木作、涂装、交付五大标准，让高端可被验收。",
};

const STANDARDS = [
  {
    icon: Plug,
    title: "水电标准",
    desc: "活线工艺、强弱电分离、给排水压力测试，隐蔽工程可追溯、可检修。",
    points: ["强弱电间距规范", "给水管打压验收", "回路负荷测算"],
  },
  {
    icon: Droplets,
    title: "防水标准",
    desc: "厨卫与阳台多层防水、闭水试验 ≥ 48 小时，杜绝渗漏隐患。",
    points: ["双层柔性防水", "48h 闭水试验", "管根节点加强"],
  },
  {
    icon: Trees,
    title: "木作标准",
    desc: "现场与工厂化木作结合，收口、拼缝、垂直度执行毫米级公差。",
    points: ["工厂化定制", "无缝收口", "含水率控制"],
  },
  {
    icon: Paintbrush,
    title: "涂装标准",
    desc: "墙面基层处理到面漆多层工序，平整度与色彩一致性可验收。",
    points: ["挂网防开裂", "多层打磨", "色差控制"],
  },
  {
    icon: ClipboardCheck,
    title: "交付标准",
    desc: "节点验收、成品保护、清洁交付，建立一户一档的工艺档案。",
    points: ["节点验收单", "成品保护", "工艺档案"],
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        en="KEIQI Craftsmanship™"
        title="凯奇精工体系™"
        subtitle="标准化工艺，精细化施工。凯奇以五大标准，让高端住宅的工艺可被验收、可被传承。"
      />

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <div className="mx-auto mb-5 h-px w-16 bg-keiqi-red" />
            <h2 className="font-display text-4xl text-keiqi-ink md:text-5xl">
              五大工艺标准
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {STANDARDS.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="rounded-lg border border-keiqi-mist bg-keiqi-cream p-8"
                >
                  <Icon className="h-9 w-9 text-keiqi-red" strokeWidth={1.4} />
                  <h3 className="font-display mt-6 text-2xl text-keiqi-ink">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-keiqi-ink/60">
                    {s.desc}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-center gap-2 text-sm text-keiqi-ink/70"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-keiqi-red" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-keiqi-ink px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mx-auto mb-6 h-px w-16 bg-keiqi-red" />
          <p className="font-display text-2xl leading-relaxed text-keiqi-cream md:text-3xl">
            精工，是高端的底线。
          </p>
          <p className="mt-4 text-keiqi-cream/50">
            每一道工序都有标准，每一次验收都有记录。
          </p>
        </div>
      </section>

      <section className="bg-keiqi-cream px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mx-auto mb-6 h-px w-16 bg-keiqi-red" />
          <h2 className="font-display text-4xl text-keiqi-ink md:text-5xl">
            想看我们的工地？
          </h2>
          <p className="mt-5 text-keiqi-ink/60">
            预约实地参观在施工地，亲眼验证凯奇精工标准。
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-keiqi-red px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            预约参观 <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
