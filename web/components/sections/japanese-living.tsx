import Link from "next/link";
import {
  LayoutGrid,
  ShowerHead,
  Home,
  Boxes,
  Accessibility,
} from "lucide-react";

const ITEMS = [
  { icon: LayoutGrid, name: "整体厨房" },
  { icon: ShowerHead, name: "整体卫浴" },
  { icon: Home, name: "家政系统" },
  { icon: Boxes, name: "收纳系统" },
  { icon: Accessibility, name: "适老化设计" },
];

export function JapaneseLiving() {
  return (
    <section className="relative overflow-hidden bg-keiqi-night-2 px-6 py-24">
      {/* 底部暗金光晕 */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-10rem] left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-keiqi-gold/[0.06] blur-[130px]"
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.4em] text-keiqi-gold-soft">
              Japanese Living
            </p>
            <h2 className="font-display mt-3 text-4xl text-keiqi-cream md:text-5xl">
              日本整体厨卫体系™
            </h2>
          </div>
          <Link
            href="/japanese-living"
            className="text-sm tracking-wide text-keiqi-gold-soft/80 transition-colors hover:text-keiqi-gold-soft"
          >
            了解日本厨卫 →
          </Link>
        </div>

        <div className="grid gap-px overflow-hidden rounded-lg border border-keiqi-line bg-keiqi-line md:grid-cols-5">
          {ITEMS.map((it, i) => {
            const Icon = it.icon;
            return (
              <div
                key={it.name}
                className="group bg-keiqi-night-2 p-8 text-center"
              >
                <div className="font-display text-3xl text-keiqi-gold-soft/25">
                  0{i + 1}
                </div>
                <Icon
                  className="mx-auto mt-4 h-8 w-8 text-keiqi-cream/70 transition-colors group-hover:text-keiqi-gold-soft"
                  strokeWidth={1.4}
                />
                <h3 className="mt-4 text-base font-medium text-keiqi-cream">
                  {it.name}
                </h3>
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center font-display text-2xl italic text-keiqi-cream/70 md:text-3xl">
          「以日本住宅设计逻辑，重构居住效率。」
        </p>
      </div>
    </section>
  );
}
