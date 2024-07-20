import {spacing, scale} from '@ui';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: spacing.S14,
    paddingBottom: spacing.S10,
  },
  inner: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: scale(22.5),
    marginTop: spacing.S10,
  },
  desc: {
    marginTop: spacing.S8,
    fontSize: scale(14.5),
  },
});

export default styles;
