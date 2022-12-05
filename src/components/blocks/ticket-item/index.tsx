import React, {useState} from 'react';
// @ts-ignore// @ts-ignore
import Tickets from "/public/images/icons/nav/navTickets";

const TicketsItem = () => {

  const getColorByStatus = (status: string) => {

    if (status === "active") {
      return "#5DB039"
    } else if (status === "won") {
      return "#DB0060"
    } else if (status === "lost") {
      return "#9766F0"
    } else return "#383838"

  }

  return <div className={"w-full bg-[white] rounded-[16px] py-6 pl-[30px] pr-[40px]"}>
    <div className={"flex justify-between"}>
      <div className={"flex items-center"}>
        <Tickets
            color={"#383838"}/>
        <p className={"text-gray ml-[15px] text-[22px]"}>364-198-2</p>
      </div>

      <div className={"flex justify-between space-x-[80px]"}>
        <div>
          <p className={"text-dark7 text-[12px] font-[400]"}>Circulation</p>
          <p className={"text-dark text-[14px] font-[500] mt-1"}># 243</p>
        </div>
        <div>
          <p className={"text-dark7 text-[12px] font-[400]"}>Date</p>
          <p className={"text-dark text-[14px] font-[500] mt-1"}>23.10.2022</p>
        </div>
        <div>
          <p className={"text-dark7 text-[12px] font-[400]"}>Status</p>
          <p className={"text-[14px] font-[500] mt-1"}
             style={{
               // @ts-ignore
               color: getColorByStatus("lost")
             }}
          >Active</p>
        </div>
      </div>
    </div>

  </div>
};


export default TicketsItem;