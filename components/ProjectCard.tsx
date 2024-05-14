"use client"

import Image from "next/image";
import React from "react";
import { useState } from "react";

export function ProjectCard({Title, Description, Picture}:{Title: string, Description: string, Picture: string}) {
    const [isHovered,setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
  return (
    <div className="row-span-3 border h-96 rounded-lg overflow-hidden">
      <div>
        <Image
          src={Picture}
          alt={""}
          width={1000}
          height={1000}
          className="h-96 object-cover object-left"
        />
      </div>
      <div
        className="absolute h-96 w-[610px] rounded-lg -translate-y-[385px] flex flex-col justify-end p-6 hover:backdrop-blur-sm border hover:bg-black/50"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="text-3xl">{Title}</div>
        <div
          className={`${
            isHovered ? "transition-all ease-in-out" : "hidden translate-y-10"
          }`}
        >
          {Description}
        </div>
      </div>
    </div>
  );
}
