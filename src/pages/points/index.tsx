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
import {Space, Table, Tag} from 'antd';
import type {ColumnsType} from 'antd/es/table';
import CountUp from "react-countup";
import Donut from '../../components/charts/donut';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

export default function PointsPage() {

  const columns: ColumnsType<DataType> = [
    {
      title: () => {
        return <p className={"text-dark text-[14px] font-[500]"}>ტრანზაქციის სახელი</p>
      },
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: () => {
        return <p className={"text-dark text-[14px] font-[500]"}>თარიღი</p>
      },
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: () => {
        return <p className={"text-dark text-[14px] font-[500]"}>პლატფორმა</p>
      },
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: () => {
        return <p className={"text-dark text-[14px] font-[500]"}>ქულები</p>
      },
      dataIndex: 'address',
      key: 'address',
    }
  ];

  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  return (
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app"/>
          <link rel="icon" href="/public/favicon.ico"/>
        </Head>

        <div className={"w-full"}>

          <div className={"flex justify-between"}>
            <h2 className={"text-[32px] text-[#383838] font-bold"}>
              ჩემი ქულები
            </h2>
            <div className={"w-[200px] h-[48px] bg-[white]"}>
              <p>search</p>
            </div>
          </div>


          <div className={"h-[1000px] mt-[30px] px-6 pt-[36px] pb-[46px] bg-[white] rounded-xl"}>

            <div className={"mt-4 flex space-x-[25px]"}>
              <div className={"w-[117px] h-[117px] "}>
                <Donut/>
              </div>
              <div className={"flex flex-col justify-around"}>
                <div className={"flex items-center"}>
                  <div className={"w-[10px] h-[10px] bg-red rounded-[50%]"}/>
                  <p className={"text-dark7 text-[12px] ml-[6px]"}>გამომუშავებული</p>
                  <p className={"text-dark ml-3 text-[18px]"}><CountUp duration={1} end={19670} separator=","
                                                                       start={19670 * 0.75}/>
                  </p>
                </div>
                <div className={"flex items-center"}>
                  <div className={"w-[10px] h-[10px] bg-[#9766F0] rounded-[50%]"}/>
                  <p className={"text-dark7 text-[12px] ml-[6px]"}>მიმდინარე</p>
                  <p className={"text-dark ml-3 text-[18px]"}><CountUp duration={1} end={17445} separator=","
                                                                       start={17445 * 0.75}/>
                  </p>
                </div>
                <div className={"flex items-center"}>
                  <div className={"w-[10px] h-[10px] bg-[#EDC520] rounded-[50%]"}/>
                  <p className={"text-dark7 text-[12px] ml-[6px]"}>დახარჯული</p>
                  <p className={"text-dark ml-3 text-[18px]"}><CountUp duration={1} end={2225} separator=","
                                                                       start={2225 * 0.75}/></p>
                </div>
              </div>
            </div>

            <Table
                className={"pointsTable"}
                columns={columns}
                dataSource={data}
                pagination={false}
            />
          </div>

        </div>

      </div>
  )
}

PointsPage.getLayout = function getLayout(page: any) {
  return (
      <Layout>
        {page}
      </Layout>
  )
}