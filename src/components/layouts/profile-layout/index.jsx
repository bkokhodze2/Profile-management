import Head from 'next/head'
import Header from "../../header";
import React,{useEffect} from "react";
import {Provider,useDispatch,useSelector} from "react-redux";
import store from "/src/components/store"
import Image from "next/image";
import {useRouter} from "next/router";
import Link from "next/link";
import axios from 'axios';
import Navigation from "../../navigation";
import Dashboard from "../../../../public/images/icons/nav/navDashboard";
import Points from "../../../../public/images/icons/nav/navPoints";
import History from "../../../../public/images/icons/nav/navHistory";
import Tickets from "../../../../public/images/icons/nav/navTickets";
import Cards from "../../../../public/images/icons/nav/navCards";


export default function Layout({children}){
	const baseApi = process.env.baseApi;
	const Router = useRouter();

	// axios.interceptors.request.use((config) => {
	// 	config.headers = {
	// 		...config.headers,
	//
	// 		'Access-Control-Allow-Origin':'*',
	// 		'Content-Type':'application/json',
	//
	// 		Authorization:`Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzRUNseXdhVnNxOURBMU1oMElNLTVFTUNsRU5WM1FMTnhuNlh1bDJoOVBnIn0.eyJleHAiOjE2NzA5NTQwOTAsImlhdCI6MTY3MDkxODEwOSwiYXV0aF90aW1lIjoxNjcwOTE4MDkwLCJqdGkiOiJmMTlkMzliNi04NjQ2LTQ1ODItYmJjMS00ZGFkZmUyMGE5YjQiLCJpc3MiOiJodHRwczovL2F1dGgucGlydmVsaS5nZS9yZWFsbXMveHJhY29vbi1kZW1vIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImQ0ZGFiZTg2LTE1OWEtNDg1NC1hMzc1LTcxZjFiYzViMjlhMSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImNzLWNhcnQiLCJzZXNzaW9uX3N0YXRlIjoiMDVjYjAzMTYtMjZiMC00NDljLWFiZmQtNzM3MTA3OTU5NmI3IiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLXhyYWNvb24tZGVtbyIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiIwNWNiMDMxNi0yNmIwLTQ0OWMtYWJmZC03MzcxMDc5NTk2YjciLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInVzZXJfaWQiOiJkNGRhYmU4Ni0xNTlhLTQ4NTQtYTM3NS03MWYxYmM1YjI5YTEiLCJuYW1lIjoia29tZXRhIGtvbWV0YSIsInByZWZlcnJlZF91c2VybmFtZSI6ImtvbWV0YUBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoia29tZXRhIiwiZmFtaWx5X25hbWUiOiJrb21ldGEiLCJlbWFpbCI6ImtvbWV0YUBnbWFpbC5jb20ifQ.etXAw-LEDY9OdodK8VPa4A5WD7tb7gQclXCZeoWtqafiX_keWZyMQpj3J95mFf4Wa8Ruise6nUe8oIFYmi-dOUoq_-rWxM0NxPHjM8-Wdn37PpLrr3Dy4yEIHf46H6xettg9zRDMDG_CqE4eq1Qevbo01RBItq3jtgTDYNTVo6OtyKmJ3c-b9HWlKLVwdDebqYcrQGU0GgimIMWIm2ukFatB6IPi7ZWvFm15VYqX7dxle47L39t9gtND2dPluyYgPo4JczcCuS6u4_O7RnehXleBQVl0EUQaRvlHgyrM2Rg4DvpXqZiax2T7EWuaH7Px4q2dB-gD_OT0JhSwDCuwFQ`
	// 	};
	//
	// 	return config;
	// });

	useEffect(() => {
		axios.get(`${baseApi}/user/user/detail-info`).then((res) => {
		})
	},[])

	return (
			<Provider store={store}>
				<Head>
					<title>Layouts Example</title>
				</Head>
				<Header/>

				<main style={{}}>
					<div
							className={"flex xl:gap-[30px] gap-4 md:pt-[32px] pt-3 container m-auto h-full min-h-[calc(100vh-144px)]"}>
						<Navigation/>
						<div className={"w-full"}>
							{children}
						</div>
					</div>
				</main>

				<div className={"bar h-[83px] bg-[white] w-full block md:hidden fixed bottom-0"}
				     style={{
					     zIndex:999
				     }}
				>
					<div className={"grid grid-cols-5 pt-3"}>
						<div >
							<div className={"flex flex-col items-center justify-between"}

							>
								<Dashboard
										color={Router.pathname === "/" ? "#DB0060" : "#383838"}/>
								<p className={"mt-[7px] text-[10px] aveSofMedium"}
								   style={{
									   color:"#DB0060"
								   }}
								>კაბინეტი</p>
							</div>
						</div>

						<div className={"flex flex-col items-center justify-between pt-0.5"}

						>
							<Points
									color={Router.pathname === "/points" ? "#DB0060" : "#383838"}/>
							<p className={"mt-[7px] text-[10px] text-[#383838] aveSofMedium"}
							   style={{
								   color:"#383838"
							   }}
							>ქულები</p>
						</div>
						<div >
							<div className={"flex flex-col items-center justify-between"}>
								<History
									color={Router.pathname === "/orders" ? "#DB0060" : "#383838"}/>
								<p
										style={{
											color:"#383838"
										}}
										className={"mt-[7px] text-[10px] text-[#383838] aveSofMedium"}
								>შეკვეთები</p>
							</div>
						</div>
						<div>
							<div className={"flex flex-col items-center justify-between"}>
								<Tickets
										color={Router.pathname === "/tickets" ? "#DB0060" : "#383838"}/>
								<p
										style={{
											color:"#383838"
										}}
										className={"mt-[7px] text-[10px] text-[#383838] aveSofMedium"}
								>ბილეთები</p>
							</div>
						</div>
						<div
								className={"flex flex-col items-center justify-between"}>
							<Cards
									color={Router.pathname === "/cards" ? "#DB0060" : "#383838"}/>
							<p className={"mt-[7px] text-[10px] aveSofMedium"}
							   style={{
								   color:"#383838"
							   }}
							>ბარათები</p>
						</div>
					</div>
				</div>
			</Provider>
	)
}