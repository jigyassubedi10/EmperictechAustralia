"use client";
import BlogCard from "@/components/shared/cards/BlogCard";
import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";
import getBlogs from "@/libs/getBlogs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

const BlogsPrimary = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const blogData = getBlogs(); // load from blogs.json
    setBlogs(blogData);
  }, []);

  return (
    <section id="blogs">
      <div className="pt-60px pb-30px md:pt-20 md:pb-60px lg:pt-100px lg:pb-20">
        <div className="container">
          {/* Section Heading */}
          <div className="text-center flex flex-col items-center mb-10 md:mb-50px">
            <HeadingPrimary>Latest Blog Articles</HeadingPrimary>
            <p
              className="text-primary-color-light dark:text-body-color max-w-700px wow fadeInUp"
              data-wow-delay=".4s"
            >
              Stay updated with the latest insights, trends, and tips from the world of digital technology, design, and development.
            </p>
          </div>

          {/* Blog Cards in Swiper */}
          <div
            className="wow fadeInUp mt-30px md:mt-10 lg:mt-50px"
            data-wow-delay=".6s"
          >
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              pagination={{ clickable: true }}
              speed={1000}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                600: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              modules={[Pagination, Autoplay]}
              className="blog-slider"
            >
              {blogs.map((blog, idx) => (
                <SwiperSlide key={idx}>
                  <BlogCard blog={blog} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsPrimary;
