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
import {useDispatch, useSelector} from "react-redux";
import {getUserInfo} from "../slices/userSlice";

const Header: React.FC = () => {
  const baseApi = process.env.baseApi;
  const dispatch = useDispatch();
  const Router = useRouter();
  const [IsLoading, setIsLoading] = useState<boolean>(false);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const userInfo = useSelector((state: any) => state.user.userInfo);

  const getChosenAvatar = () => {

    switch (parseInt(userInfo?.avatar?.path)) {
      case 1:
        return IMAGES.avatar1.src
      case 2:
        return IMAGES.avatar2.src
      case 3:
        return IMAGES.avatar3.src
      case 4:
        return IMAGES.avatar4.src
      case 5:
        return IMAGES.avatar5.src
      case 6:
        return IMAGES.avatar6.src
      default :
        return IMAGES.avatar1.src
    }

  }

  useEffect(() => {
    if (!userInfo) {
      // @ts-ignore
      dispatch(getUserInfo())
    }


  }, [])

  return (
      <>
        <div className={"h-[40px] w-full flex items-center justify-center bg-[white]"}>
          <p>საიტი მუშაობს სატესტო რეჟიმში</p>
        </div>
        <div className={"flex w-full h-[44px] min-h-[44px] bg-[#1d1d1e] items-center "}>
          <div className={"w-full container m-auto flex md:justify-between justify-end"}>
            <div className={"flex space-x-8 md:flex hidden"}>
              <Link href={"https://shop.pirveli.com"}>
                <span className={"text-sm text-[#ffffffb3] cursor-pointer aveSofRegular"}>მაღაზია</span>
              </Link>
              <Link href={"https://medical.pirveli.com"}>
                <span className={"text-sm text-[#ffffffb3] cursor-pointer aveSofRegular"}>მედიქალი</span>
              </Link>
              <Link href={"https://vouchers.pirveli.com"}>
                <span className={"text-sm text-[#ffffffb3] cursor-pointer aveSofRegular"}>ვაუჩერები</span>
              </Link>

              <Link href={"https://win.pirveli.com"}>
                <span className={"text-sm text-[#ffffffb3] cursor-pointer aveSofRegular"}>გათამაშება</span>
              </Link>

              <Link href={"https://www.game.pirveli.com"}>
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
              <p className={"text-sm text-[white] md:mr-8 ml-[5px] capitalize md:after:content-[''] md:after:h-[20px] md:after:bg-[#ffffffb3] md:after:rounded-[2px] md:after:ml-4 md:after:absolute md:after:w-[1px] after:text-red-500 aveSofRegular"}>
                {userInfo?.accountDetail?.amountOfPoint?.amountOfPoints}
              </p>
              <div className={"cursor-pointer md:flex hidden"}>
                <img className={"mr-[11px]"} src={ICONS.geoFlag.src} alt={"geo flag"}/>
                <Image src={ICONS.arrowDown} alt={"arrow down"}/>
              </div>
              {/*<p className={"text-sm text-[#ffffffb3] mr-8 capitalize aveSofRegular"}>English</p>*/}
            </div>
          </div>
        </div>
        <header className={"container w-full m-auto sticky top-[0px] z-20"}>
          <div
              className={"flex xl:gap-[30px] gap-4 justify-between md:h-[100px]  w-full items-center bg-[#EDEEEF] py-3"}>
            <Link href={"/"}>
              <div className={"xl:min-w-[312px] min-w-[250px]"}>
                <Image src={IMAGES.logo} alt={"company logo"} width={175} height={75}/>
              </div>
            </Link>

            <div className={"borders w-full grid grid-cols-2 gap-[30px] relative"}>
              <div/>
              <div className={"md:flex hidden justify-end"}>
                <div
                    onClick={()=>Router.push('/')}
                    className={"group min-w-[60px] h-[60px] mr-5 relative flex  items-center justify-center rounded-[50%] py-[5px] cursor-pointer"}
                    style={{
                      transition: "0.5s",
                      backgroundColor: "#" + userInfo?.avatar?.code
                    }}>

                  <Image src={getChosenAvatar()} quality={100} alt={"avatar"}
                         width={60} height={60}
                         style={{objectFit: "cover", height: "100%", width: "auto"}}/>
                </div>
              </div>

              <div className={"flex md:hidden justify-end "}>
                <div className={"flex justify-center items-center h-[36px] w-[36px]"}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_4361_5172)">
                      <path d="M4 8H20" stroke="#383838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 16H20" stroke="#383838" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_4361_5172">
                        <rect width="24" height="24" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </header>

      </>
  )
}

export default Header;
