import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * 凯奇 Logo Mark：房屋立面 + KQ 字母融合。
 * - 房屋外轮廓（人字顶 + 墙体）
 * - 左半藏「K」（竖线 + 双斜腿，上腿指向屋顶顶点）
 * - 右半藏「Q」（圆窗 + 尾巴落于右下墙角）
 * 暗金线条，简约有质感。
 */
export function LogoMark({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={cn("h-8 w-8", className)}
      aria-hidden="true"
    >
      {/* 房屋外轮廓 */}
      <path
        d="M6 22 L24 7 L42 22 L42 40 L6 40 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        className={inverted ? "text-keiqi-gold-soft" : "text-keiqi-gold"}
      />
      {/* K · 左半（竖线 + 上腿 + 下腿） */}
      <path
        d="M14 22 L14 40 M14 30 L24 14 M14 30 L26 40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={inverted ? "text-keiqi-gold-soft" : "text-keiqi-gold"}
      />
      {/* Q · 右半（圆窗 + 尾巴） */}
      <circle
        cx="30"
        cy="30"
        r="6.5"
        stroke="currentColor"
        strokeWidth="2"
        className={inverted ? "text-keiqi-gold-soft" : "text-keiqi-gold"}
      />
      <path
        d="M35.2 35.2 L41 40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className={inverted ? "text-keiqi-gold-soft" : "text-keiqi-gold"}
      />
    </svg>
  );
}

/**
 * 凯奇 Logo：Mark + 可选 KEIQI DESIGN 文字标。
 * variant="mark" 仅显示图形（微信头像 / 小尺寸）。
 */
export function Logo({
  variant = "full",
  className,
  inverted = false,
}: {
  variant?: "full" | "mark";
  className?: string;
  inverted?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-2.5", className)}
      aria-label="凯奇设计 KEIQI DESIGN 首页"
    >
      <LogoMark
        className="h-8 w-8 shrink-0 transition-transform duration-300 group-hover:scale-105"
        inverted={inverted}
      />
      {variant === "full" && (
        <span
          className={cn(
            "hidden text-xs font-medium uppercase tracking-[0.28em] transition-colors sm:block",
            inverted
              ? "text-keiqi-cream/70 group-hover:text-keiqi-gold-soft"
              : "text-keiqi-ink/70 group-hover:text-keiqi-gold"
          )}
        >
          KEIQI DESIGN
        </span>
      )}
    </Link>
  );
}
