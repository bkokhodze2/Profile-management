import React, {useEffect, useState} from 'react';
// @ts-ignore
import {ICONS, IMAGES} from "public/images";
import {Table} from "antd";
import {ColumnsType} from "antd/es/table";
// @ts-ignore
import Lari from '/public/images/icons/lari';
import dayjs from "dayjs";
import axios from "axios";
import {useSelector} from "react-redux";

interface DataType {
  key: string;
  description: string;
  transactionDate: number | string;
  platform: string;
  genericTransactionValue: number;
}

const dateFormat = 'DD.MM.YYYY';

const TransactionsTable = () => {
  const baseApi = process.env.baseApi;
  const userInfo = useSelector((state: any) => state.user.userInfo);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {

    if (userInfo?.details?.id) {
      axios.get(`${baseApi}/user/user/point-transactions/${userInfo?.details?.id}`).then((res) => {
        setTransactions(res.data)
      })
    }

  }, [userInfo])

  const columns: ColumnsType<DataType> = [
    {
      title: () => {
        return <p className={"text-dark text-[14px] font-[500]"}>ტრანზაქციის სახელი</p>
      },
      dataIndex: 'description',
      key: 'description',
      render: (text) => <p className={"text-dark7"}>{text}</p>,
    },
    {
      title: () => {
        return <p className={"text-dark text-[14px] font-[500]"}>თარიღი</p>
      },
      dataIndex: 'transactionDate',
      key: 'transactionDate',
      render: (text) => <p className={"text-dark7"}>{text ? dayjs(text).format(dateFormat).toString() : "no data"}</p>
    },
    {
      title: () => {
        return <p className={"text-dark text-[14px] font-[500]"}>პლატფორმა</p>
      },
      dataIndex: 'platform',
      key: 'platform',
      render: (text) => <p className={"text-dark7"}>{text ? text : "pirveli.com"}</p>
    },
    {
      title: () => {
        return <p className={"text-dark text-[14px] font-[500]"}>ქულები</p>
      },
      dataIndex: 'genericTransactionValue',
      key: 'genericTransactionValue',
      render: (text) => <p
          style={{color: text?.toString()?.includes("-") ? "#DB0060" : "#5DB039"}}>{text ? text : "no data"}</p>
    }
  ];

  return <>
    <div className={"flex flex-col md:hidden"}>
      {
        transactions?.map((e: any, index: number) => {
          return <div key={index}
                      className={"w-full flex flex-row justify-between py-[12px] border-b-[1px] border-[#D9D9D94D]"}>
            <div className={"flex flex-col items-start"}>
              <p className={"text-dark7 mb-1 text-[14px]"}>{dayjs(e?.transactionDate)?.format(dateFormat)?.toString()}</p>
              <p className={"text-[#383838] text-[14px]"}>{e?.description}</p>
            </div>
            <div className={"flex flex-col items-end"}>
              <p className={"text-dark7 mb-1 text-[14px]"}>{e?.platform ? e?.platform : "pirveli.com"}</p>
              <p className={"text-[14px]"}>{e?.genericTransactionValue}</p>
            </div>
          </div>
        })
      }
      <p className={"text-center text-[#7B92DC] text-[14px] mt-3 mb-3"}>იხილეთ მეტი</p>
    </div>
    <Table
        className={"pointsTable md:block hidden"}
        columns={columns}
        dataSource={transactions}
        pagination={false}
        rowKey="description"
    />
  </>
};


export default TransactionsTable;