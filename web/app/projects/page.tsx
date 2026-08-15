import { PageHero } from "@/components/layout/page-hero";
import { ProjectGrid } from "@/components/sections/project-grid";

export const metadata = {
  title: "案例中心",
  description:
    "凯奇设计案例中心 · 别墅、大平层、顶层复式与私人会所的高端住宅空间定制精选案例。",
};

export default function Page() {
  return (
    <>
      <PageHero
        en="Projects"
        title="案例中心"
        subtitle="每一套作品都是一次独立的命题。以下为凯奇精选案例，涵盖别墅、大平层与私人会所。"
      />
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <ProjectGrid />
        </div>
      </section>
    </>
  );
}
