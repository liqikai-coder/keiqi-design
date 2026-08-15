import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Cta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-keiqi-line bg-keiqi-night-2 px-6 py-28 text-center"
    >
      {/* 中央暗金光晕 */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-keiqi-gold/[0.08] blur-[130px]"
      />
      <div className="relative mx-auto max-w-2xl">
        <div className="mx-auto mb-6 h-px w-16 bg-keiqi-gold" />
        <h2 className="font-display text-4xl text-keiqi-cream md:text-5xl">
          预约一次专属空间设计咨询
        </h2>
        <p className="mt-5 text-keiqi-cream/55">
          健康不是选配，而是住宅的基础标准。
        </p>
        <Link
          href="/contact"
          className="group mt-9 inline-flex items-center gap-2 rounded-full border border-keiqi-gold bg-keiqi-gold/15 px-8 py-3 text-sm font-medium text-keiqi-gold-soft transition-colors hover:bg-keiqi-gold hover:text-keiqi-night"
        >
          立即预约
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
