import {Button, ButtonGroup, Container, Icon, Typography} from '@molecules';
import {TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Colors, radius, scale, spacing} from '@ui';

type Props = {
  title: string;
  desc?: string;
  onpress?: any;
  search?: boolean;
  textarea?: boolean;
  icon?: boolean;
  onchangeText?: any;
  searchValue?: string;
};

export const PendingRequestCard = ({
  title,
  desc,
  onpress,
  search,
  onchangeText,
  searchValue,
  textarea,
  icon,
  ...rest
}: Props) => {
  return (
    <View style={[styles.container]}>
      <View>
        <Typography color="white" style={styles.title}>
          <Typography color="white" fontWeight="heavy" style={styles.title}>
            @omar{' '}
          </Typography>
          {title}sent you a new connection request
        </Typography>
        <Typography color="primary_light" style={styles.title2}>
          {title}12 July, 2024
        </Typography>
      </View>
      <ButtonGroup style={{flexDirection: 'row', width: '65%'}}>
        <Button
          label="ACCEPT"
          color="white"
          dark
          style={{width: '47%', ...radius.max}}
        />
        <Button
          label="DECLINE"
          color="white"
          basic
          style={{width: '47%', marginLeft: spacing.S10, ...radius.max}}
        />
      </ButtonGroup>
    </View>
  );
};

export default PendingRequestCard;
