import {Button, Icon, Typography} from '@molecules';
import {View} from 'react-native';
import styles from './styles';
import {spacing} from '@ui';

type Props = {
  title: string;
  desc?: string;
  onpress?: any;
};

export const InvitationCard = ({title, desc, onpress}: Props) => {
  return (
    <View style={[styles.container]}>
      <View style={styles.inner}>
        <Icon name={'SuccesCheck'} width={61} height={61} />
        <Typography color="success" fontWeight="heavy" style={styles.title}>
          {title}dsdsdsd
        </Typography>
        <Typography color="body" style={styles.desc}>
          {desc}We’ve sent an email with verification guide.
        </Typography>
      </View>
      <Button
        label="INVITE MORE"
        size="xlarge"
        basic
        style={{marginTop: spacing.S26}}
      />
    </View>
  );
};

export default InvitationCard;
