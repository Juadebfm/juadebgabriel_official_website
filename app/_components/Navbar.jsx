"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CgMenuHotdog } from "react-icons/cg";
import { TbCodeDots } from "react-icons/tb";
import { GiClockwork } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    // Toggle menu state
    setIsMenuOpen(!isMenuOpen);

    // Toggle body scroll class
    if (isMenuOpen) {
      document.body.classList.remove("no-scroll");
    } else {
      document.body.classList.add("no-scroll");
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <>
      <nav
        className={`flex items-center justify-between py-10 4xl:py-32 px-[20px] md:px-10 fixed left-0 top-0 z-20 w-screen md:w-full 4xl:px-36 ${
          isScrolled ? "bg-black/95" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between space-x-2 cursor-pointer">
          <GiClockwork className="text-4xl" />
          <span className="4xl:text-3xl">Juadeb Gabriel</span>
        </div>
        <div className="nav_toggle" onClick={toggleMenu}>
          {isMenuOpen ? (
            // Close icon when menu is open
            <TbCodeDots className="w-[40px] h-[40px] text-2xl 4xl:text-4xl text-white cursor-pointer" />
          ) : (
            // Menu icon when menu is closed
            <CgMenuHotdog className="w-[40px] h-[40px] text-2xl 4xl:text-4xl text-white cursor-pointer" />
          )}
        </div>
      </nav>

      {/* Sliding menu */}
      <div
        className={`fixed inset-y-0 left-0 bg-black/95 w-full lg:w-[50%] z-30 transform transition-transform duration-300 overflow-y-auto scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Your information content goes here */}
        <div className="w-full space-y-4 p-[25px] md:p-10 text-white">
          <div className="flex items-center justify-between w-full pt-10 lg:pt-0">
            <div className="flex items-center justify-between space-x-2 cursor-pointer">
              <GiClockwork className="text-4xl" />
            </div>
            <div className="text-white text-right">
              <button onClick={closeMenu}>
                <GrClose className="text-3xl" />
              </button>
            </div>
          </div>
          <div>
            <ul className="flex items-center justify-between space-x-5 w-full 4xl:text-3xl py-10 lg:hidden">
              <li className="hover:text-slate-400/50 hover:underline underline-offset-1 transition-colors duration-200 ease-linear">
                <Link href="#about">About</Link>
              </li>
              <li className="hover:text-slate-400/50 hover:underline underline-offset-1 transition-colors duration-200 ease-linear">
                <Link href="#services">Services</Link>
              </li>
              <li className="hover:text-slate-400/50 hover:underline underline-offset-1 transition-colors duration-200 ease-linear">
                <Link href="#projects">Projects</Link>
              </li>
              <li className="hover:text-slate-400/50 hover:underline underline-offset-1 transition-colors duration-200 ease-linear">
                <Link href="#contact">Contacts</Link>
              </li>
            </ul>
            <div className="w-full cursor-pointer lg:mt-10">
              <span className="uppercase tracking-wider text-lg 4xl:text-4xl">
                How i work
              </span>
              <h2 className="pt-10 uppercase text-xl 4xl:text-4xl font-bold mb-3 flex items-end justify-start gap-3">
                <span>1. Submit Project Brief</span>
              </h2>
              <p className="pb-5 border-b border-slate-400 4xl:text-3xl">
                <span className="text-base w-full">
                  To kick off your project, we require a comprehensive project
                  brief from you. This document will outline pain points,
                  features, and functionalities that need attention,
                  customization, or enhancement based on your specific needs. To
                  start, please send me a message{" "}
                  <a
                    onClick={closeMenu}
                    href="#contact"
                    className="underline underline-offset-2 font-bold italic hover:text-slate-400"
                  >
                    NOW
                  </a>
                </span>
              </p>
            </div>
            <div className="w-full cursor-pointer mt-5">
              <h2 className="uppercase text-xl 4xl:text-4xl font-bold mb-3 flex items-end justify-start gap-3">
                <span>2. Maintain Open Communication</span>
              </h2>
              <p className="pb-5 border-b border-slate-400 4xl:text-3xl">
                <span className="text-base w-full">
                  Effective ideation and design flourish with continuous and
                  open communication. We&apos;ll keep the lines of communication
                  open throughout the process to ensure your vision aligns
                  seamlessly with our creative direction.
                </span>
              </p>
            </div>
            <div className="w-full cursor-pointer mt-5">
              <h2 className="uppercase text-xl 4xl:text-4xl font-bold mb-3 flex items-end justify-start gap-3">
                <span>3. Review and Approve</span>
              </h2>
              <p className="pb-5 border-b border-slate-400 4xl:text-3xl">
                <span className="text-base w-full">
                  Once the design and purpose are meticulously crafted,
                  we&apos;ll present them for your review and approval. During
                  this phase, we&apos;ll also finalize project costs to ensure
                  complete transparency.
                </span>
              </p>
            </div>
            <div className="w-full cursor-pointer mt-5">
              <h2 className="uppercase text-xl 4xl:text-4xl font-bold mb-3 flex items-end justify-start gap-3">
                <span>4. Await Your Results</span>
              </h2>
              <p className="pb-5 border-b border-slate-400 4xl:text-3xl">
                <span className="text-base w-full">
                  Sit back and relax as we diligently work on your project.
                  Anticipate and await exceptional results tailored to meet your
                  unique requirements.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
