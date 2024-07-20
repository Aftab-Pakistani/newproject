import React, { ReactNode } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import styles from "./styles";
import { images } from "@assets";
import { Container, Typography } from "@molecules";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

type Props = {
  children: ReactNode;
  heading?: string;
  description?: string;
  disableScroll?: boolean;
  buttons?: ReactNode;
  faceidButton?: ReactNode;
};

const FormLayout = ({ children, heading,description, disableScroll, buttons,faceidButton }: Props) => {
  return (
    <View style={styles.container}>
      <Typography fontWeight="heavy" variant="h1" color="primary_main">
        {heading}
      </Typography>
      <Typography color="body" variant="h5">
        {description}
      </Typography>
      <KeyboardAwareScrollView
        scrollEnabled={!disableScroll}
        showsVerticalScrollIndicator={false}
      >
        {children}
        {buttons}
        {faceidButton}
      </KeyboardAwareScrollView>
    </View>
  );
};

export default FormLayout;
