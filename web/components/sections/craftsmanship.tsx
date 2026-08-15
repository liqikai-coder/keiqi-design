import Link from "next/link";

const STANDARDS = ["水电系统", "防水系统", "木作系统", "涂装系统", "交付体系"];

export function Craftsmanship() {
  return (
    <section className="bg-keiqi-ink px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.4em] text-keiqi-red">
              Craftsmanship
            </p>
            <h2 className="font-display mt-3 text-4xl text-keiqi-cream md:text-5xl">
              凯奇精工体系™
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-keiqi-cream/50">
              标准化工艺 · 精细化施工 · 让高端可以被验收
            </p>
          </div>
          <Link
            href="/craftsmanship"
            className="text-sm tracking-wide text-keiqi-cream/70 transition-colors hover:text-keiqi-red"
          >
            了解精工标准 →
          </Link>
        </div>

        {/* 工艺照片预留位 */}
        <div className="mb-10 grid aspect-[16/5] w-full place-items-center rounded-lg border border-dashed border-keiqi-cream/15 bg-keiqi-ink/40">
          <span className="text-xs tracking-[0.3em] text-keiqi-cream/30">
            工艺现场照片 · 整理中
          </span>
        </div>

        <div className="grid gap-px overflow-hidden rounded-lg border border-keiqi-cream/10 bg-keiqi-cream/10 md:grid-cols-5">
          {STANDARDS.map((s, i) => (
            <div key={s} className="bg-keiqi-ink p-6 text-center">
              <div className="font-display text-3xl text-keiqi-red">
                0{i + 1}
              </div>
              <div className="mt-3 text-base text-keiqi-cream">{s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
