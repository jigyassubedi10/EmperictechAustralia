"use client";
import { useHeaderContext } from "@/context_api/HeaderContext";
import getNavItems from "@/libs/getNavItems";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { FaMapMarkerAlt, FaChevronDown, FaGlobe } from "react-icons/fa";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const MobileMenu = ({ isActiveMobileMenu, closeMenu }) => {
  const { isIndexPage } = useHeaderContext();
  const navItems = getNavItems();
  const router = useRouter();
  const currentPath = usePathname();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Smooth Scroll for Sections
  const handleSmoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({ top: targetElement.offsetTop - 60, behavior: "smooth" });
    }
  };

  // ✅ Updated Navigation Handler
  const handleNavigation = (e, path) => {
    e.preventDefault();
    closeMenu();

    console.log("Navigating to:", path);

    if (path.startsWith("#")) {
      const targetId = path.replace("#", "");

      if (currentPath === "/") {
        handleSmoothScroll(targetId);
      } else {
        router.push(`/#${targetId}`).then(() => {
          setTimeout(() => handleSmoothScroll(targetId), 500);
        });
      }
    } else {
      router.push(path).catch((err) => console.error("Navigation error:", err));
    }
  };

  const handleLocationChange = (location) => {
    if (location === "australia") {
      router.push("/");
    } else if (location === "global") {
      router.push("https://emperictech.com");
    }
    setIsDropdownOpen(false);
  };

  return (
    <div className={`mobile-menu absolute left-0 top-full min-h-screen-90 w-full bg-seondary-color block origin-top-left lg:hidden ${isActiveMobileMenu ? "active" : ""}`}>
      <div className="container py-5">
        <ul className="ml-4">
          {navItems?.length
            ? navItems.map(({ name, path, path2 }, idx) => {
                const finalPath = isIndexPage ? path : path2;
                return (
                  <li key={idx}>
                    <a
                      href={finalPath}
                      className="text-size-25 text-white-color uppercase leading-1.2 py-15px"
                      onClick={(e) => handleNavigation(e, finalPath)}
                    >
                      {name}
                    </a>
                  </li>
                );
              })
            : ""}
        </ul>

        {/* Action Button (Aligned Left) */}
        <div className="block lg:hidden mt-6 text-left relative" ref={dropdownRef}>
          <ButtonPrimary onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="w-40 h-14 text-sm px-4 py-3">
            <FaMapMarkerAlt className="inline-block text-sm mr-1" />
            <span>Australia</span> <FaChevronDown className="inline-block ml-1 text-sm" />
          </ButtonPrimary>

          {isDropdownOpen && (
            <ul className="absolute top-full left-0 w-[150px] bg-200 bg-gradient-secondary rounded-lg shadow-lg z-50 mt-3 ml-4 transition-all duration-300 hover:bg-[-100%]">
              <li>
                <button onClick={() => handleLocationChange("global")} className="block w-full px-4 py-3 text-center text-white transition-all duration-300 bg-[length:200%_auto] hover:bg-[position:100%_0] text-sm">
                  <FaGlobe className="inline-block text-sm mr-1" /> Global
                </button>
              </li>
              <li>
                <button onClick={() => handleLocationChange("australia")} className="block w-full px-3 py-2 text-center text-white transition-all duration-300 bg-[length:200%_auto] hover:bg-[position:100%_0] text-sm">
                  🇦🇺 Australia
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
