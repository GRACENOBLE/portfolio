"use client";

import React, { useState, useEffect } from "react";
import { Tomorrow } from "next/font/google";
import Image from "next/image";
import Container from "./Container";
import { BsChevronDown } from "react-icons/bs";
import Link from "next/link";

const tomorrow = Tomorrow({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  var text = "Hello there !";
  const [word, setWord] = useState("");

  var text2 = "I am Dev. Noble";
  const [word2, setWord2] = useState("");

  var text3 = "Welcome to my Port folio";
  const [word3, setWord3] = useState("");

  async function animateWord() {
    const sleep = (time: number) =>
      new Promise((resolve) => setTimeout(resolve, time));
    var i: number;

    for (i = 1; i <= text.length; i += 1) {
      setWord(text.slice(0, i));
      i == text.length ? await sleep(1500) : await sleep(80);
    }

    for (i = 1; i <= text2.length; i += 1) {
      setWord2(text2.slice(0, i));
      i == text2.length ? await sleep(1500) : await sleep(80);
    }

    for (i = 1; i <= text3.length; i += 1) {
      setWord3(text3.slice(0, i));
      i == text3.length ? await sleep(1500) : await sleep(80);
    }
  }

  useEffect(() => {
    animateWord();
  }, []);

  return (
    <section className="bg-black h-screen">
      <Container>
        <div className="flex w-full h-screen items-center justify-between">
          <div>
            <div className={`font-extrabold text-6xl ${tomorrow.className}`}>
              <span className="text-red-500">&lt;</span>{" "}
              <span className="text-white">{word}</span>
              <span className="animate-pulse text-white text-3xl">_</span>
              <span className="text-red-500">&frasl;&gt;</span>
            </div>
            <div className={`font-extrabold text-6xl ${tomorrow.className}`}>
              <span className="text-red-500">&lt;</span>{" "}
              <span className="text-white">{word2}</span>
              <span className="animate-pulse text-white text-3xl">_</span>
              <span className="text-red-500">&frasl;&gt;</span>
            </div>
            <div className={`font-extrabold text-6xl ${tomorrow.className}`}>
              <span className="text-red-500">&lt;</span>{" "}
              <span className="text-white">{word3}</span>
              <span className="animate-pulse text-white text-3xl">_</span>
              <span className="text-red-500">&frasl;&gt;</span>
            </div>
          </div>
          <div className="">
            <Image
              src="/images/placeholder_man.jpg"
              alt=""
              width={1000}
              height={1000}
              className="w-96 rounded-lg"
            />
          </div>
        </div>
        <div className="absolute z-10 bottom-0 mb-10 w-[1280px] text-white flex justify-center text-6xl animate-bounce">
          <Link href="#About" scroll = {true}><div className="text-red-500"><BsChevronDown /></div></Link>
          
          
        </div>
      </Container>
    </section>
  );
}
