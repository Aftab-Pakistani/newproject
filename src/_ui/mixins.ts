import { Dimensions, PixelRatio } from "react-native";

const WINDOW_WIDTH = Dimensions.get("window").width;
const guidelineBaseWidth = 390;

export const scaleSize = (size: number) =>
  (WINDOW_WIDTH / guidelineBaseWidth) * size;
export const scaleFont = (size: number) => size * PixelRatio.getFontScale();

export function boxShadow(
  radius: number = 10,
  opacity: number = 0.1,
  color: string = "black",
  offset: any = { height: 0, width: 0 }
) {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
}
