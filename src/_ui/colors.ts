import {ColorTypes, TypographyVariantTypes} from '@ts';
import {spacing} from '@ui';
import {scale} from './dimensions';
import {fontSize} from './fontsize';

// #C17833 (primary)
// #F9F4F0 (primary1)
// #ECE6E1 (primary2)
// #DBCBBD (primary3)
// #CCAD96 (primary4)
// #BE9C75 (primary5)
// #B78F60 (primary6)
// #B48254 (primary7)
// #9E7545 (primary8)
// #8E633C (primary9)
// #7D5A31 (primary10)
// #422C18 (primary11)
// #211608 (primary12)

export const Colors = {
  primary_main: '#c17833',

  primary_light: '#DBCBBD',
  primary_lighter: '#ECE6E1',
  primary_lightest: '#F9F4F0',

  primary_dark: '#CCAD96',
  primary_darker: '#BE9C75',
  primary_darkest: '#B78F60',

  secondary_main: '#F89808',

  secondary_light: '#B48254',
  secondary_lighter: '#9E7545',
  secondary_lightest: '#B48254',

  secondary_dark: '#7D5A31',
  secondary_darker: '#422C18',
  secondary_darkest: '#211608',

  moduleApp: '#3bb44a',
  modulePage: '#f8c241',
  modulePeople: '#29aae1',

  body: '#412c18',
  white: '#ffffff',
  black: '#000000',
  lime: '#b0eb00',
  //red: "#cc0000",
  brightRed: '#ff0000',
  blue: '#005aff',
  darkBlue: '#0041b8',
  cyan: '#1fe9ec',
  darkCyan: '#00a6a9',
  yellow: '#f7d11f',
  orange: '#ff9000',
  //green: "#88b503",
  // lightGreen: "#F1F8E7",
  darkGreen: '#046130',
  red: '#f60937',
  green: '#0DD5A5',
  lightRed: 'rgba(246, 9, 55, 0.11)',
  lightGreen: 'rgba(9, 209, 164, 0.11)',
  primary_darker_opacity: 'rgb(66, 44, 24, 0.4)',

  success: '#0AD668',
  successLight: '#d2efe3',
  successBright: '#00F0E2',
  info: '#57b9ea',
  warning: '#dac44d',
  danger: '#ff0000',

  // Social
  facebook: '#39579b',
  twitter: '#009ff2',
  linkedin: '#3060a1',
  googleplus: '#ec0b0b',
  vimeo: '#009cff',
  youtube: '#db002e',
};

export const fontColor: ColorTypes = {
  primary_main: {color: Colors.primary_main},
  primary_light: {color: Colors.primary_light},
  primary_lighter: {color: Colors.primary_lighter},
  primary_lightest: {color: Colors.primary_lightest},
  primary_dark: {color: Colors.primary_dark},
  primary_darker: {color: Colors.primary_darker},
  primary_darkest: {color: Colors.primary_darkest},

  secondary_main: {color: Colors.secondary_main},
  secondary_light: {color: Colors.secondary_light},
  secondary_lighter: {color: Colors.secondary_lighter},
  secondary_lightest: {color: Colors.secondary_lightest},
  secondary_dark: {color: Colors.secondary_dark},
  secondary_darker: {color: Colors.secondary_darker},
  secondary_darkest: {color: Colors.secondary_darkest},

  body: {color: Colors.body},
  white: {color: Colors.white},
  black: {color: Colors.black},
  lime: {color: Colors.lime},
  red: {color: Colors.red},
  brightRed: {color: Colors.brightRed},
  blue: {color: Colors.blue},
  darkBlue: {color: Colors.darkBlue},
  cyan: {color: Colors.cyan},
  darkCyan: {color: Colors.darkCyan},
  yellow: {color: Colors.yellow},
  orange: {color: Colors.orange},
  green: {color: Colors.green},
  darkGreen: {color: Colors.darkGreen},
  success: {color: Colors.success},
  successBright: {color: Colors.successBright},
  info: {color: Colors.info},
  warning: {color: Colors.warning},
  danger: {color: Colors.danger},
  //
  facebook: {color: Colors.facebook},
  twitter: {color: Colors.twitter},
  linkedin: {color: Colors.linkedin},
  googleplus: {color: Colors.googleplus},
  vimeo: {color: Colors.vimeo},
  youtube: {color: Colors.youtube},
};

