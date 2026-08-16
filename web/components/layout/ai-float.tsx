import Link from "next/link";
import { Mascot } from "@/components/brand/mascot";

/**
 * 吉祥物「小匠」AI 顾问浮标：
 * 圆形吉祥物按钮 + hover 滑出标签，独立悬浮于右下角，不与正文/页脚文字重叠。
 */
export function AiFloat() {
  return (
    <Link
      href="/ai-designer"
      aria-label="凯奇AI设计顾问"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 md:bottom-7 md:right-7"
    >
      {/* hover 滑出标签（不常驻，避免遮挡） */}
      <span className="pointer-events-none translate-x-2 rounded-full border border-keiqi-gold/50 bg-keiqi-night/92 px-4 py-2 text-xs font-medium tracking-wide text-keiqi-gold-soft opacity-0 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        凯奇AI设计顾问
      </span>

      {/* 吉祥物按钮 */}
      <span className="relative block shrink-0 transition-transform duration-300 group-hover:scale-105 group-active:scale-95">
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-keiqi-gold/25 blur-md transition-opacity group-hover:opacity-100"
        />
        <Mascot size={56} className="relative drop-shadow-[0_8px_24px_rgba(0,0,0,0.55)] animate-[kq-float_4s_ease-in-out_infinite]" />
        {/* 在线状态点 */}
        <span className="absolute -right-0.5 -top-0.5 block h-3.5 w-3.5 rounded-full border-2 border-keiqi-night bg-emerald-400" />
      </span>
    </Link>
  );
}
