"use client";

import BlogCard from "@/components/shared/cards/BlogCard";
import getBlogs from "@/libs/getBlogs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Blogs1 = () => {
  const blogs = getBlogs()?.filter(({ isBlogQuote }) => !isBlogQuote);

  return (
    <section id="blogs">
      <div className="py-60px md:py-20 lg:py-100px xl:py-30">
        <div className="container">
          {/* Section Heading */}
          <div className="text-center flex flex-col items-center mb-10 md:mb-50px">
            <h2
              className="text-3xl md:text-size-35 lg:text-size-40 xl:text-size-45 bg-gradient-text-light dark:bg-gradient-text bg-clip-text xl:leading-1.2 text-transparent mb-15px wow fadeInUp"
              data-wow-delay=".3s"
            >
              Our Recent Blogs
            </h2>
            <p
              className="text-primary-color-light dark:text-body-color max-w-700px wow fadeInUp"
              data-wow-delay=".4s"
            >
              We put your ideas and thus your wishes in the form of a unique web
              project that inspires you and your customers.
            </p>
          </div>

          {/* Swiper Slider */}
          <div className="wow fadeInUp mt-30px md:mt-10 lg:mt-50px" data-wow-delay=".6s">
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
              {blogs?.map((blog, idx) => (
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

export default Blogs1;
