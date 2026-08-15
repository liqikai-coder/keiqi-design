import Link from "next/link";
import { Sparkles } from "lucide-react";

export function AiFloat() {
  return (
    <Link
      href="/ai-designer"
      aria-label="凯奇AI设计顾问"
      className="group fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full border border-keiqi-gold/50 bg-keiqi-night/90 px-4 py-3 text-sm font-medium text-keiqi-gold-soft shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur transition-colors hover:bg-keiqi-gold hover:text-keiqi-night md:bottom-6 md:right-6 md:px-5"
    >
      <Sparkles className="h-4 w-4 shrink-0 text-keiqi-gold-soft transition-colors group-hover:text-keiqi-night" />
      <span className="hidden sm:inline">凯奇AI设计顾问</span>
    </Link>
  );
}
