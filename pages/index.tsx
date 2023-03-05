import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import { useSetAtom } from "jotai";
import { navAtom } from "@/states";
import { SiFigma, SiReact, SiTypescript } from "react-icons/si";
import Link from "next/link";
import { IoChevronForwardCircleSharp, IoOpenOutline } from "react-icons/io5";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const setNav = useSetAtom(navAtom);
  useEffect(() => {
    setNav((prev) => ({ ...prev, showName: true }));
  }, []);
  return (
    <div className="  max-w-[1000px] px-4 md:px-6  mx-auto gap-5 mt-32 ">
      <div className=" px-8 py-6 bg-white rounded-xl">
        <div className="flex justify-between">
          <div className="flex flex-col justify-between">
            <h1 className=" pretty-text text-7xl font-bold">
              Lantian
              <br />
              Wei
            </h1>
            <div>
              <span className=" inline-block  px-4 py-2  text-xs lg:text-sm text-gray-400 items-center mt-6 bg-gray-50 font-medium rounded-full">
                UI Engineer / Designer
              </span>
              <div className=" mt-3 space-x-2 inline-flex  items-center">
                <span className="flex w-8 h-8 bg-gray-100 rounded-full items-center justify-center">
                  <SiReact color="#959595" size={16} />
                </span>
                <span className="flex w-8 h-8 bg-gray-100 rounded-full items-center justify-center">
                  <SiTypescript color="#959595" size={16} />
                </span>
                <span className="flex w-8 h-8 bg-gray-100 rounded-full items-center justify-center">
                  <SiFigma color="#959595" size={16} />
                </span>
              </div>
            </div>
          </div>

          <div>
            <Image alt="" width={256} height={256} src="/profile.png" />
          </div>
        </div>
      </div>

      <div>
        <div className="flex mt-8 justify-between">
          <h3 className=" text-xl font-semibold">Projects</h3>
          <Link className="text-blue-500 group font-medium" href="/projects">
            All Projects
            <IoChevronForwardCircleSharp
              size={18}
              className="inline-block ml-1 duration-75 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
        <div className=" overflow-x-scroll pb-3">
          <div className="flex gap-4">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>

      <div>
        <div className="flex mt-8 justify-between">
          <h3 className=" text-xl font-semibold">Writings</h3>
          <Link className="text-blue-500 group font-medium" href="/blog">
            All Posts
            <IoChevronForwardCircleSharp
              size={18}
              className="inline-block ml-1 duration-75 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
        <div className="mt-2">
          <span className=" font-medium text-sm text-gray-400">Filter</span>
          <div className="inline-flex ml-2 gap-2 mt-2">
            <span className="bg-blue-500 text-white cursor-pointer py-2 rounded-full border px-3 text-xs">
              🎨 Design
            </span>
            <span className="bg-white cursor-pointer py-2 rounded-full border px-3 text-xs">
              💻 Dev
            </span>
          </div>
        </div>
        <div className=" grid mt-4 grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl h-[150px] gap-4 bg-white pl-4 pr-6 flex py-3">
            <div className="w-[180px] rounded-md overflow-hidden h-full">
              <Image
                width={180}
                height={240}
                className="  object-cover "
                alt=""
                src="/placeholder.png"
              />
            </div>

            <div className="flex-1 w-full">
              <h3 className="font-semibold">
                How to create effective design experience
              </h3>
              <span className="text-sm text-gray-500">3 days ago</span>
              <p className="text-sm line-clamp-2 text-tr mt-2 text-gray-500 ">
                I write about techstack and design system regularly, sin up for
                the next letter makes sure you don't miss out.
              </p>
            </div>
          </div>
          <div className="rounded-xl h-[150px] gap-4 bg-white pl-4 pr-6 flex py-3">
            <div className="w-[180px] rounded-md overflow-hidden h-full">
              <Image
                width={180}
                height={240}
                className="  object-cover "
                alt=""
                src="/placeholder.png"
              />
            </div>

            <div className="flex-1 w-full">
              <h3 className="font-semibold">
                How to create effective design experience
              </h3>
              <span className="text-sm text-gray-500">3 days ago</span>
              <p className="text-sm line-clamp-2 text-tr mt-2 text-gray-500 ">
                I write about techstack and design system regularly, sin up for
                the next letter makes sure you don't miss out.
              </p>
            </div>
          </div>
          <div className="rounded-xl h-[150px] gap-4 bg-white pl-4 pr-6 flex py-3">
            <div className="w-[180px] rounded-md overflow-hidden h-full">
              <Image
                width={180}
                height={240}
                className="  object-cover "
                alt=""
                src="/placeholder.png"
              />
            </div>

            <div className="flex-1 w-full">
              <h3 className="font-semibold">
                How to create effective design experience
              </h3>
              <span className="text-sm text-gray-500">3 days ago</span>
              <p className="text-sm line-clamp-2 text-tr mt-2 text-gray-500 ">
                I write about techstack and design system regularly, sin up for
                the next letter makes sure you don't miss out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ProjectCard = () => {
  return (
    <div className="mt-4 group cursor-pointer relative">
      <span className="absolute opacity-0 translate-x-10 scale-75 group-hover:scale-100 duration-200 transition-all group-hover:opacity-100 group-hover:translate-x-0 flex items-center text-sm right-0 top-2 z-10 bg-blue-500 text-white rounded-full px-4 py-1">
        <IoOpenOutline className="mr-1" />
        Learn More
      </span>
      <div className="w-[320px] px-4 py-4 h-[300px] rounded-xl bg-white">
        <div className="overflow-hidden h-[170px] rounded-md">
          <Image
            width={340}
            height={240}
            className=" object-cover rounded-md"
            alt=""
            src="/placeholder.png"
          />
        </div>
        <div className=" mt-4">
          <h3 className="font-semibold">Vaping Not Cool</h3>

          <div className="flex mt-3 flex-wrap gap-2">
            <div className="  font-medium text-xs text-gray-600 bg-gray-100 rounded-lg px-3 py-2">
              Design Project
            </div>
            <div className="  font-medium text-xs text-gray-600 bg-gray-100 rounded-lg px-3 py-2">
              Design Project
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
