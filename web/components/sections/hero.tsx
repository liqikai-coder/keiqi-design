"use client";

import Link from "next/link";
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
    <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-keiqi-cream px-6">
      {/* 极淡 KQ 水印 */}
      <span
        aria-hidden
        className="kq-watermark pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 select-none text-[40vw] font-semibold leading-none text-keiqi-ink/[0.03]"
      >
        KQ
      </span>

      <div className="relative mx-auto w-full max-w-5xl">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-display text-sm uppercase tracking-[0.4em] text-keiqi-red"
        >
          KEIQI DESIGN
        </motion.p>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-display mt-5 text-5xl leading-[1.1] text-keiqi-ink md:text-7xl"
        >
          设计美好生活方式
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-3 text-lg tracking-wide text-keiqi-ink/50 md:text-2xl"
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
          凯奇设计 · 高端住宅空间定制 · 别墅 / 大平层 / 顶层复式 / 私人会所
        </motion.p>

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            href="/contact"
            className="rounded-full bg-keiqi-red px-7 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            预约咨询
          </Link>
          <Link
            href="/projects"
            className="rounded-full border border-keiqi-ink/20 px-7 py-3 text-sm font-medium text-keiqi-ink transition-colors hover:border-keiqi-red hover:text-keiqi-red"
          >
            查看案例
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
