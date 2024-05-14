import React from "react";
import { LiaCogSolid } from "react-icons/lia";
import Container from "./Container";
import Link from "next/link";

export default function About() {
  return (
    <section
      className="py-20 md:py-40 bg-black scroll-smooth transition-all ease-in-out"
      id="About"
    >
      <Container>
        <div className="flex flex-col justify-center  text-white">
          <h1 className="text-white text-4xl md:text-6xl font-bold ps-5 md:ps-0">
            <span className="text-red-600 font-black">&lt;</span>About me{" "}
            <span className="text-red-600">&frasl;&gt;</span>
          </h1>
          <br className="hidden md:block" />
          <br />
          <br />
          <h2 className="text-white text-2xl md:text-4xl ps-10">What I do</h2>
          <br />
          <p className="ps-14 md:ps-20">
            I craft high-performing and scalable software solutions! I bring
            full-stack expertise to the table, building{" "}
            <Link href="/Projects">
              <span className="text-red-600">
                mobile applications, web applications and websites
              </span>{" "}
            </Link>
            using industry-leading technologies. This means I handle everything
            from the user-facing interfaces you interact with to the powerful
            engines running behind the scenes. My focus is on creating
            applications that are not only feature-rich but can grow and adapt
            seamlessly as your needs evolve.
            <br />
            <br />
            Wait no longer,{" "}
            <Link href="/Contact">
              <span className="text-red-600">contact</span>
            </Link>{" "}
            me lets build the future together!
          </p>

          <br className="hidden md:block" />
          <br />
          <br />
          <h2 className="text-white text-2xl md:text-4xl ps-10">
            Where i am stationed
          </h2>
          <br />
          <p className="ps-14 md:ps-20">
            I am currently based in{" "}
            <Link href="https://www.google.com/maps/place/Kampala/@0.3132007,32.5167244,12z/data=!3m1!4b1!4m6!3m5!1s0x177dbc0f9d74b39b:0x4538903dd96b6fec!8m2!3d0.3151692!4d32.5816313!16zL20vMGZuZ3k?entry=ttu">
              <span className="text-red-600">Kampala, Uganda</span>
            </Link>
            . Comfortable working both on-premises and remotely, making me a
            flexible asset for any team! This allows me to bring my full-stack
            development skills to the table, no matter your location.
          </p>
          <br className="hidden md:block" />
          <br />
          <br />
          <h2 className="text-white text-2xl md:text-4xl ps-10">
            Education and certificates
          </h2>
          <br />
          <p className="ps-14 md:ps-20">
            I am currently pursuing my{" "}
            <span className="text-red-600">Bachelors degree in IT</span> from
            the{" "}
            <Link href={"https://isbatuniversity.ac.ug/"}>
              <span className="text-red-600">
                International University of Science, Business and Technology
              </span>
            </Link>
          </p>

          {/* <LiaCogSolid className="animate-spin text-red-500 text-7xl"/>
        <p>Section under construction</p> */}
        </div>
      </Container>
    </section>
  );
}
