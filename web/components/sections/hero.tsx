"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-keiqi-cream px-6 py-24">
      {/* 极淡 KQ 水印 */}
      <span
        aria-hidden
        className="kq-watermark pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 select-none text-[42vw] font-semibold leading-none text-keiqi-ink/[0.035]"
      >
        KQ
      </span>

      <div className="relative mx-auto w-full max-w-5xl">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-sm uppercase tracking-[0.4em] text-keiqi-red"
        >
          高端住宅空间定制机构
        </motion.p>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-display mt-5 text-6xl leading-[1.05] tracking-tight text-keiqi-ink md:text-8xl"
        >
          KEIQI DESIGN
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-display mt-4 text-xl italic text-keiqi-ink/60 md:text-3xl"
        >
          Designing Better Living
        </motion.p>

        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-8 max-w-xl text-base leading-8 text-keiqi-ink/70"
        >
          凯奇专注高端住宅空间定制。别墅 / 大平层 / 顶层复式 / 私人会所，一户一案，从设计到交付。
        </motion.p>

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/projects"
            className="rounded-full bg-keiqi-red px-7 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            查看作品
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-keiqi-ink/20 px-7 py-3 text-sm font-medium text-keiqi-ink transition-colors hover:border-keiqi-red hover:text-keiqi-red"
          >
            预约设计顾问
          </Link>
          <Link
            href="/ai-designer"
            className="group inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-keiqi-ink transition-colors hover:text-keiqi-red"
          >
            <Sparkles className="h-4 w-4 text-keiqi-red" />
            AI 免费咨询
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
