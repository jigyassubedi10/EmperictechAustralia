import BlogDetailsMain from "@/components/layout/main/BlogDetailsMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import getBlogs from "@/libs/getBlogs";
import { notFound } from "next/navigation";

// ✅ Static Site Generation (SSG)
export async function generateStaticParams() {
  const blogs = await getBlogs();

  // Map slug as 'id' since your route param is [id]
  return blogs.map(({ slug }) => ({ id: slug }));
}

// ✅ ISR: Regenerates every 60 seconds
export const revalidate = 60;

export default async function BlogDetails({ params }) {
  const { id } = params; // param is named 'id'

  const blogs = await getBlogs();

  // Find blog by slug (which equals id)
  const currentIndex = blogs.findIndex((item) => item.slug === id);

  if (currentIndex === -1) {
    console.warn(`Blog with id "${id}" not found.`);
    return notFound();
  }

  const blog = blogs[currentIndex];
  const prevBlog = currentIndex > 0 ? blogs[currentIndex - 1] : null;
  const nextBlog = currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null;

  return (
    <PageWrapper isInnerPage={true}>
      <BlogDetailsMain blog={blog} prevBlog={prevBlog} nextBlog={nextBlog} />
    </PageWrapper>
  );
}
