import Link from "next/link";
import { Compass, Route, Boxes, Lightbulb, Cpu } from "lucide-react";

const ITEMS = [
  { icon: Compass, name: "空间规划", desc: "功能与尺度的再分配" },
  { icon: Route, name: "动线设计", desc: "生活轨迹的自然编排" },
  { icon: Boxes, name: "收纳设计", desc: "看不见的秩序感" },
  { icon: Lightbulb, name: "灯光设计", desc: "用光塑造空间氛围" },
  { icon: Cpu, name: "智能家居规划", desc: "让空间随生活进化" },
];

export function DesignSystem() {
  return (
    <section className="bg-keiqi-night-2 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.4em] text-keiqi-gold-soft">
              Design System
            </p>
            <h2 className="font-display mt-3 text-4xl text-keiqi-cream md:text-5xl">
              设计体系
            </h2>
          </div>
          <Link
            href="/design"
            className="text-sm tracking-wide text-keiqi-gold-soft/80 transition-colors hover:text-keiqi-gold-soft"
          >
            了解定制设计 →
          </Link>
        </div>

        <div className="grid gap-px overflow-hidden rounded-lg border border-keiqi-line bg-keiqi-line md:grid-cols-3 lg:grid-cols-5">
          {ITEMS.map((it, idx) => {
            const Icon = it.icon;
            return (
              <div
                key={it.name}
                className="group bg-keiqi-night-2 p-8 text-center"
              >
                <div className="font-display text-3xl text-keiqi-gold-soft/25">
                  0{idx + 1}
                </div>
                <Icon
                  className="mx-auto mt-4 h-8 w-8 text-keiqi-cream/70 transition-colors group-hover:text-keiqi-gold-soft"
                  strokeWidth={1.4}
                />
                <h3 className="mt-4 text-lg font-medium text-keiqi-cream">
                  {it.name}
                </h3>
                <p className="mt-2 text-xs leading-6 text-keiqi-cream/45">
                  {it.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