export const fontVariant: TypographyVariantTypes = {
  body: {
    fontSize: scale(13),
  },
  small: {
    fontSize: scale(12),
  },
  h1: {
    fontSize: scale(24),
    marginBottom: spacing.S10,
  },
  h2: {
    fontSize: scale(21),
    marginBottom: spacing.S16,
  },
  h3: {
    fontSize: scale(18),
    marginBottom: spacing.S14,
  },
  h4: {
    fontSize: scale(16),
    marginBottom: spacing.S12,
  },
  h5: {
    fontSize: scale(14),
    marginBottom: spacing.S10,
  },
  h6: {
    fontSize: scale(12),
    marginBottom: spacing.S8,
  },
};

export const bgColor: any = {
  primary_main: {backgroundColor: Colors.primary_main},
  primary_light: {backgroundColor: Colors.primary_light},
  primary_lighter: {backgroundColor: Colors.primary_lighter},
  primary_lightest: {backgroundColor: Colors.primary_lightest},
  primary_dark: {backgroundColor: Colors.primary_dark},
  primary_darker: {backgroundColor: Colors.primary_darker},
  primary_darkest: {backgroundColor: Colors.primary_darkest},

  secondary_main: {backgroundColor: Colors.secondary_main},
  secondary_light: {backgroundColor: Colors.secondary_light},
  secondary_lighter: {backgroundColor: Colors.secondary_lighter},
  secondary_lightest: {backgroundColor: Colors.secondary_lightest},
  secondary_dark: {backgroundColor: Colors.secondary_dark},
  secondary_darker: {backgroundColor: Colors.secondary_darker},
  secondary_darkest: {backgroundColor: Colors.secondary_darkest},

  body: {backgroundColor: Colors.body},
  white: {backgroundColor: Colors.white},
  black: {backgroundColor: Colors.black},
  lime: {backgroundColor: Colors.lime},
  red: {backgroundColor: Colors.red},
  brightRed: {backgroundColor: Colors.brightRed},
  blue: {backgroundColor: Colors.blue},
  darkBlue: {backgroundColor: Colors.darkBlue},
  cyan: {backgroundColor: Colors.cyan},
  darkCyan: {backgroundColor: Colors.darkCyan},
  yellow: {backgroundColor: Colors.yellow},
  orange: {backgroundColor: Colors.orange},
  green: {backgroundColor: Colors.green},
  darkGreen: {backgroundColor: Colors.darkGreen},
  success: {backgroundColor: Colors.success},
  info: {backgroundColor: Colors.info},
  warning: {backgroundColor: Colors.warning},
  danger: {backgroundColor: Colors.danger},
  //
  facebook: {backgroundColor: Colors.facebook},
  twitter: {backgroundColor: Colors.twitter},
  linkedin: {backgroundColor: Colors.linkedin},
  googleplus: {backgroundColor: Colors.googleplus},
  vimeo: {backgroundColor: Colors.vimeo},
  youtube: {backgroundColor: Colors.youtube},
};

export const margin = {
  no: {
    margin: 0,
  },
  horizontalNo: {
    marginHorizontal: 0,
  },
  vertivalNo: {
    marginVertical: 0,
  },
  horizontalFive: {
    marginHorizontal: 5,
  },
  horizontalTen: {
    marginHorizontal: 10,
  },
  horizontalFifteen: {
    marginHorizontal: 15,
  },
  horizontalTwenty: {
    marginHorizontal: 20,
  },
  verticalFive: {
    marginVertical: 5,
  },
  verticalTen: {
    marginVertical: 10,
  },
  verticalFifteen: {
    marginVertical: 15,
  },
  verticalTwenty: {
    marginVertical: 20,
  },
  verticalTwentyFive: {
    marginVertical: 25,
  },
  verticalThirty: {
    marginVertical: 30,
  },
  verticalThirtyFive: {
    marginVertical: 35,
  },
  verticalForty: {
    marginVertical: 40,
  },
  top5: {marginTop: 5},
  top10: {marginTop: 10},
  top15: {marginTop: 15},
  top20: {marginTop: 20},
  top25: {marginTop: 25},
  top30: {marginTop: 30},
  top35: {marginTop: 35},
  top40: {marginTop: 40},
  top45: {marginTop: 45},
  top50: {marginTop: 50},
  top55: {marginTop: 55},
  top60: {marginTop: 60},

  bottom5: {marginBottom: 5},
  bottom10: {marginBottom: 10},
  bottom15: {marginBottom: 15},
  bottom20: {marginBottom: 20},
  bottom25: {marginBottom: 25},
  bottom30: {marginBottom: 30},
  bottom35: {marginBottom: 35},
  bottom40: {marginBottom: 40},
  bottom45: {marginBottom: 45},
  bottom50: {marginBottom: 50},
  bottom55: {marginBottom: 55},
  bottom60: {marginBottom: 60},
};

