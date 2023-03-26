import { FC, useState } from "react";
import Image from "next/image";
import { SiDribbble } from "react-icons/si";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

export const WorkItem: FC<{
  onClick?: () => void;
}> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
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

const WorkModal: FC<{
  onClose: () => void;
  isOpen: boolean;
}> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
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
          onClick={onClose}
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

const WorkList: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-[1000px] mx-auto  mt-32">
      <h1 className=" text-3xl font-semibold">Works (291)</h1>
      <h2 className=" text-xl mt-1 text-gray-400">
        A collection of my design and interactive prototypes.
      </h2>

      <section className=" grid mt-8 grid-cols-2 gap-6">
        <WorkItem onClick={() => setIsOpen(true)} />
        <WorkItem />
        <WorkItem />
      </section>

      <WorkModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default WorkList;
