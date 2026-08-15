import { House, Building2, Gem, RefreshCw } from "lucide-react";

const DOMAINS = [
  {
    icon: House,
    en: "Villa",
    title: "别墅",
    items: ["独栋别墅", "联排别墅", "庄园住宅"],
  },
  {
    icon: Building2,
    en: "Penthouse",
    title: "大平层",
    items: ["城市豪宅", "顶层复式", "改善型住宅"],
  },
  {
    icon: Gem,
    en: "Private Club",
    title: "私人会所",
    items: ["商务会所", "茶空间", "接待中心"],
  },
  {
    icon: RefreshCw,
    en: "Renovation",
    title: "整体改造",
    items: ["老房焕新", "空间重构", "功能升级"],
  },
];

export function ServiceDomains() {
  return (
    <section className="bg-keiqi-night px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <div className="mx-auto mb-5 h-px w-16 bg-keiqi-gold" />
          <p className="font-display text-xs uppercase tracking-[0.4em] text-keiqi-gold-soft">
            Service Domains
          </p>
          <h2 className="font-display mt-4 text-4xl text-keiqi-cream md:text-5xl">
            服务领域
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-keiqi-cream/50">
            高端住宅空间定制，一户一案，覆盖四类空间命题。
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-lg border border-keiqi-line bg-keiqi-line md:grid-cols-2 lg:grid-cols-4">
          {DOMAINS.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.title}
                className="group bg-keiqi-night-2 p-8 transition-colors hover:bg-keiqi-night-3"
              >
                <div className="flex items-center justify-between">
                  <Icon
                    className="h-8 w-8 text-keiqi-cream/70 transition-colors group-hover:text-keiqi-gold-soft"
                    strokeWidth={1.4}
                  />
                  <span className="font-display text-xs uppercase tracking-[0.3em] text-keiqi-gold-soft/60">
                    {d.en}
                  </span>
                </div>
                <h3 className="font-display mt-6 text-2xl text-keiqi-cream">
                  {d.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {d.items.map((i) => (
                    <li
                      key={i}
                      className="text-sm leading-7 text-keiqi-cream/55"
                    >
                      · {i}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
