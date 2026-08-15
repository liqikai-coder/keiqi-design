import Link from "next/link";

/**
 * 占位页面：用于尚未实现的导航路由，避免 404。
 * 后续 Sprint 将替换为真实内容（详见 docs/03-prd.md §5.5–5.9）。
 */
export function PlaceholderPage({
  title,
  subtitle,
  en,
}: {
  title: string;
  subtitle: string;
  en: string;
}) {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <div className="mx-auto mb-6 h-px w-16 bg-keiqi-red" />
        <p className="font-display text-sm uppercase tracking-[0.3em] text-keiqi-red">
          {en}
        </p>
        <h1 className="font-display mt-3 text-4xl text-keiqi-ink md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-keiqi-ink/60">{subtitle}</p>
        <p className="mt-8 text-sm text-keiqi-ink/40">
          本页面将在后续 Sprint 完善。
        </p>
        <Link
          href="/"
          className="mt-6 inline-block text-sm text-keiqi-red underline-offset-4 hover:underline"
        >
          ← 返回首页
        </Link>
      </div>
    </section>
  );
}
