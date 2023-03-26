import { FC, useState } from "react";
import Image from "next/image";
import { useSetAtom } from "jotai";
import { workModalAtom } from "@/states";

export const WorkItem: FC = () => {
  const setModalAtom = useSetAtom(workModalAtom);
  return (
    <div
      onClick={() =>
        setModalAtom({
          viewingWorkId: "1",
        })
      }
      className="bg-white group cursor-pointer w-full relative overflow-hidden rounded-lg"
    >
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.4) 100%)",
          width: "100%",
          height: "100%",
          position: "absolute",
          display: "flex",

          alignItems: "end",
        }}
        className=" text-white px-8 py-8 transition-opacity duration-150 absolute opacity-0 group-hover:opacity-100"
      >
        <h3 className=" group-hover:translate-y-0 translate-y-10 transition-transform duration-150 text-lg font-medium">
          Footer Locker App Design
        </h3>
      </div>
      <Image
        className=" w-full h-full object-cover"
        width={4096}
        height={3072}
        alt=""
        src="/app-mockup.jpg"
      />
    </div>
  );
};

const WorkList: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const setWorkModalAtom = useSetAtom(workModalAtom);
  return (
    <div className="max-w-[1000px] mx-auto  mt-32">
      <h1 className=" text-3xl font-semibold">Works (291)</h1>
      <h2 className=" text-xl mt-1 text-gray-400">
        A collection of my design and interactive prototypes.
      </h2>

      <section className=" grid mt-8 grid-cols-2 gap-6">
        <WorkItem />
        <WorkItem />
        <WorkItem />
      </section>
    </div>
  );
};

export default WorkList;
