import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import {
  ShieldCheck,
  Leaf,
  Wind,
  FlaskConical,
  FileCheck2,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "凯奇健康住宅体系™",
  description:
    "凯奇健康住宅体系™ · 无醛板材与辅材、水性环保涂装、空气质量检测与环保验收报告。健康不是选配，而是住宅的基础标准。",
};

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "无醛板材",
    desc: "全屋板材采用无醛添加基材，从源头控制甲醛释放。",
  },
  {
    icon: Leaf,
    title: "无醛辅材",
    desc: "胶黏剂、腻子等辅材同步无醛标准，避免叠加污染。",
  },
  {
    icon: Wind,
    title: "水性环保涂装",
    desc: "墙面与木作涂装采用水性环保材料，低 VOC 更安全。",
  },
  {
    icon: FlaskConical,
    title: "空气质量检测",
    desc: "交付前进行室内空气检测，数据可视化呈现。",
  },
  {
    icon: FileCheck2,
    title: "环保验收报告",
    desc: "出具一户一档的环保验收报告，健康交付有据可依。",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        en="KEIQI Healthy Home™"
        title="凯奇健康住宅体系™"
        subtitle="健康不是选配，而是住宅的基础标准。凯奇以无醛板材、无醛辅材与水性环保涂装，重建居住的健康底线。"
      />

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <div className="mx-auto mb-5 h-px w-16 bg-keiqi-red" />
            <h2 className="font-display text-4xl text-keiqi-ink md:text-5xl">
              五大健康支柱
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="rounded-lg border border-keiqi-mist bg-keiqi-cream p-8"
                >
                  <Icon className="h-9 w-9 text-keiqi-red" strokeWidth={1.4} />
                  <h3 className="font-display mt-6 text-2xl text-keiqi-ink">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-keiqi-ink/60">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-keiqi-ink px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-5 h-px w-16 bg-keiqi-red" />
            <h2 className="font-display text-4xl text-keiqi-cream md:text-5xl">
              把健康写进标准
            </h2>
            <p className="mt-5 text-keiqi-cream/60">
              多数住宅把环保当作升级选项，凯奇把它列为交付的前提。从板材到辅材、从涂装到验收，健康贯穿全链路。
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-keiqi-cream/10 bg-keiqi-cream/10">
            {[
              { v: "0", l: "醛添加基线" },
              { v: "5", l: "项空气指标" },
              { v: "1", l: "户一档报告" },
              { v: "100%", l: "环保交付" },
            ].map((s) => (
              <div key={s.l} className="bg-keiqi-ink p-8 text-center">
                <div className="font-display text-4xl text-keiqi-cream">
                  {s.v}
                </div>
                <div className="mt-2 text-xs tracking-wide text-keiqi-cream/50">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-keiqi-cream px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mx-auto mb-6 h-px w-16 bg-keiqi-red" />
          <h2 className="font-display text-4xl text-keiqi-ink md:text-5xl">
            给家人一个安心的家
          </h2>
          <p className="mt-5 text-keiqi-ink/60">
            预约咨询，了解凯奇健康住宅体系如何守护每一次呼吸。
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-keiqi-red px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            预约咨询 <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
