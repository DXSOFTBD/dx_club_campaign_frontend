"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  return (
      <header
        className={`fixed left-0 top-0 z-99999 w-full py-7 ${
          stickyMenu ? "bg-white !py-4 shadow transition duration-100 dark:bg-black" : ""
        }`}
      >
        <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
          {/* Logo section */}
          <div className="flex w-full items-center justify-between xl:w-1/4">
            <a href="/">
              <Image
                src="/images/logo/DX ALL LOGO -30.png"
                alt="logo"
                width={60}
                height={30}
                className="hidden w-full dark:block"
              />
              <Image
                src="/images/logo/DX ALL LOGO -21.png"
                alt="logo"
                width={60}
                height={30}
                className="w-full dark:hidden"
              />
            </a>
          </div>
  
          {/* Nav Menu and Auth Buttons */}
          <div className="flex items-center gap-6">
            <ThemeToggler />
            
            {/* Auth Buttons */}
            <div className="flex items-center gap-4">
              <Link
                href="/login"
                className="text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary transition-colors"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="text-sm font-medium text-white bg-primary hover:bg-primaryho px-4 py-2 rounded-full transition-colors"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
};

// w-full delay-300

export default Header;
