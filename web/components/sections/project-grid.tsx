"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { PROJECTS, CATEGORIES, type ProjectCategory } from "@/lib/projects";
import { ProjectCard } from "@/components/sections/project-card";

const TABS: Array<ProjectCategory | "全部"> = ["全部", ...CATEGORIES];

export function ProjectGridFilter() {
  const [active, setActive] = useState<ProjectCategory | "全部">("全部");
  const list =
    active === "全部"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === active);

  return (
    <div>
      {/* 筛选 Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setActive(t)}
            className={cn(
              "rounded-full border px-5 py-2 text-xs tracking-[0.18em] transition-colors",
              active === t
                ? "border-keiqi-gold bg-keiqi-gold text-keiqi-night"
                : "border-keiqi-line text-keiqi-cream/60 hover:border-keiqi-gold/50 hover:text-keiqi-gold-soft"
            )}
          >
            {t}
          </button>
        ))}
      </div>

      {/* 作品网格 */}
      <div className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <ProjectCard key={p.slug} project={p} priority={i < 3} />
        ))}
      </div>

      {/* 脚注 */}
      <p className="mt-16 border-t border-keiqi-line pt-8 text-center text-xs tracking-wider text-keiqi-cream/40">
        案例为占位命名与示意图，真实项目素材就绪后将逐套替换 ·
        持续更新中
      </p>
    </div>
  );
}
