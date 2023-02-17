import React, {useEffect, useState} from 'react';
// @ts-ignore
import {ICONS, IMAGES} from "public/images";
import {notification, Table} from "antd";
import Image from "next/image";
import {ColumnsType} from "antd/es/table";
// @ts-ignore
import Lari from '/public/images/icons/lari';
import axios from "axios";
import getChosenAvatar from "../../../utils/getChosenAvatar";
import getModifiedNumber from "../../../utils/getModifiedNumber";

interface DataType {
  key?: string;
  id: string;
  partyId: number;
  pointAmount: number
  userId: any;
  userAvatarDTO: {
    path: string;
    code: string
  };
  customerName: string
  isAuthorizedUser: null | boolean;
  orderId: number;
}

const LeaderBoard = () => {
  const baseApi = process.env.baseApi;
  const [data, setData] = useState<DataType[]>([]);
  const [data2, setData2] = useState<DataType[] | null>([]);

  // @ts-ignore
  const columns: ColumnsType<DataType> = [
    {
      width: "16%",
      dataIndex: 'orderId',
      key: 'orderId',
      render: (text, obj) => !obj?.orderId ?
          <Image src={ICONS.rangEqual} alt={"equal arrow icon"} className={"ml-[15px]"}/> :
          <div
              className={"pl-2 ph:pl-[15px] h-full flex items-center text-[#000000] justify-between gap-2 ph:gap-[30px] pr-[8px] ph:pr-[15px] md:pr-[26px]  "}
              style={{backgroundColor: obj?.isAuthorizedUser ? "#898fa078" : "transparent"}}
          >
            <p className={""}>{obj?.orderId}.</p>
            <Image src={ICONS.rangUp} alt={"up arrow icon"}/>
          </div>
    },
    {// @ts-ignore
      align: "start",
      dataIndex: 'userAvatarDTO',
      key: 'userAvatarDTO',
      render: (text, obj) => !obj?.orderId ?
          <div className={"w-[30px] h-[30px] rounded-[50%] ml-[11px] bg-[#EDEEEF] "}/> :
          <div className={"flex items-center h-full"}
               style={{backgroundColor: obj?.isAuthorizedUser ? "#898fa078" : "transparent"}}
          >
            <div
                className={`${obj?.orderId === 1 && 'rang'} flex h-full justify-center items-center h-[43px] w-[53px]`}>
              <div
                  className={"w-[28px] h-[28px] flex items-center justify-center rounded-[8px] relative p-[3px]"}
                  style={{
                    backgroundColor: '#'.concat(obj?.userAvatarDTO?.code)
                  }}
              >
                <Image src={getChosenAvatar(obj?.userAvatarDTO?.path)} quality={100} alt={"avatar"}
                       width={28} height={28}
                       style={{objectFit: "cover", height: "100%", width: "auto"}}/>
              </div>
            </div>
          </div>,
    },
    {
      width: "15%",
      dataIndex: 'customerName',
      key: 'customerName',
      render: (text, obj) => !obj?.orderId ?
          <div className={"md:w-[133px] w-[40px] h-[8px] ml-[25px] rounded-[20px] bg-[#EDEEEF]"}/> :
          <p className={"text-[#383838] h-full flex items-center pl-[5px] md:pl-[25px] whitespace-nowrap"}
             style={{backgroundColor: obj?.isAuthorizedUser ? "#898fa078" : "transparent"}}
          >{text}</p>,
    },

    {
      // @ts-ignore
      align: "end",
      dataIndex: 'pointAmount',
      key: 'pointAmount',
      render: (text, obj) => !obj?.orderId ?
          <div className={"md:w-[92px] w-[30px] ml-[auto] h-[8px] rounded-[20px] bg-[#EDEEEF] mr-[8px]"}/> :
          <p className={"pr-[15px] h-full flex justify-end items-center text-dark7"}
             style={{backgroundColor: obj?.isAuthorizedUser ? "#898fa078" : "transparent"}}
          >
            {getModifiedNumber(text)}
            <span className={"ml-1"}>
                <Image
                    src={IMAGES.coin}
                    quality={100}
                    blurDataURL={IMAGES.placeholder.src}
                    loading={"lazy"}
                    width={18}
                    height={18}
                    alt={"coin icon"}
                />
              </span>
          </p>,
    }
  ];

  const getModifiedData = (dataArr) => {
    let data = dataArr?.sort((a, b) => a?.orderId - b?.orderId);
    let index = data?.findIndex((e) => e?.isAuthorizedUser === true);
    let find = data?.find((e) => e?.isAuthorizedUser === true);

    if (!find) return data

    if (find?.orderId > 5) {
      data?.splice(index - 1, 0, null);
      return data
    } else return data

  }


  useEffect(() => {

    axios.get(`${baseApi}/user/rating`).then((res) => {
      setData2(getModifiedData(res.data))

      // setData2(getModifiedData())

    }).catch(() => {

      notification['error']({
        message: 'დაფიქსირდა შეცდომა',
      });
    })
  }, [])


  return <>
    <div className={"flex justify-between items-center pb-[9px]"}>
      <p className={"text-base text-dark font-bold"}>ლიდერბორდი</p>
      <div className={"hidden ph:flex rounded-[50%] justify-center items-center bg-[#7B92DC] w-[44px] h-[44px]"}>
        <Image src={ICONS.leaderboard} alt={"leaderboard icon"}/>
      </div>
    </div>

    <Table
        // hidden md:block
        className={"leaderboard "}
        scroll={{x: 300}}
        columns={columns}
        dataSource={data2}
        pagination={false}
        rowKey={"key"}
    />
  </>
};


export default LeaderBoard;