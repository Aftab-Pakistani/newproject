import { Colors, spacing, radius, scale, getWidth, fonts } from "@ui";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.S12,
    ...radius.min,
    backgroundColor: Colors.primary_lightest2,
    paddingVertical: spacing.S12,
    paddingHorizontal: spacing.S12,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width:"100%",
    elevation:0.8
  },
  title: {
    fontSize:scale(14),
    textTransform: "capitalize",
  },
  title2: {
    textTransform: "capitalize",
    fontSize:scale(17)
  },
  desc: {
    marginTop: spacing.S4,
    fontSize:scale(17),
    color:Colors?.primary_light
  },
  input:{
    color:Colors?.black,
    width:"100%",
    fontSize:scale(17),
  },
  textareashort: {
    height: scale(110),
    ...radius.default,
    fontWeight: "700",
    fontSize:scale(14),
    textAlignVertical: "top",
    paddingVertical:spacing.S10,
    backgroundColor: Colors?.white,
  },
});

export default styles;
