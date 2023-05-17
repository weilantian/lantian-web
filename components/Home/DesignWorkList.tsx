import { FC, useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { type DesignWork } from "@/lib/models";

import Link from "next/link";
import { IoChevronForwardCircleSharp } from "react-icons/io5";
import WorkItem from "../Works/WorkItem";

const DesignWorkList: FC<{items:Array<DesignWork>}> = ({items}) => {
  const [isSmallerScreen,setIsSmallerScreen] = useState(false)
  useEffect(()=> {
    if (window.innerWidth < 640) {
      setIsSmallerScreen(true)
    }
    window.addEventListener('resize',()=>{
      if (window.innerWidth < 640) {
        setIsSmallerScreen(true)
      } else {
        setIsSmallerScreen(false)
      }
    })
    return ()=> window.removeEventListener('resize',()=>{})
  },[])
  return <div>
        <div className="flex mb-6 mt-8 justify-between">
          <h3 className=" text-xl font-semibold">Design Works + Case Studies</h3>
          <Link className="text-blue-500 group font-medium" href="/works">
            All Design Works
            <IoChevronForwardCircleSharp
              size={18}
              className="inline-block ml-1 duration-75 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <Swiper
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          modules={[Pagination, A11y, Autoplay]}
          spaceBetween={24}
          slidesPerView={isSmallerScreen ? 1 : 2}
        >

          {items.map(item=>(   <SwiperSlide key={item._id}>
              <WorkItem {...item} />
          </SwiperSlide>))}
          
       
         
        </Swiper>
      </div>
};

export default DesignWorkList;
