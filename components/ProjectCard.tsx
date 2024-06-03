"use client"

import Image from "next/image";
import React from "react";
import { useState } from "react";

export function ProjectCard({Title, Description, Picture, Dark}:{Title: string, Description: string, Picture: string, Dark: boolean}) {
    const [isHovered,setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
  return (
    <div className="row-span-3 border h-96 w-96 md:w-full rounded-lg overflow-hidden">
      <div>
        <Image
          src={Picture}
          alt={""}
          width={1000}
          height={1000}
          className="h-96 object-cover"
        />
      </div>
      <div
        className={`absolute h-96 md:w-[603px] rounded-lg -translate-y-[385px] flex flex-col justify-end ps-6 pb-10 md:pb-2 pe-6 md:pe-0 hover:backdrop-blur-sm md:bg-transparent ${Dark? "text-black font-semibold": "text-white"}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="text-3xl  translate-y-6 md:translate-y-0"></div>
        <div
          className={`${
            isHovered ? "transition-all ease-in-out" : "md:hidden translate-y-10"
          }`}
        >
          {Description}
        </div>
      </div>
    </div>
  );
}
