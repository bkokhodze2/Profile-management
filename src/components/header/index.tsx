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
import getChosenAvatar from "../../utils/getChosenAvatar";
import {Dropdown} from "antd";
import {logout} from "../../../public/images/icons";
import Liderboard from "../../../public/images/icons/dropdown/Liderboard";
import Tickets from "../../../public/images/icons/dropdown/Tickets";
import Settings from "../../../public/images/icons/dropdown/Settings";
import Logout from "../../../public/images/icons/dropdown/Logout";
import Vouchers from "../../../public/images/icons/dropdown/Vouchers";

const Header: React.FC = () => {
  const baseApi = process.env.baseApi;
  const dispatch = useDispatch();
  const Router = useRouter();
  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);
  const userInfo = useSelector((state: any) => state.user.userInfo);

  useEffect(() => {
    if (!userInfo) {
      // @ts-ignore
      dispatch(getUserInfo())
    }
  }, [])

  const navTo = (path: string) => {
    Router.push(path);
  }

  // const dropdownJsx = () => {
  //   return <div
  //       className={"flex rounded-xl flex-col w-[258px] min-h-[250px] bg-[white] px-6 py-5"}>
  //     <p className={"text-[#383838] text-base text-center leading-[18px] aveSofBold"}>{userInfo?.details?.firstName} {userInfo?.details?.lastName}</p>
  //
  //     <div className={"w-full flex items-center justify-between h-8 bg-[#F7F9FB] rounded-[100px] px-5 mt-5"}>
  //       <p className={"text-[12px] text-[#383838] aveSofRegular"}>ბალანსი</p>
  //       <div className={"flex items-center"}>
  //         <p className={"text-[14px] text-[#383838]"}>{userInfo?.accountDetail?.amountOfGel?.amountOfGel}</p>
  //         <Lari color={"#383838"} classes={"ml-1"}/>
  //       </div>
  //     </div>
  //
  //     <Link href={"https://profile.pirveli.com/"} passHref={true} legacyBehavior>
  //       <a>
  //         <div className={"flex mt-5 cursor-pointer items-center"}
  //         >
  //           <Image src={ICONS.liderboard} alt={"leaderboard"}/>
  //           <p className={"text-[#383838] text-[14px] ml-2 aveSofRegular"}>ლიდერბორდი</p>
  //         </div>
  //       </a>
  //     </Link>
  //
  //     <Link href={"https://profile.pirveli.com/tickets/"} passHref={true} legacyBehavior>
  //       <a>
  //         <div className={"flex mt-5  mt-5 mb-[17px] cursor-pointer"}
  //         >
  //           <Image src={ICONS.tickets} alt={"tickets"}/>
  //           <p className={"text-[#383838] text-[14px] ml-2 aveSofRegular"}>ჩემი ბილეთები</p>
  //         </div>
  //       </a>
  //     </Link>
  //
  //
  //     <div className={"w-full h-[1px] bg-[#D9D9D94D]"}/>
  //     <Link href={"https://profile.pirveli.com/orders/"} passHref={true} legacyBehavior>
  //       <a>
  //         <div className={"flex justify-between mt-5 mb-[17px] cursor-pointer"}
  //         >
  //           <div className={"flex"}>
  //             <Image src={ICONS.order} alt={"my vouchers"}/>
  //             <p className={"text-[#383838] text-[14px] ml-2 aveSofRegular"}>ჩემი ვაუჩერები</p>
  //           </div>
  //           <div
  //               className={"flex items-center justify-center  h-6 min-w-[24px] min-h-[24px] rounded-[100px] bg-[#FF5440] px-2"}>
  //             <span className={"text-[white] aveSofRegular text-[12px]"}>2</span>
  //           </div>
  //         </div>
  //       </a>
  //     </Link>
  //
  //     <div className={"w-full h-[1px] bg-[#D9D9D94D]"}/>
  //
  //     <Link href={"https://profile.pirveli.com/profile-edit/"} passHref={true} legacyBehavior>
  //       <a>
  //         <div className={"flex mt-5 cursor-pointer"}
  //         >
  //           <Image src={ICONS.settings} alt={"settings"}/>
  //           <p className={"text-[#383838] text-[14px] ml-2 aveSofRegular"}>რედაქტირება</p>
  //         </div>
  //       </a>
  //     </Link>
  //
  //     <div className={"flex mt-5 cursor-pointer"}>
  //       <Image src={ICONS.logout} alt={"logout"}/>
  //       <form className={"ml-2"} action="https://vouchers.pirveli.com/logout" method="post">
  //         <button className={"text-[#383838] text-[14px]"} type={"submit"}>გასვლა</button>
  //       </form>
  //     </div>
  //
  //   </div>
  // }

  const dropdownJsx = () => {
    return <div
        className={"flex rounded-xl flex-col w-[258px] min-h-[250px] bg-[white] px-6 py-5"}>
      <p className={"text-[#383838] text-base text-center leading-[18px] avenirBold"}>{userInfo?.details?.firstName} {userInfo?.details?.lastName}</p>
      <div className={"w-full flex items-center justify-between h-8 bg-[#F7F9FB] rounded-[100px] px-5 mt-5"}>
        <p className={"text-[12px] text-[#383838] aveSofRegular"}>ბალანსი</p>
        <div className={"flex items-center"}>
          <p className={"text-[14px] text-[#383838]"}>{userInfo?.accountDetail?.amountOfGel?.amountOfGel}</p>
          <Lari color={"#383838"} classes={"ml-1"}/>
        </div>
      </div>

      <Link href={"https://profile.pirveli.com/profile-edit/"} passHref={true} legacyBehavior={true}>
        <a className={"mt-5 "}>
          <div className={"group flex cursor-pointer"}
          >
            <Settings classes={"group-hover:stroke-brand stroke-[#383838]"}/>
            <p className={"text-[#383838] group-hover:text-brand text-[14px] ml-2 avenirMedium"}>პროფაილი</p>
          </div>
        </a>
      </Link>

      <Link href={"https://profile.pirveli.com/"} passHref={true} legacyBehavior={true}>
        <a className={"mt-5"}>
          <div className={"group flex cursor-pointer items-center"}
          >
            <Liderboard classes={"group-hover:stroke-brand stroke-[#383838]"}/>
            <p className={"text-[#383838] group-hover:text-brand text-[14px] ml-2 avenirMedium"}>ლიდერბორდი</p>
          </div>
        </a>
      </Link>

      <Link href={"https://profile.pirveli.com/tickets/"} passHref={true} legacyBehavior={true}>
        <a className={"mt-5 mb-[17px]"}>
          <div className={"group flex cursor-pointer"}
          >
            <Tickets classes={"group-hover:stroke-brand stroke-[#383838]"}/>
            <p className={"text-[#383838] group-hover:text-brand text-[14px] ml-2 avenirMedium"}>ჩემი ბილეთები</p>
          </div>
        </a>
      </Link>

      <div className={"w-full h-[1px] bg-[#D9D9D94D]"}/>
      <Link href={"https://profile.pirveli.com/orders/"} passHref={true} legacyBehavior>
        <a className={"mt-5 mb-[17px] "}>
          <div className={"group flex justify-between cursor-pointer"}
          >
            <div className={"flex"}>
              <Vouchers classes={"group-hover:stroke-brand stroke-[#383838]"}/>
              <p className={"text-[#383838] group-hover:text-brand text-[14px] ml-2 aveSofRegular"}>ჩემი ვაუჩერები</p>
            </div>
            <div
                className={"flex items-center justify-center h-6 min-w-[24px] min-h-[24px] rounded-[100px] bg-[#FF5440] px-2"}>
              <span className={"text-[white] aveSofRegular text-[12px]"}>2</span>
            </div>
          </div>
        </a>
      </Link>

      <div className={"w-full h-[1px] bg-[#D9D9D94D]"}/>

      <div className={"group flex mt-5 cursor-pointer"}>
        <Logout classes={"group-hover:stroke-brand stroke-[#383838]"}/>
        <form className={"ml-2 avenirMedium"} action="https://profile.pirveli.com/logout" method="post">
          <button className={"text-[#383838] group-hover:text-brand text-[14px]"} type={"submit"}>გასვლა</button>
        </form>
      </div>

    </div>
  }


  return (
      <>
        <div className={"h-[40px] w-full flex items-center justify-center bg-[white]"}>
          <p>საიტი მუშაობს სატესტო რეჟიმში</p>
        </div>
        <div
            className={"hidden md:flex w-full sticky top-[0px] h-[44px] min-h-[44px] bg-[#1d1d1e] items-center z-[100]"}>
          <div className={"w-full h-full container m-auto flex justify-between"}>
            <div className={"flex space-x-8 items-center links"}>
              <Link href={"https://pirveli.com/"}>
                <div className={"relative h-full flex items-center group"}>
                <span
                    className={"text-sm text-[#ffffffb3] cursor-pointer aveSofRegular "}>მთავარი</span>
                  <div className={"absolute bottom-[0px] h-[3px] w-full rounded-t-[3px] group-hover:bg-[#db0060]"}/>
                </div>
              </Link>
              <Link href={"https://shop.pirveli.com/"}>
                <div className={"relative h-full flex items-center group"}>
                  <span
                      className={"text-sm text-[#ffffffb3] cursor-pointer aveSofRegular "}>მაღაზია</span>
                  <div className={"absolute bottom-[0px] h-[3px] w-full rounded-t-[3px] group-hover:bg-[#5db039]"}/>
                </div>
              </Link>
              <Link href={"https://medical.pirveli.com/"}>
                <div className={"relative h-full flex items-center group"}>
                  <span className={"text-sm text-[#ffffffb3] cursor-pointer aveSofRegular"}>ჯანდაცვა</span>
                  <div className={"absolute bottom-[0px] h-[3px] w-full rounded-t-[3px] group-hover:bg-[#ffbbb6]"}/>
                </div>
              </Link>
              <Link href={"https://vouchers.pirveli.com/"}>
                <div className={"relative h-full flex items-center group"}>
                  <span className={"text-sm text-[#ffffffb3] cursor-pointer aveSofRegular"}>ვაუჩერები</span>
                  <div className={"absolute bottom-[0px] h-[3px] w-full rounded-t-[3px] group-hover:bg-[#8338EC]"}/>
                </div>
              </Link>

              <a className={"h-full"} href={"http://s3.pirveli.com/v1/api/getFile?id=6555"} target={"_blank"}
                 rel="noopener noreferrer">
                <div className={"relative h-full flex items-center group"}>
                  <span className={"text-sm text-[#ffffffb3] cursor-pointer aveSofRegular"}>გათამაშება</span>
                  <div className={"absolute bottom-[0px] h-[3px] w-full rounded-t-[3px] group-hover:bg-[#db0060]"}/>
                </div>
              </a>

              <a className={"h-full"} href={"http://s3.pirveli.com/v1/api/getFile?id=6556"} target={"_blank"}
                 rel="noopener noreferrer">
                <div className={"relative h-full flex items-center group"}>
                  <span className={"text-sm text-[#ffffffb3] cursor-pointer aveSofRegular"}>გართობა</span>
                  <div className={"absolute bottom-[0px] h-[3px] w-full rounded-t-[3px] group-hover:bg-[#edc520]"}/>
                </div>
              </a>
            </div>

            <div className={"flex py-[12px]"}>
              <p className={"text-sm text-[white] mr-[7px] capitalize aveSofRegular"}>
                {userInfo?.accountDetail?.amountOfPoint?.amountOfPoints}</p>
              <Image
                  src={IMAGES.coin}
                  quality={100}
                  blurDataURL={IMAGES.placeholder.src}
                  loading={"lazy"}
                  width={20}
                  height={20}
                  alt={"coin icon"}
              />
              {/*<div className={"flex cursor-pointer items-center"}>*/}
              {/*  <img className={"mr-[12px] w-[24px] h-[18px]"} src={ICONS.geoFlag.src} alt={"geo flag"}/>*/}
              {/*  <Image src={ICONS.arrowDown} alt={"arrow down"}/>*/}
              {/*</div>*/}
              {/*<p className={"text-sm text-[#ffffffb3] mr-8 capitalize aveSofRegular"}>English</p>*/}
            </div>
          </div>
        </div>

        <header className={"container w-full m-auto sticky md:top-[44px] top-[0px] z-20"}>
          <div
              className={"flex xl:gap-[30px] gap-4 justify-between md:h-[80px]  w-full items-center bg-[#EDEEEF] py-4"}>
            <Link href={"/"}>
              <div className={"xl:min-w-[312px] min-w-[250px] max-h-[75px]"}>
                <Image src={IMAGES.logo} alt={"company logo"} width={175} height={75}/>
              </div>
            </Link>

            <div className={"borders w-full grid grid-cols-2 gap-[30px] relative"}>
              <div/>
              <div id={'dropdownPosition'} className={"flex justify-end"}>
                <Dropdown
                    placement="bottomLeft"
                    trigger={['click']}
                    onOpenChange={() => setIsOpenDropdown(!isOpenDropdown)}
                    open={isOpenDropdown}
                    arrow={true}
                    className={"cursor-pointer dropdownMenuJsx"}
                    dropdownRender={() => dropdownJsx()}
                    getPopupContainer={() => document.getElementById('dropdownPosition') as HTMLElement}
                >
                  <div className={"flex items-center h-[46px]"}>
                    {/*onClick={() => navToProfile()}*/}
                    <div
                        className={"group min-w-[46px] h-[46px] relative flex  items-center justify-center rounded-xl py-[5px] cursor-pointer"}
                        style={{
                          transition: "0.5s",
                          backgroundColor: "#" + userInfo?.avatar?.code
                        }}>

                      <img src={getChosenAvatar(userInfo?.avatar?.path)}
                           alt={"avatar"}
                           style={{objectFit: "cover", height: "100%", width: "auto"}}/>
                    </div>

                    <div className={"h-full flex items-center relative pl-3"}
                    >
                      <svg style={{
                        transition: '0.5s',
                        transform: isOpenDropdown ? 'rotate(0deg)' : 'rotate(180deg)'
                      }}
                           width="8" height="5" viewBox="0 0 8 5" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.7" d="M0.75 4.25L4 0.75L7.25 4.25" stroke="#383838" strokeWidth="1.5"
                              strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </Dropdown>
              </div>

              {/*<div className={"md:flex hidden justify-end"}>*/}
              {/*  <div*/}
              {/*      onClick={() => Router.push('/')}*/}
              {/*      className={"rounded-xl group min-w-[46px] h-[46px] relative flex items-center justify-center py-[5px] cursor-pointer cursor-pointer"}*/}
              {/*      style={{*/}
              {/*        transition: "0.5s",*/}
              {/*        backgroundColor: userInfo?.avatar?.code ? "#" + userInfo?.avatar?.code : "#DB0060"*/}
              {/*      }}>*/}
              {/*    <img src={getChosenAvatar(userInfo?.avatar?.path)}*/}
              {/*         alt={"avatar"}*/}
              {/*         style={{objectFit: "cover", height: "100%", width: "auto"}}/>*/}

              {/*  </div>*/}
              {/*</div>*/}

              <div className={"flex md:hidden justify-end"}>
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
