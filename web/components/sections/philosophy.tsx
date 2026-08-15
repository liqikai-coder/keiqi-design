export function Philosophy() {
  return (
    <section className="relative overflow-hidden bg-keiqi-night px-6 py-28 md:py-36">
      {/* 中央暗金光晕 */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-keiqi-gold/[0.07] blur-[130px]"
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mx-auto mb-8 h-px w-16 bg-keiqi-gold" />
        <p className="font-display text-3xl leading-relaxed text-keiqi-cream md:text-5xl">
          设计的不只是房子，
          <br />
          而是未来十年的生活方式。
        </p>
        <p className="mx-auto mt-10 max-w-2xl text-base leading-8 text-keiqi-cream/55">
          凯奇专注高端住宅空间定制。从设计规划到施工落地，从环保体系到整体收纳，从厨房到卫浴——我们关注空间如何服务于生活。
        </p>
      </div>
    </section>
  );
}
