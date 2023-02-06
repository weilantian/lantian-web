import LangSwitch from "@/components/LangSwitch";
import { navAtom } from "@/states";
import { useSetAtom } from "jotai";
import Head from "next/head";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { SiTypescript, SiReact, SiFigma } from "react-icons/si";
import { IoDownload } from "react-icons/io5";

const About: FC = () => {
  const setNav = useSetAtom(navAtom);
  const [lang, setLang] = useState<"en" | "cn">("en");
  useEffect(() => {
    setNav((prev) => ({ ...prev, showName: false }));
  }, []);
  return (
    <div>
      <Head>
        <title>About - Lantian Wei</title>
      </Head>

      <div className=" max-w-[1000px] px-4 md:px-6  mx-auto gap-8 mt-32 grid grid-cols-12">
        <div className=" col-span-12 md:col-span-5 ">
          <div className=" bg-white w-full flex justify-center items-center flex-col px-4 pt-4 pb-8 rounded-xl">
            <Image alt="" width={256} height={256} src="/profile.png" />
            <h1 className=" text-xl font-medium">Lantian Wei</h1>
            <span className=" mt-3 px-4 py-2 flex text-xs lg:text-sm text-gray-500 items-center bg-gray-100 font-medium rounded-full">
              <div className=" mr-3 space-x-1 flex items-center">
                <span className="flex w-8 h-8 bg-gray-200 rounded-full items-center justify-center">
                  <SiReact color="#959595" size={16} />
                </span>
                <span className="flex w-8 h-8 bg-gray-200 rounded-full items-center justify-center">
                  <SiTypescript color="#959595" size={16} />
                </span>
                <span className="flex w-8 h-8 bg-gray-200 rounded-full items-center justify-center">
                  <SiFigma color="#959595" size={16} />
                </span>
              </div>
              UI Developer / Designer
            </span>
            <button className=" mt-6 flex hidden md:flex z-30  items-center rounded-full text-white bg-blue-500 px-4 py-2">
              <IoDownload className="mr-2" />
              Download Resume
            </button>
          </div>
        </div>
        <div className="col-span-12 md:col-span-7">
          <div className=" bg-white w-full px-5 pt-4 pb-8 rounded-xl">
            <div className="w-full mb-4 flex justify-between items-center">
              <h3 className="text-lg font-medium">About</h3>
              <LangSwitch lang={lang} setLang={setLang} />
            </div>
            <p className=" text-gray-500 text-sm md:text-md leading-relaxed">
              I am Lantian, a developer and designer specializing in crafting
              refined user faced products. I am passionate about building
              excellent software that improves the lives of those around me. I
              am currently working at{" "}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
