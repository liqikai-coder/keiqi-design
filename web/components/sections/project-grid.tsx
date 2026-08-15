"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { PROJECTS, CATEGORIES, type ProjectCategory } from "@/lib/projects";

type Filter = "全部" | ProjectCategory;

export function ProjectGrid() {
  const [filter, setFilter] = useState<Filter>("全部");
  const filters: Filter[] = ["全部", ...CATEGORIES];
  const list =
    filter === "全部"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <div>
      {/* 筛选 */}
      <div className="mb-10 flex flex-wrap gap-3">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full border px-5 py-2 text-sm tracking-wide transition-colors",
              filter === f
                ? "border-keiqi-red bg-keiqi-red text-white"
                : "border-keiqi-ink/20 text-keiqi-ink/70 hover:border-keiqi-red hover:text-keiqi-red"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      {/* 案例网格 */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group block overflow-hidden rounded-lg border border-keiqi-mist bg-white"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-keiqi-mist">
              <div className="absolute inset-0 bg-gradient-to-br from-keiqi-ink/10 to-keiqi-red/10 transition-transform duration-500 group-hover:scale-[1.03]" />
              <span className="absolute left-4 top-4 rounded-full bg-keiqi-cream/90 px-3 py-1 text-xs tracking-wide text-keiqi-ink">
                {p.category} · {p.area}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl text-keiqi-ink">
                {p.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-keiqi-ink/55">
                {p.summary}
              </p>
              <span className="mt-4 inline-block text-sm text-keiqi-red transition-opacity group-hover:opacity-70">
                查看详情 →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
