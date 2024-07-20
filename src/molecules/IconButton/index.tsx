import { IconsName } from "@ts";
import React, { ReactNode } from "react";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import Icon from "../Icon";

type Props = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
};

export const IconButton = ({ style, iconStyle, children, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[style]}>
      {children}
    </TouchableOpacity>
  );
};

export default IconButton;
