import BriefTexts from "@/components/About/BreifTexts";
import Education from "@/components/About/Education";
import Experiences from "@/components/About/Experiences";
import NameCard from "@/components/About/NameCard";
import SkillSet from "@/components/About/SkillSet";
import Specializations from "@/components/About/Specializations";
import { client } from "@/lib/sanity";

import { navAtom } from "@/states";
import groq from "groq";
import { useSetAtom } from "jotai";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { FC, useEffect } from "react";

const About: NextPage<{
  aboutInfo: {
    _id: string;
    about: string;
  };
}> = ({ aboutInfo }) => {
  const setNav = useSetAtom(navAtom);

  useEffect(() => {
    setNav((prev) => ({ ...prev, showName: true }));
  }, []);
  return (
    <div>
      <Head>
        <title>About - Eric Wei</title>
        <meta name="description" content="About me." />
      </Head>

      <div className="  max-w-[1000px] px-4 md:px-6  mx-auto gap-5 mt-32 grid grid-cols-12">
        <div className=" relative  col-span-12 md:col-span-4 ">
          <NameCard />
        </div>
        <div className="col-span-12 md:col-span-8">
          <BriefTexts content={aboutInfo.about} />

          <SkillSet />
          <Experiences />

          <Education />
          <Specializations />
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const aboutInfo = await client.fetch(groq`
    *[_type == "about" && _id == "about"][0] {
  _id,about
}
  `);

  return {
    props: {
      aboutInfo,
    },
    revalidate: 100,
  };
};

export default About;
