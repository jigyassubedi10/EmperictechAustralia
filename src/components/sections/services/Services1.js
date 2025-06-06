"use client";
import ServiceCard from "@/components/shared/cards/ServiceCard";
import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";
import getALlServices from "@/libs/getALlServices";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Services1 = () => {
  const services = getALlServices();

  return (
    <section id="services">
      <div className="bg-cream-light-color dark:bg-black-color py-60px md:py-20 lg:py-30">
        <div className="container">
          {/* Heading */}
          <div className="text-center flex flex-col items-center mb-10 md:mb-50px">
            <HeadingPrimary>Our Services</HeadingPrimary>
            <p
              className="text-primary-color-light dark:text-body-color max-w-700px wow fadeInUp"
              data-wow-delay=".4s"
            >
              We put your ideas and thus your wishes in the form of a unique web
              project that inspires you and your customers.
            </p>
          </div>

          {/* Swiper */}
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
              className="services-slider"
            >
              {services?.map((service, idx) => (
                <SwiperSlide key={idx}>
                  <ServiceCard service={service} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services1;
