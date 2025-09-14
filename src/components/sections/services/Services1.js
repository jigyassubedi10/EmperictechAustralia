"use client";

import ServiceCard from "@/components/shared/cards/ServiceCard";
import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";
import getALlServices from "@/libs/getALlServices";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const Services1 = () => {
  const services = getALlServices();
  const topServices = services?.slice(0, 4); // only top 4 services

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
              We put your ideas and wishes into unique web projects that inspire you and your customers.
            </p>
          </div>

          {/* Services Swiper */}
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
              {topServices?.map((service, idx) => (
                <SwiperSlide key={idx}>
                  <ServiceCard service={service} />
                </SwiperSlide>
              ))}
              <div className="text-center mt-10 md:mt-16">
            <Link
              href="/services"
              className="text-size-15 font-bold text-white-color capitalize py-17px px-35px ml-10px bg-200 bg-gradient-secondary hover:bg-[-100%] rounded-full leading-1 ${className} transition-all duration-300"
            >
              Explore More Services <FaChevronRight className="inline-block ml-1 text-xs sm:text-sm md:text-base lg:text-lg" />
            </Link>
          </div>
            </Swiper>
          </div>

          {/* Explore More Services Button */}
          
        </div>
      </div>
    </section>
  );
};

export default Services1;
