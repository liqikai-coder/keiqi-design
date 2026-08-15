import Link from "next/link";

const CASES = [
  { name: "某湖景别墅", type: "别墅", area: "680㎡" },
  { name: "某顶层大平层", type: "大平层", area: "320㎡" },
  { name: "某私人会所", type: "会所", area: "450㎡" },
];

export function Projects() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <div className="mb-5 h-px w-16 bg-keiqi-red" />
            <h2 className="font-display text-4xl text-keiqi-ink md:text-5xl">
              精选案例
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-sm tracking-wide text-keiqi-red hover:underline"
          >
            全部案例 →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {CASES.map((c) => (
            <Link
              key={c.name}
              href="/projects"
              className="group block overflow-hidden rounded-lg border border-keiqi-mist"
            >
              <div className="aspect-[4/3] bg-keiqi-mist transition-transform duration-500 group-hover:scale-[1.02]" />
              <div className="p-6">
                <span className="text-xs font-medium tracking-wide text-keiqi-red">
                  {c.type} · {c.area}
                </span>
                <h3 className="font-display mt-2 text-2xl text-keiqi-ink">
                  {c.name}
                </h3>
                <span className="mt-4 inline-block text-sm text-keiqi-ink/60 transition-colors group-hover:text-keiqi-red">
                  查看详情 →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
