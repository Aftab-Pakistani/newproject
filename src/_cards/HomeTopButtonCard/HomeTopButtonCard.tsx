import {Button, ButtonGroup, Icon, Section, Typography} from '@molecules';
import {Image, View} from 'react-native';
import styles from './styles';
import {scale, spacing} from '@ui';
import {images} from '@assets';

type Props = {
  title: string;
  desc?: string;
  onpress?: any;
};

export const HomeTopButtonCard = ({title, desc, onpress}: Props) => {
  return (
    <ButtonGroup
      style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <View style={styles.arrowbtn}>
        <Icon name="ArrowUp" width={scale(20)} height={scale(20)} />
        <Typography
          color="primary_main"
          fontWeight="heavy"
          style={styles.arrowText}>
          SEND
        </Typography>
      </View>
      <View style={styles.arrowbtn}>
        <Icon name="ArrowDown" width={scale(20)} height={scale(20)} />
        <Typography
          color="primary_main"
          fontWeight="heavy"
          style={styles.arrowText}>
          REQUEST
        </Typography>
      </View>
    </ButtonGroup>
  );
};

export default HomeTopButtonCard;
