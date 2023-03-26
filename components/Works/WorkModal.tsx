import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { SiDribbble } from "react-icons/si";

import Image from "next/image";
import { workModalAtom } from "@/states";
import { useAtom } from "jotai";

const WorkModal: FC<{}> = () => {
  const [modalAtom, setModalAtom] = useAtom(workModalAtom);
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
          className="fixed top-0 left-0 w-screen h-screen bg-opacity-30 z-50 bg-black"
        >
          <motion.section
            onClick={(e) => e.stopPropagation()}
            className="bg-white py-12 overflow-y-scroll  rounded-xl mt-12 h-full w-full"
          >
            <div className=" mx-auto max-w-[1000px] ">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className=" font-semibold text-xl">Expired Alarm</h3>
                  <h4 className="  text-lg text-gray-400">March 26</h4>
                </div>
                <div>
                  <button className=" flex gap-2 items-center bg-pink-100 text-pink-500 px-4 rounded-full py-3">
                    <SiDribbble />
                    View on Dribbble
                  </button>
                </div>
              </div>
              <figure className="mt-8 my-8 rounded-md overflow-hidden">
                <Image
                  className="object-cover"
                  width={4096}
                  height={3072}
                  alt=""
                  src="/app-mockup.jpg"
                />
              </figure>
              <div className="px-4 mb-8 text-xl font-medium">
                UI Design for a mobile app that helps you to keep track of your
                food.
              </div>
              <div className=" flex mb-20 justify-between gap-6">
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
              </div>
            </div>
          </motion.section>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default WorkModal;
