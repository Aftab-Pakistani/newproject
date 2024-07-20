import { styles } from "./styles";
import React, { ReactNode } from "react";
import { StyleProp, View, ViewStyle } from "react-native";

type Props = {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  noHorizontalPadding?: boolean;
  noVerticalPadding?: boolean;
};

const Section = ({ children, style, noHorizontalPadding,noVerticalPadding }: Props) => {
  return (
    <View
      style={[
        styles.container,
        style,
        noVerticalPadding && styles.noVerticalPadding,
        noHorizontalPadding && styles.noHorizontalPadding,
      ]}
    >
      {children}
    </View>
  );
};

export default Section;
