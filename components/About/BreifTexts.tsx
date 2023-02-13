import LangSwitch from "@/components/LangSwitch";
import { useState } from "react";
import AboutCard from "./AboutCard";

const BriefTexts = () => {
  const [lang, setLang] = useState<"en" | "cn">("en");
  return (
    <AboutCard
      title="About"
      extra={<LangSwitch lang={lang} setLang={setLang} />}
    >
      <p className=" text-gray-500 text-sm md:text-md leading-relaxed">
        I am Lantian, a developer and designer specializing in crafting refined
        user faced products. I am passionate about building excellent software
        that improves the lives of those around me. I am currently working at{" "}
        <a
          href="https://www.ubisoft.com/en-US/studio/ubisoft-shanghai.aspx"
          target="_blank"
          rel="noreferrer"
        >
          Ubisoft Shanghai
        </a>{" "}
        as a UI Developer. I am also a part-time instructor at{" "}
        <a
          href="https://www.ubisoft.com/en-US/studio/ubisoft-shanghai.aspx"
          target="_blank"
          rel="noreferrer"
        >
          Udemy
        </a>{" "}
        where I teach courses on React and Typescript.
      </p>
    </AboutCard>
  );
};

export default BriefTexts;
