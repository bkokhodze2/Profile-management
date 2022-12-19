import Image from "next/image";
import ColorsSlider from "../slider/colors";
import {Modal, notification} from "antd";
import React, {useEffect, useState} from "react";
// @ts-ignore
import {ICONS, IMAGES} from "public/images";
import axios from "axios";
import {getUserInfo} from "../../slices/userSlice";
import {useDispatch, useSelector} from "react-redux";
import Avatars from "../slider/avatars";

export default function ChangeAvatar2({isOpenChooseModal, setIsOpenChooseModal}) {
  const baseApi = process.env.baseApi;
  const userInfo = useSelector((state: any) => state.user.userInfo);
  const dispatch = useDispatch();

  const [chosenAvatarImg, setChosenAvatarImg] = useState<string>(userInfo?.avatar?.path);
  const [chosenAvatarBg, setChosenAvatarBg] = useState<string>(userInfo?.avatar?.code);

  useEffect(() => {
    setChosenAvatarImg(userInfo?.avatar?.path)
    setChosenAvatarBg(userInfo?.avatar?.code)
  }, [userInfo])


  const handleCancel = () => {
    setIsOpenChooseModal(false)
  }

  const getChosenAvatar = () => {

    switch (parseInt(chosenAvatarImg)) {
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
      default:
        return IMAGES.avatar1.src
    }

  }

  const saveAvatar = () => {
    axios.post(`${baseApi}/user/user/upload-avatar?path=${chosenAvatarImg}&colorCode=${chosenAvatarBg}&userId=${userInfo?.details?.id}`
    ).then((res) => {
      // @ts-ignore
      dispatch(getUserInfo())
      setIsOpenChooseModal(false)
      notification['success']({
        message: 'ავატარი წამრატებით შეიცვალა',
      });

    })
  }

  return (
      <Modal
          className={"codeModel"}
          open={isOpenChooseModal}
          onCancel={handleCancel}
          footer={""}
          title={""}
          width={768}>

        <div className={"flex flex w-full point-filter mt-[30px] gap-[51px]"}>
          <div
              className={"w-[300px] shrink-0 h-[300px] rounded-[50%] pt-[20px] pb-[20px] flex items-center justify-center relative"}
              style={{
                transition: "0.5s",
                backgroundColor: "#" + chosenAvatarBg
              }}
          >
            <Image src={getChosenAvatar()} alt={"avatar"} width={300} height={300}
                   style={{objectFit: "cover", height: "100%", width: "auto"}}/>

          </div>
          <div className={"w-full flex flex-col overflow-hidden"}>
            <p className={"mt-[18px] text-[#383838] text-[17px] font-bold"}>Choose Avatar</p>
            <div className={"w-full "}>
              <Avatars chosenAvatarImg={chosenAvatarImg} setChosenAvatarImg={setChosenAvatarImg}  chosenAvatarBg={chosenAvatarBg}/>
            </div>
            {/*<div className={"mt-[26px] grid gap-5 grid-cols-3 w-max"}>*/}
            {/*  <div*/}
            {/*      onClick={() => setChosenAvatarImg("1")}*/}
            {/*      className={"w-[77px] h-[77px] relative flex items-center justify-center rounded-[50%] py-[5px] cursor-pointer"}*/}
            {/*      style={{*/}
            {/*        transition: "0.5s",*/}
            {/*        backgroundColor: chosenAvatarImg === "1" ? "#D9D9D9" : "transparent"*/}
            {/*      }}>*/}
            {/*    <Image src={IMAGES.avatar1.src} quality={100} alt={"avatar"}*/}
            {/*           width={77} height={77}*/}
            {/*           style={{objectFit: "cover", height: "100%", width: "auto"}}/>*/}
            {/*  </div>*/}
            {/*  <div*/}
            {/*      onClick={() => setChosenAvatarImg("2")}*/}
            {/*      style={{*/}
            {/*        transition: "0.5s",*/}
            {/*        backgroundColor: chosenAvatarImg === "2" ? "#D9D9D9" : "transparent"*/}
            {/*      }}*/}
            {/*      className={"w-[77px] h-[77px] relative flex items-center justify-center rounded-[50%] py-[5px] cursor-pointer"}>*/}
            {/*    <Image src={IMAGES.avatar2.src} quality={100} alt={"avatar"}*/}
            {/*           width={77} height={77}*/}
            {/*           style={{objectFit: "cover", height: "100%", width: "auto"}}/>*/}
            {/*  </div>*/}
            {/*  <div*/}
            {/*      onClick={() => setChosenAvatarImg("3")}*/}
            {/*      className={"w-[77px] h-[77px] relative flex items-center justify-center rounded-[50%] py-[5px] cursor-pointer"}*/}
            {/*      style={{*/}
            {/*        transition: "0.5s",*/}
            {/*        backgroundColor: chosenAvatarImg === "3" ? "#D9D9D9" : "transparent"*/}
            {/*      }}*/}
            {/*  >*/}
            {/*    <Image src={IMAGES.avatar3.src} quality={100} alt={"avatar"}*/}
            {/*           width={77} height={77}*/}
            {/*           style={{objectFit: "cover", height: "100%", width: "auto"}}/>*/}
            {/*  </div>*/}
            {/*  <div*/}
            {/*      onClick={() => setChosenAvatarImg("4")}*/}
            {/*      className={"w-[77px] h-[77px] relative flex items-center justify-center rounded-[50%] py-[5px] cursor-pointer"}*/}
            {/*      style={{*/}
            {/*        transition: "0.5s",*/}
            {/*        backgroundColor: chosenAvatarImg === "4" ? "#D9D9D9" : "transparent"*/}
            {/*      }}*/}
            {/*  >*/}
            {/*    <Image src={IMAGES.avatar4.src} quality={100} alt={"avatar"}*/}
            {/*           width={77} height={77}*/}
            {/*           style={{objectFit: "cover", height: "100%", width: "auto"}}/>*/}
            {/*  </div>*/}
            {/*  <div*/}
            {/*      onClick={() => setChosenAvatarImg("5")}*/}
            {/*      className={"w-[77px] h-[77px] relative flex items-center justify-center rounded-[50%] py-[5px] cursor-pointer"}*/}
            {/*      style={{*/}
            {/*        transition: "0.5s",*/}
            {/*        backgroundColor: chosenAvatarImg === "5" ? "#D9D9D9" : "transparent"*/}
            {/*      }}*/}
            {/*  >*/}
            {/*    <Image src={IMAGES.avatar5.src} quality={100} alt={"avatar"}*/}
            {/*           width={77} height={77}*/}
            {/*           style={{objectFit: "cover", height: "100%", width: "auto"}}/>*/}
            {/*  </div>*/}
            {/*  <div*/}
            {/*      onClick={() => setChosenAvatarImg("6")}*/}
            {/*      className={"w-[77px] h-[77px] relative flex items-center justify-center rounded-[50%] py-[5px] cursor-pointer"}*/}
            {/*      style={{*/}
            {/*        transition: "0.5s",*/}
            {/*        backgroundColor: chosenAvatarImg === "6" ? "#D9D9D9" : "transparent"*/}
            {/*      }}*/}
            {/*  >*/}
            {/*    <Image src={IMAGES.avatar6.src} quality={100} alt={"avatar"}*/}
            {/*           width={77} height={77}*/}
            {/*           style={{objectFit: "cover", height: "100%", width: "auto"}}/>*/}
            {/*  </div>*/}
            {/*</div>*/}
            <p className={"mt-[18px] text-[#383838] text-[17px] font-bold mt-[65px]"}>Choose Background</p>

            <div className={"mt-[26px] flex flex-row gap-[9px] overflow-scroll w-full"}>
              <ColorsSlider chosenAvatarBg={"#" + chosenAvatarBg} setChosenAvatarBg={setChosenAvatarBg}/>
            </div>

            <button type={"submit"}
                    onClick={() => saveAvatar()}
                    className={"bg-red px-[32px] h-[48px] w-min self-end mt-[6px] rounded-xl cursor-pointer"}>
              <p className={"text-[white]"}>შენახვა</p>
            </button>
          </div>
        </div>
      </Modal>
  );
}
