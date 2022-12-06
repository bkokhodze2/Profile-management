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
import {inspect} from "util";
import colors from "../../colors";


export default function ColorsSlider({chosenAvatarBg, setChosenAvatarBg}) {

  console.log("indexm", colors.indexOf(chosenAvatarBg));

  useEffect(() => {

  }, [])

  return (
      <>
        <Swiper
            spaceBetween={9}
            slidesPerView={6.5}
            initialSlide={colors.indexOf(chosenAvatarBg)}
            scrollbar={true}
            freeMode={true}
            navigation={false}
            draggable={true}
            lazy={true}
            virtual={true}
            mousewheel={true}
            modules={[Lazy, FreeMode, Mousewheel, Virtual]}
            className="ticketsSwiper"
        >

          {colors.map((item, index) => {
            return <SwiperSlide key={index} virtualIndex={index}>
              <div
                  onClick={() => setChosenAvatarBg(item)}
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
