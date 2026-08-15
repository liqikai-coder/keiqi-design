import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getFeatured } from "@/lib/projects";
import { ProjectCard } from "@/components/sections/project-card";

/** 首页 · 精选作品（引用 lib/projects.ts 案例库） */
export function FeaturedProjects() {
  const featured = getFeatured(3);
  return (
    <section className="border-t border-keiqi-line/60 bg-keiqi-night px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* 区块标题 */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.42em] text-keiqi-gold-soft">
              <span className="h-px w-10 bg-keiqi-gold-soft/70" />
              Selected Works
            </p>
            <h2 className="font-display mt-5 text-4xl leading-tight text-keiqi-cream md:text-5xl">
              精选作品
            </h2>
            <p className="mt-3 max-w-md text-sm leading-7 text-keiqi-cream/55">
              每一套作品，都是一次独立命题。更多案例正在整理中。
            </p>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm tracking-wider text-keiqi-gold-soft transition-colors hover:text-keiqi-cream"
          >
            全部案例
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* 作品网格 */}
        <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} priority={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
