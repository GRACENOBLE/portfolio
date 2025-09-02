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
    <div className="isolate relative overflow-hidden rounded-xl md:aspect-9/12 group bg-muted hover:cursor-pointer active:cursor-grabbing group  ">
      <div className="transition-all ease-in-out duration-300 p-2 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="group-hover: unselectable object-cover h-full w-full transition-all ease-in-out duration-300 opacity-80 rounded-lg aspect-6/5"
          draggable="false"
        />
      </div>
      <div className="flex px-8  pt-4 md:pt-8 pb-8 flex-col justify-end transition-all ease-in-out duration-300 unselectable bg-gradient-to-t">
        <div>
          <H3 className="pb-4 text-base font-medium">{title}</H3>
          <p className="text-sm text-white/60">{description}</p>
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
