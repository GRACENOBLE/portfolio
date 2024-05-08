import Link from "next/link";
import React from "react";

type ContactCardProps = {
  icon: any;
  title: string;
  body: string;
  link: string;
};

export default function ContactCard({
  icon,
  title,
  body,
  link,
}: ContactCardProps) {
  return (
    <Link href={link}>
      <div className="w-72 h-48 rounded-lg border border-white flex flex-col justify-between hover:bg-gray-900 hover:w-96 transition-all ease-in-out hover:h-72">
        <div className="flex  w-full justify-end pe-4 pt-4 text-2xl">
          {icon}
        </div>
        <div className="ps-4 pb-10">
          <h3 className="text-red-600 text-2xl">{title}</h3>
          <br />
          <p className="text-white">{body}</p>
        </div>
      </div>
    </Link>
  );
}
