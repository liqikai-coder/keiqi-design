import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { AiChat } from "@/components/sections/ai-chat";
import { MessageSquare, Calculator, Upload, ArrowRight } from "lucide-react";

export const metadata = {
  title: "凯奇AI设计顾问™",
  description:
    "凯奇AI设计顾问™ · 智能对话、自动报价与户型上传识别。以 AI 重新定义高端住宅设计的前端体验。",
};

const CAPABILITIES = [
  {
    icon: MessageSquare,
    title: "AI 设计对话",
    desc: "用自然语言描述需求，获取空间规划与风格建议的初步方案。",
  },
  {
    icon: Calculator,
    title: "自动报价",
    desc: "基于面积、风格与体系选择，生成透明的预算初稿。",
  },
  {
    icon: Upload,
    title: "户型上传",
    desc: "上传户型图，AI 辅助识别并给出空间重组建议。",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        en="KEIQI AI Designer™"
        title="凯奇 AI 设计顾问™"
        subtitle="以 AI 重新定义高端住宅设计的前端体验。对话、报价与户型识别，让咨询从第一次接触就开始。"
      />

      {/* 能力 */}
      <section className="bg-keiqi-night px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <div className="mx-auto mb-5 h-px w-16 bg-keiqi-gold" />
            <h2 className="font-display text-4xl text-keiqi-cream md:text-5xl">
              三大能力
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {CAPABILITIES.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="rounded-lg border border-keiqi-line bg-keiqi-night-2 p-8 transition-colors hover:bg-keiqi-night-3"
                >
                  <Icon
                    className="h-9 w-9 text-keiqi-gold-soft"
                    strokeWidth={1.4}
                  />
                  <h3 className="font-display mt-6 text-2xl text-keiqi-cream">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-keiqi-cream/55">
                    {c.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 对话演示 */}
      <section className="border-y border-keiqi-line bg-keiqi-night-2 px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-5 h-px w-16 bg-keiqi-gold" />
            <h2 className="font-display text-4xl text-keiqi-cream md:text-5xl">
              先聊一聊
            </h2>
            <p className="mt-5 text-keiqi-cream/60">
              右侧是一个在线演示。输入您的户型或需求，体验凯奇 AI
              设计顾问的初步回应。完整能力将在接入大模型后开放。
            </p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-keiqi-gold bg-keiqi-gold/15 px-8 py-3 text-sm font-medium text-keiqi-gold-soft transition-colors hover:bg-keiqi-gold hover:text-keiqi-night"
            >
              预约人工顾问
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <AiChat />
        </div>
      </section>

      <section className="bg-keiqi-night px-6 py-24 text-center">
        <p className="font-display text-2xl text-keiqi-cream md:text-3xl">
          数字化服务入口 · 凯奇AI设计顾问
        </p>
      </section>
    </>
  );
}
