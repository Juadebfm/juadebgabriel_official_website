import React from "react";
import Image from "next/image";
import { CgMenuHotdog } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between pt-10 px-10 fixed w-full">
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
