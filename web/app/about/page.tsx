import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "关于凯奇",
  description:
    "关于凯奇设计 · 高端住宅空间定制机构。以定制设计、凯奇精工、健康住宅与日本整体厨卫，改善居住品质。",
};

const VALUES = [
  {
    en: "Vision",
    title: "愿景",
    desc: "成为中国高端住宅空间定制领域值得信赖的品牌。",
  },
  {
    en: "Mission",
    title: "使命",
    desc: "通过设计与工艺改善居住品质。",
  },
  {
    en: "Belief",
    title: "核心理念",
    desc: "设计的不只是房子，而是未来十年的生活方式。",
  },
];

const EDGES = [
  "高端住宅",
  "健康住宅",
  "日本整体厨卫",
  "AI 设计顾问",
];

const NUMBERS = [
  { v: "15+", l: "年定制经验" },
  { v: "200+", l: "交付案例" },
  { v: "4", l: "大标准体系" },
  { v: "100%", l: "无醛交付" },
];

const STEPS = ["初次咨询", "现场勘测", "定制设计", "精工施工", "验收交付"];

const REGIONS = ["杭州", "上海", "深圳", "苏州", "南京", "宁波"];

const VALUES_LIST = ["匠人精神", "长期主义", "一户一案", "健康优先"];

export default function Page() {
  return (
    <>
      <PageHero
        en="About"
        title="关于凯奇"
        subtitle="凯奇设计 · 高端住宅空间定制机构。专注别墅、大平层、顶层复式与私人会所。"
      />

      {/* 品牌故事 */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 h-px w-16 bg-keiqi-red" />
          <h2 className="font-display text-4xl text-keiqi-ink md:text-5xl">
            品牌故事
          </h2>
          <p className="mt-8 text-base leading-8 text-keiqi-ink/70">
            凯奇相信，住宅不是材料的堆砌，而是生活方式的容器。十余年来，我们只做一件事——为高端住宅业主提供从设计到精工、从健康到智能的一体化定制。
          </p>
          <p className="mt-5 text-base leading-8 text-keiqi-ink/70">
            我们建立凯奇精工体系、健康住宅体系与日本整体厨卫体系，把高端定义为可被验收的标准；又以凯奇 AI 设计顾问，让咨询从第一次接触就开始。
          </p>
        </div>
      </section>

      {/* 设计理念 */}
      <section className="bg-keiqi-cream px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 h-px w-16 bg-keiqi-red" />
          <h2 className="font-display text-4xl text-keiqi-ink md:text-5xl">
            设计理念
          </h2>
          <p className="mt-8 text-base leading-8 text-keiqi-ink/70">
            好的住宅设计，是从生活方式倒推空间。先理解居住者十年后的生活，再决定墙体、收纳与光的位置。
          </p>
          <p className="mt-5 text-base leading-8 text-keiqi-ink/70">
            凯奇不复制方案，一户一案——每一处动线、每一个储物单元、每一束灯光，都为特定的生活节奏而设。
          </p>
        </div>
      </section>

      {/* 价值观 */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <div className="mx-auto mb-5 h-px w-16 bg-keiqi-red" />
            <h2 className="font-display text-4xl text-keiqi-ink md:text-5xl">
              价值观
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {VALUES.map((v) => (
              <div
                key={v.en}
                className="rounded-lg border border-keiqi-mist bg-white p-8"
              >
                <p className="font-display text-sm uppercase tracking-[0.3em] text-keiqi-red">
                  {v.en}
                </p>
                <h3 className="font-display mt-3 text-2xl text-keiqi-ink">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-keiqi-ink/60">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 企业文化 */}
      <section className="bg-keiqi-cream px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <div className="mx-auto mb-5 h-px w-16 bg-keiqi-red" />
            <h2 className="font-display text-4xl text-keiqi-ink md:text-5xl">
              企业文化
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {VALUES_LIST.map((t) => (
              <span
                key={t}
                className="rounded-full border border-keiqi-mist bg-white px-6 py-3 text-lg text-keiqi-ink"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 差异化 */}
      <section className="bg-keiqi-ink px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <div className="mb-5 h-px w-16 bg-keiqi-red" />
            <h2 className="font-display text-4xl text-keiqi-cream md:text-5xl">
              差异化标签
            </h2>
            <p className="mt-5 max-w-2xl text-keiqi-cream/60">
              高端住宅 × 健康住宅 × 日本整体厨卫 × AI 设计顾问，这套组合在国内并不常见，也是凯奇的护城河。
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {EDGES.map((e) => (
              <span
                key={e}
                className="rounded-full border border-keiqi-cream/20 px-6 py-3 text-lg text-keiqi-cream"
              >
                {e}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 服务流程 */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <div className="mx-auto mb-5 h-px w-16 bg-keiqi-red" />
            <h2 className="font-display text-4xl text-keiqi-ink md:text-5xl">
              服务流程
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-5">
            {STEPS.map((s, i) => (
              <div key={s} className="rounded-lg border border-keiqi-mist p-6">
                <div className="font-display text-4xl text-keiqi-red/30">
                  0{i + 1}
                </div>
                <h3 className="mt-3 text-lg font-medium text-keiqi-ink">{s}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 数字 */}
      <section className="bg-keiqi-cream px-6 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 md:grid-cols-4">
          {NUMBERS.map((n) => (
            <div key={n.l} className="text-center">
              <div className="font-display text-5xl text-keiqi-red md:text-6xl">
                {n.v}
              </div>
              <div className="mt-3 text-sm tracking-wide text-keiqi-ink/50">
                {n.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 服务区域 */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <div className="mb-5 h-px w-16 bg-keiqi-red" />
            <h2 className="font-display text-4xl text-keiqi-ink md:text-5xl">
              服务区域
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-keiqi-ink/60">
            目前服务覆盖杭州、上海、深圳及长三角核心城市，更多城市正在扩展中。欢迎预约咨询。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {REGIONS.map((c) => (
              <span
                key={c}
                className="rounded-full border border-keiqi-mist px-5 py-2 text-sm text-keiqi-ink/70"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-keiqi-cream px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mx-auto mb-6 h-px w-16 bg-keiqi-red" />
          <h2 className="font-display text-4xl text-keiqi-ink md:text-5xl">
            与我们同行
          </h2>
          <p className="mt-5 text-keiqi-ink/60">
            无论您是业主、设计师还是合作伙伴，欢迎与凯奇对话。
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-keiqi-red px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            联系我们 <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
