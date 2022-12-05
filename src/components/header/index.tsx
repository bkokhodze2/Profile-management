import React, {useEffect, useRef, useState} from "react"
// @ts-ignore
import {ICONS, IMAGES} from "public/images";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import axios from "axios";
import _ from "lodash";
// @ts-ignore
import Lari from "/public/images/icons/lari";


const Header: React.FC = () => {
  const baseApi = process.env.baseApi;
  const [IsLoading, setIsLoading] = useState<boolean>(false);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);


  return (
      <>
        <div className={"hidden md:flex w-full bg-amber-700 h-[44px] min-h-[44px] bg-[#383838] items-center "}>
          <div className={"w-full container m-auto flex justify-between"}>
            <div className={"flex space-x-8"}>
              <Link href={"https://optimoml.geopay.ge/index.php"}>
                <span className={"text-sm text-[#ffffffb3] cursor-pointer aveSofRegular "}>მაღაზია</span>
              </Link>
              <Link href={"https://medical.pirveli.ge"}>
                <span className={"text-sm text-[#ffffffb3] cursor-pointer aveSofRegular"}>მედიქალი</span>
              </Link>
              <Link href={"/"}>
                <span className={"text-sm text-[#ffffffb3] cursor-pointer aveSofRegular"}>ვაუჩერები</span>
              </Link>

              <Link href={"https://lot51.pirveli.ge"}>
                <span className={"text-sm text-[#ffffffb3] cursor-pointer aveSofRegular"}>გათამაშება</span>
              </Link>

              <Link href={"https://lot51.pirveli.ge"}>
                <span className={"text-sm text-[#ffffffb3] cursor-pointer aveSofRegular"}>თამაშები</span>
              </Link>
            </div>

            <div className={"flex"}>
              <Image
                  src={IMAGES.coin}
                  quality={100}
                  blurDataURL={IMAGES.placeholder.src}
                  loading={"lazy"}
                  width={20}
                  height={20}
                  alt={"coin icon"}
              />
              <p className={"text-sm text-[white] mr-8 ml-[5px] capitalize after:content-[''] after:h-[20px] after:bg-[#ffffffb3] after:rounded-[2px] after:ml-4 after:absolute after:w-[1px] after:text-red-500 aveSofRegular"}>
                40,076</p>
              <div className={"flex cursor-pointer"}>
                <img className={"mr-[11px]"} src={ICONS.geoFlag.src} alt={"geo flag"}/>

                <Image src={ICONS.arrowDown} alt={"arrow down"}/>
              </div>
              {/*<p className={"text-sm text-[#ffffffb3] mr-8 capitalize aveSofRegular"}>English</p>*/}
            </div>
          </div>
        </div>
        <header className={"container w-full m-auto sticky top-[0px] z-20"}>
          <div className={"flex gap-[30px] justify-between h-[100px] w-full items-center bg-[#EDEEEF]"}>
            <div className={"min-w-[312px]"}>
              <Image src={IMAGES.logo} alt={"company logo"} width={175} height={75}/>
            </div>
            <div className={"borders w-full grid grid-cols-2 gap-[30px] relative"}>
              <div/>
              <div className={"flex justify-end"}>
                <Image src={IMAGES.avatar} alt={"user avatar"} width={60} height={60}/>
              </div>
            </div>
          </div>
        </header>

      </>
  )
}

export default Header;
