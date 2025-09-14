// components/shared/cards/ServiceCard.jsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FaChevronRight } from "react-icons/fa";


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

      {/* Floating card below image */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-50px] group-hover:bottom-[-65px] transition-all duration-300 w-[90%]">
        <Link
          href={`/services/${slug}${isLight ? "?theme_mode=light" : ""}`}
          className="relative block text-white-color bg-gradient-primary rounded-15px px-5 py-4"
        >
          <span className="block text-xl md:text-2xl lg:text-3xl font-bold mb-2">
            {title}
          </span>

          <span className="block text-body-color">{shortDesc}</span>

          {/* Learn more (appears only on hover, no space initially) */}
          <span className="hidden group-hover:block text-sm font-medium underline mt-2 transition-all duration-300">
            Learn more <FaChevronRight className="inline-block ml-1 text-xs sm:text-sm md:text-base lg:text-sm" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
