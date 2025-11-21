"use client";

import WorkCard from "@/components/shared/cards/WorkCard";
import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";
import getWork from "@/libs/getWork";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from "react";

const Work1 = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const workData = getWork();
    setWorks(workData);
  }, []);

  return (
    <section id="works">
      <div className="bg-cream-light-color dark:bg-black-color pt-60px pb-30px md:pt-20 md:pb-60px lg:pt-30px lg:pb-20">
        <div className="container">
          
          {/* Heading */}
          <div className="text-center flex flex-col items-center mb-10 md:mb-50px">
            <HeadingPrimary>Our Recent Works</HeadingPrimary>
            <p className="text-primary-color-light dark:text-body-color max-w-700px wow fadeInUp" data-wow-delay=".4s">
              Take a look at our successfully completed projects that showcase our expertise in design, development, and digital solutions.
            </p>
          </div>

          {/* Works Swiper */}
          <div className="wow fadeInUp mt-30px md:mt-10 lg:mt-50px" data-wow-delay=".6s">
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
              className="works-slider"
            >
              {works?.map((work, idx) => (
                <SwiperSlide key={idx}>
                  <WorkCard works={work} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Explore More Works Button */}
          <div className="text-center mt-10 md:mt-10">
            <Link
              href="/works"
              className="text-size-15 font-bold text-white-color capitalize py-17px px-35px ml-10px bg-200 bg-gradient-secondary hover:bg-[-100%] rounded-full leading-1 transition-all duration-300"
            >
              Explore More Works{" "}
              <FaChevronRight className="inline-block ml-1 text-xs sm:text-sm md:text-base lg:text-lg" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Work1;
