import {Button, Icon, Section, Typography} from '@molecules';
import {Image, View} from 'react-native';
import styles from './styles';
import {scale, spacing} from '@ui';
import {images} from '@assets';

type Props = {
  title: string;
  desc?: string;
  onpress?: any;
};

export const ConnTopCard = ({title, desc, onpress}: Props) => {
  return (
    <View>
      <View style={styles.wrap}>
        <Section noHorizontalPadding noVerticalPadding>
          <Typography color="white" fontWeight="heavy" style={styles.title}>
            Connections
          </Typography>
            <Typography
              color="white"
              style={styles.text2}>
              1,200
            </Typography>
        </Section>
        <View style={styles.plusBtn}>
          <Icon
            name="Plus"
            width={scale(30)}
            height={scale(30)}
            style={styles.plus}
          />
        </View>
      </View>
    </View>
  );
};

export default ConnTopCard;
