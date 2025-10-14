import IndexMain from "@/components/layout/main/IndexMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "EmpericTech | Web Development, Cloud & IT Solutions in Melbourne",
  description:
    "Learn about EmpericTech’s mission, values, and expertise in web development, cloud solutions, and IT support. Discover why businesses trust us.",
  keywords: [
    "IT company Melbourne",
    "about EmpericTech",
    "web development company Australia",
    "trusted IT partner",
  ],
};

export default function Home() {
  return (
    <PageWrapper isIndexPage={true}>
      <IndexMain />
    </PageWrapper>
  );
}
