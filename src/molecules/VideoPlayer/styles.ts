import { Colors, radius, scale, spacing } from "@ui";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    ...radius.default,
    overflow:"hidden",
    marginBottom:spacing.S12,
    backgroundColor:Colors.white
  },
  player: {
    height: scale(300),
  },
});
