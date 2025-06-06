// components/shared/cards/ServiceCard.jsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const ServiceCard = ({ service }) => {
  const themeMode = useSearchParams()?.get("theme_mode");
  const isLight = themeMode === "light";

  const { slug, title, img, shortDesc } = service;

  return (
    <div className="portfolio-item bg-primary-color-light px-15px pt-25px pb-0 lg:p-9 lg:pb-0 rounded-10px group relative inline-block overflow-visible mb-[100px]">
  {/* Image at top */}
  <Image
    src={img}
    alt={title}
    width={2000}
    height={2000}
    className="w-full h-auto object-cover rounded-10px"
  />

  {/* Floating card below image, slightly outside */}
  <div className="absolute left-1/2 -translate-x-1/2 bottom-[-50px] group-hover:bottom-[-65px] transition-all duration-300 w-[90%]">
    <Link
      href={`/services/${slug}${isLight ? "?theme_mode=light" : ""}`}
      className="relative block text-white-color bg-gradient-primary rounded-15px px-5 py-4"
    >
      <span className="block text-xl md:text-2xl lg:text-3xl font-bold mb-2">
        {title}
      </span>

      <span className="block text-body-color">{shortDesc}</span>

      <i className="flaticon-up-right-arrow text-size-15 md:text-xl text-primary-color group-hover:text-white-color absolute top-1/2 right-5 transform -translate-y-1/2 transition-all duration-300 rotate-[-360deg] group-hover:rotate-0"></i>
    </Link>
  </div>
</div>

  );
};

export default ServiceCard;
