"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import { useHeaderContext } from "@/context_api/HeaderContext";
import getNavItems from "@/libs/getNavItems";
import indexingAndActiveLink from "@/libs/indexingAndActiveLink";
import MobileMenu from "@/components/layout/header/MobileMenu"; 
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { FaMapMarkerAlt, FaChevronDown,FaGlobe } from 'react-icons/fa';

const Navbar = ({ isSticky }) => {
  const { isIndexPage, isInnerPage } = useHeaderContext();
  const navItems = getNavItems();
  const [isActiveMobileMenu, setIsActiveMobileMenu] = useState(false); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const router = useRouter();
  const dropdownRef = useRef(null);

  useEffect(() => {
    indexingAndActiveLink();

    
    const handleClickOutside = (event) => {
      
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); 
      }
    };

    
    document.addEventListener("mousedown", handleClickOutside);

    
    const handleScroll = () => {
      if (isDropdownOpen) {
        setIsDropdownOpen(false); 
      }
    };

    
    window.addEventListener("scroll", handleScroll);

    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDropdownOpen]); 

  
  const closeMenu = () => {
    setIsActiveMobileMenu(false);
  };

  
  const handleLocationChange = (location) => {
    if (location === "australia") {
      router.push("");
    } else if (location === "global") {
      router.push("https://emperictech.com"); 
    }
    setIsDropdownOpen(false); 
  };

  return (
    <nav>
      <ul className="nav flex items-center gap-x-5 xl:gap-x-30px 2xl:gap-x-45px">
        {navItems?.length
          ? navItems?.map(({ name, path, path2 }, idx) => (
              <li key={idx} className="nav_item group relative hidden lg:block">
                <Link
                  href={isIndexPage ? path : path2}
                  className={`text-size-15 font-medium ${isInnerPage && !isSticky ? "text-white-color" : "text-seondary-color dark:text-white-color"} capitalize py-10px md:py-15px lg:py-25px 2xl:py-30px relative z-0 after:w-0 after:h-0.5 after:bg-gradient-primary after:absolute after:right-0 hover:after:left-0 after:bottom-[25px] after:transition-all after:duration-500 group-hover:after:w-full`}
                >
                  {name}
                </Link>
              </li>
            ))
          : ""}

        {/* Action button */}
        <li className="relative" ref={dropdownRef}>
          <ButtonPrimary
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="cursor-pointer "
          >
            <FaMapMarkerAlt className="inline-block text-l mr-1" />
            <span className="inline-block">Australia</span> <FaChevronDown className="inline-block ml-1 text-l" />
          </ButtonPrimary>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <ul className="absolute right-[8px] mt-2 w-40 bg-200 bg-gradient-secondary rounded shadow-lg z-50 transition-all duration-300 hover:bg-[-100%] ">
              <li>
                <button
                  onClick={() => handleLocationChange("global")}
                  className="block w-full px-4 py-2 text-center text-white transition-all duration-300 bg-[length:200%_auto] hover:bg-[position:100%_0]"
                >
                  <FaGlobe className="inline-block text-xl mr-1" /> Global
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLocationChange("australia")}
                  className="block w-full px-4 py-2 text-center text-white transition-all duration-300 bg-[length:200%_auto] hover:bg-[position:100%_0]"
                >
                  🇦🇺 Australia
                </button>
              </li>
            </ul>
          )}
        </li>

        {/* Open mobile menu button */}
        <li className="menu-bar lg:hidden">
          <div className="menu-bar">
            <button
              className={isActiveMobileMenu ? `active` : ""}
              onClick={() => setIsActiveMobileMenu(!isActiveMobileMenu)}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </li>
      </ul>

      {/* Mobile Menu Component (Pass closeMenu function) */}
      {isActiveMobileMenu && <MobileMenu isActiveMobileMenu={isActiveMobileMenu} closeMenu={closeMenu} />}
    </nav>
  );
};

export default Navbar;