import Head from 'next/head';
import Image from 'next/image';
// @ts-ignore
import {ICONS, IMAGES} from "public/images";
import Layout from "../../components/layouts/profile-layout";
// @ts-ignore
import {userBgIcon} from "/public/images/icons";
// @ts-ignore
import Cards from "/public/images/icons/nav/navCards";
// @ts-ignore
import Points from "/public/images/icons/nav/navPoints";
// @ts-ignore// @ts-ignore
import React from "react";
import TicketItem from "../../components/blocks/ticket-item";

export default function Tickets() {
  return (
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app"/>
          <link rel="icon" href="/public/favicon.ico"/>
        </Head>

        <div className={"w-full"}>

          <h2 className={"text-[32px] text-[#383838] font-bold"}>
            ჩემი ბილეთები
          </h2>

          <div className={"space-y-[30px] h-[2000px] mt-[40px]"}>
            {/*<TicketItem/>*/}
            {/*<TicketItem/>*/}
            {/*<TicketItem/>*/}
            {/*<TicketItem/>*/}
          </div>

        </div>

      </div>
  )
}

Tickets.getLayout = function getLayout(page: any) {
  return (
      <Layout>
        {page}
      </Layout>
  )
}