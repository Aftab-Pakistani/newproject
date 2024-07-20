import {
  ImageBackground,
  RefreshControl,
  ScrollView,
  StyleProp,
  ViewStyle,
} from "react-native";
import styles from "./styles";
import { images } from "@assets";
import { Button, Loader } from "@molecules";
import React, { ReactNode, useState } from "react";

type Props = {
  loading?: boolean;
  btnloading?: boolean;
  btndisable?: boolean;
  children: ReactNode;
  btntitle?: string;
  onpress?: any;
  onRefresh?: () => void;
  style?: StyleProp<ViewStyle>;
  hasTabs?: boolean;
};

const ProfileLayout = ({
  onpress,
  loading,
  btnloading,
  btndisable,
  children,
  btntitle,
  style,
  hasTabs,
  onRefresh,
}: Props) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefreshStart = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      onRefresh && onRefresh();
    }, 500);
  }, []);

  return (
    <ImageBackground
      style={[styles.container, style]}
      source={images.bg_dark_vertical}
    >
      <ScrollView
        contentContainerStyle={{
          ...(hasTabs && { flex: 1 }),
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefreshStart} />
        }
      >
        {loading ? <Loader color="white" /> : <>{children}</>}
      </ScrollView>
      {!loading && <Button
        size="large"
        label={btntitle}
        onPress={onpress}
        loading={btnloading}
        disabled={btndisable}
        style={{ position: "absolute", bottom: 0 }}
      />}
    </ImageBackground>
  );
};

export default ProfileLayout;
