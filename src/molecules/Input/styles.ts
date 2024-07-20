import { Colors, scale, spacing, radius } from "@ui";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.S6,
    backgroundColor:Colors?.white,
    ...radius.default,
    elevation:0.7
  },
  label: {
    marginTop: spacing.S14,
    paddingHorizontal: spacing.S14,
  },
  field: {
    position: "relative",
  },
  rightIcon: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 10,
    height: "100%",
    padding: 10,
    justifyContent: "center",
  },
  input: {
    height: scale(40),
    backgroundColor: Colors.white,
    color:Colors?.secondary_darkest,
    fontSize:scale(17.5),
    paddingHorizontal: spacing.S14,
    ...radius.default,
  },
});

export default styles;
