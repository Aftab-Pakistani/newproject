import { spacing } from "@ui";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.S8,
    paddingHorizontal: spacing.S16,
  },
  noHorizontalPadding: {
    paddingHorizontal: 0,
  },
  noVerticalPadding: {
    paddingVertical: 0,
  },
});
