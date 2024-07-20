import {Icon, Typography} from '@molecules';
import {
  StyleProp,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import styles from './styles';
import {Colors, scale} from '@ui';

type Props = {
  title: string;
  desc?: string;
  onpress?: any;
  search?: boolean;
  textarea?: boolean;
  icon?: boolean;
  onchangeText?: any;
  searchValue?: string;
  style?: StyleProp<ViewStyle>;
};

export const ContextTitleCard = ({
  title,
  desc,
  onpress,
  search,
  onchangeText,
  searchValue,
  textarea,
  icon,
  style,
  ...rest
}: Props) => {
  return (
    <>
      {search ? (
        <View style={[styles.container]}>
          <View style={{width: '70%'}}>
            <Typography color="primary_light" style={styles.title}>
              {title}
            </Typography>
            <TextInput
              style={[styles.input, style]}
              onChangeText={onchangeText}
              // placeholderTextColor={Colors.primary_light}
              // placeholder="Type..."
              value={searchValue}
              // multiline
              {...rest}
            />
          </View>
          {icon && (
            <View>
              <Icon name={'SuccesCheck'} width={28} height={28} />
            </View>
          )}
        </View>
      ) : (
        <TouchableOpacity onPress={onpress} style={[styles.container]}>
          <View>
            <Typography color="black" style={styles.title2}>
              {title}
            </Typography>
            {desc && (
              <Typography style={styles.desc} color="body" numberOfLines={2}>
                {desc}
              </Typography>
            )}
          </View>
          <View>
            <Icon
              name={'Down'}
              width={16}
              height={18}
              stroke={Colors?.primary_main}
            />
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default ContextTitleCard;
