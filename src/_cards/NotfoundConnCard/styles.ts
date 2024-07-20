import {spacing, scale, Colors, radius} from '@ui';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.S16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors?.white,
    elevation: 0.5,
    paddingVertical: spacing.S14,
    ...radius.default,
  },
  textwrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.S4,
  },
  inner: {},
  title: {
    marginTop: spacing.S8,
    fontSize: scale(20),
  },
  wraptext: {alignItems: 'center', justifyContent: 'center'},
  desc: {
    marginTop: spacing.S8,
    fontSize: scale(14.5),
    lineHeight:scale(22),
    textAlign: 'center',
  },
  img: {
    width: scale(60),
    height: scale(60),
    resizeMode: 'contain',
  },
});

export default styles;
