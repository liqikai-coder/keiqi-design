import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

/** 作品卡片（设计事务所作品集风格） */
export function ProjectCard({
  project,
  priority,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-keiqi-line bg-keiqi-night-2">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          priority={priority}
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-keiqi-night/75 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-40" />
        <span className="absolute left-4 top-4 rounded-full border border-keiqi-gold/40 bg-keiqi-night/55 px-3 py-1 text-[10px] tracking-[0.22em] text-keiqi-gold-soft backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className="mt-4 flex items-end justify-between gap-4">
        <div>
          <h3 className="font-display text-xl text-keiqi-cream transition-colors duration-300 group-hover:text-keiqi-gold-soft md:text-2xl">
            {project.name}
          </h3>
          <p className="mt-1.5 text-xs tracking-wider text-keiqi-cream/45">
            {project.area} · {project.location} · {project.year}
          </p>
        </div>
        <span className="font-display pb-1 text-sm italic text-keiqi-gold-soft opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          View →
        </span>
      </div>
    </Link>
  );
}
