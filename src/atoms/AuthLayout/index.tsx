import {Colors} from '@ui';
import styles from './styles';
import {ReactNode} from 'react';
import {images} from '@assets';
import {Container} from '@molecules';
import {Image, ImageBackground, StatusBar, View} from 'react-native';

type Props = {
  children: ReactNode;
};

const AuthLayout = ({children}: Props) => {
  return (
    <ImageBackground style={styles.container} source={images.bg_light_vertical}>
      <StatusBar animated={true} backgroundColor={Colors?.primary_lightest} />
      <Container>
        <View style={styles.logoWrap}>
          <Image source={images.logo} style={styles.logo} />
        </View>
        {children}
      </Container>
    </ImageBackground>
  );
};

export default AuthLayout;
