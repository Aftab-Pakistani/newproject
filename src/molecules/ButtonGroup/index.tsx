import React, { ReactNode } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import styles from "./styles";

type Props = {
  children: ReactNode;
  nomargin?: boolean;
  style?: StyleProp<ViewStyle>;
};

const ButtonGroup = ({ children, nomargin, style }: Props) => {
  return (
    <View style={[styles.container, style, nomargin && { marginVertical: 0 }]}>
      {children}
    </View>
  );
};

export default ButtonGroup;
