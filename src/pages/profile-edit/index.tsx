import Head from 'next/head';
import Image from 'next/image';
// @ts-ignore
import {ICONS, IMAGES} from "public/images";
import Layout from "../../components/layouts/profile-layout";
// @ts-ignore
import {userBgIcon} from "/public/images/icons";
// @ts-ignore
import Cards from "/public/images/icons/nav/navCards";
// @ts-ignore
import Points from "/public/images/icons/nav/navPoints";
// @ts-ignore// @ts-ignore
import React, {useEffect, useState} from "react";
import TicketItem from "../../components/blocks/ticket-item";
import {DatePicker, Form, Input, Modal, Rate, Select} from "antd";
import Button from "../../components/UI/button";
import dayjs from 'dayjs';
import _ from "lodash";
import weekday from "dayjs/plugin/weekday"
import localeData from "dayjs/plugin/localeData"
import ChangeAvatar from "../../components/UI/modal/ChangeAvatar";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {getUserInfo} from "../../components/slices/userSlice";

dayjs.extend(weekday)
dayjs.extend(localeData)
const dateFormat = 'YYYY-MM-DD';

interface ICity {
  id: number,
  title: string,

}

export default function Profile() {
  const baseApi = process.env.baseApi;


  const [isDisabledEmail, setIsDisabledEmail] = useState<boolean>(true);
  const [cities, setCities] = useState<ICity[]>([
    {
      "id": 1,
      "title": "Abasha"
    },
    {
      "id": 2,
      "title": "Adigeni"
    }

  ]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isOpenChooseModal, setIsOpenChooseModal] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const userInfo = useSelector((state: any) => state.user.userInfo);
  const [profileForm] = Form.useForm();
  const [codeForm] = Form.useForm();
  const {Option} = Select;
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`${baseApi}/user/municipalities`).then((res) => {
      setCities(res.data)
    })
    profileForm.resetFields();

  }, [userInfo])


  const getNumber = (type: string) => {
    let ifPhoneExist = userInfo?.details?.contactInfos?.filter((e) => {
      return e?.contactInfoType === "phone"
    })

    if (type === 'value') {
      return _.get(ifPhoneExist, '[0].value', null)
    } else if (type === "id") {
      return _.get(ifPhoneExist, '[0].id', null)
    }

  }

  const getEmail = (type: string) => {
    let ifEmailExist = userInfo?.details?.contactInfos?.filter((e) => {
      return e?.contactInfoType === "mail"
    })

    if (type === 'value') {
      return _.get(ifEmailExist, '[0].value', null)
    } else if (type === "id") {
      return _.get(ifEmailExist, '[0].id', null)
    }

  }


  // {
  //   "legalAddress":{
  //   "municipality":{
  //     "id": 80
  //   },
  //   "address": "AAAAA qucha 7"
  // },
  //   "physicalAddress":{
  //   "municipality":{
  //     "id": 80
  //   },
  //   "address": "BBBB 5"
  // }
  // }


  const onFinish = (fieldsValue: any) => {

    const values = {
      ...fieldsValue,
      'personDob': fieldsValue['personDob']?.format('YYYY-MM-DD'),
      uuid: fieldsValue['personalId'],
      userAddress:
          {
            legalAddress: {
              municipality: {
                id: userInfo?.details?.legalAddress?.municipality?.id ? userInfo?.details?.legalAddress?.municipality?.id : 1
              },
              address: userInfo?.details?.legalAddress?.municipality?.address ? userInfo?.details?.legalAddress?.municipality?.address : "test"
            },
            physicalAddress: {
              municipality: {
                id: fieldsValue['city']
              },
              address: fieldsValue['address']
            }
          }

      // {
      //   "legalAddress": null,
      //   "physicalAddress": {
      //     "id": null, //cvladi
      //     "municipalityId": fieldsValue['city'],
      //     "municipality": {
      //       "id": null,
      //       "title": null
      //     },
      //     "address": fieldsValue['address']
      //   }
      // }

      ,
      contactInfos: [
        {
          id: getNumber('id'),
          prefix: "995",
          value: fieldsValue['phone']?.toString(),
          info: "my phone number",
          contactInfoType: "phone",
          contactInfoTag: "main",
          serviceType: "personal"
        },
        {
          id: getEmail('id'),
          prefix: "mail",
          value: fieldsValue['email']?.toString(),
          info: "my mail ",
          contactInfoType: "mail",
          contactInfoTag: "work",
          serviceType: "personal"
        }
      ]
    };

    // !userInfo?.details?.legalAddress?.municipality?.id && delete values.userAddress.legalAddress

    delete values.email;
    delete values.phone;
    delete values.address;
    delete values.city;

    axios.put(`${baseApi}/user/user/${userInfo?.details?.id}`, values)
        .then((res) => {
          console.log("resss", res)
          // @ts-ignore
          dispatch(getUserInfo())
          setIsOpenChooseModal(false)

        })

    console.log("values", values)

  };

  const onFinishCode = (values) => {
    console.log("codeval", values)
  }

  const openCodeModal = () => {
    setIsModalOpen(true)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const getChosenAvatar = () => {

    switch (parseInt(userInfo?.avatar.path)) {
      case 1:
        return IMAGES.avatar1.src
      case 2:
        return IMAGES.avatar2.src
      case 3:
        return IMAGES.avatar3.src
      case 4:
        return IMAGES.avatar4.src
      case 5:
        return IMAGES.avatar5.src
      case 6:
        return IMAGES.avatar6.src
      default :
        return IMAGES.avatar1.src
    }

  }


  return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app"/>
          <link rel="icon" href="/public/favicon.ico"/>
        </Head>
        <Modal
            className={"codeModel"}
            open={isModalOpen}
            onCancel={handleCancel}
            footer={""}
            title={""}
            width={487}>
          <p className={"text-[24px] text-dark font-bold"}>ელ-ფოსტის შეცვლა</p>
          <div className={"p-[25px] mt-[42px] pt-0 pb-0"}>
            <p className={"text-dark6 text-[14px]"}>
              ერთჯერადი კოდი გამოგზავნილია
              მითითებულ მეილზე , გთხოვთ გადაამოწმოთ.</p>
            <Form
                className={"w-full col-span-2 point-filter"}
                form={codeForm}
                layout="vertical"
                onFinish={onFinishCode}
            >
              <div className={"flex flex-col w-full point-filter mt-[21px]"}>
                <Form.Item label="ერთჯერადი კოდი" name={"code"}
                           rules={[
                             {
                               required: true,
                               message: "ველი სავალდებულოა"
                             }
                           ]}
                >
                  <Input
                      type={"number"}
                      placeholder="შეიყვანე ერთჯერადი კოდი"/>
                </Form.Item>
                {error && <p className={"text-red"}>კოდი არასწორია,სცადეთ თავიდან</p>}

                <button type={"submit"}
                        className={"bg-red px-[32px] h-[48px] w-min self-end mt-[6px] rounded-xl cursor-pointer"}>
                  <p className={"text-[white]"}>შეინახე</p>
                </button>

              </div>
            </Form>

          </div>

        </Modal>

        <ChangeAvatar setIsOpenChooseModal={setIsOpenChooseModal} isOpenChooseModal={isOpenChooseModal}/>

        <div className={"w-full"}>

          <h2 className={"text-[32px] text-[#383838] font-bold"}>
            პერსონალური ინფორმაცია
          </h2>

          <div className={"gap-x-[30px] grid grid-cols-3 h-[2000px] mt-[40px]"}>
            <div className={""}>
              <div
                  className={"bg-red py-[10px] rounded-xl relative w-auto cursor-pointer h-[312px] justify-center items-center"}
                  onClick={() => setIsOpenChooseModal(true)}
                  style={{
                    transition: "0.5s",
                    backgroundColor: "#" + userInfo?.avatar?.code
                  }}
              >
                <Image src={getChosenAvatar()}
                       alt={"profile avatar"}
                       layout={"contain"}
                       width={312}
                       height={312}
                       style={{height: "100%", width: "auto", objectFit: "cover", margin: "auto"}}
                />

              </div>
              <p className={"text-dark6 mt-[14px] text-[14px]"}>ავატარის შესაცვლელად დააკლიკე ფოტოს</p>
            </div>

            <Form
                className={"w-full col-span-2 point-filter profileInputs"}
                form={profileForm}
                layout="vertical"
                // onChange={onFinish}
                initialValues={{
                  firstName: userInfo?.details?.firstName,
                  email: getEmail('value'),
                  personDob: userInfo?.details?.personDob ? dayjs(userInfo?.details?.personDob, dateFormat) : dayjs("2000-01-01", dateFormat),
                  city: userInfo?.details?.physicalAddress?.municipality?.id,
                  personalId: userInfo?.details?.personalId,
                  lastName: userInfo?.details?.lastName,
                  phone: getNumber('value'),
                  gender: userInfo?.details?.gender,
                  address: userInfo?.details?.physicalAddress?.address
                }}
                onFinish={onFinish}
            >
              <div className={"grid grid-cols-2 gap-x-[30px] "}>
                <div className={"space-y-[30px]"}>
                  <Form.Item label="სახელი" name={"firstName"}
                             rules={[
                               {
                                 required: true,
                                 message: "ველი სავალდებულოა"
                               }
                             ]}
                  >
                    <Input
                        placeholder="სახელი"/>
                  </Form.Item>

                  {/*{*/}
                  {/*  isDisabledEmail ? <div className={"w-full"} onClick={() => openCodeModal()}>*/}
                  {/*    <p className={"text-[#38383899] text-[14px] mb-1"}>ელ.ფოსტა</p>*/}
                  {/*    <div*/}
                  {/*        className={"bg-[white] w-full rounded-xl flex items-center pl-6 h-[48px]"}>*/}
                  {/*      d*/}
                  {/*    </div>*/}
                  {/*  </div> : <Form.Item*/}
                  {/*      label="ელ.ფოსტა"*/}
                  {/*      name={"email"}*/}
                  {/*      rules={[*/}
                  {/*        {*/}
                  {/*          type: 'email',*/}
                  {/*          message: 'ემაილი არ არის ვალიდური'*/}
                  {/*        },*/}
                  {/*        {*/}
                  {/*          required: true,*/}
                  {/*          message: "ველი სავალდებულოა"*/}
                  {/*        }*/}
                  {/*      ]}*/}
                  {/*  >*/}
                  {/*    <Input*/}
                  {/*        placeholder="ელ.ფოსტა"/>*/}
                  {/*  </Form.Item>*/}
                  {/*}*/}

                  <Form.Item
                      label="ელ.ფოსტა"
                      name={"email"}
                      rules={[
                        {
                          type: 'email',
                          message: 'ემაილი არ არის ვალიდური'
                        },
                        {
                          required: true,
                          message: "ველი სავალდებულოა"
                        }
                      ]}
                  >
                    <Input
                        placeholder="ელ.ფოსტა"/>
                  </Form.Item>


                  <Form.Item label="დაბადების თარიღი" name={"personDob"} rules={[
                    {
                      required: true,
                      message: "ველი სავალდებულოა"
                    }
                  ]}>

                    <DatePicker
                        // defaultValue={dayjs('2015-01-01', dateFormat)}
                        format={dateFormat}
                        placeholder={"დაბადების თარიღი"}/>

                  </Form.Item>

                  <Form.Item
                      name="city"
                      label="ქალაქი"
                      rules={[
                        {
                          required: true,
                          message: "ველი სავალდებულოა"
                        }
                      ]}

                  >
                    <Select placeholder="ქალაქი">
                      {cities?.map((item, index) => {
                        return <Option key={index} value={item?.id}>{item?.title}</Option>
                      })}

                    </Select>
                  </Form.Item>

                  <Form.Item
                      label="პირადი ნომერი"
                      name={"personalId"}
                      rules={[
                        {
                          required: true,
                          message: "ველი სავალდებულოა"
                        },
                        {
                          min: 11,
                          message: "პირადი ნომერი უნდა იყოს 11 სიმბოლო"
                        },
                        {
                          max: 11,
                          message: "პირადი ნომერი უნდა იყოს 11 სიმბოლო"
                        },
                        {
                          pattern: new RegExp("^[0-9]*$"),
                          message: "ველი უნდა შეიცავდეს მხოლოდ ციფრებს"
                        }
                      ]}
                  >
                    <Input
                        // disabled={userInfo?.details?.personalId}
                        disabled={null}
                        type={'number'}
                        placeholder="პირადი ნომერი"/>
                  </Form.Item>

                </div>
                <div className={"space-y-[30px]"}>
                  <Form.Item label="გვარი" name={"lastName"}
                             rules={[
                               {
                                 required: true,
                                 message: "ველი სავალდებულოა"
                               }
                             ]}>
                    <Input placeholder="გვარი"/>
                  </Form.Item>
                  <Form.Item label="ტელეფონის ნომერი" name={"phone"}
                             rules={[
                               {
                                 required: true,
                                 message: "ველი სავალდებულოა"
                               }
                             ]}>
                    <Input
                        placeholder="ტელეფონის ნომერი"/>
                  </Form.Item>

                  <Form.Item
                      name="gender"
                      label="სქესი"
                      rules={[
                        {
                          required: true,
                          message: "ველი სავალდებულოა"
                        }
                      ]}
                  >
                    <Select placeholder="სქესი">
                      <Option value="m">მამრობითი</Option>
                      <Option value="f">მდედრობითი</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item label="მისამართი" name={"address"}
                             rules={[
                               {
                                 required: true,
                                 message: "ველი სავალდებულოა"
                               }
                             ]}>
                    <Input
                        placeholder="მისამართი"/>
                  </Form.Item>

                </div>
              </div>

              <div className={"flex justify-between items-center mt-[30px]"}>
                <p className={"text-[14px] text-red cursor-pointer"}>პაროლის შეცვლა</p>

                <button type={"submit"} className={"bg-red px-[32px] h-[48px] rounded-xl cursor-pointer"}>
                  <p className={"text-[white]"}>შეინახე</p>
                </button>

                {/*<Button text={"შეინახე"} bgColor={"#DB0060"}/>*/}
              </div>

            </Form>

          </div>

        </div>

      </>
  )
}

Profile.getLayout = function getLayout(page: any) {
  return (
      <Layout>
        {page}
      </Layout>
  )
}