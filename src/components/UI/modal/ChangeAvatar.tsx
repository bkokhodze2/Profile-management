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
import getChosenAvatar from "../../../components/getChosenAvatar";

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

  // const getChosenAvatar = () => {
  //
  //   switch (parseInt(chosenAvatarImg)) {
  //     case 1:
  //       return IMAGES.avatar1.src
  //     case 2:
  //       return IMAGES.avatar2.src
  //     case 3:
  //       return IMAGES.avatar3.src
  //     case 4:
  //       return IMAGES.avatar4.src
  //     case 5:
  //       return IMAGES.avatar5.src
  //     case 6:
  //       return IMAGES.avatar6.src
  //     default:
  //       return IMAGES.avatar1.src
  //   }
  //
  // }

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
          width={486}>

        <div className={"flex flex w-full point-filter mt-[30px] gap-[51px]"}>
          <div className={"w-full flex flex-col overflow-hidden"}>
            <p className={"text-[#383838] text-[17px] font-bold"}>აირჩიე ავატარი</p>
            <div className={"w-full "}>
              <Avatars chosenAvatarImg={chosenAvatarImg} setChosenAvatarImg={setChosenAvatarImg}
                       chosenAvatarBg={chosenAvatarBg}/>
            </div>
            <p className={"text-[#383838] text-[17px] font-bold mt-[60px]"}>აირჩიე ფერი</p>
            <div className={"mt-[26px] flex flex-row gap-[9px] overflow-scroll w-full"}>
              <ColorsSlider chosenAvatarBg={"#" + chosenAvatarBg} setChosenAvatarBg={setChosenAvatarBg}/>
            </div>
            <button type={"submit"}
                    onClick={() => saveAvatar()}
                    className={"bg-red px-[32px] h-[48px] w-min self-end mt-[30px] rounded-xl cursor-pointer"}>
              <p className={"text-[white]"}>შენახვა</p>
            </button>
          </div>
        </div>
      </Modal>
  );
}
