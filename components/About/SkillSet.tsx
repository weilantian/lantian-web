import { FC } from "react";
import AboutCard from "./AboutCard";
import Image from "next/image";
import SkillCard from "../SkillCard";
import Link from "next/link";
import { IoChevronForwardCircleSharp } from "react-icons/io5";
import CanvasSkillCard from "../CanvasSkillCard";

const SkillSet: FC = () => {
  return (
    <AboutCard title="Great with">
      <div className="w-full overflow-x-scroll ">
        <div className="flex pb-4 items-center space-x-4 w-fit">
          <SkillCard
            alt=""
            width={114}
            height={105}
            src="/skill-img/ds.png"
            title="Design System / UI Dev + Design"
            className="bg-gradient-to-r from-cyan-500 to-blue-500"
          />
          <SkillCard
            alt=""
            width={88 * 0.8}
            height={92 * 0.8}
            src="/skill-img/ux.png"
            title="UX Research / Analysis"
            className="bg-gradient-to-r from-amber-500 to-yellow-500"
          />
          <CanvasSkillCard />
          {/* <SkillCard
            alt=""
            width={106 * 1.2}
            height={109 * 1.2}
            src="/skill-img/backend.png"
            title="Backends"
            className="bg-gradient-to-r from-indigo-700 to-violet-700"
          /> */}
        </div>
      </div>
      <div className="mt-4">
        <Link
          className="mt-2 group text-blue-500 flex items-center font-medium"
          href="/projects"
        >
          Projects
          <IoChevronForwardCircleSharp
            size={18}
            className="inline-block ml-1 duration-75 transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </AboutCard>
  );
};

export default SkillSet;
