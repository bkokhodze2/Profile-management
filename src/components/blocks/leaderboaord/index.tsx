import React, {useEffect, useState} from 'react';
// @ts-ignore
import {ICONS, IMAGES} from "public/images";
import {notification, Table} from "antd";
import Image from "next/image";
import {ColumnsType} from "antd/es/table";
// @ts-ignore
import Lari from '/public/images/icons/lari';
import axios from "axios";
import getChosenAvatar from "../../getChosenAvatar";

let arr = {
  "id": "12121212121",
  "partyId": 2003542,
  "pointAmount": 337.0,
  "userId": null,
  "userAvatarDTO": {
    "path": "5",
    "code": "C62828"
  },
  "customerName": "test_name test_lastname",
  "isAuthorizedUser": null,
  "orderId": 1
}

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
              className={"pl-[15px] h-full flex items-center text-[#000000] justify-between gap-[30px] pr-[8px] ph:pr-[15px] md:pr-[26px]  "}
              style={{backgroundColor: obj?.isAuthorizedUser ? "#F8FAFD" : "transparent"}}
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
               style={{backgroundColor: obj?.isAuthorizedUser ? "#F8FAFD" : "transparent"}}>
            <div
                className={`${obj?.orderId === 1 && 'rang'} flex h-full justify-center items-center h-[43px] w-[53px]`}>
              <div
                  className={"w-[28px] h-[28px] flex items-center justify-center rounded-[50%] relative p-[3px]"}
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
          <p className={"text-[#383838] h-full flex items-center pl-[25px]"}
             style={{backgroundColor: obj?.isAuthorizedUser ? "#F8FAFD" : "transparent"}}
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
             style={{backgroundColor: obj?.isAuthorizedUser ? "#F8FAFD" : "transparent"}}
          >{text}
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

    let data = dataArr?.sort((a, b) => a?.orderId - b?.orderId)
    let index = data?.findIndex((e) => e?.isAuthorizedUser === true);

    let find = data?.find((e) => e?.isAuthorizedUser === true);

    if (find.orderId > 5) {
      data?.splice(index, 0, null);

    } else if (find.orderId < 5) {
      return data
    } else if (find.orderId === 5) {
      return data
    }

    return data
  }


  useEffect(() => {

    axios.get(`${baseApi}/user/rating`).then((res) => {

      setData2(getModifiedData(res.data))
    }).catch(() => {
      let dataArr = [
        {
          "id": "12121212121",
          "partyId": 2003542,
          "pointAmount": 900,
          "userId": null,
          "userAvatarDTO": {
            "path": "5",
            "code": "cecec3"
          },
          "customerName": "test_name test_lastname",
          "isAuthorizedUser": null,
          "orderId": 2
        },
        {
          "id": "12121212121",
          "partyId": 2003542,
          "pointAmount": 1000,
          "userId": null,
          "userAvatarDTO": {
            "path": "5",
            "code": "C62828"
          },
          "customerName": "test_name test_lastname",
          "isAuthorizedUser": null,
          "orderId": 1
        },
        {
          "id": "12121212121",
          "partyId": 2003542,
          "pointAmount": 800,
          "userId": null,
          "userAvatarDTO": {
            "path": "5",
            "code": "ababab"
          },
          "customerName": "me mee",
          "isAuthorizedUser": true,
          "orderId": 3
        },
        {
          "id": "12121212121",
          "partyId": 2003542,
          "pointAmount": 600,
          "userId": null,
          "userAvatarDTO": {
            "path": "2",
            "code": "C62828"
          },
          "customerName": "test_name test_lastname",
          "isAuthorizedUser": null,
          "orderId": 5
        },

        {
          "id": "12121212121",
          "partyId": 2003542,
          "pointAmount": 700,
          "userId": null,
          "userAvatarDTO": {
            "path": "1",
            "code": "d3d3d3"
          },
          "customerName": "test_name test_lastname",
          "isAuthorizedUser": null,
          "orderId": 4
        },
        {
          "id": "12121212121",
          "partyId": 2003542,
          "pointAmount": 70,
          "userId": null,
          "userAvatarDTO": {
            "path": "4",
            "code": "C62828"
          },
          "customerName": "test_name test_lastname",
          "isAuthorizedUser": null,
          "orderId": 99
        },
        {
          "id": "12121212121",
          "partyId": 2003542,
          "pointAmount": 30,
          "userId": null,
          "userAvatarDTO": {
            "path": "4",
            "code": "000000"
          },
          "customerName": "test_name test_lastname",
          "isAuthorizedUser": null,
          "orderId": 101
        },
        {
          "id": "12121212121",
          "partyId": 2003542,
          "pointAmount": 50,
          "userId": null,
          "userAvatarDTO": {
            "path": "2",
            "code": "C62828"
          },
          "customerName": "test_name test_lastname",
          "isAuthorizedUser": null,
          "orderId": 100
        },
      ]


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


    <div className={"flex md:hidden flex-col"}>
      {data2?.map((e, index: number) => {
        return <div key={index}
                    className={"flex justify-between flex-row h-[67px] items-center py-[12px] border-b-[1px] border-[#D9D9D94D]"}
                    style={{backgroundColor: e?.isAuthorizedUser ? "#F8FAFD" : "transparent"}}>
          <div className={"flex items-center"}>
            {
              !e?.orderId ?
                  <div className={"w-[30px]"}>
                    <Image src={ICONS.rangEqual} alt={"equal arrow icon"} className={""}/></div> :
                  <p className={"mr-[7px] w-[30px]"}>{e?.orderId}.</p>
            }
            {
              !e?.orderId ?
                  <div className={"w-[30px] h-[30px] rounded-[50%] ml-[18px] bg-[#EDEEEF] "}/> :
                  <div className={"flex items-center h-full"}
                       style={{backgroundColor: e?.isAuthorizedUser ? "#F8FAFD" : "transparent"}}>
                    <div
                        className={`${e?.orderId === 1 && 'rang'} flex h-full justify-center items-center h-[43px] w-[53px]`}>
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
              !e?.orderId ?
                  <div className={"md:w-[133px] w-[80px] h-[8px] ml-[25px] rounded-[20px] bg-[#EDEEEF]"}/> :
                  <p className={"text-[#383838] h-full flex items-center pl-[18px]"}
                     style={{backgroundColor: e?.isAuthorizedUser ? "#F8FAFD" : "transparent"}}
                  >{e?.customerName}</p>
            }

          </div>
          <div>
            {
              !e?.orderId ?
                  <div className={"md:w-[133px] w-[80px] h-[8px] ml-[25px] rounded-[20px] bg-[#EDEEEF]"}/> :
                  <p className={"pr-[15px] h-full flex justify-end items-center text-dark7"}
                     style={{backgroundColor: e?.isAuthorizedUser ? "#F8FAFD" : "transparent"}}
                  >{e?.pointAmount}
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

                  </p>
            }

          </div>
        </div>
      })}
    </div>

    <Table
        className={"leaderboard hidden md:block"}
        scroll={{x: 400}}
        columns={columns}
        dataSource={data2}
        pagination={false}
        rowKey={"key"}
    />
  </>
};


export default LeaderBoard;