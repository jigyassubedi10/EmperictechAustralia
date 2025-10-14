import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import About from "@/components/sections/about/about";

export const metadata = {
  title: "About | EmpericTech | Your Trusted Web & IT Partner in Australia",
  description:
    "Empowering businesses with secure web development, cloud migration, and managed IT services. Based in Melbourne, we deliver fast, reliable, and scalable solutions.",
  keywords: [
    "web development Melbourne",
    "IT solutions Melbourne",
    "cloud services Australia",
    "managed IT services",
  ],
};

export default function AboutPage() {
  return (
    <PageWrapper isInnerPage={true}>
      <About />
    </PageWrapper>
  );
}
