import Link from "next/link";
import { Sparkles } from "lucide-react";

export function AiFloat() {
  return (
    <Link
      href="/ai-designer"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-keiqi-ink px-5 py-3 text-sm font-medium text-keiqi-cream shadow-xl transition-colors hover:bg-keiqi-red"
    >
      <Sparkles className="h-4 w-4 text-keiqi-red transition-colors group-hover:text-white" />
      凯奇AI设计顾问
    </Link>
  );
}
