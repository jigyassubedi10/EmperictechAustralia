"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Teams1 = () => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    fetch("/fakedata/teams.json")
      .then((response) => response.json())
      .then((data) => setTeamData(data))
      .catch((error) => console.error("Error loading team data:", error));
  }, []);

  return (
    <section>
      <div className="py-60px md:py-20 lg:py-20px xl:py-30">
        <div className="container">
          {/* Section heading */}
          <div className="text-center flex flex-col items-center mb-10 md:mb-50px">
            <h2
              className="text-3xl md:text-size-35 lg:text-size-40 xl:text-size-45 bg-gradient-text-light dark:bg-gradient-text bg-clip-text xl:leading-1.2 text-transparent mb-15px wow fadeInUp"
              data-wow-delay=".3s"
            >
              Our Team
            </h2>
            <p
              className="text-primary-color-light dark:text-body-color max-w-700px wow fadeInUp"
              data-wow-delay=".4s"
            >
              Meet the Expert Team Driving Your Digital Success
            </p>
        <p className="text-lg text-dark-color dark:text-cream-light-color text-center mt-8">
        At EmpericTech, our strength lies in our people – a team of passionate experts dedicated to transforming your digital vision into reality. Each member brings a unique blend of skills and commitment, ensuring you receive tailored solutions and exceptional results.
        </p>

          </div>

          {/* Swiper for team members */}
          <Swiper
            spaceBetween={30}
            slidesPerView={1} // Default to 1 on small screens
            loop={true}
            pagination={{ clickable: true }}
            speed={1000}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              600: { slidesPerView: 2 }, // Show 2 members on medium screens
              1024: { slidesPerView: 3 }, // Show 3 members on large screens
            }}
            modules={[Pagination, Autoplay]}
            className="team-slider"
          >
            {teamData?.map((member, idx) => (
              <SwiperSlide key={idx}>
                <div className="group relative flex flex-col items-center wow fadeInUp">
                  <div className="relative overflow-hidden rounded-xl max-w-[400px] w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="group-hover:scale-110 transition-transform duration-500"
                      width={1080}
                      height={1080}
                    />
                    {/* Text Container */}
                    <div className="absolute left-5 right-5 bottom-5 p-4 rounded-xl shadow-lg transition-all duration-500 
                      bg-white dark:bg-seondary-color group-hover:bg-gradient-primary">
                      <h3 className="text-xl font-bold text-black dark:text-white">{member.name}</h3>
                      <p className="text-lg text-black dark:text-white">{member.role}</p>
                      <p className="text-sm text-black dark:text-white">{member.yearsOfExperience} years of experience</p>
                      <p className="text-sm text-black dark:text-white">Key Skills: {member.keySkills.join(", ")}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Teams1;
