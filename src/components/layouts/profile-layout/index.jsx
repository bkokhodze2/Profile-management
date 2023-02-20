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

	axios.interceptors.request.use((config) => {
		config.headers = {
			...config.headers,
			mode: 'no-cors',
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json',
			Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzRUNseXdhVnNxOURBMU1oMElNLTVFTUNsRU5WM1FMTnhuNlh1bDJoOVBnIn0.eyJleHAiOjE2NzY5MTcwOTgsImlhdCI6MTY3Njg4MTA5OCwianRpIjoiMzVkZWM2MTktZjg5MC00NTljLWE3M2ItOTkyZWRjZTgxZDE3IiwiaXNzIjoiaHR0cHM6Ly9hdXRoLnBpcnZlbGkuY29tL3JlYWxtcy94cmFjb29uLWRlbW8iLCJzdWIiOiJkNzMwMzI1NS1lYjM4LTQ4OWMtYTBjNC1hNWU1YmJjZjVhZTkiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJwYXNzd29yZC1jbGllbnQiLCJzZXNzaW9uX3N0YXRlIjoiNTM1YzhmZWItMjQ3Yy00NjE0LWJjNmYtZTdiZGJjYjA3ZWFmIiwiYWNyIjoiMSIsInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsInNpZCI6IjUzNWM4ZmViLTI0N2MtNDYxNC1iYzZmLWU3YmRiY2IwN2VhZiIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwidXNlcl9pZCI6ImQ3MzAzMjU1LWViMzgtNDg5Yy1hMGM0LWE1ZTViYmNmNWFlOSIsIm5hbWUiOiLhg5Lhg5jhg53hg6Dhg5Lhg5gg4YOl4YOV4YOa4YOY4YOV4YOY4YOr4YOUIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiNTkyMTEyMTEyIiwiZ2l2ZW5fbmFtZSI6IuGDkuGDmOGDneGDoOGDkuGDmCIsImZhbWlseV9uYW1lIjoi4YOl4YOV4YOa4YOY4YOV4YOY4YOr4YOUIn0.MLYqYXoTuj3yxGAZOdYYmpuXIu8VnG9JCTCxbbNOVewx7Uz_WqXSIkJIKH3MYesWgw4aGhR1DWsJmiUCPhTL_aUFNy1ca1hBVEV3ov3YXvfi-bLAGt_JhS4RgPKTkP1mLl1XPssTT8NJRzqpJSxDcbS9d7LbZVxwcQvjyxbmiIAb9DMinvDzKzwLfS_SaSJpqRok8nAU9ndrY6es6WAAgcDmHkSheF0EChN5zjqsg4aEf1-BhYX9XX7ihJcHr9Cq9JsXiMzpQ6YnwzQc08hw_nUepxyoXDbJ3PaV_bXCRLZbZQN6OCns2-oy2e1Xmo-utrZ9xlywnFpNoQOvrANxQA`
		};

		return config;
	});

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