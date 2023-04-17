import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import {
  IoArrowBack,
  IoArrowForward,
  IoClose,
  IoCloseCircle,
} from "react-icons/io5";
import { SiDribbble } from "react-icons/si";

import Image from "next/image";
import { workModalAtom } from "@/states";
import { useAtom } from "jotai";
import { useQuery } from "react-query";
import { client } from "@/lib/sanity";
import groq from "groq";
import { DesignWork } from "@/lib/models";
import { BiLoader } from "react-icons/bi";

const WorkModal: FC<{}> = () => {
  const [modalAtom, setModalAtom] = useAtom(workModalAtom);
  const { data, isLoading } = useQuery<DesignWork>(
    ["work", modalAtom.viewingWorkId],
    () =>
      client.fetch(
        groq`
    *[_type == "designWork" && _id == $id][0] {
  _id,title,publishedAt,link , description,"image":image.asset->{url,metadata{dimensions}}}
    `,
        {
          id: modalAtom.viewingWorkId,
        }
      )
  );
  return (
    <AnimatePresence>
      {modalAtom.viewingWorkId && (
        <motion.section
          initial={{
            y: 200,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
          }}
          onClick={() => setModalAtom({ viewingWorkId: null })}
          className="fixed top-0  left-0 w-screen h-screen bg-opacity-30 z-50 bg-black"
        >
          <motion.section
            onClick={(e) => e.stopPropagation()}
            className="bg-white pt-6 pb-24 overflow-y-scroll  rounded-xl mt-12 h-full w-full"
          >
            {isLoading ? (
              <div className="flex w-full h-full  items-center justify-center">
                {<BiLoader size={48} className="animate-spin text-gray-400" />}
              </div>
            ) : (
              <div className=" mx-auto px-4 max-w-[1000px] ">
                <div className=" flex  justify-end w-full">
                  <button
                    onClick={() => setModalAtom({ viewingWorkId: null })}
                    className="font-medium text-lg mb-6 flex items-center gap-1 text-blue-600"
                  >
                    <IoCloseCircle />
                    Close
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className=" font-semibold text-xl">{data?.title}</h3>
                    <h4 className="  text-lg text-gray-400">
                      {data?.publishedAt &&
                        new Date(data?.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                          }
                        )}
                    </h4>
                  </div>
                  <div>
                    {data?.link && (
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={data?.link}
                        className=" flex gap-2 items-center bg-pink-100 text-pink-500 px-4 rounded-full py-3"
                      >
                        <SiDribbble />
                        View on Dribbble
                      </a>
                    )}
                  </div>
                </div>
                <figure className="mt-8 my-8 rounded-md overflow-hidden">
                  {data?.image && (
                    <Image
                      className="object-cover max-h-[600px]"
                      width={data?.image.metadata.dimensions.width}
                      height={data?.image.metadata.dimensions.height}
                      alt=""
                      src={data?.image.url}
                    />
                  )}
                </figure>
                {data?.description && (
                  <div className="px-4 mb-8">
                    <p className=" tex-md md:text-lg text-gray-600">
                      {data?.description}
                    </p>
                  </div>
                )}

                {/* <div className=" flex mb-20 justify-between gap-6">
                  <button className="flex text-sm font-medium items-center text-gray-400  gap-2">
                    <div className=" flex justify-center   items-center w-8 h-8 bg-gray-100 rounded-full">
                      <IoArrowBack />
                    </div>
                    Previous
                  </button>
                  <button className="flex text-sm font-medium items-center text-gray-400  gap-2">
                    <div className=" flex justify-center   items-center w-8 h-8 bg-gray-100 rounded-full">
                      <IoArrowForward />
                    </div>
                    Next
                  </button>
                </div> */}
              </div>
            )}
          </motion.section>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default WorkModal;
