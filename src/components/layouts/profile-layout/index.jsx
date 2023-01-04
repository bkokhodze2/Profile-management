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
	// 		'Access-Control-Allow-Origin':'*',
	// 		'Content-Type':'application/json',
	// 		Authorization:`Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzRUNseXdhVnNxOURBMU1oMElNLTVFTUNsRU5WM1FMTnhuNlh1bDJoOVBnIn0.eyJleHAiOjE2NzExMzc1NDUsImlhdCI6MTY3MTEwMTU4OSwiYXV0aF90aW1lIjoxNjcxMTAxNTQ1LCJqdGkiOiI1ODI5Zjg3NC03NTRmLTRmZDMtOGI3YS1iMmFkYjc1MWUxYTgiLCJpc3MiOiJodHRwczovL2F1dGgucGlydmVsaS5jb20vcmVhbG1zL3hyYWNvb24tZGVtbyIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI0MGI2MTY4Yy1lMDBhLTQ5M2EtYjE1NC1lMDgwNDZjMzFhZDUiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJjcy1jYXJ0Iiwic2Vzc2lvbl9zdGF0ZSI6IjkzZjFhYThlLTdhNWYtNDZkNC05NmU1LTJlZmYyNzBlY2UyZiIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy14cmFjb29uLWRlbW8iLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwic2lkIjoiOTNmMWFhOGUtN2E1Zi00NmQ0LTk2ZTUtMmVmZjI3MGVjZTJmIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJ1c2VyX2lkIjoiNDBiNjE2OGMtZTAwYS00OTNhLWIxNTQtZTA4MDQ2YzMxYWQ1IiwibmFtZSI6ImlyYTMzNyBiZTMzNyIsInByZWZlcnJlZF91c2VybmFtZSI6ImlyYTMzN0BnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoiaXJhMzM3IiwiZmFtaWx5X25hbWUiOiJiZTMzNyIsImVtYWlsIjoiaXJhMzM3QGdtYWlsLmNvbSJ9.VhkRExbXqWZ-5uNhSl0uuG4ECZUYKoOyOhRbKjWK2vBeD-pu5S05O2VMVhZe3GxffJrc2xT1LE0hfrPvt3HLjivSCn7E_xD2Ic8-ia1_w_Tuu4Hm2TIel4X2kHfDGybucjuRY4xmxuS683wOkL2oBcGjMrS-6g_0HOZaVO4PkVJXXhsf3p0w4ASOS-DuLBRdnmEAhyg8KYskuTk7s4yxAZQd_ieQ1pAPXZ7QB5k9WpalJACF0q1izLip3y_DXAQE8H4g7TZsLt9uvNZdsIWA6unbDtSCVD2niQzp25D6cryJZoLwIOYHDH3MOHxa8QqZyv8WITsJUuN87SkV3wEoTA`
	// 	};
	// 	return config;
	// });

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