"use client"

import Image from "next/image";
import React from "react";
import { useState } from "react";

export default function ProjectCard() {
    const [isHovered,setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
  return (
    <div className="row-span-3 border h-96 rounded-lg overflow-hidden">
      <div>
        <Image
          src={"/images/portfolio.png"}
          alt={""}
          width={1000}
          height={1000}
          className="h-96"
        />
      </div>
      <div
        className="absolute h-96 w-[630px] rounded-lg -translate-y-[385px] flex flex-col justify-end p-6 hover:backdrop-blur-sm border"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="text-3xl">Title</div>
        <div
          className={`${isHovered ? "transition-all ease-in-out" : "hidden translate-y-10"}`}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
          aspernatur ipsum rem quis? Dolorum.
        </div>
      </div>
    </div>
  );
}
