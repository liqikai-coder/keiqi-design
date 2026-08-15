import Link from "next/link";

export function Cta() {
  return (
    <section
      id="contact"
      className="bg-keiqi-cream px-6 py-28 text-center"
    >
      <div className="mx-auto max-w-2xl">
        <div className="mx-auto mb-6 h-px w-16 bg-keiqi-red" />
        <h2 className="font-display text-4xl text-keiqi-ink md:text-5xl">
          预约一次专属空间设计咨询
        </h2>
        <p className="mt-5 text-keiqi-ink/60">
          健康不是选配，而是住宅的基础标准。
        </p>
        <Link
          href="/contact"
          className="mt-9 inline-block rounded-full bg-keiqi-red px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          立即预约
        </Link>
      </div>
    </section>
  );
}
