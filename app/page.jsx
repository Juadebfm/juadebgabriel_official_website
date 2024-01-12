"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaLinkedinIn, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineCube } from "react-icons/hi2";
import { GoFileCode } from "react-icons/go";
import { MdOutlineDesignServices } from "react-icons/md";
import { GiClockwork } from "react-icons/gi";

import AOS from "aos";
import "aos/dist/aos.css";
import MyAnimation from "./_components/animation";
import ContactForm from "./_components/ContactForm";
import { TbCodeDots } from "react-icons/tb";

const Home = () => {
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
    <main>
      {/* HERO */}
      <section
        className="flex h-[65vh] lg:min-h-screen flex-col items-center justify-between py-24 px-10 md:px-[20px] lg:px-10 text-sm relative"
        style={{ backgroundImage: "url(/assets/svg/grid.svg)" }}
      >
        <div className="flex items-center justify-between flex-col mt-24 4xl:mt-80">
          <span className="uppercase tracking-wider text-base md:text-lg 4xl:text-4xl">
            Software Developer | UI/UX Designer
          </span>
          <h1 className="text-8xl md:text-9xl 4xl:text-[13rem] uppercase leading-none text_shadow">
            Juadeb <br /> Gabriel
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-center md:justify-between gap-7 md:gap-0 w-max md:w-full absolute bottom-6 4xl:bottom-24 px-10">
          <div className="w-full md:w-1/3">
            <Link
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              href="mailto:contact@juadebgabriel.com"
              className="cursor-pointer hover:text-slate-400/50 hover:underline underline-offset-1 transition-colors duration-200 ease-linear w-full pl-10 md:pl-0 md:w-auto text-center md:text-start 4xl:text-3xl"
            >
              contact@juadebgabriel.com
            </Link>
          </div>

          <ul className="flex items-center justify-center space-x-5 w-full md:w-1/3 4xl:text-3xl">
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

          <div
            data-aos="fade-left"
            data-aos-offset="100"
            className="flex items-center justify-center md:justify-end w-full md:w-1/3 space-x-4"
          >
            <Link target="_blank" href="https://github.com/Juadebfm">
              <FaGithub className="text-white hover:text-slate-400/50 transition-colors duration-200 ease-linear text-xl 4xl:text-3xl" />
            </Link>
            <Link target="_blank" href="https://www.linkedin.com/in/juadebade/">
              <FaLinkedinIn className="text-white hover:text-slate-400/50 transition-colors duration-200 ease-linear text-xl 4xl:text-3xl" />
            </Link>
            <Link target="_blank" href="https://twitter.com/Juadeb1">
              <FaTwitter className="text-white hover:text-slate-400/50 transition-colors duration-200 ease-linear text-xl 4xl:text-3xl" />
            </Link>
          </div>
        </div>
      </section>
      {/* ABOUT */}
      <section
        className="h-max mt-24 lg:mt-0 lg:min-h-screen w-full flex flex-col items-start justify-center space-y-14 relative"
        id="about"
      >
        <div>
          <MyAnimation />
          <span className="uppercase tracking-wider px-10 text-lg 4xl:text-4xl">
            Who am i
          </span>
          <div className="px-10">
            <p className="text-base 4xl:text-3xl leading-normal">
              I am your catalyst for web and app development and innovative
              product design. I specialize in creating highly customizable web
              applications and management tools, driving traffic and enhancing
              business visibility. My expertise spans comprehensive analytics,
              effective advertising, and social media strategies.
            </p>
            <p className="mt-4 text-base 4xl:text-3xl leading-normal">
              I have almost half a
              <i className="font-bold">
                {" "}
                decade of experience designing and building websites
              </i>
              . For the past 3 years iʻve been working exclusively with NextJS.
              Iʻm currently
              <i className="font-bold">located in Lagos, Nigeria.</i> With a
              massive community of experienced designers, developers and problem
              solvers like myself.
            </p>
          </div>{" "}
        </div>
      </section>
      {/* SERVICES */}
      <section
        id="services"
        className="h-max lg:min-h-screen w-full flex flex-col items-start justify-center space-y-14 px-10 mt-24"
      >
        <span className="uppercase tracking-wider text-lg 4xl:text-4xl">
          Services
        </span>
        <div className="w-full space-y-20">
          <div className="w-full cursor-pointer">
            <h2
              className={`uppercase text-xl 4xl:text-4xl font-bold mb-3 flex items-end justify-start gap-3 ${
                visitedServiceSection ? "text-white" : "text-slate-400/50"
              }`}
            >
              <GoFileCode className="text-3xl" />
              <span>Web Development</span>
            </h2>
            <p
              className={`flex flex-col items-start justify-center pb-5 border-b border-slate-400 4xl:text-3xl ${
                visitedServiceSection ? "block" : "hidden"
              }`}
            >
              <span className="capitalize italic text-lg md:text-xl 4xl:text-3xl 4xl:mb-5 text-slate-400">
                Clean Functional Interfaces And Websites
              </span>
              <span className="text-base w-[60%]">
                Obsessing over every single detail helps me to build
                well-thought-out interfaces that work flawlessly on any screen
              </span>
            </p>
          </div>
        </div>
        <div className="w-full space-y-20">
          <div className="w-full cursor-pointer">
            <h2
              className={`uppercase text-xl 4xl:text-4xl font-bold mb-3 flex items-end justify-start gap-3 ${
                visitedServiceSection ? "text-white" : "text-slate-400/50"
              }`}
            >
              <HiOutlineCube className="text-3xl" />
              <span>UI/UX Design</span>
            </h2>
            <p
              className={`flex flex-col items-start justify-center pb-5 border-b border-slate-400 4xl:text-3xl ${
                visitedServiceSection ? "block" : "hidden"
              }`}
            >
              <span className="capitalize italic text-lg md:text-xl 4xl:text-3xl 4xl:mb-5 text-slate-400">
                User Experience that converts
              </span>
              <span className="text-base w-[60%]">
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
              className={`uppercase text-xl 4xl:text-4xl font-bold mb-3 flex items-end justify-start gap-3 ${
                visitedServiceSection ? "text-white" : "text-slate-400/50"
              }`}
            >
              <MdOutlineDesignServices className="text-3xl" />
              <span> Brand Design & Advertisement</span>
            </h2>
            <p
              className={`flex flex-col items-start justify-center pb-5 border-b border-slate-400 4xl:text-3xl ${
                visitedServiceSection ? "block" : "hidden"
              }`}
            >
              <span className="capitalize italic text-lg md:text-xl 4xl:text-3xl 4xl:mb-5 text-slate-400">
                <i>Kick-ass</i> visual branding and style
              </span>
              <span className="text-base w-[60%]">
                Creating consistent visual style for your brand is key. I have a
                lot of experienced team and collaborators who are actively
                helping business get the visibility they need.
              </span>
            </p>
          </div>
        </div>
      </section>
      {/* PROJECTS */}
      <section
        className="h-screen w-full flex flex-col items-start px-10 justify-center"
        id="projects"
      >
        <span className="uppercase tracking-wider text-lg 4xl:text-4xl">
          Projects
        </span>
        <span>Coming soon...</span>

        {/* <div className="bg-slate-400/10 mt-10">
          <div className="flex items-center justify-between gap-10 p-10">
            <div className="w-1/2 relative">
              <img
                src="/assets/images/project1.jpg"
                alt="BMT project"
                className="w-full h-auto"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 transition-opacity duration-300 ease-in-out hover:opacity-0"></div>
            </div>
            <div className="space-y-4 w-1/2">
              <h3 className="text-xl font-bold">BMT/SCFN Project</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
                hic unde quos iste culpa consequatur est in ullam et consectetur
                ex, sit, adipisci voluptate velit. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Aperiam, itaque.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
                hic unde quos iste culpa consequatur est in ullam et consectetur
                ex, sit, adipisci voluptate velit. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Aperiam, itaque.
              </p>
              <div className="flex items-center justify-start gap-4">
                <button className="px-5 py-3 border-[1px] border-slate-400/40 bg-transparent hover:bg-slate-400/10 transition-colors duration-200 ease-in-out w-full mt-5">
                  <Link href="https://bmt-chi.vercel.app/" target="_blank">
                    View Live Demo
                  </Link>
                </button>
                <button className="px-5 py-3 border-[1px] border-slate-400/40 bg-transparent hover:bg-slate-400/10 transition-colors duration-200 ease-in-out w-full mt-5">
                  <Link href="https://github.com/Juadebfm/bmt" target="_blank">
                    View Project Details
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse items-center justify-between gap-10 p-10">
            <div className="w-1/2 relative">
              <img
                src="/assets/images/project1.jpg"
                alt="BMT project"
                className="w-full h-auto"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 transition-opacity duration-300 ease-in-out hover:opacity-0"></div>
            </div>
            <div className="space-y-4 w-1/2">
              <h3 className="text-xl font-bold">BMT/SCFN Project</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
                hic unde quos iste culpa consequatur est in ullam et consectetur
                ex, sit, adipisci voluptate velit. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Aperiam, itaque.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
                hic unde quos iste culpa consequatur est in ullam et consectetur
                ex, sit, adipisci voluptate velit. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Aperiam, itaque.
              </p>
              <div className="flex items-center justify-start gap-4">
                <button className="px-5 py-3 border-[1px] border-slate-400/40 bg-transparent hover:bg-slate-400/10 transition-colors duration-200 ease-in-out w-full mt-5">
                  <Link href="https://bmt-chi.vercel.app/" target="_blank">
                    View Live Demo
                  </Link>
                </button>
                <button className="px-5 py-3 border-[1px] border-slate-400/40 bg-transparent hover:bg-slate-400/10 transition-colors duration-200 ease-in-out w-full mt-5">
                  <Link href="https://github.com/Juadebfm/bmt" target="_blank">
                    View Project Details
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </section>
      {/* CONTACT */}
      <section className="h-max mt-24 lg:mt-0 lg:min-h-screen w-full flex flex-col items-center justify-center relative">
        <div className="flex flex-col items-center justify-center w-full mt-20">
          <div className="absolute inset-0 bg-black opacity-90 z-0"></div>

          <div
            className="font-bold leading-relaxed flex flex-col items-center justify-center h-screen"
            style={{
              backgroundImage: "url(/assets/images/gateway.jpg)",
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          >
            <div className="flex flex-col items-center justify-center w-[60%] z-10">
              <FaQuoteLeft className="text-3xl text-white self-start" />
              <span className="text-center text-2xl px-6">
                Empathy helps in many ways when building a great product and
                designing experiences. The aim of building empathy isn&apos;t
                just to create beautiful designs or satisfy the basic needs of
                your users. Finding the hidden and true needs that are rooted in
                the user&apos;s daily tasks and lifestyle is of utmost
                importance. Your brand and business will increase engagement
                with users and revenue as a result of this discovery. <br />{" "}
                <br /> If you would like to talk with me about this journey,
                please send me a quick message below.
              </span>
              <FaQuoteRight className="text-3xl text-white self-end" />
            </div>
          </div>
          <div className="flex items-center justify-between w-full mt-20 z-10 px-10">
            <div className="hidden md:flex md:flex-col md:items-start md:justify-center w-1/2">
              <div className="space-y-5">
                <div className="w-full">
                  <h2 className="text-5xl font-bold">Contact</h2>
                </div>
                <div className="w-full flex flex-col items-start justify-start mb-5">
                  <Link
                    href="mailto:contact@juadebgabriel.com"
                    className="cursor-pointer hover:text-slate-400/50 p-1 transition-colors duration-200 ease-linear w-full md:w-auto text-center md:text-start 4xl:text-3xl border-[1px] border-slate-400/50 px-5 rounded-full mt-2"
                  >
                    contact@juadebgabriel.com
                  </Link>
                </div>
              </div>
              <div className="w-full mt-7">
                <div className="md:w-1/3 space-x-4 mt-2 flex items-start justify-start">
                  <Link
                    target="_blank"
                    href="https://github.com/Juadebfm"
                    className="flex text-center justify-center gap-2 border-[1px] border-slate-400/50 px-5 py-1 rounded-full text-white hover:text-slate-400/50 transition-colors duration-200 ease-linear"
                  >
                    <span>Github</span>
                    <span>
                      <FaGithub className="text-xl 4xl:text-3xl pt-1" />
                    </span>
                  </Link>
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/juadebade/"
                    className="flex text-center justify-center gap-2 border-[1px] border-slate-400/50 px-5 py-1 rounded-full text-white hover:text-slate-400/50 transition-colors duration-200 ease-linear"
                  >
                    <span>LinkedIn</span>
                    <span>
                      <FaLinkedinIn className="text-xl 4xl:text-3xl pt-1" />
                    </span>
                  </Link>
                  <Link
                    target="_blank"
                    href="https://twitter.com/Juadeb1"
                    className="flex text-center justify-center gap-2 border-[1px] border-slate-400/50 px-5 py-1 rounded-full text-white hover:text-slate-400/50 transition-colors duration-200 ease-linear"
                  >
                    <span>Twitter</span>
                    <span>
                      <FaTwitter className="text-xl 4xl:text-3xl pt-1" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div className="" id="contact">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
