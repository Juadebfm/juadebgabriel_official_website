"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  // Animation initializer
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  // Handles the scroll effects on services section
  const [visitedServiceSection, setVisitedServiceSection] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const serviceSection = document.getElementById("services");
      if (
        serviceSection &&
        window.scrollY >= serviceSection.offsetTop &&
        !visitedServiceSection
      ) {
        // User has reached the service section for the first time
        setVisitedServiceSection(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visitedServiceSection]);

  return (
    <>
      {/* HERO */}
      <section
        className="flex h-[65vh] lg:min-h-screen flex-col items-center justify-between py-24 px-10 md:px-[20px] lg:px-10 text-sm relative"
        style={{ backgroundImage: "url(/assets/svg/grid.svg)" }}
      >
        <div className="flex items-center justify-between flex-col mt-24 2xl:mt-80">
          <span className="uppercase tracking-wider text-base md:text-lg 2xl:text-4xl">
            Software Developer | UI/UX Designer
          </span>
          <h1 className="text-8xl md:text-9xl 2xl:text-[13rem] uppercase leading-none text_shadow">
            Juadeb <br /> Gabriel
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-center md:justify-between gap-7 md:gap-0 w-max md:w-full absolute bottom-6 2xl:bottom-24 px-10">
          <div className="w-full md:w-1/3">
            <Link
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              href="mailto:contact@juadebgabriel.com"
              className="cursor-pointer hover:text-slate-400/50 hover:underline underline-offset-1 transition-colors duration-200 ease-linear w-full pl-10 md:pl-0 md:w-auto text-center md:text-start 2xl:text-3xl"
            >
              contact@juadebgabriel.com
            </Link>
          </div>

          <ul className="flex items-center justify-center space-x-5 w-full md:w-1/3 2xl:text-3xl">
            <li className="hover:text-slate-400/50 hover:underline underline-offset-1 transition-colors duration-200 ease-linear">
              <Link href="#about">About</Link>
            </li>
            <li className="hover:text-slate-400/50 hover:underline underline-offset-1 transition-colors duration-200 ease-linear">
              <Link href="#services">Services</Link>
            </li>
            <li className="hover:text-slate-400/50 hover:underline underline-offset-1 transition-colors duration-200 ease-linear">
              <Link href="#">Projects</Link>
            </li>
            <li className="hover:text-slate-400/50 hover:underline underline-offset-1 transition-colors duration-200 ease-linear">
              <Link href="#">Contacts</Link>
            </li>
          </ul>

          <div
            data-aos="fade-left"
            data-aos-offset="100"
            className="flex items-center justify-center md:justify-end w-full md:w-1/3 space-x-4"
          >
            <Link target="_blank" href="https://github.com/Juadebfm">
              <FaGithub className="text-white hover:text-slate-400/50 transition-colors duration-200 ease-linear text-xl 2xl:text-3xl" />
            </Link>
            <Link target="_blank" href="https://www.linkedin.com/in/juadebade/">
              <FaLinkedinIn className="text-white hover:text-slate-400/50 transition-colors duration-200 ease-linear text-xl 2xl:text-3xl" />
            </Link>
            <Link target="_blank" href="https://twitter.com/Juadeb1">
              <FaTwitter className="text-white hover:text-slate-400/50 transition-colors duration-200 ease-linear text-xl 2xl:text-3xl" />
            </Link>
          </div>
        </div>
      </section>
      {/* About */}
      <section
        className="h-max mt-24 lg:mt-0 lg:min-h-screen w-full flex flex-col items-start justify-center space-y-14"
        id="about"
      >
        <span className="uppercase tracking-wider px-10 text-lg 2xl:text-4xl">
          Who am i
        </span>
        <div className="px-10">
          <p className="text-base 2xl:text-3xl leading-normal">
            I am your catalyst for web and app development and innovative
            product design. I specialize in creating highly customizable web
            applications and management tools, driving traffic and enhancing
            business visibility. My expertise spans comprehensive analytics,
            effective advertising, and social media strategies.
          </p>
          <p className="mt-4 text-base 2xl:text-3xl leading-normal">
            I have almost half a
            <i className="font-bold">
              {" "}
              decade of experience designing and building websites
            </i>
            . For the past 3 years iʻve been working exclusively with NextJS.
            Iʻm currently{" "}
            <i className="font-bold">located in Lagos, Nigeria.</i> With a
            massive community of experienced designers, developers and problem
            solvers like myself.
          </p>
        </div>
      </section>
      {/* SERVICES */}
      <section
        id="services"
        className="h-max lg:min-h-screen w-full flex flex-col items-start justify-center space-y-14 px-10 mt-24"
      >
        <span className="uppercase tracking-wider text-lg 2xl:text-4xl">
          Services
        </span>
        <div className="w-full space-y-20">
          <div className="w-full cursor-pointer">
            <h2
              className={`uppercase text-3xl 2xl:text-5xl font-bold mb-3 ${
                visitedServiceSection ? "text-white" : "text-slate-400/50"
              }`}
            >
              Web Development
            </h2>
            <p
              className={`flex flex-col items-start justify-center pb-5 border-b border-slate-400 2xl:text-3xl ${
                visitedServiceSection ? "block" : "hidden"
              }`}
            >
              <span className="capitalize italic text-xl 2xl:text-3xl 2xl:mb-5">
                Clean Functional Interfaces And Websites
              </span>
              <span className="text-sm">
                Obsessing over every single detail helps me to build
                well-thought-out interfaces that work flawlessly on any screen
              </span>
            </p>
          </div>
        </div>
        <div className="w-full space-y-20">
          <div className="w-full cursor-pointer">
            <h2
              className={`uppercase text-3xl 2xl:text-5xl font-bold mb-3 ${
                visitedServiceSection ? "text-white" : "text-slate-400/50"
              }`}
            >
              UI/UX Design
            </h2>
            <p
              className={`flex flex-col items-start justify-center pb-5 border-b border-slate-400 2xl:text-3xl ${
                visitedServiceSection ? "block" : "hidden"
              }`}
            >
              <span className="capitalize italic text-xl 2xl:text-3xl 2xl:mb-5">
                User Experience that converts
              </span>
              <span className="text-sm">
                UX and conversion thinking are at the core of everything i do. I
                strive to design products that people want to use and people
                find easy to use.
              </span>
            </p>
          </div>
        </div>
        <div className="w-full space-y-20">
          <div className="w-full cursor-pointer">
            <h2
              className={`uppercase text-3xl 2xl:text-5xl font-bold mb-3 ${
                visitedServiceSection ? "text-white" : "text-slate-400/50"
              }`}
            >
              Brand Design & Advertisement
            </h2>
            <p
              className={`flex flex-col items-start justify-center pb-5 border-b border-slate-400 2xl:text-3xl ${
                visitedServiceSection ? "block" : "hidden"
              }`}
            >
              <span className="capitalize italic text-xl 2xl:text-3xl 2xl:mb-5">
                <i>Kick-ass</i> visual branding and style
              </span>
              <span className="text-sm">
                Creating consistent visual style for your brand is key. I have a
                lot of experienced team and collaborators who are actively
                helping business get the visibility they need.
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
