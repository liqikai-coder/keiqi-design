import Image from "next/image";
import Link from "next/link";

const STANDARDS = ["水电系统", "防水系统", "木作系统", "涂装系统", "交付体系"];

/* 工艺氛围图（Pexels 免费商用 · 手工刨刀木工特写，上线替换为真实工地照片） */
const CRAFT_IMAGE =
  "https://images.pexels.com/photos/37358115/pexels-photo-37358115.jpeg";

export function Craftsmanship() {
  return (
    <section className="bg-keiqi-night-3 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.4em] text-keiqi-gold-soft">
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
            className="text-sm tracking-wide text-keiqi-cream/70 transition-colors hover:text-keiqi-gold-soft"
          >
            了解精工标准 →
          </Link>
        </div>

        {/* 工艺现场（预留位，真实工地照片就绪后替换） */}
        <div className="relative mb-10 aspect-[16/6] w-full overflow-hidden rounded-lg border border-keiqi-line">
          <Image
            src={CRAFT_IMAGE}
            alt="凯奇精工现场"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-keiqi-night/85 via-keiqi-night/30 to-keiqi-night/20" />
          <div className="absolute bottom-6 left-6">
            <span className="text-xs tracking-[0.3em] text-keiqi-gold-soft">
              工艺现场
            </span>
            <p className="font-display mt-2 text-xl text-keiqi-cream md:text-2xl">
              水电 · 防水 · 木作 · 涂装 · 交付
            </p>
          </div>
        </div>

        <div className="grid gap-px overflow-hidden rounded-lg border border-keiqi-line bg-keiqi-line md:grid-cols-5">
          {STANDARDS.map((s, i) => (
            <div key={s} className="bg-keiqi-night-3 p-6 text-center">
              <div className="font-display text-3xl text-keiqi-gold-soft">
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
