"use client";
import React, { useState } from "react";
import Image from 'next/image';

function Navbar() {
  

  return (
    <div className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/30 shadow-md font-sans">
      <div className="max-w-7xl mx-auto px-4  flex items-center justify-between">
        <div className=" text-2xl font-bold">
          <Image
          src="/Nav/Logo2.png"
          alt="Logo"
          width={70}
          height={50}
          />
        </div>
          <div className="space-x-4 text-sm text-amber-300">
            <a href="#" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-amber-300 after:transition-all after:duration-300 hover:after:w-full font-sans">Home</a>
            <a href="#" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-amber-300 after:transition-all after:duration-300 hover:after:w-full font-sans">About</a>
            <a href="#" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-amber-300 after:transition-all after:duration-300 hover:after:w-full font-sans">Contact</a>
          </div>
      </div>
       
    </div>
  );
}

export default Navbar;
