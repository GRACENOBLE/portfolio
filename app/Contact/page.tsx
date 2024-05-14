import ContactCard from "@/components/ContactCard";
import React from "react";
import { LiaCogSolid } from "react-icons/lia";
import { FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import { RiDiscordFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone, FaXTwitter } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import Container from "@/components/Container";
import Link from "next/link";

export default function page() {
  return (
    <section className=" h-full">
      <Container>
        <div className="flex flex-col items-center py-32 lg:py-20 justify-center text-white gap-6">
          <div className="flex items-center gap-6 ">
            <ContactCard
              title={"Email"}
              body={"gracenoble72@gmail.com"}
              icon={<FiMail />}
              link={"mailto:gracenoble72@gmail.com"}
            />

            <ContactCard
              title={"Linkedin"}
              body={"Asiimwe Grace Noble"}
              icon={<FiLinkedin />}
              link={"https://www.linkedin.com/in/asiimwe-noble-5849a6255/"}
            />
          </div>
          <div className="flex items-center gap-6">
            <ContactCard
              title={"X (Formerly Twitter)"}
              body={"@graceno75417321"}
              icon={<FaXTwitter />}
              link={"https://twitter.com/graceno75417321"}
            />

            <ContactCard
              title={"Instagtam"}
              body={"i_am_grace_noble"}
              icon={<FiInstagram />}
              link={"https://www.instagram.com/i_am_grace_noble/"}
            />

            <ContactCard
              title={"Discord"}
              body={"Dev.Noble => noble00126"}
              icon={<RiDiscordFill />}
              link={"https://discord.gg/tY28YV49"}
            />
          </div>
          <div className="flex items-center gap-6">
            <ContactCard
              title={"Whatsapp"}
              body={"+256774784599"}
              icon={<FaWhatsapp />}
              link={"https://wa.me/+256774784599"}
            />

            <ContactCard
              title={"Mobile"}
              body={"+256-77478 5599"}
              icon={<FiPhone />}
              link={"tel:+256774484599"}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
