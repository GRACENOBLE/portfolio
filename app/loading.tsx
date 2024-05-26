import React from "react";
import { LiaCogSolid } from "react-icons/lia";

export default function Loading() {
  return (
    <div className="absolute z-40 flex w-full h-full  items-center justify-center text-red-600 left-0 top-0 text-6xl">
      <LiaCogSolid className="animate-spin" />
    </div>
  );
}
