"use client";
import { useHeaderContext } from "@/context_api/HeaderContext";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ isSticky }) => {
  const { isInnerPage } = useHeaderContext();
  return (
  <Link href="/" className="logo flex items-center">
    {/* Logo for inner page or non-sticky */}
    <Image
      className={`w-auto h-[26px] max-w-[300px] 
        sm:h-[20px] sm:max-w-[200px]
        md:h-[35px] md:max-w-[300px] 
        lg:h-[40px] lg:max-w-[380px] 
        ${isInnerPage && !isSticky ? "inline-block" : "hidden dark:inline-block"}`}
      src="/img/logo/2.png"
      alt="Logo"
      width={620}
      height={66}
    />
    {/* Logo for non-inner page or sticky */}
    <Image
      className={`w-auto h-[26px] max-w-[300px] 
        sm:h-[20px] sm:max-w-[200px] 
        md:h-[35px] md:max-w-[300px] 
        lg:h-[40px] lg:max-w-[380px] 
        ${isInnerPage && !isSticky ? "hidden" : "inline-block dark:hidden"}`}
      src="/img/logo/1.png"
      alt="Logo"
      width={620}
      height={66}
    />
  </Link>
);

  
};

export default Logo;
