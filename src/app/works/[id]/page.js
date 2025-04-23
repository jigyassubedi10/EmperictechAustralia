import WorkdetailsMain from "@/components/layout/main/WorkdetailsMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import getWork from "@/libs/getWork";
import { notFound } from "next/navigation";

// ✅ Enable Static Site Generation (SSG) with Incremental Static Regeneration (ISR)
export async function generateStaticParams() {
  console.time("Fetching Portfolio Data for SSG");
  const works = await getWork();
  console.timeEnd("Fetching Portfolio Data for SSG");

  return works.map(({ id }) => ({ id: id.toString() })); // Ensure id is string
}

// ✅ Add ISR: Page regenerates every 60 seconds
export const revalidate = 60;

export default async function WorkDetails({ params }) {
  console.time("Fetching Portfolio Data for Page Load");

  // ✅ Ensure params exist and destructure safely
  const { id: rawId } = await params; // Ensure params is awaited

  // ✅ Convert id to a number safely
  const id = Number(rawId);
  if (isNaN(id)) {
    console.warn(`Invalid ID format: ${rawId}, redirecting to 404.`);
    return notFound();
  }

  // ✅ Fetch portfolio data
  const works = await getWork();

  // ✅ Check if the portfolio exists
  const isExistWork = works.find((item) => item.id === id);

  console.timeEnd("Fetching Portfolio Data for Page Load");

  if (!isExistWork) {
    console.warn(`Portfolio with ID ${id} not found.`);
    return notFound();
  }

  return (
    <PageWrapper isInnerPage={true}>
      <WorkdetailsMain work={isExistWork} />
    </PageWrapper>
  );
}
