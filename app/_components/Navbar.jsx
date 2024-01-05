"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CgMenuHotdog } from "react-icons/cg";

const Navbar = () => {
  //Listening and functionality for scroll
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0 && !isScrolled) {
        setIsScrolled(true);
      } else if (scrollTop === 0 && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <nav
      className={`flex items-center justify-between py-10 px-[20px] md:px-10 fixed left-0 top-0 z-20 w-screen md:w-full ${
        isScrolled ? "bg-black/95" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between space-x-2">
        <Image
          src="/assets/images/logo.png"
          width={40}
          height={40}
          alt="Logo"
        />
        <span className="">Juadeb Gabriel</span>
      </div>
      <div className="nav_toggle">
        <CgMenuHotdog className="w-[40px] h-[40px] text-2xl text-white cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
