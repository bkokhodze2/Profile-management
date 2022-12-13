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
    width: "16%",
    dataIndex: 'rang',
    key: 'rang',
    render: (text, obj) => obj.rang === 6 ?
        <Image src={ICONS.rangEqual} alt={"equal arrow icon"} className={"ml-[15px]"}/> :
        <div
            className={"pl-[15px] h-full flex items-center text-[#000000] justify-between gap-[30px] pr-[8px] ph:pr-[15px] md:pr-[26px]  "}
            style={{backgroundColor: obj.rang === 100 ? "#F8FAFD" : "transparent"}}
        >
          <p className={""}>{obj.rang}.</p>
          <Image src={ICONS.rangUp} alt={"up arrow icon"}/>
        </div>
  },
  {// @ts-ignore
    align: "start",
    dataIndex: 'avatarUrl',
    key: 'avatarUrl',
    render: (text, obj) => obj.rang === 6 ?
        <div className={"w-[30px] h-[30px] rounded-[50%] ml-[11px] bg-[#EDEEEF] "}/> :
        <div className={"flex items-center h-full"}
             style={{backgroundColor: obj.rang === 100 ? "#F8FAFD" : "transparent"}}>
          <div className={`${obj.rang === 1 && 'rang'} flex h-full justify-center items-center h-[43px] w-[53px]`}>
            <div
                className={"w-[28px] h-[28px] flex items-center justify-center bg-[#5DB039] rounded-[50%] relative p-[3px]"}>
              <Image src={IMAGES.avatar1.src} quality={100} alt={"avatar"}
                     width={28} height={28}
                     style={{objectFit: "cover", height: "100%", width: "auto"}}/>
            </div>
          </div>
        </div>,
  },
  {
    width: "15%",
    dataIndex: 'name',
    key: 'name',
    render: (text, obj) => obj.rang === 6 ?
        <div className={"md:w-[133px] w-[40px] h-[8px] ml-[25px] rounded-[20px] bg-[#EDEEEF]"}/> :
        <p className={"text-[#383838] h-full flex items-center pl-[25px]"}
           style={{backgroundColor: obj.rang === 100 ? "#F8FAFD" : "transparent"}}
        >{text}</p>,
  },
  // {
  //   dataIndex: 'price',
  //   key: 'price',
  //   render: (text, obj) => obj.rang === 6 ? <div className={"w-[70px] h-[8px] rounded-[20px] bg-[#EDEEEF]"}/> :
  //       <p className={"flex h-full  items-center text-[#383838]"}
  //          style={{backgroundColor: obj.rang === 100 ? "#F8FAFD" : "transparent"}}>{text} <Lari classes={"ml-2"}
  //                                                                                               color={"#383838"}/></p>,
  // },
  {
    // @ts-ignore
    align: "end",
    dataIndex: 'points',
    key: 'points',
    render: (text, obj) => obj.rang === 6 ?
        <div className={"md:w-[92px] w-[30px] ml-[auto] h-[8px] rounded-[20px] bg-[#EDEEEF] mr-[8px]"}/> :
        <p className={"pr-[15px] h-full flex justify-end items-center text-dark7"}
           style={{backgroundColor: obj.rang === 100 ? "#F8FAFD" : "transparent"}}
        >{text} ქულა</p>,
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
  {
    key: '4',
    rang: 4,
    avatarUrl: "dsdds",
    name: "saxeli",
    price: 1244,
    points: 155
  },

  {
    key: '5',
    rang: 5,
    avatarUrl: "url",
    name: "xsxsxav.ხ",
    price: 6365,
    points: 3312
  },
  {
    key: '6',
    rang: 6,
    avatarUrl: null,
    name: null,
    price: null,
    points: null
  },
  {
    key: '7',
    rang: 99,
    avatarUrl: "url",
    name: "მიხეილ.ხ",
    price: 6365,
    points: 3312
  },
  {
    key: '8',
    rang: 100,
    avatarUrl: "url",
    name: "user me",
    price: 4567890,
    points: 456789
  },
  {
    key: '9',
    rang: 101,
    avatarUrl: "url",
    name: "dvgfgლ.ხ",
    price: 6365,
    points: 3312
  },


];

const LeaderBoard = () => {

  return <>
    <div className={"flex justify-between items-center pb-[9px]"}>
      <p className={"text-base text-dark font-bold"}>ლიდერბორდი</p>
      <div className={"hidden ph:flex rounded-[50%] justify-center items-center bg-[#7B92DC] w-[44px] h-[44px]"}>
        <Image src={ICONS.leaderboard} alt={"leaderboard icon"}/>
      </div>
    </div>

    <div className={"flex md:hidden flex-col"}>
      {data?.map((e, index: number) => {
        return <div key={index} className={"flex justify-between flex-row h-[67px] items-center py-[12px] border-b-[1px] border-[#D9D9D94D]"}
                    style={{backgroundColor: e?.rang === 100 ? "#F8FAFD" : "transparent"}}>
          <div className={"flex items-center"}>
            {
              e?.rang === 6 ?
                  <div className={"w-[30px]"}>
                    <Image src={ICONS.rangEqual} alt={"equal arrow icon"} className={""}/></div> :
                  <p className={"mr-[7px] w-[30px]"}>{e?.rang}.</p>
            }
            {
              e?.rang === 6 ?
                  <div className={"w-[30px] h-[30px] rounded-[50%] ml-[18px] bg-[#EDEEEF] "}/> :
                  <div className={"flex items-center h-full"}
                       style={{backgroundColor: e?.rang === 100 ? "#F8FAFD" : "transparent"}}>
                    <div
                        className={`${e?.rang === 1 && 'rang'} flex h-full justify-center items-center h-[43px] w-[53px]`}>
                      <div
                          className={"w-[28px] h-[28px] flex items-center justify-center bg-[#5DB039] rounded-[50%] relative p-[3px]"}>
                        <Image src={IMAGES.avatar1.src} quality={100} alt={"avatar"}
                               width={28} height={28}
                               style={{objectFit: "cover", height: "100%", width: "auto"}}/>
                      </div>
                    </div>
                    <div className={"w-[20px] flex justify-end"}>
                      <Image src={ICONS.rangUp} alt={"up arrow icon"}/>
                    </div>

                  </div>
            }

            {
              e?.rang === 6 ?
                  <div className={"md:w-[133px] w-[80px] h-[8px] ml-[25px] rounded-[20px] bg-[#EDEEEF]"}/> :
                  <p className={"text-[#383838] h-full flex items-center pl-[18px]"}
                     style={{backgroundColor: e?.rang === 100 ? "#F8FAFD" : "transparent"}}
                  >{e?.name}</p>
            }

          </div>
          <div>
            <p>22,765</p>
          </div>
        </div>
      })}
    </div>

    <Table
        className={"leaderboard hidden md:block"}
        scroll={{x: 400}}
        columns={columns}
        dataSource={data}
        pagination={false}
        rowKey={"key"}
    />
  </>
};


export default LeaderBoard;