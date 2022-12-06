import Head from 'next/head'
import Header from "../../header";
import React,{useEffect} from "react";
import {Provider} from "react-redux";
import store from "/src/components/store"
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
import axios from 'axios';
// import {useDispatch,useSelector} from "react-redux";
// import {getUserInfo} from "../../slices/userSlice";


export default function Layout({children}){
	const Router = useRouter();
	// const dispatch = useDispatch();
	const baseApi = process.env.baseApi;
	// const userInfo = useSelector((state) => state.user.userInfo);

	axios.interceptors.request.use((config) => {
		config.headers = {
			...config.headers,
			Authorization:`Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzRUNseXdhVnNxOURBMU1oMElNLTVFTUNsRU5WM1FMTnhuNlh1bDJoOVBnIn0.eyJleHAiOjE2NzAzNDg3OTksImlhdCI6MTY3MDMxMjg1NCwiYXV0aF90aW1lIjoxNjcwMzEyNzk5LCJqdGkiOiI3MzM1MzdkZC0yNmIwLTQ5YzEtYjJmYS0wMzdmNjcxZDhjYTYiLCJpc3MiOiJodHRwczovL2F1dGgucGlydmVsaS5nZS9yZWFsbXMveHJhY29vbi1kZW1vIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjIzZTNjZmYzLTA1MDktNGVmMS04YzI3LWYzYzJkYzk0ZjRlNCIsInR5cCI6IkJlYXJlciIsImF6cCI6ImNzLWNhcnQiLCJzZXNzaW9uX3N0YXRlIjoiOGI3OGM0NmYtMTE1Ni00ODIzLTg0MTctMDFhNDYzNmE1YWY1IiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLXhyYWNvb24tZGVtbyIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiI4Yjc4YzQ2Zi0xMTU2LTQ4MjMtODQxNy0wMWE0NjM2YTVhZjUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInVzZXJfaWQiOiIyM2UzY2ZmMy0wNTA5LTRlZjEtOGMyNy1mM2MyZGM5NGY0ZTQiLCJuYW1lIjoiaXJha2xpIHphbmV0dHUiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJkc2FkYUBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoiaXJha2xpIiwiZmFtaWx5X25hbWUiOiJ6YW5ldHR1IiwiZW1haWwiOiJkc2FkYUBnbWFpbC5jb20ifQ.GVONoVJlfVikPkStwdnqivSvXekI7qRvf8QEFXMmB6qdwvUyK-qsj4HeIK0eSRHF9iA4D5DuVSy89Of5rGxc7SMCEwqS_yaFlCcxj-fqsS5ZsYzCjSumwgKgC8_9kJytaVic_kPrvnScyIVRv7RgfrmiJu29PSFeC7UM2CzB8MItGIapuQj_KzQlsh1UQM7UscoyxO_XsSjCyhMrljiAZJfQ9R8_okJgHI3CQ_PiQ1WEkyAtZP9mMPzrLF6FojRtE4p8sv4_pPzBmWtR0kl8Sya-Z1rn2hRYAnOGzQr99LoMcsulpCNTEVBIr7U5TuYnPYm2fav7X2-pKRd_jtMotQ`
		};

		return config;
	});

	// useEffect(() => {
	// 	if ( !userInfo) {
	// 		dispatch(getUserInfo())
	// 	}
	// },[])

	useEffect(() => {
		axios.get(`${baseApi}/user/user/detail-info`).then((res) => {
			console.log("resss",res)
		})
	},[])

	return (
			<Provider store={store}>
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

							<Link href={"/profile-edit"}>
								<div className={"group w-full flex items-center h-[24px] pl-[35px]"}
								     style={{
									     borderLeft:Router.pathname === "/profile-edit" ? "2px solid #DB0060" : "2px solid transparent"
								     }}
								>
									<User
											color={Router.pathname === "/profile-edit" ? "#DB0060" : "#383838"}/>
									<p className={"ml-[14px] text-sm group-hover:!text-red"}
									   style={{
										   transition:"0.2s",
										   color:Router.pathname === "/profile-edit" ? "#DB0060" : "#383838"
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
			</Provider>
	)
}