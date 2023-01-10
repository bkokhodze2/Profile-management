import Head from 'next/head'
import Header from "../../header";
import React from "react";
import {Provider} from "react-redux";
import store from "/src/components/store"
import {useRouter} from "next/router";
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
	// 		'Access-Control-Allow-Origin':'*',
	// 		'Content-Type':'application/json',
	// 		Authorization:`Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzRUNseXdhVnNxOURBMU1oMElNLTVFTUNsRU5WM1FMTnhuNlh1bDJoOVBnIn0.eyJleHAiOjE2NzMzMDk2NTcsImlhdCI6MTY3MzI3MzY1NywianRpIjoiY2NhYTQxZmQtM2M5Mi00ZDU1LThiYWItOWFiMzc0YjMwNTZlIiwiaXNzIjoiaHR0cHM6Ly9hdXRoLnBpcnZlbGkuY29tL3JlYWxtcy94cmFjb29uLWRlbW8iLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiYjNmOGI0NjktNmI2YS00ODA3LWIzYjYtZmRhNTQ2NmY0ZjJlIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoicGFzc3dvcmQtY2xpZW50Iiwic2Vzc2lvbl9zdGF0ZSI6ImYwMDFiODFhLTgwNjQtNDVjOS04MTQwLTU1ZDZmYzJkYzYzNiIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy14cmFjb29uLWRlbW8iLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIiwiUFJPVklERVJfQURNSU4iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiJmMDAxYjgxYS04MDY0LTQ1YzktODE0MC01NWQ2ZmMyZGM2MzYiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInVzZXJfaWQiOiJiM2Y4YjQ2OS02YjZhLTQ4MDctYjNiNi1mZGE1NDY2ZjRmMmUiLCJuYW1lIjoidGF6bzk5IGR2YWxpc2h2aWxpOTkiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ0ZHZhbDE5QGZyZWV1bmkuZWR1LmdlIiwiZ2l2ZW5fbmFtZSI6InRhem85OSIsImZhbWlseV9uYW1lIjoiZHZhbGlzaHZpbGk5OSIsImVtYWlsIjoidGR2YWwxOUBmcmVldW5pLmVkdS5nZSJ9.IIyAD0N4iAPyoLVUHQM6GQmyfnnMKaTnA9U_la4gWpn859Es4Lpb6gxxhiZtEnUL-0nGJArXDLasGUezwbmEJlTYXwPT9bGFjxZf8EXfLa96tNUrbWAEaXr2IEJL1rsmsd6qmP5rX9kxLqfjCCU97UPIoHiWJ1Qzj8Dst7vSZOsYNJz_NndO6pQOEx3huq-jSy0P49PHoFKyXIR1_2txRMSQM8AwBBmSyl0AlgJI-lU5TeQ_ld9dcW3-J7PwdHG2jWbmiL_BekTenNKl2jrjwK4P4QlKHO1VzjPwLqM0Bv8_8MllRmW5cAO91qC1swn4PlozxD0LPAQw4i1gAquKYw`
	// 	};
	// 	return config;
	// });

	// useEffect(() => {
	// 	axios.get(`${baseApi}/user/user/detail-info`).then((res) => {
	// 	})
	// },[])


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