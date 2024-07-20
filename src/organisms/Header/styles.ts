import {Colors, scale, spacing, radius, fontSize} from '@ui';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.S24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:Colors?.primary_main
  },
  logoWrap: {},
  headerRight: {
    flexDirection: 'row',
  },
  hamburger: {
    gap: scale(4),
  },
  logout: {
    marginTop: spacing.S1,
    marginHorizontal: spacing.S8,
  },
});

export default styles;
