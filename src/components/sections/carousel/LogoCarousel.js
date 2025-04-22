"use client";
import Image from "next/image";

const logos = [
  "/img/carousel/logo1.png",
  "/img/carousel/logo2.png",
  "/img/carousel/logo1.png",
  "/img/carousel/logo2.png",
  "/img/carousel/logo1.png",
  "/img/carousel/logo2.png",
];

const LogoCarousel = () => {
  return (
    <div className="relative w-full overflow-hidden py-6" style={{ backgroundColor: "#0f162b" }}>
      <div className="flex w-max animate-scroll space-x-10">
        {/* Duplicate logos to ensure seamless looping */}
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="h-24 w-auto flex items-center">
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              width={100}
              height={100}
              className="h-18 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
