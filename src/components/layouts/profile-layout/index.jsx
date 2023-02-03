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
	// 		'Access-Control-Allow-Origin': '*',
	// 		'Content-Type': 'application/json',
	// 		Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzRUNseXdhVnNxOURBMU1oMElNLTVFTUNsRU5WM1FMTnhuNlh1bDJoOVBnIn0.eyJleHAiOjE2NzU0NTEyODcsImlhdCI6MTY3NTQxNTMwMSwiYXV0aF90aW1lIjoxNjc1NDE1Mjg3LCJqdGkiOiJkZTc4ZDRlMS1jMzZmLTRkYjUtODVjZi0yNGYzOGU4ZmMzMGEiLCJpc3MiOiJodHRwczovL2F1dGgucGlydmVsaS5jb20vcmVhbG1zL3hyYWNvb24tZGVtbyIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI4NDk2MWY0Ni1mM2Y1LTQ5OTctOGU4Yy1iYWFiZTZhOTFmNjUiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJjcy1jYXJ0Iiwic2Vzc2lvbl9zdGF0ZSI6IjJkMjI4ZmI0LWFkMDktNGY5OS1iMzExLWZkZTQxMjM4MGY4NyIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiUkVUQUlMX0NVU1RPTUVSIiwiZGVmYXVsdC1yb2xlcy14cmFjb29uLWRlbW8iLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIiwiUFJPVklERVJfQURNSU4iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiIyZDIyOGZiNC1hZDA5LTRmOTktYjMxMS1mZGU0MTIzODBmODciLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInVzZXJfaWQiOiI4NDk2MWY0Ni1mM2Y1LTQ5OTctOGU4Yy1iYWFiZTZhOTFmNjUiLCJuYW1lIjoidGVzdDUgdGVzdDUiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiI1NTA1MDE4MzkiLCJnaXZlbl9uYW1lIjoidGVzdDUiLCJmYW1pbHlfbmFtZSI6InRlc3Q1In0.EyRYyzsMrZq3m-ZJ7XINTIqERpF6hOoNIQGMuJBkwUh0Lic2glvJ3BVcmUXiitmGNeeqcbfFUvGGZgYpUymGe29zOqBZxweYOyLhtU23tiHgPxH8q8gP3amNSV7oerWBwph4EBWb-VqNlJ4Kcf7WSuUlBn_zLyAsgJUObzWSbxoW9HUYVB_lgg31qE_Pz2M1rroCruIM1rBPGBr72QWgVVtgTadHC2gqZQyhDEfv4CC8v-KYQDjpptCwDCu8LjeYgypUob73-9jvJm4qCLbFaQ647aUXEN876NbaGVt_EVwEHYdQwFZC3JCrUNFFVAtPYgD8CWfJPW7Neqe49G7PnQ`
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
							>მონეტები</p>
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