import Image from "next/image";
import H3 from "./common/heading-three";

const ProjectShowcaseCard = () => {
  return (
    <div className="p-8 py-6 isolate relative overflow-hidden rounded-2xl border-[1px] border-white/20 aspect-9/12 bg-white/5 hover:cursor-pointer active:cursor-grabbing  group transition-all ease-in-out duration-300">
      <Image
        src={"/images/one.jpg"}
        alt={""}
        width={500}
        height={500}
        className="absolute -z-1 h-full object-cover left-0 top-0 group-hover:opacity-50 transition-all ease-in-out duration-300 unselectable"
        draggable="false"
      />
      <div className="flex flex-col justify-between h-full opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300 unselectable">
        <div>
          <H3>Project title</H3>
          <p>
            This is a short project description for the project you are seeing
            on the screen
          </p>
        </div>
        <div className="flex gap-2">
          <span className="bg-muted/80 text-black px-4 py-1 rounded-full">
            RBAC
          </span>
          <span className="bg-muted/80 text-black px-4 py-1 rounded-full">
            TRPC
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcaseCard;
