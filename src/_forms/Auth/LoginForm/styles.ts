import {Colors, fontSize, fontWeight, radius, scale, spacing} from '@ui';
import {StyleSheet} from 'react-native';

const styles: any = StyleSheet.create({
  btnwrap: {alignItems: 'center', marginTop: spacing.S14},
  btn: {
    height: scale(49),
    width: '60%',
    marginTop: spacing.S6,
    backgroundColor: Colors?.white,
    ...radius.default,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {marginLeft: spacing.S14, marginBottom: -spacing.S1},
  textwrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default styles;
