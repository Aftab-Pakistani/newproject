import {Container, Icon, IconButton} from '@molecules';
import {scale} from '@ui';
import styles from './styles';
import {useNavigationHooks} from '@hooks';
import {TouchableOpacity, View} from 'react-native';
import {MainAppStackTypes} from '@ts';

type Props = {};

const Header = ({}: Props) => {
  const {navigate} = useNavigationHooks<MainAppStackTypes>();
  const navigateToHome = () => {
    navigate('Home');
  };
  const navigateTomenu = () => {
    navigate('Menus');
  };
  const navigateToProfile = () => {
    navigate('Profile');
  };

  return (
    <Container style={styles.container}>
      <View style={styles.logoWrap}>
        <TouchableOpacity onPress={() => navigateToHome()}>
          <Icon name="Logo" />
        </TouchableOpacity>
      </View>
      <View style={styles.headerRight}>
        <IconButton onPress={() => navigateToProfile()}>
          <Icon
            name="ProfileIcon"
            width={scale(27)}
            height={scale(27)}
            style={styles.logout}
          />
        </IconButton>
        <TouchableOpacity style={styles.hamburger} onPress={navigateTomenu}>
          <Icon
            name="Hamburger"
            width={scale(27)}
            height={scale(27)}
            style={styles.logout}
          />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Header;
