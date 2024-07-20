import {images} from '@assets';
import styles from './styles';
import {scale, spacing} from '@ui';
import {Image, View} from 'react-native';
import {Button, Icon, Section, Typography} from '@molecules';

type Props = {
  title: string;
  desc?: string;
  onpress?: any;
};

export const NotfoundConnCard = ({title, desc, onpress}: Props) => {
  return (
    <View style={[styles.container]}>
      <Image source={images.sad_emoji} style={styles.img} />
      <Section style={styles.wraptext}>
        <Typography
          color="primary_light"
          fontWeight="heavy"
          style={styles.title}>
          {title}No Connection Found
        </Typography>
        <Typography color="body" style={styles.desc}>
          {desc}You don’t have any connection. please feel free to invite
        </Typography>
      </Section>
      <Button
        basic
        size="large"
        label="ADD CONNECTION"
        style={{marginTop: spacing.S16, width: '65%'}}
        leftComponent={
          <Icon name="Plus" width={scale(18)} height={scale(18)} />
        }
      />
    </View>
  );
};

export default NotfoundConnCard;
