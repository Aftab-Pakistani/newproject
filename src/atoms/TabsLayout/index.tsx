import { StyleProp, ViewStyle, ScrollView, RefreshControl } from "react-native";
import { Button, Loader } from "@molecules";
import React, { ReactNode, useState } from "react";

type Props = {
  loading?: boolean;
  setRef?: any;
  children: ReactNode;
  title?: string;
  onRefresh?: () => void;
  style?: StyleProp<ViewStyle>;
  hasTabs?: boolean;
  btndisable?: boolean;
  btntitle?: string;
  btnonpress?: any;
  btnloading?: boolean;
};

const TabsLayout = ({
  loading,
  children,
  style,
  setRef,
  btndisable,
  btntitle,
  btnonpress,
  btnloading,
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
    <>
      <ScrollView
        ref={(ref) => {
          setRef && setRef(ref);
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefreshStart} />
        }
      >
        {loading ? <Loader color="white" /> : <>{children}</>}
      </ScrollView>
      {btnonpress && (
        <Button
          size="large"
          label={btntitle}
          onPress={btnonpress}
          loading={btnloading}
          disabled={btndisable}
          style={{ position: "absolute", bottom: 0 }}
        />
      )}
    </>
  );
};

export default TabsLayout;
