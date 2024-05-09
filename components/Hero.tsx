"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Container from "./Container";
import { BsChevronDown } from "react-icons/bs";
import Link from "next/link";
import HeroImage from "./HeroImage";

export default function Hero() {
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
    <section className=" h-screen relative isolate object-contain">
      <div className="flex flex-col h-screen object-contain overflow-hidden">
        <div className="flex h-full w-full">{image.map(({ value }) => value)}</div>
        <div className="flex h-full w-full">{image.map(({ value }) => value)}</div>
      </div>

      <Container>
        <div className="absolute top-0 h-screen flex flex-col justify-center">
        
          <div className="z-10 flex w-[1280px]  items-center justify-between">
            <div>
              <div className="font-extrabold text-6xl pb-6">
                <span className="text-red-600 font-black">&lt;</span>{" "}
                <span className="text-white">{word}</span>
                <span className="animate-pulse text-white text-3xl">_</span>
                <span className="text-red-600 font-black">&frasl;&gt;</span>
              </div>

              <div className="font-extrabold text-6xl pb-6">
                <span className="text-red-600 font-black">&lt;</span>{" "}
                <span className="text-white">{word2}</span>
                <span className="animate-pulse text-white text-3xl">_</span>
                <span className="text-red-600 font-black">&frasl;&gt;</span>
              </div>
              <div className="font-extrabold text-6xl">
                <span className="text-red-600 font-black">&lt;</span>{" "}
                <span className="text-white">{word3}</span>
                <span className="animate-pulse text-white text-3xl">_</span>
                <span className="text-red-600 font-black">&frasl;&gt;</span>
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
          <div className="absolute bottom-0 z-10 mb-7 pe-5 w-[1280px] text-white flex justify-center text-5xl animate-bounce">
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
