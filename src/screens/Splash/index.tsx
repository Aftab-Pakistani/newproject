import {Colors} from '@ui';
import styles from './styles';
import {images} from '@assets';
import {useEffect} from 'react';
import {MainAppStackTypes} from '@ts';
import {useNavigationHooks} from '@hooks';
import {ss, useSharedState} from '@helper';
import {Image, ImageBackground, StatusBar} from 'react-native';

const Splash = () => {
  const {replace} = useNavigationHooks<MainAppStackTypes>();
  const [user, setUser] = useSharedState(ss.user, null);

  useEffect(() => {
    if (true) {
      replace('AuthStack');
    } else {
      replace('BottomTabs');
    }
  }, [user]);

  return (
    <ImageBackground source={images.bg_dark_vertical} style={styles.container}>
      <StatusBar animated={true} backgroundColor={Colors?.primary_light} />
      <Image source={images.splash_logo} style={styles.logo} />
    </ImageBackground>
  );
};

export default Splash;
