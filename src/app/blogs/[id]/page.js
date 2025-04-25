import BlogDetailsMain from "@/components/layout/main/BlogDetailsMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import getBlogs from "@/libs/getBlogs";
import { notFound } from "next/navigation";

// Fetch blogs data
const blogs = getBlogs();

export const metadata = {
  title: "Blog Details - Gerold - Personal Portfolio React NextJs Template",
  description: "Blog Details - Gerold - Personal Portfolio React NextJs Template",
};

export default async function BlogDetails({ params }) {
  const { id } = params;

  // Convert id to number and check if it exists in blogs
  const isExistBlog = blogs?.find(({ id: id1 }) => id1 === parseInt(id));

  if (!isExistBlog) {
    notFound();
  }

  return (
    <PageWrapper isInnerPage={true}>
      <BlogDetailsMain />
    </PageWrapper>
  );
}

// ✅ Generate static paths for each blog ID
export async function generateStaticParams() {
  return blogs?.map(({ id }) => ({ id: id.toString() }));
}
