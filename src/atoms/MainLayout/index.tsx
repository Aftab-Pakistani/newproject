import {
  ImageBackground,
  RefreshControl,
  ScrollView,
  StatusBar,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {Colors} from '@ui';
import styles from './styles';
import {images} from '@assets';
import {Header} from '@organisms';
import React, {ReactNode, useState} from 'react';
import {Container, Loader, Typography} from '@molecules';

type Props = {
  children: ReactNode;
  title?: string;
  loading?: boolean;
  onRefresh?: () => void;
  style?: StyleProp<ViewStyle>;
  hasTabs?: boolean;
};

const MainLayout = ({
  loading,
  children,
  title,
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
      source={images.bg_light_vertical}>
      <StatusBar animated={true} backgroundColor={Colors?.primary_main} />
      <Header />
      {loading ? (
        <Loader color={Colors?.white} />
      ) : (
        <ScrollView
          overScrollMode={'never'}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            ...(hasTabs && {flex: 1}),
          }}
          refreshControl={
            <RefreshControl
            onRefresh={onRefreshStart}
            refreshing={refreshing}
            />
          }>
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

export default MainLayout;
