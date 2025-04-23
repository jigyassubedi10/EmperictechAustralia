"use client";
import WorkCard from "@/components/shared/cards/WorkCard";
import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";
import ButtonGroup from "@/components/shared/work/ButtonGroup";
import getWork from "@/libs/getWork";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

const Work1 = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    // Fetch the work data
    const workData = getWork();
    setWorks(workData);

    // Dynamically load the filter function
    import("@/libs/filter").then((module) => {
      module.default(); // Call the filter function after the works are loaded
    });
  }, []);

  return (
    <section id="works">
      <div className="pt-60px pb-30px md:pt-20 md:pb-60px lg:pt-100px lg:pb-20">
        <div className="container">
          {/* Section Heading */}
          <div className="text-center flex flex-col items-center mb-10 md:mb-50px">
            <HeadingPrimary>Our Recent Works</HeadingPrimary>
            <p
              className="text-primary-color-light dark:text-body-color max-w-700px wow fadeInUp"
              data-wow-delay=".4s"
            >
              We put your ideas and thus your wishes in the form of a unique web
              project that inspires you and your customers.
            </p>
          </div>

          {/* Portfolio Filter */}
          <div className="portfolio-filter">
            {/* Controllers */}
            {/* <ButtonGroup /> */}

            {/* Swiper Slider for Case Studies */}
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
                className="case-slider"
              >
                {works.map((workSingle, idx) => (
                  <SwiperSlide key={idx}>
                    <WorkCard works={workSingle} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work1;
