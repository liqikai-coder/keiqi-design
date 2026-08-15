const STATS = [
  { value: "15+", label: "年定制经验" },
  { value: "200+", label: "交付案例" },
  { value: "100%", label: "无醛交付" },
  { value: "4", label: "大标准体系" },
];

export function Stats() {
  return (
    <section className="bg-keiqi-ink px-6 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-5xl text-keiqi-cream md:text-6xl">
              {s.value}
            </div>
            <div className="mt-3 text-sm tracking-wide text-keiqi-cream/50">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
