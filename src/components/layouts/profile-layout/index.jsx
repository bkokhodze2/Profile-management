import Head from 'next/head'
import Header from "../../header";
import React from "react";
import Image from "next/image";
// @ts-ignore
import {ICONS,IMAGES} from "public/images";
// @ts-ignore
import Dashboard from "/public/images/icons/nav/navDashboard";
import Points from "/public/images/icons/nav/navPoints";
import {useRouter} from "next/router";
import User from "../../../../public/images/icons/nav/navUser";
import History from "../../../../public/images/icons/nav/navHistory";
import Tickets from "../../../../public/images/icons/nav/navTickets";
import Cards from "../../../../public/images/icons/nav/navCards";
import Logout from "../../../../public/images/icons/nav/navLogout";
import Link from "next/link";

export default function Layout({children}){
	const Router = useRouter();
	return (
			<>
				<Head>
					<title>Layouts Example</title>
				</Head>
				<Header/>
				<main style={{}}>
					<div className={"flex gap-[30px] pt-[32px] container m-auto h-full min-h-[calc(100vh-144px)]"}>
						<div
								className={"flex sticky top-[100px] flex-col bg-[white] h-min rounded-xl min-w-[312px] pt-[44px] pb-[32px] pr-[32px] space-y-5"}>

							<Link href={"/"}>
								<div className={"group w-full flex items-center h-[24px] pl-[35px]"}
								     style={{
									     borderLeft:Router.pathname === "/" ? "2px solid #DB0060" : "2px solid transparent"
								     }}
								>
									<Dashboard
											color={Router.pathname === "/" ? "#DB0060" : "#383838"}/>
									<p className={"ml-[14px] text-sm group-hover:!text-red"}
									   style={{
										   transition:"0.2s",
										   color:Router.pathname === "/" ? "#DB0060" : "#383838"
									   }}
									>დეშბორდი</p>
								</div>
							</Link>

							<Link href={"/points"}>
								<div className={"group w-full flex justify-between items-center h-[24px] pl-[35px]"}
								     style={{
									     borderLeft:Router.pathname === "/points" ? "2px solid #DB0060" : "2px solid transparent"
								     }}
								>
									<div className={"flex items-center"}>
										<Points
												color={Router.pathname === "/points" ? "#DB0060" : "#383838"}/>
										<p className={"ml-[14px] text-sm group-hover:!text-red"}
										   style={{
											   transition:"0.2s",
											   color:Router.pathname === "/points" ? "#DB0060" : "#383838"
										   }}
										>ჩემი ქულები</p>
									</div>
									<div className={"h-full flex justify-center px-2 bg-[#38383833] rounded-[20px] items-center"}>
										<p className={"text-[12px] text-dark"}>1292</p>
									</div>
								</div>
							</Link>

							<Link href={"/edit"}>
								<div className={"group w-full flex items-center h-[24px] pl-[35px]"}
								     style={{
									     borderLeft:Router.pathname === "/edit" ? "2px solid #DB0060" : "2px solid transparent"
								     }}
								>
									<User
											color={Router.pathname === "/edit" ? "#DB0060" : "#383838"}/>
									<p className={"ml-[14px] text-sm group-hover:!text-red"}
									   style={{
										   transition:"0.2s",
										   color:Router.pathname === "/edit" ? "#DB0060" : "#383838"
									   }}
									>რედაქტირება</p>
								</div>
							</Link>

							<Link href={"/orders"}>
								<div className={"group w-full flex items-center h-[24px] pl-[35px]"}
								     style={{
									     borderLeft:Router.pathname === "/orders" ? "2px solid #DB0060" : "2px solid transparent"
								     }}
								>
									<History
											color={Router.pathname === "/orders" ? "#DB0060" : "#383838"}/>
									<p className={"ml-[14px] text-sm group-hover:!text-red"}
									   style={{
										   transition:"0.2s",
										   color:Router.pathname === "/orders" ? "#DB0060" : "#383838"
									   }}
									>ჩემი შეკვეთები</p>
								</div>
							</Link>

							<Link href={"/tickets"}>
								<div className={"group w-full flex items-center justify-between h-[24px] pl-[35px]"}
								     style={{
									     borderLeft:Router.pathname === "/tickets" ? "2px solid #DB0060" : "2px solid transparent"
								     }}
								>
									<div className={"flex items-center"}>
										<Tickets
												color={Router.pathname === "/tickets" ? "#DB0060" : "#383838"}/>
										<p className={"ml-[14px] text-sm group-hover:!text-red"}
										   style={{
											   transition:"0.2s",
											   color:Router.pathname === "/tickets" ? "#DB0060" : "#383838"
										   }}
										>ჩემი ბილეთები</p>
									</div>
									<div
											className={"h-full flex justify-center px-2 bg-[#7B92DC] rounded-[20px] min-w-[25px] items-center"}>
										<p className={"text-[12px] text-[white]"}>2</p>
									</div>
								</div>
							</Link>

							<Link href={"/cards"}>
								<div className={"group w-full flex items-center h-[24px] pl-[35px]"}
								     style={{
									     borderLeft:Router.pathname === "/cards" ? "2px solid #DB0060" : "2px solid transparent"
								     }}
								>
									<Cards
											color={Router.pathname === "/cards" ? "#DB0060" : "#383838"}/>
									<p className={"ml-[14px] text-sm group-hover:!text-red"}
									   style={{
										   transition:"0.2s",
										   color:Router.pathname === "/cards" ? "#DB0060" : "#383838"
									   }}
									>ჩემი ბარათები</p>
								</div>
							</Link>

							<div className={"group w-full flex items-center h-[24px] pl-[35px] !mt-[40px] cursor-pointer"}
							>
								<Logout
										color={"#DB0060"}/>
								<p className={"ml-[14px] text-sm group-hover:!text-red"}
								   style={{
									   transition:"0.2s",
									   color:"#DB0060"
								   }}
								>გასვლა</p>
							</div>

						</div>
						<div className={"w-full"}>
							{children}
						</div>
					</div>
				</main>
			</>
	)
}