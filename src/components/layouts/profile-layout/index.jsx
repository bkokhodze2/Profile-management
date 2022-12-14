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
	// 		// Authorization:`Bearer
	// eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzRUNseXdhVnNxOURBMU1oMElNLTVFTUNsRU5WM1FMTnhuNlh1bDJoOVBnIn0.eyJleHAiOjE2NzEwNTI0MDAsImlhdCI6MTY3MTAxNjQzMCwiYXV0aF90aW1lIjoxNjcxMDE2NDAwLCJqdGkiOiI4YjFkYjVhNy0yNTI4LTQ2YWQtODhmYS0zZmI4MDc1NTBmNzQiLCJpc3MiOiJodHRwczovL2F1dGgucGlydmVsaS5nZS9yZWFsbXMveHJhY29vbi1kZW1vIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjhmMzIyYTU0LWRhODYtNDNkOS05NmRhLTdiZTA4ZDRjYTA1YiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImNzLWNhcnQiLCJzZXNzaW9uX3N0YXRlIjoiYTViMTRjMjgtMjQwNi00YmQ0LWFmNWQtMzA3MDcwMmFjNDhlIiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLXhyYWNvb24tZGVtbyIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiJhNWIxNGMyOC0yNDA2LTRiZDQtYWY1ZC0zMDcwNzAyYWM0OGUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInVzZXJfaWQiOiI4ZjMyMmE1NC1kYTg2LTQzZDktOTZkYS03YmUwOGQ0Y2EwNWIiLCJuYW1lIjoibmF0aWEgbmF0aWEiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJuYXRpYTFAZ21haWwuY29tIiwiZ2l2ZW5fbmFtZSI6Im5hdGlhIiwiZmFtaWx5X25hbWUiOiJuYXRpYSIsImVtYWlsIjoibmF0aWExQGdtYWlsLmNvbSJ9.A2nNvJFF1RKgLSQewfQjJMrCENglTCtCprT1uXbeeYrMvtYtLvOH4Hpz--lg_5KwTmNJx4KveUok9pEa6AyBPJpbsmHLm5BMdJ41Lq4Sk563IQgd5K1zlgijnGdV9tI_7rdgNV5wfc3ZLb2LooBSrPP2LWR4hNo-wthy7kIRtZtlTUNpyvf8Fk8nz21Om7XmIqACCYWnyfQLECLpGWBTbDU2JeHBkJFkQOLNN0aYlBeKOSkItCB_FhUDW9C6KUw4RMv5PbcSK55hOQSbB7o0QvT3dLGzog78HD_qaDm9Hs9im_HgsSf7Tcz4GxpzO4KwpoMTHXqUpJ4bet2GLcB5Gg`
	// }; return config; });

	useEffect(() => {
		axios.get(`${baseApi}/user/user/detail-info`).then((res) => {
		})
	},[])


	const navTo = (path) => {
		Router.push(path);
	}

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
						<div>
							<div className={"flex flex-col items-center justify-between"}
							     onClick={() => navTo("/")}
							>
								<Dashboard
										color={Router.pathname === "/" ? "#DB0060" : "#383838"}/>
								<p className={"mt-[7px] text-[10px] aveSofMedium"}
								   style={{
									   color:Router.pathname === "/" ? "#DB0060" : "#383838"
								   }}
								>კაბინეტი</p>
							</div>
						</div>

						<div className={"flex flex-col items-center justify-between pt-0.5"}
						     onClick={() => navTo("/points")}
						>
							<Points
									color={Router.pathname === "/points" ? "#DB0060" : "#383838"}/>
							<p className={"mt-[7px] text-[10px] text-[#383838] aveSofMedium"}
							   style={{
								   color:Router.pathname === "/points" ? "#DB0060" : "#383838"
							   }}
							>ქულები</p>
						</div>
						<div>
							<div className={"flex flex-col items-center justify-between"}
							     onClick={() => navTo("/orders")}
							>
								<History
										color={Router.pathname === "/orders" ? "#DB0060" : "#383838"}/>
								<p
										style={{
											color:Router.pathname === "/orders" ? "#DB0060" : "#383838"
										}}
										className={"mt-[7px] text-[10px] text-[#383838] aveSofMedium"}
								>შეკვეთები</p>
							</div>
						</div>
						<div>
							<div className={"flex flex-col items-center justify-between"}
							     onClick={() => navTo("/tickets")}
							>
								<Tickets
										color={Router.pathname === "/tickets" ? "#DB0060" : "#383838"}/>
								<p
										style={{
											color:Router.pathname === "/tickets" ? "#DB0060" : "#383838"
										}}
										className={"mt-[7px] text-[10px] text-[#383838] aveSofMedium"}
								>ბილეთები</p>
							</div>
						</div>
						<div
								className={"flex flex-col items-center justify-between"}
								onClick={() => navTo("/cards")}
						>
							<Cards
									color={Router.pathname === "/cards" ? "#DB0060" : "#383838"}/>
							<p className={"mt-[7px] text-[10px] aveSofMedium"}
							   style={{
								   color:Router.pathname === "/cards" ? "#DB0060" : "#383838"
							   }}
							>ბარათები</p>
						</div>
					</div>
				</div>
			</Provider>
	)
}