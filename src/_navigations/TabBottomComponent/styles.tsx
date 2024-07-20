import {Colors, getHeight, scale, spacing} from '@ui';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonItem: {
    height: getHeight(75),
    justifyContent: 'flex-start',
    alignItems: 'center',
    elevation: 10,
    overflow: 'hidden',
  },
  tabsContainer: {
    flexDirection: 'row',
    height: getHeight(75),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 10,
  },
  tabItem: {
    alignItems: 'center',
  },
  tabIcon: {
    marginTop: -spacing.S2,
    marginBottom: spacing.S4,
  },
  tabItemLbl: {
    fontSize: scale(13.5),
    marginTop: spacing.S4,
  },
});

export default styles;
