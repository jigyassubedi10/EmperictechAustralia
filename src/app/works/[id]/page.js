import WorkdetailsMain from "@/components/layout/main/WorkdetailsMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import getWork from "@/libs/getWork";
import { notFound } from "next/navigation";

// ✅ Static Site Generation (SSG)
export async function generateStaticParams() {
  console.time("Fetching Portfolio Data for SSG");
  const works = await getWork();
  console.timeEnd("Fetching Portfolio Data for SSG");

  // Ensure all IDs are strings
  return works.map(({ id }) => ({ id: id.toString() }));
}

// ✅ ISR: Regenerates every 60 seconds
export const revalidate = 60;

export default async function WorkDetails({ params }) {
  console.time("Fetching Portfolio Data for Page Load");

  const { id } = params; // ✅ id is now a string like "handy-cleaning"

  const works = await getWork();

  // ✅ Compare string IDs
  const isExistWork = works.find((item) => item.id === id);

  console.timeEnd("Fetching Portfolio Data for Page Load");

  if (!isExistWork) {
    console.warn(`Portfolio with ID "${id}" not found.`);
    return notFound();
  }

  return (
    <PageWrapper isInnerPage={true}>
      <WorkdetailsMain work={isExistWork} />
    </PageWrapper>
  );
}