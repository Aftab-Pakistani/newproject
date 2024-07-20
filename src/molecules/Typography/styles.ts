import { fonts, scale, spacing } from "@ui";
import { StyleSheet } from "react-native";

const styles: any = StyleSheet.create({
  container: {},
  regular: {
    fontFamily: fonts.Regular,
  },
  light: {
    fontFamily: fonts.Light,
  },
  bold: {
    fontFamily: fonts.Bold,
  },
  semibold: {
    fontFamily: fonts.Semibold,
  },
  heavy: {
    fontFamily: fonts.Heavy,
  },
  noMargin: {
    margin: 0,
  },
  noMarginBottom: {
    marginBottom: 0,
  },
  noPadding: {
    padding: 0,
  },
  noPaddingBottom: {
    paddingBottom: 0,
  },
});

export default styles;
