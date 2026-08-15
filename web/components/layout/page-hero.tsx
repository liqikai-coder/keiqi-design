import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * 内页统一标题区（深色 · 暗金版）：en 小标 + 中文大标题 + 副标题 + 暗金分隔线。
 * 预留顶部空间以避让 sticky header。
 */
export function PageHero({
  en,
  title,
  subtitle,
  className,
}: {
  en: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-keiqi-night px-6 pb-16 pt-28 md:pb-20 md:pt-36",
        className
      )}
    >
      {/* 顶部暗金光晕 */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[52rem] -translate-x-1/2 rounded-full bg-keiqi-gold/10 blur-[120px]"
      />
      {/* 极淡 KQ 水印 */}
      <span
        aria-hidden
        className="kq-watermark pointer-events-none absolute -right-6 top-6 select-none text-[26vw] font-semibold leading-none text-keiqi-gold/[0.05]"
      >
        KQ
      </span>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-6 h-px w-16 bg-keiqi-gold" />
        <p className="font-display text-sm uppercase tracking-[0.4em] text-keiqi-gold-soft">
          {en}
        </p>
        <h1 className="font-display mt-4 text-4xl leading-tight text-keiqi-cream md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base leading-8 text-keiqi-cream/60 md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

/** 面包屑 / 返回链接，置于内页底部或顶部 */
export function BackLink({
  href = "/",
  label = "返回首页",
}: {
  href?: string;
  label?: string;
}) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <Link
        href={href}
        className="text-sm tracking-wide text-keiqi-cream/50 transition-colors hover:text-keiqi-gold-soft"
      >
        ← {label}
      </Link>
    </div>
  );
}
