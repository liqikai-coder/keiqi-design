import Link from "next/link";
import { Sparkles } from "lucide-react";

export function AiFloat() {
  return (
    <Link
      href="/ai-designer"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border border-keiqi-gold/50 bg-keiqi-night/85 px-5 py-3 text-sm font-medium text-keiqi-gold-soft shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur transition-colors hover:bg-keiqi-gold hover:text-keiqi-night"
    >
      <Sparkles className="h-4 w-4 text-keiqi-gold-soft transition-colors group-hover:text-keiqi-night" />
      凯奇AI设计顾问
    </Link>
  );
}
