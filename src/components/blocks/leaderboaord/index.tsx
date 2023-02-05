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
               style={{backgroundColor: obj?.isAuthorizedUser ? "#898fa078" : "transparent"}}>
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
          <p className={"text-[#383838] h-full flex items-center pl-[25px]"}
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

  let dataArr = [
      {
        "id": "e1e9a87b-6ff3-4477-b1c7-6114e4febef4",
        "partyId": 2003502,
        "pointAmount": 1000,
        "userId": "8c938636-bb3f-49ef-b3fe-44e542efef72",
        "userAvatarDTO": {
          "path": "2",
          "code": "651FFF"
        },
        "customerName": "dato kometiani",
        "isAuthorizedUser": false,
        "orderId": 1
      },
      {
        "id": "f4366bbe-7b0a-400d-8de6-4d5f3a79ca60",
        "partyId": 2003526,
        "pointAmount": 380,
        "userId": "f4366bbe-7b0a-400d-8de6-4d5f3a79ca60",
        "userAvatarDTO": {
          "path": "4",
          "code": "004D40"
        },
        "customerName": "ირაკლი ზანთარაია",
        "isAuthorizedUser": false,
        "orderId": 2
      },
      {
        "id": "7c8512c2-e2d6-47c1-91b1-e35c2b431d8c",
        "partyId": 2005454,
        "pointAmount": 300,
        "userId": "20001057427",
        "userAvatarDTO": {
          "path": "4",
          "code": "EA80FC"
        },
        "customerName": "nino lomidze",
        "isAuthorizedUser": false,
        "orderId": 3
      },
      {
        "id": "879ab897-1dbf-494f-8768-028ef5f6ac67",
        "partyId": 2005453,
        "pointAmount": 230,
        "userId": "11111111111",
        "userAvatarDTO": {
          "path": "5",
          "code": "C62828"
        },
        "customerName": "shako25 shako25",
        "isAuthorizedUser": false,
        "orderId": 4
      },
      {
        "id": "23214124124",
        "partyId": 2005447,
        "pointAmount": 200,
        "userId": "23214124124",
        "userAvatarDTO": {
          "path": "3",
          "code": "C62828"
        },
        "customerName": "test8 test8",
        "isAuthorizedUser": false,
        "orderId": 5
      }
  ]


  const getModifiedData = (dataArr) => {

    let data = dataArr?.sort((a, b) => a?.orderId - b?.orderId)
    let index = data?.findIndex((e) => e?.isAuthorizedUser === true);
    let find = data?.find((e) => e?.isAuthorizedUser === true);
    console.log("data", data)

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


    <div className={"flex md:hidden flex-col"}>
      {data2?.map((e, index: number) => {
        return <div key={index}
                    className={"flex justify-between flex-row h-[67px] items-center py-[12px] border-b-[1px] border-[#D9D9D94D]"}
                    style={{backgroundColor: e?.isAuthorizedUser ? "#898fa078" : "transparent"}}>
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
                       style={{backgroundColor: e?.isAuthorizedUser ? "#898fa078" : "transparent"}}>
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
                     style={{backgroundColor: e?.isAuthorizedUser ? "#898fa078" : "transparent"}}
                  >{e?.customerName}</p>
            }

          </div>
          <div>
            {
              !e?.orderId ?
                  <div className={"md:w-[133px] w-[80px] h-[8px] ml-[25px] rounded-[20px] bg-[#EDEEEF]"}/> :
                  <p className={"pr-[15px] h-full flex justify-end items-center text-dark7"}
                     style={{backgroundColor: e?.isAuthorizedUser ? "#898fa078" : "transparent"}}
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