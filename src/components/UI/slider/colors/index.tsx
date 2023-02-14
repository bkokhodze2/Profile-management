import React, {useEffect, useRef} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// @ts-ignore
import {ICONS, IMAGES} from "public/images";
import Image from "next/image"

// import required modules
import {FreeMode, Lazy, Mousewheel, Virtual} from "swiper";
import colors from "../../../../utils/colors";


export default function ColorsSlider({chosenAvatarBg, setChosenAvatarBg}) {

  useEffect(() => {

  }, [])

  return (
      <>
        <Swiper
            spaceBetween={12}
            slidesPerView={"auto"}
            initialSlide={colors.indexOf(chosenAvatarBg)}
            scrollbar={true}
            freeMode={true}
            navigation={false}
            draggable={true}
            lazy={true}
            // virtual={true}
            mousewheel={true}
            modules={[Lazy, FreeMode, Mousewheel, Virtual]}
            className="colorsSwipper"
        >

          {Array.isArray(colors) && colors?.map((item, index) => {
            return <SwiperSlide className={"max-w-[50px]"} key={index} virtualIndex={index}>
              <div
                  onClick={() => setChosenAvatarBg(item.replace("#", ""))}
                  className={"min-w-[50px] h-[50px] rounded-[50%] p-[3px] cursor-pointer"}
                  style={{
                    transition: ".5s",
                    border: item === chosenAvatarBg ? "2px solid #383838" : "2px solid transparent"
                  }}
              >
                <div className={"rounded-[50%] w-full h-full flex justify-center items-center"}
                     style={{
                       backgroundColor: item,
                     }}
                >
                  {item === chosenAvatarBg && <Image src={ICONS.done} alt={"done icon"}/>}
                </div>
              </div>
            </SwiperSlide>
          })}


        </Swiper>
      </>
  );
}
