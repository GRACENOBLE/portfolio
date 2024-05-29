"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Container from "./Container";
import { BsChevronDown } from "react-icons/bs";
import Link from "next/link";
import HeroImage from "./HeroImage";

export default function Hero() {
  const [opened, setOpened] = useState(false)

  var text = "Hello there !";
  const [word, setWord] = useState("");

  var text2 = "I'm Dev. Noble";
  const [word2, setWord2] = useState("");

  var text3 = "Welcome to my Portfolio";
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

  const image: any[] = [
    { value: <HeroImage /> },
    { value: <HeroImage /> },
    { value: <HeroImage /> },
    { value: <HeroImage /> },
    { value: <HeroImage /> },
    { value: <HeroImage /> },
    { value: <HeroImage /> },
    { value: <HeroImage /> },
  ];

  return (
    <section className=" h-screen relative isolate object-contain border border-black">
      <div className="flex flex-col h-screen object-contain overflow-hidden">
        <div className="flex h-full w-full">{image.map(({ value }) => value)}</div>
        <div className="flex h-full w-full">{image.map(({ value }) => value)}</div>
      </div>

      <Container>
        <div className="absolute top-0 md:top-0 h-screen md:h-screen flex flex-col justify-start md:justify-center w-screen md:w-[1280px]">
        
          <div className="z-10 flex flex-col-reverse md:flex-row md:w-[1280px]  items-center justify-between ">
            <div className="w-full ps-4 md:ps-0 pt-4">
              <div className="font-extrabold text-2xl md:text-6xl pb-6 ">
                <span className="text-red-600 font-black">&lt;</span>{" "}
                <span className="text-white">{word}</span>
                <span className="animate-pulse text-white text-3xl">_</span>
                <span className="text-red-600 font-black">&frasl;&gt;</span>
              </div>

              <div className="font-extrabold text-2xl md:text-6xl pb-6">
                <span className="text-red-600 font-black">&lt;</span>{" "}
                <span className="text-white">{word2}</span>
                <span className="animate-pulse text-white text-3xl">_</span>
                <span className="text-red-600 font-black">&frasl;&gt;</span>
              </div>
              <div className="font-extrabold text-2xl md:text-6xl">
                <span className="text-red-600 font-black">&lt;</span>{" "}
                <span className="text-white">{word3}</span>
                <span className="animate-pulse text-white text-3xl">_</span>
                <span className="text-red-600 font-black">&frasl;&gt;</span>
              </div>
            </div>
            <div className="p-4 mt-14 md:mt-0">
              <Image
                src="/images/pic.png"
                alt=""
                width={1000}
                height={1000}
                className="w-full rounded-lg"
                unoptimized
              />
            </div>
          </div>
          <div className="hidden md:flex absolute bottom-0 z-10 md:mb-7 pe-5 w-screen md:w-[1280px] text-white justify-center text-5xl animate-bounce">
            <Link href="#About" scroll={true}>
              <div className="text-red-600">
                <BsChevronDown />
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
