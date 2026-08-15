import { PageHero } from "@/components/layout/page-hero";
import { ProjectGridFilter } from "@/components/sections/project-grid";

export const metadata = {
  title: "案例中心 · KEIQI DESIGN",
  description:
    "凯奇设计案例中心 · 别墅、大平层、私人会所精选作品。一户一案，从设计到交付。",
};

export default function Page() {
  return (
    <>
      <PageHero
        en="Projects"
        title="案例中心"
        subtitle="每一套作品，都是一次独立命题。从设计到交付，凯奇以作品说话。"
      />

      <section className="bg-keiqi-night px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          {/* 概览数字 */}
          <div className="mb-14 grid grid-cols-3 gap-6 border-y border-keiqi-line py-10">
            {[
              { v: "9", l: "精选作品" },
              { v: "3", l: "服务领域" },
              { v: "100%", l: "一户一案" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <p className="font-display text-4xl text-keiqi-gold-soft md:text-5xl">
                  {s.v}
                </p>
                <p className="mt-2 text-xs tracking-[0.2em] text-keiqi-cream/50">
                  {s.l}
                </p>
              </div>
            ))}
          </div>

          <ProjectGridFilter />
        </div>
      </section>
    </>
  );
}
