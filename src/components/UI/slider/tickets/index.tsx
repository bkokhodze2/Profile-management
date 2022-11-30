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
import {Pagination, Navigation, Lazy} from "swiper";


export default function Slider() {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const swiper = useRef() as any;


  useEffect(() => {

  }, [swiper])

  return (
      <>
        {
          <>
            <div className={"ticketsArrowPrev"} ref={prevRef} onClick={() => swiper.current.swiper.slidePrev()}>
              <Image
                  src={ICONS.prev} alt={"prev icon"}/></div>
            <div className={"ticketsArrowNext"} ref={nextRef} onClick={() => swiper.current.swiper.slideNext()}><Image
                src={ICONS.next} alt={"next icon"}/></div>
          </>
        }

        <Swiper
            spaceBetween={30}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            onInit={(core) => {
              swiper.current = core.el
            }}
            navigation={{
              prevEl: prevRef.current ? prevRef.current : undefined,
              nextEl: nextRef.current ? nextRef.current : undefined,
            }}
            draggable={true}
            loop={true}
            lazy={true}
            modules={[Pagination, Navigation, Lazy]}
            className="ticketsSwiper"
        >

          {[1, 2, 3, 4, 5].map((e, index) => {
            return <SwiperSlide key={index}>
              <div className={"w-full h-full "}>
                <div className={"flex h-full w-full justify-center pb-[15px]"}>
                  <div className={"flex flex-col justify-between items-start mr-[71px]"}>
                    <div>
                      <p className={"text-[14px] mb-1 text-dark7"}>ტირაჟი</p>
                      <p className={"text-[14px] text-dark font-[600]"}>1256741</p>
                    </div>
                    <div>
                      <p className={"text-[14px] mb-1  text-dark7"}>თარიღი</p>
                      <p className={"text-[14px] text-dark font-[600]"}>11.22.2022</p>
                    </div>
                  </div>

                  <div className={"flex flex-col justify-between items-start mr-[10px]"}>
                    <div>
                      <p className={"text-[14px] mb-1  text-dark7"}>სტატუსი</p>
                      <p className={"text-[14px] text-[#9766F0] font-[600]"}>Active 1</p>
                    </div>
                    <div>
                      <p className={"text-[14px] mb-1  text-dark7"}>ბილეთის ნომერი</p>
                      <p className={"text-[14px] text-dark font-[600]"}>9812498765</p>
                    </div>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          })}


        </Swiper>
      </>
  );
}
