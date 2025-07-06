"use client";

import Image from "next/image";
import Link from "next/link";

const BlogDetailsPrimary = ({ blog, prevBlog, nextBlog }) => {
  if (!blog) return null;

  const {
    metaDescription,
    coverImage,
    publishedDate,
    readingTime,
    author,
    tags,
    content,
  } = blog;

  return (
    <section>
      <div className="py-40px md:py-20 lg:py-80px xl:py-16 bg-gray-50 dark:bg-black-color">
        <div className="container">
          {/* Blog Cover Image */}
          {/* <div className="overflow-hidden p-5 md:p-10 xl:p-60px pb-0 bg-cream-light-color dark:bg-seondary-color rounded-lg shadow-lg">
            {coverImage && (
              <Image
                src={coverImage}
                alt={title}
                className="w-full object-cover rounded-md"
                width={2000}
                height={1000}
              />
            )}
          </div> */}

          {/* Blog Header Info */}
          <div className="pt-30px md:pt-10 lg:pt-10px">
            <div className="transition-all duration-500">
              <div className="relative z-10">
                <h4 className="text-primary-color-light dark:text-white-color capitalize text-size-20 md:text-size-20 lg:text-size-25 font-bold mb-5">
                  {metaDescription}
                </h4>

                <div className="text-primary-color-light dark:text-white-color font-medium space-y-4">
  {/* Author and Date Row */}
  <div className="flex items-center flex-wrap gap-6">
  <span className="flex items-center gap-2">
    <i className="fa-solid fa-user"></i>
    {author}
  </span>
  <span className="flex items-center gap-2">
    <i className="fa-solid fa-calendar-days"></i>
    {publishedDate}
  </span>
  <span className="flex items-center gap-2">
    <i className="fa-regular fa-clock"></i>
    {readingTime}
  </span>
</div>


  {/* Tags Row */}
  {tags?.length > 0 && (
    <div className="flex items-center gap-3 flex-wrap pb-8">
      <span className="flex items-center gap-2">
        <i className="fa-solid fa-tags"></i>
        <span className="capitalize">Tags:</span>
      </span>
      {tags.map((tag, idx) => (
        <span key={idx} className="capitalize bg-primary-color-light/10 dark:bg-white/10 px-2 py-1 rounded-md text-sm">
          {tag}
        </span>
      ))}
    </div>
  )}
</div>


                {/* Blog Content Sections */}
                <div className="space-y-12 text-primary-color-light dark:text-white-color prose prose-lg dark:prose-invert max-w-none">
  {content?.sections?.map(({ heading, text, list }, idx) => (
    <section key={idx}>
      <h2 className="text-size-28 font-semibold mb-2">{heading}</h2>
      {text?.split('\n').map((para, pIdx) => (
        <p key={pIdx}>{para.trim()}</p>
      ))}
      {list && (
        <ul className="list-disc pt-1 pl-6 space-y-2">
          {list.map((item, liIdx) => (
            <li key={liIdx}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  ))}
</div>


                {/* Prev/Next Navigation */}
                <div className="mt-50px px-15px py-30px md:px-25px lg:px-50px bg-primary-color flex justify-between flex-wrap gap-30px items-center ">
                  {prevBlog ? (
                    <Link
                      href={`/blogs/${prevBlog.slug}`}
                      className="flex gap-5 items-end group/nested text-white-color"
                    >
                      <span className="text-xl md:text-3xl rotate-45 group-hover/nested:rotate-0 transition-all duration-500">
                        <i className="fal fa-arrow-left mb-2"></i>
                      </span>
                      <h6>
                        <span className="block">Previous Post</span>
                        <span className="capitalize text-size-25 md:text-size-35 lg:text-size-45 font-bold">
                          {prevBlog.title1}
                        </span>
                      </h6>
                    </Link>
                  ) : (
                    <div></div>
                  )}

                  {nextBlog ? (
                    <Link
                      href={`/blogs/${nextBlog.slug}`}
                      className="flex gap-5 items-end group/nested ml-auto text-white-color"
                    >
                      <h6>
                        <span className="block">Next Post</span>
                        <span className="capitalize text-size-25 md:text-size-35 lg:text-size-45 font-bold">
                          {nextBlog.title1}
                        </span>
                      </h6>
                      <span className="text-xl md:text-3xl -rotate-45 group-hover/nested:rotate-0 transition-all duration-500">
                        <i className="fal fa-arrow-right mb-2"></i>
                      </span>
                    </Link>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsPrimary;
