import Container from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import Link from "next/link";
import React from "react";


const projects: {
  Index: number;
  title: string;
  description: string;
  image: string;
  link: string;
}[] = [
  {
    Index: 1,
    title: "KisoIndex",
    description:
      "A Farming tool for smart agricultural decision making built with Next Js, TypeScript, Tailwind CSS, Redux, Context API, and Open Weather API",
    image: "/images/KisoIndex.png",
    link: "https://kisofresh-index.vercel.app/",
  },
  {
    Index: 2,
    title: "My Portfolio",
    description:
      "A website that has all you need to know about me built with Next Js, TypeScript and Tailwind CSS",
    image: "/images/portfolio.png",
    link: "https://port-folio-one-henna.vercel.app/",
  },
  {
    Index: 3,
    title: "TenderTalents",
    description:
      "A beautiful school website for a school in kasangati built with Next Js, TypeScript and Tailwind CSS",
    image: "/images/Tender.png",
    link: "https://tender-talents.vercel.app/",
  },
  {
    Index: 4,
    title: "Spotify clone",
    description:
      "A clone of the spotify app built for mobile in the Kotlin programming language",
    image: "/images/Spotify.png",
    link: "https://github.com/GRACENOBLE/Spotify-clone",
  },
  {
    Index: 4,
    title: "Netflix clone",
    description:
      "A clone of the Netflix web app built with Next Js, Typescript and TMDB",
    image: "/images/Netflix.png",
    link: "https://streamapp-three.vercel.app/",
  },
  {
    Index: 5,
    title: "Python barista",
    description:
      "A console application used to learn the python programming language, built to automate the the process of order placing in restaurants",
    image: "/images/Barista.png",
    link: "https://github.com/GRACENOBLE/Python_barista",
  },
  {
    Index: 6,
    title: "Green Dump",
    description:
      "A smart solution for waste disposal in the country built with Kotlin, order a pickup and get rid of that waste in an environmentally friendly way",
    image: "/images/GreenDump.png",
    link: "https://github.com/GRACENOBLE/GreenDump",
  },
];

export default function page() {
  return (
    <section className="h-screen">
      <div className=" text-white">
        {/* <LiaCogSolid className="animate-spin text-red-500 text-7xl" />
        <p>Section under construction</p> */}
        <Container>
          <div className="flex md:grid grid-cols-2 grid-rows-[24] gap-4 pt-20 flex-col ps-4">
            <div className="col-span-1 row-span-1 h-28 flex items-center">
              <h1 className="text-4xl">Take a look at some of my projects:</h1>
            </div>
            {projects.map(({ Index, title, description, image, link }) => (
              <div className="col-span-1 row-span-3" id={`${Index}`}>
                <Link href={link}>
                  <ProjectCard
                    Title={title}
                    Description={description}
                    Picture={image}
                  />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
