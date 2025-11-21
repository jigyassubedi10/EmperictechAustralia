"use client";

import BlogCard from "@/components/shared/cards/BlogCard";
import getBlogs from "@/libs/getBlogs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const Blogs1 = () => {
  const blogs = getBlogs()?.filter(({ isBlogQuote }) => !isBlogQuote);

  return (
    <section id="blogs">
      <div className="py-60px md:py-20 lg:py-100px xl:py-28">
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
              Stay updated with insights, news, and articles that help you grow your
              digital journey.
            </p>
          </div>

          {/* Swiper Slider */}
          <div
            className="wow fadeInUp mt-30px md:mt-10 lg:mt-50px"
            data-wow-delay=".6s"
          >
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              pagination={{ clickable: true }}
              speed={600}
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

          {/* Explore More Blogs Button */}
          <div className="text-center mt-10 md:mt-16">
            <Link
              href="/blogs"
              className="text-size-15 font-bold text-white-color capitalize py-17px px-35px ml-10px bg-200 bg-gradient-secondary hover:bg-[-100%] rounded-full leading-1 transition-all duration-300"
            >
              Explore More Blogs{" "}
              <FaChevronRight className="inline-block ml-1 text-xs sm:text-sm md:text-base lg:text-lg" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs1;
