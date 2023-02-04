import { motion } from "framer-motion";
import { FC, useState } from "react";

const LangSwitch: FC<{
  lang: "cn" | "en";
  setLang: (lang: "en" | "cn") => void;
}> = ({ lang, setLang }) => {
  const toggleLang = () => setLang(lang === "en" ? "cn" : "en");

  return (
    <div
      onClick={toggleLang}
      className="bg-slate-100 select-none  cursor-pointer transition-all duration-75 active:ring-blue-300 ring-0 active:ring-2  hover:ring-2 absolute rounded-full py-2 items-center w-[90px] flex justify-between px-4"
    >
      <motion.span
        layoutId="lang-switch"
        layout
        className={`absolute block shadow-slate-500 shadow-  rounded-full bg-white h-8 w-10 ${
          lang === "en" ? "left-[5px]" : "right-[5px]"
        } `}
      ></motion.span>
      <span
        className={`z-10 transition-colors duration-75 delay-75 text-center  ${
          lang !== "en" ? "text-gray-400 " : "font-medium"
        } `}
      >
        EN
      </span>
      <span
        className={`z-10 transition-colors duration-75  delay-75 text-center  ${
          lang !== "cn" ? "text-gray-400 " : "font-medium"
        } `}
      >
        中
      </span>
    </div>
  );
};

export default LangSwitch;
