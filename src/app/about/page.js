import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import About from "@/components/sections/about/about";

export default function AboutPage() {
  return (
    <PageWrapper isInnerPage={true}>
      <About />
    </PageWrapper>
  );
}
