import Link from "next/link";
import { Leaf } from "lucide-react";

const POINTS = [
  "无醛板材",
  "无醛辅材",
  "水性环保涂装",
  "空气质量检测",
  "交付验收标准",
];

export function HealthyHome() {
  return (
    <section className="bg-keiqi-cream px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="font-display text-sm uppercase tracking-[0.4em] text-keiqi-red">
            Healthy Home
          </p>
          <h2 className="font-display mt-3 text-4xl text-keiqi-ink md:text-5xl">
            凯奇健康住宅体系™
          </h2>
          <p className="mt-5 text-base leading-8 text-keiqi-ink/60">
            健康不是选配，而是住宅的基础标准。从板材到辅材，从涂装到交付，凯奇以可检测、可验收的环保标准，守护居住者的每一次呼吸。
          </p>
          <Link
            href="/healthy-home"
            className="mt-8 inline-block text-sm tracking-wide text-keiqi-red hover:underline"
          >
            了解健康住宅 →
          </Link>
        </div>

        <div className="grid gap-px overflow-hidden rounded-lg border border-keiqi-mist bg-keiqi-mist sm:grid-cols-2">
          {POINTS.map((p) => (
            <div key={p} className="flex items-center gap-3 bg-keiqi-cream p-6">
              <Leaf
                className="h-5 w-5 shrink-0 text-keiqi-red"
                strokeWidth={1.5}
              />
              <span className="text-base text-keiqi-ink">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
