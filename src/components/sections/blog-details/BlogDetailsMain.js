"use client";

import Image from "next/image";
import Link from "next/link";

const BlogDetailsPrimary = ({ blog, prevBlog, nextBlog }) => {
  if (!blog) return null;

  const {
    title,
    img,
    content, // assuming your blog object has a 'content' property
    date,
    category,
  } = blog;

  return (
    <section>
      <div className="container py-20">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="mb-6 text-gray-500">{date} | {category}</p>
        {img && (
          <Image src={img} alt={title} width={1200} height={600} className="mb-6" />
        )}
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
        
        {/* Navigation */}
        <div className="flex justify-between mt-10">
          {prevBlog && (
            <Link href={`/blogs/${prevBlog.id}`} className="text-blue-500">
              ← {prevBlog.title}
            </Link>
          )}
          {nextBlog && (
            <Link href={`/blogs/${nextBlog.id}`} className="text-blue-500 ml-auto">
              {nextBlog.title} →
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsPrimary;
