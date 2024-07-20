import {
  ActivityIndicator,
  ImageBackground,
  RefreshControl,
  ScrollView,
  StyleProp,
  ViewStyle,
} from "react-native";
import { Colors } from "@ui";
import styles from "./styles";
import { images } from "@assets";
import { Header } from "@organisms";
import { Container, Loader, Typography } from "@molecules";
import React, { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
  title?: string;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  hasTabs?: boolean;
};

const MainTabsLayout = ({
  loading,
  children,
  title,
  style,
  hasTabs,
}: Props) => {

  return (
    <ImageBackground
      style={[styles.container, style]}
      source={images.bg_dark_vertical}
    >
      <Header />
      {loading ? (
       <Loader color={Colors?.white}/>
      ) : (
        <ScrollView
          contentContainerStyle={{
            ...(hasTabs && { flex: 1 }),
          }}
        >
          {title && (
            <Container>
              <Typography color="white" variant="h1" style={styles.mainHeading}>
                {title}
              </Typography>
            </Container>
          )}
          {children}
        </ScrollView>
      )}
    </ImageBackground>
  );
};

export default MainTabsLayout;