export const fade = {
  no: {
    opacity: 0,
  },
  low: {
    opacity: 0.3,
  },
  medium: {
    opacity: 0.5,
  },
  high: {
    opacity: 0.7,
  },
};

export const padding = {
  no: {
    padding: 0,
  },
  horizontalNo: {
    paddingHorizontal: 0,
  },
  vertivalNo: {
    paddingVertical: 0,
  },
  horizontalFive: {
    paddingHorizontal: 5,
  },
  horizontalTen: {
    paddingHorizontal: 10,
  },
  horizontalFifteen: {
    paddingHorizontal: 15,
  },
  horizontalTwenty: {
    paddingHorizontal: 20,
  },
  horizontalThirty: {
    paddingHorizontal: 30,
  },
  horizontalForty: {
    paddingHorizontal: 40,
  },
  verticalFive: {
    paddingVertical: 5,
  },
  verticalTen: {
    paddingVertical: 10,
  },
  verticalFifteen: {
    paddingVertical: 15,
  },
  verticalTwenty: {
    paddingVertical: 20,
  },
  five: {padding: 5},
  eight: {padding: 8},
  ten: {padding: 10},
  fifteen: {padding: 15},
  twenty: {padding: 20},
  twentyfive: {padding: 25},

  top0: {paddingTop: 0},
  top5: {paddingTop: 5},
  top10: {paddingTop: 10},
  top15: {paddingTop: 15},
  top20: {paddingTop: 20},
  top25: {paddingTop: 25},
  top30: {paddingTop: 30},
  top35: {paddingTop: 35},

  bottom0: {paddingBottom: 0},
  bottom5: {paddingBottom: 5},
  bottom10: {paddingBottom: 10},
  bottom15: {paddingBottom: 15},
  bottom20: {paddingBottom: 20},
  bottom25: {paddingBottom: 25},
  bottom30: {paddingBottom: 30},
  bottom35: {paddingBottom: 35},

  right0: {paddingRight: 0},
  right5: {paddingRight: 5},
  right10: {paddingRight: 10},
  right15: {paddingRight: 15},
  right20: {paddingRight: 20},
  right25: {paddingRight: 25},
  right30: {paddingRight: 30},
  right35: {paddingRight: 35},

  left0: {paddingLeft: 0},
  left5: {paddingLeft: 5},
  left10: {paddingLeft: 10},
  left15: {paddingLeft: 15},
  left20: {paddingLeft: 20},
  left25: {paddingLeft: 25},
  left30: {paddingLeft: 30},
  left35: {paddingLeft: 35},
};

export const style = {
  nomargin: {
    margin: 0,
  },
  nopadding: {
    padding: 0,
  },
  nomarginpadding: {
    padding: 0,
    margin: 0,
  },
  noheight: {
    height: 0,
  },
  brdBottom: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary_lightest,
  },
  alignCenter: {
    textAlign: 'center',
  },
  alignLeft: {
    textAlign: 'left',
  },
  alignRight: {
    textAlign: 'right',
  },
};

export const paragraphCommon = {
  common: {
    color: Colors.black,
    lineHeight: 20,
    marginVertical: 5,
  },
};
export const paragraph = {
  default: {
    ...paragraphCommon.common,
    fontSize: 15,
  },
  medium: {
    ...paragraphCommon.common,
    fontSize: 17,
    lineHeight: 24,
  },
  small: {
    ...paragraphCommon.common,
    fontSize: 14,
  },
  xsmall: {
    ...paragraphCommon.common,
    fontSize: 12,
  },
  large: {
    ...paragraphCommon.common,
    fontSize: 17,
    lineHeight: 24,
  },
  xlarge: {
    ...paragraphCommon.common,
    fontSize: 20,
  },
};

export const shadow = {
  one: {
    shadowRadius: 5,
    shadowOpacity: 0.07,
    shadowColor: Colors.primary_main,
    shadowOffset: {width: 0, height: 2},
  },
};

export const gradient1 = {
  color1: '#4064a6',
  color2: '#4cbeea',
};

export const gradient2 = {
  color1: '#880281',
  color2: '#cd0e88',
};

export const base = {
  defaultShadow: {
    shadowRadius: 3,
    shadowOffset: {width: 0, height: 1},
    shadowColor: Colors.primary_light,
    shadowOpacity: 0.8,
  },
};

export const textDecoration = {
  underline: {
    textDecorationLine: 'underline',
  },
  lineThorough: {
    textDecorationLine: 'line-through',
  },
};
