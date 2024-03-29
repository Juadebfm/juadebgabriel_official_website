import React from "react";

const Footer = () => {
  return (
    <footer className="min-h-[20vh] p-10 flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between text-xs">
      <a
        href="https://www.linkedin.com/in/juadebade/"
        className=" hover:text-slate-400/50 transition-colors duration-200 ease-linear"
      >
        Developed by Juadeb Gabriel
      </a>

      <a
        href="https://www.behance.net/arthurmoldovanu"
        className=" hover:text-slate-400/50 transition-colors duration-200 ease-linear mt-4 md:mt-0"
      >
        Designed inspired by Arthur Menkhyn
      </a>
    </footer>
  );
};

export default Footer;
