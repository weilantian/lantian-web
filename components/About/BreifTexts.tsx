import LangSwitch from "@/components/LangSwitch";
import { FC, useState } from "react";
import AboutCard from "./AboutCard";

const BriefTexts: FC<{ content: string }> = ({ content }) => {
  const [lang, setLang] = useState<"en" | "cn">("en");
  return (
    <AboutCard title="About">
      <p className=" text-gray-500 text-sm md:text-md leading-relaxed">
        {content}
      </p>
    </AboutCard>
  );
};

export default BriefTexts;
