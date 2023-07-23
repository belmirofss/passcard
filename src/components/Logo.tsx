import { Image } from "react-native";
import PASSCARD_ICON from "../images/PASSCARD_ICON.png";

const IMAGE_WIDTH = 125;
const HEIGHT_PROPORTION = 0.65333333333;

export const Logo = () => {
  return (
    <Image
      style={{
        width: IMAGE_WIDTH,
        height: IMAGE_WIDTH * HEIGHT_PROPORTION,
      }}
      source={PASSCARD_ICON}
    />
  );
};
