"use client";

import BlogBreadcrumb from "@/components/sections/heros/BlogBreadcrumb";
import BlogDetailsPrimary from "@/components/sections/blog-details/BlogDetailsPrimary";

const BlogDetailsMain = ({ blog, prevBlog, nextBlog }) => {
  const title = blog?.title || "Blog Details";

  return (
    <main>
      <BlogBreadcrumb
        title={title}
        text={title}
        actualItem="Blogs"
        path="/#blogs"
      />
      <BlogDetailsPrimary
        blog={blog}
        prevBlog={prevBlog}
        nextBlog={nextBlog}
      />
    </main>
  );
};

export default BlogDetailsMain;
