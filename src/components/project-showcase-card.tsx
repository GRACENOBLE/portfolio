import Image from "next/image";
import Link from "next/link";
import H3 from "./common/heading-three";

const ProjectShowcaseCard = ({
  image,
  title,
  description,
  link,
  slug,
}: {
  image: string;
  title: string;
  description: string;
  link: string;
  slug?: string;
}) => {
  const cardContent = (
    <div className="isolate relative overflow-hidden rounded-2xl aspect-9/12 bg-white/5 group hover:cursor-pointer active:cursor-grabbing group  ">
      <div className="absolute -z-1 h-full  left-0 top-0 transition-all ease-in-out duration-300">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="group-hover:scale-105 unselectable object-cover h-full w-full transition-all ease-in-out duration-300 "
          draggable="false"
        />
      </div>
      <div className="flex p-8 py-6 flex-col justify-end h-full transition-all ease-in-out duration-300 unselectable bg-gradient-to-t from-black/60 to-transparent">
        <div>
          <H3 className="pb-2 text-lg">{title}</H3>
          <p className="text-sm font-light text-white/60">{description}</p>
        </div>
        {/* <div className="flex gap-2">
          <span className="bg-white text-black px-4 py-1 rounded-full">
            RBAC
          </span>
          <span className="bg-background text-black px-4 py-1 rounded-full">
            TRPC
          </span>
        </div> */}
      </div>
    </div>
  );

  // If slug is provided, link to the individual project page, otherwise use the external link
  if (slug) {
    return <Link href={`/projects/${slug}`}>{cardContent}</Link>;
  }

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {cardContent}
    </a>
  );
};

export default ProjectShowcaseCard;
