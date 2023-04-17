import { workModalAtom } from "@/states";
import { useSetAtom } from "jotai";
import { FC } from "react";
import Image from "next/image";
import { DesignWork } from "@/lib/models";

const WorkItem: FC<DesignWork> = ({ title, _id, image }) => {
  const setModalAtom = useSetAtom(workModalAtom);
  return (
    <div
      onClick={() =>
        setModalAtom({
          viewingWorkId: _id,
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
          {title}
        </h3>
      </div>
      <Image
        className=" md:w-full h-[220px] md:h-[300px] object-cover"
        width={image.metadata.dimensions.width}
        height={image.metadata.dimensions.height}
        alt=""
        src={image.url}
      />
    </div>
  );
};

export default WorkItem;
