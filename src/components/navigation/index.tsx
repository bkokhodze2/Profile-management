import React, {useEffect, useRef, useState} from "react"
// @ts-ignore
import {ICONS, IMAGES} from "public/images";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import axios from "axios";
// @ts-ignore
import Lari from "/public/images/icons/lari";
import {useDispatch, useSelector} from "react-redux";
import {getUserInfo} from "../slices/userSlice";
import Dashboard from "../../../public/images/icons/nav/navDashboard";
import Points from "../../../public/images/icons/nav/navPoints";
import User from "../../../public/images/icons/nav/navUser";
import History from "../../../public/images/icons/nav/navHistory";
import Tickets from "../../../public/images/icons/nav/navTickets";
import Cards from "../../../public/images/icons/nav/navCards";
import Logout from "../../../public/images/icons/nav/navLogout";

const Navigation: React.FC = () => {
  const baseApi = process.env.baseApi;
  const basePath = process.env.basePath;
  const Router = useRouter();
  const dispatch = useDispatch();
  const userInfo = useSelector((state: any) => state.user.userInfo);

  // useEffect(() => {
  //   if (!userInfo) {
  //     // @ts-ignore
  //     dispatch(getUserInfo())
  //   }
  //
  //
  // }, [])

  // const logOut = () => {
  //   typeof window !== 'undefined' && window.open("https://auth.pirveli.ge/realms/xracoon-demo/protocol/openid-connect/logout", '_self');
  // }

  // const logOut = () => {
  //   //  axios.post(`https://profile.pirveli.ge/logout`).then((res) => {
  //   //   console.log("rees", res)
  //   // })
  //   // typeof window !== 'undefined' && window.open("https://auth.pirveli.ge/realms/xracoon-demo/protocol/openid-connect/logout", '_self');
  //
  //   axios.get(`https://auth.pirveli.ge/realms/xracoon-demo/protocol/openid-connect/logout?redirect_uri=https://pirveli.pirveli.ge`).then((res) => {
  //   })
  // }


  return (
      <>
        <div
            className={"md:flex hidden sticky top-[126px] flex-col bg-[white] h-min rounded-xl xl:min-w-[312px] min-w-[250px] pt-[44px] pb-[32px] xl:pr-[32px] pr-2 space-y-5"}>

          <Link href={"/"}>
            <div className={"group w-full flex items-center h-[24px] xl:pl-[35px] pl-4"}
                 style={{
                   borderLeft: Router.pathname === "/" ? "2px solid #DB0060" : "2px solid transparent"
                 }}
            >
              <Dashboard
                  color={Router.pathname === "/" ? "#DB0060" : "#383838"}/>
              <p className={"ml-[14px] text-sm group-hover:!text-red"}
                 style={{
                   transition: "0.2s",
                   color: Router.pathname === "/" ? "#DB0060" : "#383838"
                 }}
              >დეშბორდი</p>
            </div>
          </Link>

          <Link href={"/points"}>
            <div className={"group w-full flex justify-between items-center h-[24px] xl:pl-[35px] pl-4"}
                 style={{
                   borderLeft: Router.pathname === "/points" ? "2px solid #DB0060" : "2px solid transparent"
                 }}
            >
              <div className={"flex items-center"}>
                <Points
                    color={Router.pathname === "/points" ? "#DB0060" : "#383838"}/>
                <p className={"ml-[14px] text-sm group-hover:!text-red"}
                   style={{
                     transition: "0.2s",
                     color: Router.pathname === "/points" ? "#DB0060" : "#383838"
                   }}
                >ჩემი მონეტები</p>
              </div>
              {userInfo?.accountDetail?.amountOfPoint?.amountOfPoints &&
									<div className={"h-full flex justify-center px-2 bg-[#38383833] rounded-[20px] items-center"}>
										<p className={"text-[12px] text-dark"}>{userInfo?.accountDetail?.amountOfPoint?.amountOfPoints}</p>
									</div>}
            </div>
          </Link>

          <Link href={"/profile-edit"}>
            <div className={"group w-full flex items-center h-[24px] xl:pl-[35px] pl-4"}
                 style={{
                   borderLeft: Router.pathname === "/profile-edit" ? "2px solid #DB0060" : "2px solid transparent"
                 }}
            >
              <User
                  color={Router.pathname === "/profile-edit" ? "#DB0060" : "#383838"}/>
              <p className={"ml-[14px] text-sm group-hover:!text-red"}
                 style={{
                   transition: "0.2s",
                   color: Router.pathname === "/profile-edit" ? "#DB0060" : "#383838"
                 }}
              >რედაქტირება</p>
            </div>
          </Link>

          <Link href={"/orders"}>
            <div className={"group w-full flex items-center h-[24px] xl:pl-[35px] pl-4"}
                 style={{
                   borderLeft: Router.pathname === "/orders" ? "2px solid #DB0060" : "2px solid transparent"
                 }}
            >
              <History
                  color={Router.pathname === "/orders" ? "#DB0060" : "#383838"}/>
              <p className={"ml-[14px] text-sm group-hover:!text-red"}
                 style={{
                   transition: "0.2s",
                   color: Router.pathname === "/orders" ? "#DB0060" : "#383838"
                 }}
              >ჩემი შეკვეთები</p>
            </div>
          </Link>

          <Link href={"/tickets"}>
            <div className={"group w-full flex items-center justify-between h-[24px] xl:pl-[35px] pl-4"}
                 style={{
                   borderLeft: Router.pathname === "/tickets" ? "2px solid #DB0060" : "2px solid transparent"
                 }}
            >
              <div className={"flex items-center"}>
                <Tickets
                    color={Router.pathname === "/tickets" ? "#DB0060" : "#383838"}/>
                <p className={"ml-[14px] text-sm group-hover:!text-red"}
                   style={{
                     transition: "0.2s",
                     color: Router.pathname === "/tickets" ? "#DB0060" : "#383838"
                   }}
                >ჩემი ბილეთები</p>
              </div>
              <div
                  className={"h-full flex justify-center px-2 bg-[#7B92DC] rounded-[20px] min-w-[25px] items-center"}>
                <p className={"text-[12px] text-[white]"}>4</p>
              </div>
            </div>
          </Link>

          <Link href={"/cards"}>
            <div className={"group w-full flex items-center h-[24px] xl:pl-[35px] pl-4"}
                 style={{
                   borderLeft: Router.pathname === "/cards" ? "2px solid #DB0060" : "2px solid transparent"
                 }}
            >
              <Cards
                  color={Router.pathname === "/cards" ? "#DB0060" : "#383838"}/>
              <p className={"ml-[14px] text-sm group-hover:!text-red"}
                 style={{
                   transition: "0.2s",
                   color: Router.pathname === "/cards" ? "#DB0060" : "#383838"
                 }}
              >ჩემი ბარათები</p>
            </div>
          </Link>

          <Link href={"/medical-card"}>
            <div className={"group w-full flex items-center h-[24px] xl:pl-[35px] pl-4"}
                 style={{
                   borderLeft: Router.pathname === "/medical-card" ? "2px solid #DB0060" : "2px solid transparent"
                 }}
            >
              <Cards
                  color={Router.pathname === "/medical-card" ? "#DB0060" : "#383838"}/>
              <p className={"ml-[14px] text-sm group-hover:!text-red"}
                 style={{
                   transition: "0.2s",
                   color: Router.pathname === "/medical-card" ? "#DB0060" : "#383838"
                 }}
              >ჯანდაცვის ბარათები</p>
            </div>
          </Link>

          <div className={"group w-full flex items-center h-[24px] xl:pl-[35px] pl-4 !mt-[40px] cursor-pointer"}
              // onClick={() => logOut()}
          >
            <Logout
                color={"#DB0060"}/>
            <div className={"ml-[14px] text-sm group-hover:!text-red"}
                 style={{
                   transition: "0.2s",
                   color: "#DB0060"
                 }}
            >
              <form action="https://profile.pirveli.com/logout" method="post">
                <button type={"submit"}>გასვლა</button>
              </form>
            </div>
          </div>

        </div>
      </>
  )
}

export default Navigation;
