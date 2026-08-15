"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

/* 豪宅外景背景（Pexels 免费商用） */
const HERO_IMAGE =
  "https://images.pexels.com/photos/13203184/pexels-photo-13203184.jpeg";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-keiqi-night">
      {/* 全屏豪宅背景 */}
      <Image
        src={HERO_IMAGE}
        alt="凯奇设计 · 高端住宅作品"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* 深色遮罩：左→右 保证文字可读，顶部→底部 融合墨夜 */}
      <div className="absolute inset-0 bg-gradient-to-r from-keiqi-night/95 via-keiqi-night/65 to-keiqi-night/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-keiqi-night via-transparent to-keiqi-night/75" />

      {/* 极淡 KQ 水印 */}
      <span
        aria-hidden
        className="kq-watermark pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 select-none text-[38vw] font-semibold leading-none text-keiqi-gold/[0.06]"
      >
        KQ
      </span>

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-16">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex items-center gap-3 text-xs uppercase tracking-[0.42em] text-keiqi-gold-soft"
        >
          <span className="h-px w-10 bg-keiqi-gold-soft/70" />
          高端住宅空间定制机构
        </motion.p>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-display mt-7 text-6xl leading-[1.02] tracking-tight md:text-8xl lg:text-[7.5rem]"
        >
          <span className="text-gold-gradient">KEIQI</span>
          <br />
          <span className="text-gold-gradient">DESIGN</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-display mt-6 text-xl italic text-keiqi-cream/75 md:text-3xl"
        >
          Designing Better Living
        </motion.p>

        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-7 max-w-xl text-sm leading-8 text-keiqi-cream/70 md:text-base"
        >
          凯奇专注高端住宅空间定制。别墅 / 大平层 / 顶层复式 / 私人会所，
          一户一案，从设计到交付。
        </motion.p>

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-12 flex flex-wrap items-center gap-5"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full border border-keiqi-gold bg-keiqi-gold/15 px-7 py-3 text-sm font-medium text-keiqi-gold-soft backdrop-blur transition-colors hover:bg-keiqi-gold hover:text-keiqi-night"
          >
            查看作品
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-keiqi-cream/30 px-7 py-3 text-sm font-medium text-keiqi-cream/90 backdrop-blur transition-colors hover:border-keiqi-gold-soft hover:text-keiqi-gold-soft"
          >
            预约设计顾问
          </Link>
          <Link
            href="/ai-designer"
            className="group inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-keiqi-cream/85 transition-colors hover:text-keiqi-gold-soft"
          >
            <Sparkles className="h-4 w-4 text-keiqi-gold-soft" />
            AI 免费咨询
          </Link>
        </motion.div>
      </div>

      {/* 底部滚动提示 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <span className="block h-12 w-px bg-gradient-to-b from-transparent via-keiqi-gold/70 to-transparent" />
      </motion.div>
    </section>
  );
}
