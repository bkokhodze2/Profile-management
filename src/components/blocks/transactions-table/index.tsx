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
      render: (text) => <p className={"text-dark7"}>{text ? text : "no data"}</p>
    },
    {
      title: () => {
        return <p className={"text-dark text-[14px] font-[500]"}>ქულები</p>
      },
      dataIndex: 'genericTransactionValue',
      key: 'genericTransactionValue',
      render: (text) => <p
          style={{color: text.toString().includes("-") ? "#DB0060" : "#5DB039"}}>{text ? text : "no data"}</p>
    }
  ];

  return <Table
      className={"pointsTable"}
      columns={columns}
      dataSource={transactions}
      pagination={false}
      rowKey="description"
  />
};


export default TransactionsTable;