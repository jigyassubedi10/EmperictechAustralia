"use client";
import Blogs1 from "@/components/sections/blogs/Blogs1";
import Contact1 from "@/components/sections/contact/Contact1";
import Hero from "@/components/sections/heros/Hero";
import Work1 from "@/components/sections/work/Work1";
// import Resume1 from "@/components/sections/resume/Resume1";
import Services1 from "@/components/sections/services/Services1";
// import Skills1 from "@/components/sections/skills/Skills1";
import Testimonials1 from "@/components/sections/testimonials/Testimonials1";
import { useWorkRenderContext } from "@/context_api/WorkRenderContext";
// import LogoCarousel from "@/components/sections/carousel/LogoCarousel";

const IndexMain = () => {
  const isWork = useWorkRenderContext();
  return (
    <main>
      <Hero />
      {/* <LogoCarousel /> */}
      <Services1 />
      <Work1 />
      {/* <Resume1 />
      <Skills1 /> */}
      <Testimonials1 />
      <Blogs1 />
      <Contact1 />
    </main>
  );
};

export default IndexMain;
