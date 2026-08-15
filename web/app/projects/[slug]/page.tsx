import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { PROJECTS, getProject } from "@/lib/projects";
import { ProjectCard } from "@/components/sections/project-card";

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
    title: `${project.name} · KEIQI DESIGN`,
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
      {/* 头部（深色） */}
      <section className="bg-keiqi-night px-6 pb-10 pt-28 md:pt-36">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center gap-2 text-sm tracking-wide text-keiqi-cream/50 transition-colors hover:text-keiqi-gold-soft"
          >
            <ArrowLeft className="h-4 w-4" /> 返回案例中心
          </Link>
          <div className="mb-5 h-px w-16 bg-keiqi-gold" />
          <p className="font-display text-sm uppercase tracking-[0.3em] text-keiqi-gold-soft">
            {project.category} · {project.area}
          </p>
          <h1 className="font-display mt-3 text-4xl text-keiqi-cream md:text-6xl">
            {project.name}
          </h1>
          <p className="mt-4 flex items-center gap-1.5 text-sm text-keiqi-cream/50">
            <MapPin className="h-4 w-4" />
            {project.location} · {project.year}
          </p>
        </div>
      </section>

      {/* 主图 */}
      <section className="px-6">
        <div className="relative mx-auto aspect-[16/9] max-w-5xl overflow-hidden rounded-xl border border-keiqi-line">
          <Image
            src={project.image}
            alt={project.name}
            fill
            priority
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* 概述 */}
      <section className="bg-keiqi-night px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="font-display text-3xl text-keiqi-cream">设计概述</h2>
            <p className="mt-6 text-base leading-8 text-keiqi-cream/65">
              {project.intro}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {project.highlights.map((h) => (
                <div
                  key={h}
                  className="flex items-center gap-2 rounded-lg border border-keiqi-line bg-keiqi-night-2 px-4 py-3 text-sm text-keiqi-cream/80"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-keiqi-gold" />
                  {h}
                </div>
              ))}
            </div>
          </div>
          <aside className="h-fit space-y-4 rounded-lg border border-keiqi-line bg-keiqi-night-2 p-6">
            <InfoRow label="项目类型" value={project.category} />
            <InfoRow label="建筑面积" value={project.area} />
            <InfoRow label="项目地点" value={project.location} />
            <InfoRow label="交付年份" value={project.year} />
          </aside>
        </div>
      </section>

      {/* 空间图集 */}
      <section className="bg-keiqi-night-2 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display mb-8 text-3xl text-keiqi-cream">
            空间图集
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.gallery.map((src, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] overflow-hidden rounded-lg border border-keiqi-line"
              >
                <Image
                  src={src}
                  alt={`${project.name} 空间 ${i + 1}`}
                  fill
                  sizes="(min-width: 1024px) 500px, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 同类型案例 */}
      {related.length > 0 && (
        <section className="bg-keiqi-night px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display mb-10 text-3xl text-keiqi-cream">
              同类型案例
            </h2>
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-3">
              {related.map((r) => (
                <ProjectCard key={r.slug} project={r} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="border-t border-keiqi-line bg-keiqi-night-2 px-6 py-20 text-center">
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 rounded-full border border-keiqi-gold bg-keiqi-gold/15 px-8 py-3 text-sm font-medium text-keiqi-gold-soft transition-colors hover:bg-keiqi-gold hover:text-keiqi-night"
        >
          预约同款设计
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </section>
    </article>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-keiqi-line pb-3 last:border-0">
      <span className="text-sm text-keiqi-cream/45">{label}</span>
      <span className="text-sm font-medium text-keiqi-gold-soft">{value}</span>
    </div>
  );
}
