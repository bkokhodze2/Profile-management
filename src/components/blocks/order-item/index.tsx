import React, {useState} from 'react';
// @ts-ignore
import {ICONS, IMAGES} from "public/images";
import dayjs from "dayjs";
import Link from "next/link";
import _ from "lodash";
import Image from "next/image";
import Lari from "../../../../public/images/icons/lari";

const dateFormat = 'DD.MM.YYYY';

interface IOrderItem {
  data: any;
  evaluated?: boolean;
  key?: number;
}

const OrderItem = ({data, evaluated, key}: IOrderItem) => {
      const [isEvaluated, setIsEvaluated] = useState<boolean>(evaluated);

      const getPrice = () => {
        if (!data) return; //if no data return

        if (_.get(data, 'accountTypeId', null) === 2) { // If the voucher is purchased with points
          return <div className={"flex items-center"}>
            {Math.abs(_.get(data, 'voucherPrice', null))}
            <div className={"ml-1.5 mt-[2px] flex items-center justify-center"}>
              <Image
                  src={IMAGES.coin}
                  quality={100}
                  blurDataURL={IMAGES.placeholder.src}
                  loading={"lazy"}
                  width={20}
                  height={20}
                  alt={"coin icon"}
              />
            </div>
          </div>
        } else if (_.get(data, 'accountTypeId', null) === 1) { // If the voucher is purchased with money
          return <div className={"flex items-center text-[#8338EC]"}>
            {Math.abs(_.get(data, 'voucherPrice', null))}
            <Lari color={"#8338EC"}
                  width={13.5}
                  height={14.5}
                  classes={"ml-[5px]"}/>
          </div>
        }
      }

      return <Link key={key} href={`https://vouchers.pirveli.com/company/${data?.providerTitle}/voucher/${data?.voucherId}`}
                   passHref={true}>
        <div
            key={key}
            className={"mb-[30px] md:p-5 ph:p-4 p-2 md:pr-[30px] flex flex-col ph:flex-row md:flex-col md:gap-0 gap-[18px] bg-[#F7F7F7] rounded-xl md:rounded-2xl"}>
          <div
              className={"md:order-1 order-2 w-full ph:w-[50%] md:w-full flex mb-0 md:mb-[30px] gap-[15px] md:gap-[0px] flex-col md:flex-row md:justify-between"}>
            <div className={"flex flex-row md:flex-col items-center md:items-start xl:w-[200px]"}>
              <p className={"text-[#38383899] "}>შეკვეთის აიდი</p>
              <span className={"text-[#383838] md:text-base text-sm ml-[6px] md:ml-0"}>{data?.voucherId}</span>
            </div>
            <div className={"flex flex-row md:flex-col items-center md:items-start "}>
              <p className={"text-[#38383899] "}>თარიღი</p>
              <span
                  className={"text-[#383838] md:text-base text-sm ml-[6px] md:ml-0"}>{dayjs(data?.transactionDate).format(dateFormat).toString()}</span>
            </div>

            <div className={"flex flex-row md:flex-col items-center md:items-start "}>
              <p className={"text-[#38383899] "}>ფასი</p>
              <span className={"text-[#383838] md:text-base text-sm ml-[6px] md:ml-0"}>{getPrice()}</span>
            </div>

            <div className={"flex flex-row md:flex-col items-center md:items-start "}>
              <p className={"text-[#38383899]"}>დარიცხული მონეტები</p>
              <div className={"flex "}>
                 <span
                     className={"text-red md:text-base text-sm ml-[6px] md:ml-0"}>{data?.earnedPoints && "+"} {data?.earnedPoints}</span>

                <div className={"ml-1.5 mt-[2px] flex items-center justify-center"}>
                  <Image
                      src={IMAGES.coin}
                      quality={100}
                      blurDataURL={IMAGES.placeholder.src}
                      loading={"lazy"}
                      width={18}
                      height={18}
                      alt={"coin icon"}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={"md:order-2 order-1 w-full ph:w-[50%] md:w-full flex flex-col md:flex-row"}>

            <div
                className={"w-full flex max-w-full min-w-full min-h-full ph:max-w-[150px] ph:max-h-[200px] ph:min-h-[114px] md:max-w-[240px] md:min-w-[240px] md:max-h-[150px] md:mr-[30px]"}>
              <img src={data?.imageUrl ? data?.imageUrl : IMAGES.offerItem.src}
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

      </Link>
    }
;


export default OrderItem;