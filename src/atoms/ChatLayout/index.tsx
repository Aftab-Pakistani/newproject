import { images } from "@assets";
import { Header } from "@organisms";
import React, { ReactNode, useState } from "react";
import {
  ImageBackground,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";
import styles from "./styles";

type Props = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

const ChatLayout = ({
  children,
  style,
}: Props) => {

  return (
    <ImageBackground
      style={[styles.container, style]}
      source={images.bg_dark_vertical}
    >
      <Header />
      <View style={{ flex: 1 }}>{children}</View>
    </ImageBackground>
  );
};

export default ChatLayout;
