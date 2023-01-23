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

/*	axios.interceptors.request.use((config) => {
		config.headers = {
			...config.headers,
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json',
			Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzRUNseXdhVnNxOURBMU1oMElNLTVFTUNsRU5WM1FMTnhuNlh1bDJoOVBnIn0.eyJleHAiOjE2NzQ0OTMyMDgsImlhdCI6MTY3NDQ1NzIyNywiYXV0aF90aW1lIjoxNjc0NDU3MjA4LCJqdGkiOiI2MzE1Njk4Yi04M2NiLTQ3OWMtODI2Yy0zYWRmMjEyMjljZDYiLCJpc3MiOiJodHRwczovL2F1dGgucGlydmVsaS5jb20vcmVhbG1zL3hyYWNvb24tZGVtbyIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI1OTc0ZWE2Mi1iMTBiLTQ3NmEtYmViOC01OWVkYWEyMzg0ZDgiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJjcy1jYXJ0Iiwic2Vzc2lvbl9zdGF0ZSI6IjJiNmUyMGFmLWI1NjgtNDQ1MS1iMGY5LTk1ZjdhZTVlOWYwMiIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy14cmFjb29uLWRlbW8iLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIiwiUFJPVklERVJfQURNSU4iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiIyYjZlMjBhZi1iNTY4LTQ0NTEtYjBmOS05NWY3YWU1ZTlmMDIiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInVzZXJfaWQiOiI1OTc0ZWE2Mi1iMTBiLTQ3NmEtYmViOC01OWVkYWEyMzg0ZDgiLCJuYW1lIjoiaXJhODM2IGlyYTgzNiIsInByZWZlcnJlZF91c2VybmFtZSI6IjU5MTQwMTUxNSIsImdpdmVuX25hbWUiOiJpcmE4MzYiLCJmYW1pbHlfbmFtZSI6ImlyYTgzNiJ9.QJDwKDAzWgBPnTB2cmgqsLL4AtMxZ_Q0uSmxI2RBladE52hHrkZWoirb_ShCmUGpL6COEJh65kyez54fIipP2Mo46F9dfXHLI0mxvao-Ms3LMaY2YXDCmMdNXp1abOCBJHHgZ_dko3He5_yTvJYmEa6FXjl-9pgb4jxf0YQzLu4xOghk3w0-kIKoS9CBmIRaOAlL3V-S_YCjnxlf6R7Oj1v5zoe8pBt9gkDnNK4WQe-BMCOw8vpwsxq_JIR_ZlyGfaChXdJmzmkW7EJwQmXh0RR-rohHD3_7Zy03HNHxUgOB6K8j9aAgDbAa9tlxAJV37a6jNBxoODRKnMZCDRL3qA`
		};
		return config;
	});*/

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
							className={"flex xl:gap-[30px] gap-4 md:pt-[0px] pt-3 container m-auto h-full min-h-[calc(100vh-144px)]"}>
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