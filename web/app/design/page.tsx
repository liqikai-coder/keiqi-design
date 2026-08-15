import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import {
  Compass,
  Ruler,
  Layers,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "定制设计",
  description:
    "凯奇定制设计 · 一户一案。从生活方式出发的高端住宅空间定制，不复制任何方案。别墅、大平层、顶层复式、私人会所。",
};

const PRINCIPLES = [
  {
    icon: Compass,
    title: "从生活方式出发",
    desc: "设计前先理解居住者的作息、审美与家庭关系，而非套用风格模板。",
  },
  {
    icon: Ruler,
    title: "一户一案",
    desc: "每一套方案独立命题，量体裁衣，拒绝复制粘贴式的标准化输出。",
  },
  {
    icon: Layers,
    title: "全案统筹",
    desc: "硬装、软装、灯光、收纳与智能一体规划，避免出现风格断层。",
  },
  {
    icon: Sparkles,
    title: "克制的高级",
    desc: "留白、比例与材质优先，让空间经得起十年审美检验。",
  },
];

const SCOPE = [
  { name: "别墅", desc: "独栋与联排别墅的整体空间叙事与动线规划。" },
  { name: "大平层", desc: "大尺度平层的通透格局与多功能场景设计。" },
  { name: "顶层复式", desc: "挑高、楼梯与垂直动线的精细化重构。" },
  { name: "私人会所", desc: "茶空间、商务会馆等私享场景的定制营造。" },
];

const PROCESS = [
  { step: "01", title: "需求访谈", desc: "深度了解家庭结构与生活愿景。" },
  { step: "02", title: "现场勘测", desc: "毫米级测量与采光通风分析。" },
  { step: "03", title: "概念提案", desc: "空间叙事与风格方向确认。" },
  { step: "04", title: "全案设计", desc: "效果图、施工图与物料清单。" },
  { step: "05", title: "落地交付", desc: "施工跟进与软装陈设一体化交付。" },
];

export default function Page() {
  return (
    <>
      <PageHero
        en="Custom Design"
        title="定制设计"
        subtitle="设计的不只是房子，而是未来十年的生活方式。凯奇坚持一户一案，从生活方式出发，不复制任何方案。"
        bgImage="https://images.pexels.com/photos/8135503/pexels-photo-8135503.jpeg"
      />

      {/* 设计哲学 */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <div className="mx-auto mb-5 h-px w-16 bg-keiqi-red" />
            <h2 className="font-display text-4xl text-keiqi-ink md:text-5xl">
              设计哲学
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-lg border border-keiqi-mist bg-keiqi-mist md:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="bg-white p-8">
                  <Icon
                    className="h-8 w-8 text-keiqi-red"
                    strokeWidth={1.4}
                  />
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

      {/* 设计范畴 */}
      <section className="bg-keiqi-cream px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <div className="mb-5 h-px w-16 bg-keiqi-red" />
            <h2 className="font-display text-4xl text-keiqi-ink md:text-5xl">
              设计范畴
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SCOPE.map((s) => (
              <div
                key={s.name}
                className="rounded-lg border border-keiqi-mist bg-white p-8"
              >
                <h3 className="font-display text-3xl text-keiqi-ink">
                  {s.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-keiqi-ink/60">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 服务流程 */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <div className="mb-5 h-px w-16 bg-keiqi-red" />
            <h2 className="font-display text-4xl text-keiqi-ink md:text-5xl">
              服务流程
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
            {PROCESS.map((p) => (
              <div key={p.step} className="border-t-2 border-keiqi-red pt-6">
                <span className="font-display text-3xl text-keiqi-red/80">
                  {p.step}
                </span>
                <h3 className="font-display mt-3 text-xl text-keiqi-ink">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-keiqi-ink/60">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-keiqi-cream px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mx-auto mb-6 h-px w-16 bg-keiqi-red" />
          <h2 className="font-display text-4xl text-keiqi-ink md:text-5xl">
            先聊聊你的家
          </h2>
          <p className="mt-5 text-keiqi-ink/60">
            预约一次专属空间设计咨询，我们从一个问题开始：你理想的生活是什么样子？
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
