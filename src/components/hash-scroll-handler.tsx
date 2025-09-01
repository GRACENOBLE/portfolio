"use client";
import { useEffect } from "react";
import { handleHashOnLoad } from "@/lib/scroll-utils";

export default function HashScrollHandler() {
  useEffect(() => {
    handleHashOnLoad(120);
  }, []);

  return null;
}
