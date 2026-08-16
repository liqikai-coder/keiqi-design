import Image from "next/image";
import Link from "next/link";

const STANDARDS = ["水电系统", "防水系统", "木作系统", "涂装系统", "交付体系"];

/* 工艺氛围图（Pexels 免费商用 · 手工刨刀木工特写，上线替换为真实工地照片） */
const CRAFT_IMAGE =
  "/images/pexels/37358115.jpg";

export function Craftsmanship() {
  return (
    <section className="bg-keiqi-night-3 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.4em] text-keiqi-gold-soft">
              Craftsmanship
            </p>
            <h2 className="font-display mt-3 text-4xl text-keiqi-cream md:text-5xl">
