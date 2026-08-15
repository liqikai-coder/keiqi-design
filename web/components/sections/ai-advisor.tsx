import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

const SAMPLE_INPUT = ["420㎡ 别墅", "预算 300 万", "苏州"];

const OUTPUTS = [
  "风格建议",
  "空间规划",
  "预算分析",
  "健康住宅配置",
  "厨卫系统建议",
];

export function AiAdvisor() {
  return (
    <section className="bg-keiqi-ink px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="font-display text-sm uppercase tracking-[0.4em] text-keiqi-red">
            AI Designer
          </p>
          <h2 className="font-display mt-3 text-4xl text-keiqi-cream md:text-5xl">
            与凯奇AI设计顾问对话
          </h2>
          <p className="mt-5 max-w-md text-base leading-8 text-keiqi-cream/60">
            告诉 AI 你的户型、预算与城市，即刻获得风格建议、空间规划、预算分析与健康住宅配置方案。
          </p>
          <Link
            href="/ai-designer"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-keiqi-red px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            立即体验 <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 对话模拟 */}
        <div className="rounded-2xl border border-keiqi-cream/10 bg-keiqi-ink/60 p-8">
          <div className="flex items-center gap-2 text-xs tracking-wide text-keiqi-cream/50">
            <Sparkles className="h-4 w-4 text-keiqi-red" />
            凯奇AI设计顾问
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {SAMPLE_INPUT.map((s) => (
              <span
                key={s}
                className="rounded-full border border-keiqi-cream/20 px-4 py-2 text-sm text-keiqi-cream/80"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-8 h-px bg-keiqi-cream/10" />

          <div className="mt-6 space-y-3">
            {OUTPUTS.map((o) => (
              <div
                key={o}
                className="flex items-center gap-3 text-sm text-keiqi-cream/80"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-keiqi-red" />
                {o}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
