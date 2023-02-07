import React, {useEffect, useRef, useState} from "react";
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
import colors from "../../../utils/colors";


export default function Avatars({chosenAvatarImg = "1", setChosenAvatarImg, chosenAvatarBg}) {

  const [change, setChange] = useState<boolean>(false);

  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const swiper = useRef() as any;

  // useEffect(() => {
  //   console.log("ragaca")
  //
  //   if (parseInt(chosenAvatarImg) > swiper?.current?.swiper?.activeIndex) {
  //     swiper?.current?.swiper?.slideNext()
  //
  //   }
  //   if (parseInt(chosenAvatarImg) < swiper?.current?.swiper?.activeIndex) {
  //     swiper?.current?.swiper?.slidePrev()
  //   }
  //
  // }, [chosenAvatarImg])

  useEffect(() => {
    Change()
  }, [swiper?.current?.swiper?.activeIndex])


  const Change = () => {
    if (swiper) {
      setChosenAvatarImg((swiper?.current?.swiper?.activeIndex + 1).toString())
    }
  }


  return (
      <>
        <Swiper
            spaceBetween={9}
            slidesPerView={3}
            centeredSlides={true}
            // @ts-ignore
            onActiveIndexChange={() => Change()}
            // scrollbar={true}
            // draggable={true}
            onInit={(core) => {
              swiper.current = core.el
            }}
            lazy={true}
            modules={[Lazy, FreeMode, Mousewheel, Virtual]}
            className="avatarSwipper"
            initialSlide={parseInt(chosenAvatarImg) - 1}
            navigation={{
              prevEl: prevRef.current ? prevRef.current : undefined,
              nextEl: nextRef.current ? nextRef.current : undefined,
            }}
        >
          <SwiperSlide>
            <div
                // onClick={() => setChosenAvatarImg("1")}
                className={"w-[77px] py-1.5 h-[77px] relative flex items-center justify-center rounded-xl cursor-pointer"}
                style={{
                  transition: "0.5s",
                  backgroundColor: chosenAvatarImg === "1" ? `#${chosenAvatarBg}` : "transparent"
                }}>
              <img src={IMAGES.avatar1.src} alt={"avatar"}
                   width={77} height={77}
                   style={{objectFit: "cover", height: "100%", width: "auto"}}/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
                // onClick={() => setChosenAvatarImg("2")}
                style={{
                  transition: "0.5s",
                  backgroundColor: chosenAvatarImg === "2" ? `#${chosenAvatarBg}` : "transparent"
                }}
                className={"w-[77px] py-1.5 h-[77px] relative flex items-center justify-center rounded-xl cursor-pointer"}>
              <img src={IMAGES.avatar2.src} alt={"avatar"}
                   width={77} height={77}
                   style={{objectFit: "cover", height: "100%", width: "auto"}}/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
                // onClick={() => setChosenAvatarImg("3")}
                className={"w-[77px] py-1.5 h-[77px] relative flex items-center justify-center rounded-xl cursor-pointer"}
                style={{
                  transition: "0.5s",
                  backgroundColor: chosenAvatarImg === "3" ? `#${chosenAvatarBg}` : "transparent"
                }}
            >
              <img src={IMAGES.avatar3.src} alt={"avatar"}
                   width={77} height={77}
                   style={{objectFit: "cover", height: "100%", width: "auto"}}/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
                // onClick={() => setChosenAvatarImg("4")}
                className={"w-[77px] py-1.5 h-[77px] relative flex items-center justify-center rounded-xl cursor-pointer"}
                style={{
                  transition: "0.5s",
                  backgroundColor: chosenAvatarImg === "4" ? `#${chosenAvatarBg}` : "transparent"
                }}
            >
              <img src={IMAGES.avatar4.src} alt={"avatar"}
                   width={77} height={77}
                   style={{objectFit: "cover", height: "100%", width: "auto"}}/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
                // onClick={() => setChosenAvatarImg("5")}
                className={"w-[77px] py-1.5 h-[77px] relative flex items-center justify-center rounded-xl cursor-pointer"}
                style={{
                  transition: "0.5s",
                  backgroundColor: chosenAvatarImg === "5" ? `#${chosenAvatarBg}` : "transparent"
                }}
            >
              <img src={IMAGES.avatar5.src} alt={"avatar"}
                   width={77} height={77}
                   style={{objectFit: "cover", height: "100%", width: "auto"}}/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
                // onClick={() => setChosenAvatarImg("6")}
                className={"w-[77px] py-1.5 h-[77px] relative flex items-center justify-center rounded-xl cursor-pointer"}
                style={{
                  transition: "0.5s",
                  backgroundColor: chosenAvatarImg === "6" ? `#${chosenAvatarBg}` : "transparent"
                }}
            >
              <img src={IMAGES.avatar6.src} alt={"avatar"}
                   width={77} height={77}
                   style={{objectFit: "cover", height: "100%", width: "auto"}}/>
            </div>
          </SwiperSlide>

        </Swiper>
      </>
  );
}
