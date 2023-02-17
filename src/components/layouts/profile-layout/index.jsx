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
	// 		mode: 'no-cors',
	// 		'Access-Control-Allow-Origin': '*',
	// 		'Content-Type': 'application/json',
	// 		Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzRUNseXdhVnNxOURBMU1oMElNLTVFTUNsRU5WM1FMTnhuNlh1bDJoOVBnIn0.eyJleHAiOjE2NzY2NjAxMjcsImlhdCI6MTY3NjYyNDEyNywianRpIjoiYmVhNWY0YjItNTRlNC00ODI4LTgyYjMtMmI1ZTgzZTlkZjhkIiwiaXNzIjoiaHR0cHM6Ly9hdXRoLnBpcnZlbGkuY29tL3JlYWxtcy94cmFjb29uLWRlbW8iLCJzdWIiOiJmNDM2NmJiZS03YjBhLTQwMGQtOGRlNi00ZDVmM2E3OWNhNjAiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJwYXNzd29yZC1jbGllbnQiLCJzZXNzaW9uX3N0YXRlIjoiNGFhM2E2NzYtMGQ3OS00MjkzLTk0ZGMtMWE1MzhmZDg1NjNkIiwiYWNyIjoiMSIsInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsInNpZCI6IjRhYTNhNjc2LTBkNzktNDI5My05NGRjLTFhNTM4ZmQ4NTYzZCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwidXNlcl9pZCI6ImY0MzY2YmJlLTdiMGEtNDAwZC04ZGU2LTRkNWYzYTc5Y2E2MCIsIm5hbWUiOiLhg5jhg6Dhg5Dhg5nhg5rhg5gg4YOW4YOQ4YOc4YOX4YOQ4YOg4YOQ4YOY4YOQIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiNTE0NTU1MjU1IiwiZ2l2ZW5fbmFtZSI6IuGDmOGDoOGDkOGDmeGDmuGDmCIsImZhbWlseV9uYW1lIjoi4YOW4YOQ4YOc4YOX4YOQ4YOg4YOQ4YOY4YOQIn0.R2jHI1-lbsFu6adtNS39P-lMeObD8XBnj48fuTY4ss7k1tlKhj_VDlO1wW8h1yM73sVcxXH-HxmkMC62t4hijbSaY8vrP8uK2uK4YJj2oT9oiu4EdOT9UXjClTN0viwdE0TbRrqwxRjm0aniePTazx0p6pTB3yoqUb4QLbzSLROkrAtO8-TngbX3mcxpRbWH_kP117xxNol6ijZNHqtq_zEp3g80fMMMY3suSOc2wdDEwaR3HMhaxCzBvYQG97eULxxV3YYgxOPdulQu9tjvdHLchue20dRNNFN-B7yqZ9EcXoKoHuU_ardiAezyXLoSg2EXhP8DRHtY2crvOcAckw`
	// 	};
	//
	// 	return config;
	// });

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
							className={"flex xl:gap-[30px] md:pt-[0px] gap-4 pt-3 p-2 container m-auto h-full min-h-[calc(100vh-144px)]"}>
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