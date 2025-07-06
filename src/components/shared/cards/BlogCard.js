"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const BlogCard = ({ blog }) => {
  const themeMode = useSearchParams()?.get("theme_mode");
  const { title1, coverImage, shortDesc, slug } = blog || {};
  const isLight = themeMode === "light";

  return (
    <div className="relative rounded-10px group overflow-hidden w-full h-full">
      {/* Image */}
      <Image
        src={coverImage}
        alt={title1}
        width={2000}
        height={2000}
        className="w-full h-full object-cover rounded-lg"
      />

      {/* Overlay Content */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-5 w-[90%] z-10 transition-all duration-300">
        <Link
          href={`/blogs/${slug}${isLight ? "?theme_mode=light" : ""}`}
          className="block bg-gradient-primary text-white-color rounded-15px px-5 py-4 relative"
        >
          <span className="block text-xl md:text-2xl lg:text-3xl font-bold mb-2">
            {title1}
          </span>

          <span className="block text-body-color">{shortDesc}</span>

          <i className="flaticon-up-right-arrow text-size-15 md:text-xl text-primary-color group-hover:text-white-color absolute top-1/2 right-5 transform -translate-y-1/2 transition-all duration-300 rotate-[-360deg] group-hover:rotate-0"></i>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
