import { motion } from "framer-motion";
import { FC, useState } from "react";

type Skill = "design" | "dev";

const SkillSwitch: FC<{
  skill: Skill;
  setSkill: (skill: Skill) => void;
}> = ({ skill, setSkill }) => {
  const toggleLang = () => setSkill(skill === "design" ? "dev" : "design");

  return (
    <button
      onClick={toggleLang}
      className="bg-slate-100 relative  cursor-pointer transition-all duration-75 active:ring-blue-300 ring-0 active:ring-2  hover:ring-2 absolute rounded-full py-2 items-center w-[90px] flex justify-between px-4"
    >
      <motion.span
        layoutId="lang-switch"
        layout
        className={`absolute block shadow-slate-500 shadow-  rounded-full bg-white h-8 w-10 ${
          skill === "design" ? "left-[5px]" : "right-[5px]"
        } `}
      ></motion.span>
      <span
        className={`z-10 transition-colors duration-75 delay-75 text-center  ${
          skill !== "design" ? "text-gray-400 " : "font-medium"
        } `}
      >
        Design
      </span>
      <span
        className={`z-10 transition-colors duration-75  delay-75 text-center  ${
          skill !== "dev" ? "text-gray-400 " : "font-medium"
        } `}
      >
        Dev
      </span>
    </button>
  );
};

export default SkillSwitch;
