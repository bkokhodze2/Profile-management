import React, {useState} from 'react';
// @ts-ignore// @ts-ignore
// @ts-ignore
import {ICONS, IMAGES} from "public/images";
import {Table} from "antd";
import Image from "next/image";
import {ColumnsType} from "antd/es/table";
// @ts-ignore
import Lari from '/public/images/icons/lari';

interface DataType {
  key: string;
  name: string;
  rang: number;
  price: number;
  points: number;
  avatarUrl: string;
}

// @ts-ignore
const columns: ColumnsType<DataType> = [
  {
    width: 100,
    dataIndex: 'rang',
    key: 'rang',
    render: (text) => <div className={"flex text-[#000000]"}>
      <p className={"mr-[30px]"}>{text}.</p>
      <Image src={ICONS.rangUp} alt={"up arrow icon"}/>
    </div>,
  },
  {
    width: 53,
    dataIndex: 'avatarUrl',
    key: 'avatarUrl',
    render: (text) => <div className={"rang flex justify-center items-center h-full h-[43px] w-[53px]"}>
      <div className={"w-[28px] h-[28px] flex items-center justify-center bg-[#5DB039] rounded-[50%] relative p-[3px]"}>
        <Image src={IMAGES.avatar1.src} quality={100} alt={"avatar"}
               width={28} height={28}
               style={{objectFit: "cover", height: "100%", width: "auto"}}/>
      </div>
    </div>,

  },
  {
    width: 210,
    dataIndex: 'name',
    key: 'name',
    render: (text) => <p className={"text-[#383838] pl-[25px]"}>{text}</p>,

  },
  {
    dataIndex: 'price',
    key: 'price',
    render: (text) => <p className={"flex items-center text-[#383838]"}>{text} <Lari classes={"ml-2"}
                                                                                     color={"#383838"}/></p>,
  },
  {
    // @ts-ignore
    align: "end",
    dataIndex: 'points',
    key: 'points',
    render: (text) => <p>{text} ქულა</p>,
  }
];

const data: DataType[] = [
  {
    key: '1',
    rang: 1,
    avatarUrl: "url",
    name: "ნინო.ხ",
    price: 344,
    points: 556
  },
  {
    key: '2',
    rang: 2,
    avatarUrl: "url",
    name: "მარიამ.დ",
    price: 1234,
    points: 876
  },
  {
    key: '3',
    rang: 3,
    avatarUrl: "url",
    name: "მიხეილ.ხ",
    price: 6365,
    points: 3312
  },


];

const LeaderBoard = () => {

  return <>
    <div className={"flex justify-between items-center pb-[9px]"}>
      <p className={"text-base text-dark font-bold"}>ლიდერბორდი</p>
      <div className={"rounded-[50%] flex justify-center items-center bg-[#7B92DC] w-[44px] h-[44px]"}>
        <Image src={ICONS.leaderboard} alt={"leaderboard icon"}/>
      </div>
    </div>

    <Table
        className={"leaderboard"}
        columns={columns}
        dataSource={data}
        pagination={false}
    />
  </>
};


export default LeaderBoard;