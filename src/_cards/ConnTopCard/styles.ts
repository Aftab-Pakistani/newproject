import {spacing, scale, Colors, radius} from '@ui';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: scale(27),
  },
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text2: {
    fontSize: scale(24),
  },
  plusBtn: {
    height: scale(60),
    width: scale(60),
    ...radius.default,
    backgroundColor: Colors?.white,
    marginLeft: spacing.S10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    marginTop: spacing.S1,
    marginHorizontal: spacing.S8,
  },
});

export default styles;
