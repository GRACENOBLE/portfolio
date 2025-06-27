import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const ShowcaseCard = ({
  imageUrl,
  projectTitle,
  projectLink,
}: {
  imageUrl: string;
  projectTitle: string;
  projectLink: string;
}) => {
  return (
    <div className="break-inside-avoid mb-4 rounded-md overflow-hidden relative group">
      <Link href={projectLink}>
        <Image src={imageUrl} alt={""} width={500} height={500} className="" />
        <div className="absolute top-0 bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 z-10 bg-black/20 grid place-items-center transition-all ease-in-out duration-500">
          <div className=" rounded-full bg-black/70 ps-4 pe-2 border-1 border-black/50 flex items-center">
            <p className="border-r border-r-white/50 pe-2 text-sm">
              {projectTitle}
            </p>
            <span className="ps-1">
              <ArrowUpRight size={16} />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ShowcaseCard;
