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
        I am a design student currently studying at RMIT university specializing
        in digital media design. I am passionate about brining appalling and
        functional digital product interfaces to the user. During my internship
        experiences in multiple startup companies, I applied and strength my
        knowledge of user-centered design approach in large scale projects
        including a web product which helps companies to better onboard thier
        customers, as well as a community app which brings people who
        participate in a same competition together and get to know each other.
      </p>
    </AboutCard>
  );
};

export default BriefTexts;
