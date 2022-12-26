import React, {useState} from 'react';
// @ts-ignore// @ts-ignore
import Tickets from "/public/images/icons/nav/navTickets";
// @ts-ignore
import {ICONS, IMAGES} from "public/images";
import {Rate} from "antd";
import Button from "../../UI/button";
import dayjs from "dayjs";

const OrderItem = ({data, evaluated, setIsModalOpen}: any) => {

  const [isEvaluated, setIsEvaluated] = useState<boolean>(evaluated);
  const dateFormat = 'DD.MM.YYYY';
  console.log("data", data)

  return <div
      className={"md:p-6 p-4 md:pr-[30px] flex flex-col ph:flex-row md:flex-col md:gap-0 gap-[18px] bg-[#F7F7F7] rounded-0 md:rounded-2xl"}>
    <div
        className={"md:order-1 order-2 w-full ph:w-[50%] md:w-full flex mb-0 md:mb-[30px] gap-[15px] md:gap-[0px] flex-col md:flex-row md:justify-between"}>
      <div className={"flex flex-row md:flex-col items-center md:items-start xl:w-[200px]"}>
        <p className={"text-[#38383899] "}>Order Id</p>
        <span className={"text-[#383838] md:text-base text-sm ml-[6px] md:ml-0"}>{data?.voucherId}</span>
      </div>
      <div className={"flex flex-row md:flex-col items-center md:items-start "}>
        <p className={"text-[#38383899] "}>Date</p>
        <span
            className={"text-[#383838] md:text-base text-sm ml-[6px] md:ml-0"}>{dayjs(data?.transactionDate).format(dateFormat).toString()}</span>
      </div>

      <div className={"flex flex-row md:flex-col items-center md:items-start "}>
        <p className={"text-[#38383899] "}>Price</p>
        <span className={"text-[#383838] md:text-base text-sm ml-[6px] md:ml-0"}>{data?.voucherPrice}</span>
      </div>

      <div className={"flex flex-row md:flex-col items-center md:items-start "}>
        <p className={"text-[#38383899]"}>Earn Point</p>
        <span className={"text-[#56971F] md:text-base text-sm ml-[6px] md:ml-0"}>{data?.earnedPoints}</span>
      </div>

    </div>

    <div className={"md:order-2 order-1 w-full ph:w-[50%] md:w-full flex flex-col md:flex-row"}>

      <div
          className={"w-full flex max-w-full min-w-full min-h-full ph:max-w-[150px] ph:max-h-[200px] ph:min-h-[114px] md:max-w-[240px] md:min-w-[240px] md:max-h-[150px] md:mr-[30px]"}>
        <img src={IMAGES.offerItem.src}
             placeholder="blur"
             alt={"product image"}
             className={"rounded-xl"}
             style={{objectFit: "cover"}}
        />
      </div>

      <div className={"flex flex-col md:flex-row justify-between items-start md:items-center w-full"}>
        <div className={"flex flex-col"}>
          <h2 className={"text-[#383838] font-bold md:text-[22px] text-base mt-4 md:mt-0"}>{data?.providerTitle}</h2>
          <p className={"text-base mt-2 text-[#38383899] max-w[464px] hidden md:flex"}>{data?.description}</p>
        </div>
        {/*<div className={"ml-0 md:ml-[30px] md:mt-0 mt-2"}>*/}
        {/*  {*/}
        {/*    isEvaluated ? <Rate disabled defaultValue={4} className={"text-[16px] min-w-[120px] h-[20px] mb-1.5"}/> :*/}
        {/*        <div onClick={() => {*/}
        {/*          setIsModalOpen(true)*/}
        {/*        }}>*/}
        {/*          <Button classes={"hidden md:flex"} bgColor={"#DB0060"} text={"კომენტარის დამატება"}*/}
        {/*                  textColor={"white"}/>*/}
        {/*          <p className={"text-[#8338EC] text-base underline flex md:hidden"}>კომენტარის დამატება</p>*/}
        {/*        </div>*/}
        {/*  }*/}
        {/*</div>*/}

      </div>
    </div>

  </div>
};


export default OrderItem;