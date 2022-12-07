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


export default function Layout({children}){
	const baseApi = process.env.baseApi;

	axios.interceptors.request.use((config) => {
		config.headers = {
			...config.headers,
			Authorization:`Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzRUNseXdhVnNxOURBMU1oMElNLTVFTUNsRU5WM1FMTnhuNlh1bDJoOVBnIn0.eyJleHAiOjE2NzA0MzczODYsImlhdCI6MTY3MDQwMTQwMiwiYXV0aF90aW1lIjoxNjcwNDAxMzg2LCJqdGkiOiIxM2M5ZGFiYS1jYTJkLTQwYmMtYmYzMi1mMTUyZGM1NzFiOTUiLCJpc3MiOiJodHRwczovL2F1dGgucGlydmVsaS5nZS9yZWFsbXMveHJhY29vbi1kZW1vIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImRiODYzNzUyLWM4MzEtNDJkNi04ODdhLWMyY2FjYWMxYTIwNSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImNzLWNhcnQiLCJzZXNzaW9uX3N0YXRlIjoiNjcwNDFmMDAtMjVjYi00OGY3LWE4ZmQtZTIxYTA1MTQ4NWE1IiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLXhyYWNvb24tZGVtbyIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiI2NzA0MWYwMC0yNWNiLTQ4ZjctYThmZC1lMjFhMDUxNDg1YTUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInVzZXJfaWQiOiJkYjg2Mzc1Mi1jODMxLTQyZDYtODg3YS1jMmNhY2FjMWEyMDUiLCJuYW1lIjoic2hha28gZGF2aXRhc2h2aWxpIiwicHJlZmVycmVkX3VzZXJuYW1lIjoic2hha28xMkBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoic2hha28iLCJmYW1pbHlfbmFtZSI6ImRhdml0YXNodmlsaSIsImVtYWlsIjoic2hha28xMkBnbWFpbC5jb20ifQ.Cikc9TAlFeKm1d00fUXbvrolmLqi3IxMe9_pMfB03pAL1kN2hipXLzh15vQny20d6V47F78j67j0BG7heKqdrzhaweSzSsYZIFomb4WxUsVHf6BDjxcg5P2Ad7CLf3hjJ_9I0gQKSSbLgpFRburm16084AHIIZNQqTYz1uLOdIz50q-vwAn1hmqmeO6xv04sZwr8VAzYOI1cmY2pFhXwugF4Ek_mo895efzgfCvZuTK8u8p7r3vFiuJpRUVagv631KECIBKNRPAU5KruQcIu6gF0nzYQU0FLuY8cGHArXf2Jo1p3TJpp_-QEKJ3PN-sk4QD9eFpA8TPfjlLuXUzPFw
`
		};

		return config;
	});


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
							<Navigation/>
							<div className={"w-full"}>
								{children}
							</div>
						</div>
					</main>
			</Provider>
	)
}