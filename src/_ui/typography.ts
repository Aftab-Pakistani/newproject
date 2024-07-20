import {Platform} from 'react-native';
import {scale} from './dimensions';

type FontFamilyTypes = typeof fonts;
type FontSizeTypes = typeof fontSizes;

const fonts = {
  Regular: Platform.select({
    ios: 'Nexa-Regular',
    android: 'Nexa-Regular',
  }),
  Bold: Platform.select({ios: 'Nexa-Bold', android: 'Nexa-Bold'}),
  Semibold: Platform.select({
    ios: 'Nexa-Book',
    android: 'Nexa-Book',
  }),
  Light: Platform.select({
    ios: 'Nexa-Light',
    android: 'Nexa-Light',
  }),
  Heavy: Platform.select({
    ios: 'Nexa-Heavy',
    android: 'Nexa-Heavy',
  }),
};

const fontSizes = {
  H1: scale(22),
  H2: scale(16),
  H3: scale(12),
  H4: scale(9),
  P: scale(12),
  FS18: scale(18),
  FS14: scale(14),
  FS15: scale(15),
  FS16: scale(16),
  FS20: scale(20),
  FS22: scale(22),
  FS24: scale(24),
  FS26: scale(26),
  S26: scale(26),
  FS30: scale(30),
  FS32: scale(32),
  FS35: scale(35),
  FS40: scale(40),
  FS6: scale(6),
  FS11: scale(11),
  FS7: scale(7),
  FS10: scale(10),
  FS12: scale(12),
  FS13: scale(13),
  FS8: scale(8),
};

export {fonts, fontSizes};
export type {FontSizeTypes, FontFamilyTypes};
