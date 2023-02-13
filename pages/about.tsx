import BriefTexts from "@/components/About/BreifTexts";
import NameCard from "@/components/About/NameCard";
import SkillSet from "@/components/About/SkillSet";

import { navAtom } from "@/states";
import { useSetAtom } from "jotai";
import Head from "next/head";

import { FC, useEffect } from "react";

const About: FC = () => {
  const setNav = useSetAtom(navAtom);

  useEffect(() => {
    setNav((prev) => ({ ...prev, showName: false }));
  }, []);
  return (
    <div>
      <Head>
        <title>About - Lantian Wei</title>
      </Head>

      <div className=" max-w-[1000px] px-4 md:px-6  mx-auto gap-5 mt-32 grid grid-cols-12">
        <div className=" col-span-12 md:col-span-5 ">
          <NameCard />
        </div>
        <div className="col-span-12 md:col-span-7">
          <BriefTexts />
          <SkillSet />
        </div>
      </div>
    </div>
  );
};

export default About;
