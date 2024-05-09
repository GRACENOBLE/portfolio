import Container from "@/components/Container";
import StackCard from "@/components/StackCard";
import { AndroidStudio_ico, Azure_ico,CSS_ico,Firebase_ico,Git_ico,Github_ico,HTML_ico,JavaScript_ico,Java_ico,Kotlin_ico,Next_ico,Python_ico,React_ico, SQL_ico, Tailwind_ico, TypeScript_ico } from "@/components/Icons";

import Image from "next/image";
import React from "react";
import { LiaCogSolid } from "react-icons/lia";

const languages: { index: number; icon: any; label: string }[] = [
  { index: 0, icon: <Kotlin_ico />, label: "Kotlin" },
  {
    index: 0,
    icon: <Java_ico />,
    label: "Java",
  },
  {
    index: 0,
    icon: <Python_ico />,
    label: "Python",
  },
  {
    index: 0,
    icon: <JavaScript_ico />,
    label: "JavaScript",
  },
  {
    index: 0,
    icon: <TypeScript_ico />,
    label: "TypeScript",
  },
  {
    index: 0,
    icon: <HTML_ico />,
    label: "HTML",
  },
  {
    index: 0,
    icon: <CSS_ico />,
    label: "CSS",
  },
  {
    index: 0,
    icon: <Tailwind_ico />,
    label: "Tailwind CSS",
  },
  {
    index: 0,
    icon: <SQL_ico />,
    label: "SQL",
  },
];

const technologies: { index: number; icon: any; label: string }[] = [
  {
    index: 0,
    icon: <React_ico />,
    label: "React",
  },
  {
    index: 0,
    icon: <Next_ico />,
    label: "Next Js",
  },
  {
    index: 0,
    icon: <AndroidStudio_ico />,
    label: "Android Studio",
  },
  {
    index: 0,
    icon: <Git_ico />,
    label: "Git",
  },
  {
    index: 0,
    icon: <Github_ico />,
    label: "Github",
  },
  {
    index: 0,
    icon: <Firebase_ico />,
    label: "Firebase",
  },
  {
    index: 0,
    icon: <LiaCogSolid />,
    label: "Rest API",
  },
  {
    index: 0,
    icon: <Azure_ico/>,
    label: "Microsoft Azure",
  },
];

export default function page() {
  return (
    <section>
      <Container>
        <div className="flex items-center  justify-center py-40 text-white overflow-auto">
          <div>
            <div className="flex flex-col gap-4">
              <h2>Languages</h2>
              <div className="flex flex-wrap gap-4">
                {languages.map(({ index, icon, label }) => (
                  <StackCard Icon={icon} Label={label} Index={index} />
                ))}
              </div>
            </div>
            <br />
            <br />
            <div className="flex flex-col gap-4">
              <h2>Frameworks, libraries and technologies</h2>
              <div className="flex flex-wrap gap-4">
                {technologies.map(({ index, icon, label }) => (
                  <StackCard Icon={icon} Label={label} Index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
