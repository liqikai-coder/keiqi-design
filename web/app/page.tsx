import { Hero } from "@/components/sections/hero";
import { Philosophy } from "@/components/sections/philosophy";
import { ServiceDomains } from "@/components/sections/service-domains";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { DesignSystem } from "@/components/sections/design-system";
import { Craftsmanship } from "@/components/sections/craftsmanship";
import { HealthyHome } from "@/components/sections/healthy-home";
import { JapaneseLiving } from "@/components/sections/japanese-living";
import { AiAdvisor } from "@/components/sections/ai-advisor";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <ServiceDomains />
      <FeaturedProjects />
      <DesignSystem />
      <Craftsmanship />
      <HealthyHome />
      <JapaneseLiving />
      <AiAdvisor />
      <Cta />
    </>
  );
}
