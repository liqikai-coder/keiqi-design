import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * 内页统一标题区（深色 · 暗金版）：en 小标 + 中文大标题 + 副标题 + 暗金分隔线。
 * 可选 bgImage 背景图（带深色渐变遮罩），无图时回退暗金光晕。
 */
export function PageHero({
  en,
  title,
  subtitle,
  className,
  bgImage,
}: {
  en: string;
  title: string;
  subtitle?: string;
  className?: string;
  bgImage?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-keiqi-night px-6 pb-16 pt-28 md:pb-20 md:pt-36",
        className
      )}
    >
      {bgImage ? (
        <>
          <Image
            src={bgImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-keiqi-night via-keiqi-night/85 to-keiqi-night/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-keiqi-night/80 to-transparent" />
        </>
      ) : (
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[52rem] -translate-x-1/2 rounded-full bg-keiqi-gold/10 blur-[120px]"
        />
      )}

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
