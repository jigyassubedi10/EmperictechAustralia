"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const WorkCard = ({ works }) => {
  const themeMode = useSearchParams()?.get("theme_mode");
  const { title, img1, shortDesc, id, dataFilter } = works ? works : {};
  const isLight = themeMode === "light" ? true : false;
  return (
    <div
      className={`portfolio-item ${dataFilter} bg-primary-color-light px-15px pt-25px pb-0 lg:p-9 lg:pb-0 rounded-10px group relative float-left inline-flex`}
    >
      <Image src={img1} alt="" width={2000} height={2000} />
      <div className="absolute left-0 bottom-[15px] group-hover:bottom-5 translate-y-5 group-hover:translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible w-full group-hover: px-15px lg:px-5 transition-all duration-300">
        <Link
          href={`/works/${id}${isLight ? "?theme_mode=light" : ""}`}
          className="text-white-color p-15px pr-30px lg:p-5 lg:pr-50px bg-gradient-primary rounded-15px w-full"
        >
          <span className="block text-xl md:text-size-25 lg:text-3xl font-bold mb-2 lg:mb-15px">
            {title}
          </span>

          <span className="block text-body-color">{shortDesc}</span>
          <i className="flaticon-up-right-arrow text-size-15 md:text-xl text-primary-color group-hover:text-white-color absolute top-[20%] lg:top-1/2 right-5 lg:right-[55px] rotate-[-360deg] group-hover:rotate-0 transition-all duration-300"></i>
        </Link>
      </div>
    </div>
  );
};

export default WorkCard;
