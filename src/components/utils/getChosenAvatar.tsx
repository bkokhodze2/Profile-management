// @ts-ignore
import {ICONS, IMAGES} from "public/images";

const getChosenAvatar = (data) => {

  switch (parseInt(data)) {
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

export default getChosenAvatar;