import { FC } from "react";
import AboutCard from "./AboutCard";

import {
  SiReact,
  SiThreedotjs,
  SiStyledcomponents,
  SiTypescript,
  SiNestjs,
  SiFigma,
  SiGit,
  SiAdobeaftereffects,
  SiInvision,
  SiJira,
  SiSlack,
} from "react-icons/si";

const ToolIcon: FC<{ bg?: string; icon: JSX.Element }> = ({ bg, icon }) => {
  return (
    <div
      className="w-12 h-12 flex items-center justify-center rounded-xl "
      style={{
        backgroundColor: bg || "#F2F2F2",
      }}
    >
      {icon}
    </div>
  );
};

const Specializations: FC = () => {
  return (
    <AboutCard title="Work with">
      <h3 className="text-sm font-medium">Development</h3>
      <div className="rounded-xl mt-3 space-x-4 flex items-center">
        <ToolIcon bg="#608CED" icon={<SiReact color="white" size={28} />} />
        <ToolIcon icon={<SiThreedotjs color="#1130F5" size={28} />} />
        <ToolIcon
          bg="#DB7093"
          icon={<SiStyledcomponents color="white" size={28} />}
        />
        <ToolIcon icon={<SiTypescript color="#3178C6" size={24} />} />
        <ToolIcon bg="#ED7676" icon={<SiNestjs color="white" size={24} />} />
        <ToolIcon icon={<SiGit color="#E46C6C" size={24} />} />
      </div>

      <h3 className="text-sm mt-6 font-medium">Design</h3>
      <div className="rounded-xl mt-3 space-x-4 flex items-center">
        <ToolIcon bg="#4A4141" icon={<SiFigma color="white" size={28} />} />
        <ToolIcon
          bg="#9999F8"
          icon={<SiAdobeaftereffects color="#000057" size={28} />}
        />
        <ToolIcon bg="#FF3366" icon={<SiInvision color="white" size={22} />} />
      </div>
      <h3 className="text-sm mt-6 font-medium">Team Work</h3>
      <div className="rounded-xl mt-3 space-x-4 flex items-center">
        <ToolIcon bg="#0052CC" icon={<SiJira color="white" size={24} />} />
        <ToolIcon bg="#4A154B" icon={<SiSlack color="white" size={24} />} />
      </div>
    </AboutCard>
  );
};

export default Specializations;
