import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PROJECTS, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "案例未找到" };
  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = PROJECTS.filter(
    (p) => p.category === project.category && p.slug !== project.slug
  ).slice(0, 3);

  return (
    <article>
      {/* 头部 */}
      <section className="bg-keiqi-cream px-6 pb-12 pt-28 md:pt-36">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center gap-2 text-sm tracking-wide text-keiqi-ink/50 transition-colors hover:text-keiqi-red"
          >
            <ArrowLeft className="h-4 w-4" /> 返回案例中心
          </Link>
          <div className="mb-4 h-px w-16 bg-keiqi-red" />
          <p className="font-display text-sm uppercase tracking-[0.3em] text-keiqi-red">
            {project.category} · {project.area}
          </p>
          <h1 className="font-display mt-3 text-4xl text-keiqi-ink md:text-6xl">
            {project.name}
          </h1>
          <p className="mt-4 text-keiqi-ink/55">
            {project.location} · {project.year}
          </p>
        </div>
      </section>

      {/* 主图占位 */}
      <div className="px-6">
        <div className="mx-auto aspect-[16/9] max-w-5xl overflow-hidden rounded-lg bg-gradient-to-br from-keiqi-ink/10 to-keiqi-red/10" />
      </div>

      {/* 概述 */}
      <section className="bg-keiqi-cream px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="font-display text-3xl text-keiqi-ink">设计概述</h2>
            <p className="mt-6 text-base leading-8 text-keiqi-ink/70">
              {project.intro}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {project.highlights.map((h) => (
                <div
                  key={h}
                  className="flex items-center gap-2 rounded-lg border border-keiqi-mist bg-white px-4 py-3 text-sm text-keiqi-ink/80"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-keiqi-red" />
                  {h}
                </div>
              ))}
            </div>
          </div>
          <aside className="space-y-4 rounded-lg border border-keiqi-mist bg-white p-6">
            <InfoRow label="项目类型" value={project.category} />
            <InfoRow label="建筑面积" value={project.area} />
            <InfoRow label="项目地点" value={project.location} />
            <InfoRow label="交付年份" value={project.year} />
          </aside>
        </div>
      </section>

      {/* 图集占位 */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display mb-8 text-3xl text-keiqi-ink">空间图集</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-lg bg-keiqi-mist"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 相关案例 */}
      {related.length > 0 && (
        <section className="bg-keiqi-cream px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display mb-8 text-3xl text-keiqi-ink">
              同类型案例
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/projects/${r.slug}`}
                  className="group block overflow-hidden rounded-lg border border-keiqi-mist bg-white"
                >
                  <div className="aspect-[4/3] bg-keiqi-mist transition-transform duration-500 group-hover:scale-[1.03]" />
                  <div className="p-5">
                    <h3 className="font-display text-xl text-keiqi-ink">
                      {r.name}
                    </h3>
                    <span className="mt-2 inline-block text-sm text-keiqi-red">
                      查看详情 →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-keiqi-cream px-6 pb-24 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-keiqi-red px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          预约同款设计 <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </article>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-keiqi-mist pb-3 last:border-0">
      <span className="text-sm text-keiqi-ink/50">{label}</span>
      <span className="text-sm font-medium text-keiqi-ink">{value}</span>
    </div>
  );
}
