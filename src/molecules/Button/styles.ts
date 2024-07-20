import { Colors, fontSize, fontWeight, radius, scale, spacing } from "@ui";
import { StyleSheet } from "react-native";

const styles: any = StyleSheet.create({
  container: {
    marginVertical: spacing.S4,
    justifyContent: "center",
    paddingHorizontal: spacing.S10,
    alignItems: "center",
    width: "100%",
    flexDirection:"row",
  },
  label: {
    color: Colors.white,
    paddingHorizontal: spacing.S10,
  },
  lightLabel: {
    color: Colors.black,
  },
  darkLabel: {
    color: Colors.primary_main,
  },

  // -------------------- Size

  // Default
  default: {
    height: scale(48),
    ...radius.default,
  },
  default_txt: {
    fontSize: fontSize.S16,
    ...fontWeight.semibold,
  },
  // large
  xlarge: {
    height: scale(58),
    ...radius.default,
  },
  xlarge_txt: {
    fontSize: fontSize.S20,
    ...fontWeight.semibold,
  },
  large: {
    height: scale(50),
    ...radius.default,
  },
  large_txt: {
    fontSize: fontSize.S19,
    ...fontWeight.semibold,
  },
  // Small
  small: {
    height: scale(40),
    ...radius.default,
  },
  small_txt: {
    fontSize: fontSize.S14,
    ...fontWeight.semibold,
  },
  // X-Small
  xsmall: {
    height: scale(33),
    ...radius.default,
  },
  xsmall_txt: {
    fontSize: fontSize.S12,
    ...fontWeight.semibold,
  },

  // -------------------- Colors
  white: {
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
  },

  basic: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: Colors.white,
  },
  basicTxt: {
    color: Colors.white,
  },
});

export default styles;
