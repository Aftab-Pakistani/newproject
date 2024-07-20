import React from "react";
import styles from "./styles";
import { View } from "react-native";
import Typography from "../Typography";
import { MainAppStackTypes } from "@ts";

type Props = {
  title: string;
  viewAll?: MainAppStackTypes;
  noHorizontalPadding?: boolean;
};

function SectionHeader({ title, viewAll, noHorizontalPadding }: Props) {
  return (
    <View
      style={[
        styles.container,
        noHorizontalPadding && { paddingHorizontal: 0 },
      ]}
    >
      <Typography
        variant="h5"
        style={{
          marginBottom: 0,
        }}
        color="white"
      >
        {title}
      </Typography>
    </View>
  );
}

export default SectionHeader;
