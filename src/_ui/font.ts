import { fonts } from "./typography";

export const font = {
  heading: "Medium",
  body: "normal",
  bold: "bold",
  semibold: "semibold",
  light: "light",
};

export const fontWeight = {
  heading: { fontFamily: fonts.Bold },
  body: { fontFamily: fonts.Regular },
  bold: { fontFamily: fonts.Bold },
  light: { fontFamily: fonts.Light },
  semibold: { fontFamily: fonts.Semibold },
};
