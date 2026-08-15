"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/brand/logo";

const NAV = [
  { label: "HOME", href: "/" },
  { label: "PROJECTS", href: "/projects" },
  { label: "DESIGN", href: "/design" },
  { label: "CRAFTSMANSHIP", href: "/craftsmanship" },
  { label: "HEALTHY HOME", href: "/healthy-home" },
  { label: "JAPANESE LIVING", href: "/japanese-living" },
  { label: "AI DESIGNER", href: "/ai-designer" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-keiqi-night/85 backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-300",
        scrolled
          ? "border-b border-keiqi-line shadow-[0_8px_40px_rgba(0,0,0,0.45)]"
          : "border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo inverted />

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-medium tracking-[0.18em] text-keiqi-cream/70 transition-colors hover:text-keiqi-gold-soft"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full border border-keiqi-gold/60 bg-keiqi-gold/10 px-5 py-2 text-xs font-medium tracking-wide text-keiqi-gold-soft transition-colors hover:bg-keiqi-gold hover:text-keiqi-night md:inline-block"
          >
            预约咨询
          </Link>
          <button
            type="button"
            aria-label="打开菜单"
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="h-6 w-6 text-keiqi-cream" />
            ) : (
              <Menu className="h-6 w-6 text-keiqi-cream" />
            )}
          </button>
        </div>
      </div>

      {/* 移动端抽屉 */}
      {open && (
        <div className="border-t border-keiqi-line bg-keiqi-night lg:hidden">
          <nav className="flex flex-col px-6 py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-keiqi-line/60 py-3 text-sm tracking-[0.15em] text-keiqi-cream/80 last:border-0 hover:text-keiqi-gold-soft"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-keiqi-gold px-5 py-3 text-center text-sm font-medium text-keiqi-night"
            >
              预约咨询
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
