import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * 凯奇 Logo：KQ Monogram + 可选 KEIQI DESIGN 文字标。
 * variant="mark" 仅显示 KQ（用于微信头像 / 小尺寸）。
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
      className={cn("group flex items-center gap-2", className)}
      aria-label="凯奇设计 KEIQI DESIGN 首页"
    >
      <span
        className={cn(
          "font-display text-2xl font-semibold leading-none tracking-tight transition-colors",
          inverted ? "text-keiqi-cream" : "text-keiqi-ink",
          "group-hover:text-keiqi-red"
        )}
      >
        KQ
      </span>
      {variant === "full" && (
        <span
          className={cn(
            "hidden text-xs font-medium uppercase tracking-[0.28em] sm:block",
            inverted ? "text-keiqi-cream/70" : "text-keiqi-ink/70"
          )}
        >
          KEIQI DESIGN
        </span>
      )}
    </Link>
  );
}
