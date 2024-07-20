import React, {ReactNode} from 'react';
import {StyleProp, Text, TextProps, TextStyle, View} from 'react-native';
import {ColorTypes, TypographyVariantTypes} from '@ts';
import {fontColor, fontVariant} from '@ui';
import styles from './styles';

type Props = {
  children: ReactNode;
  variant?: keyof TypographyVariantTypes;
  color?: keyof ColorTypes;
  style?: StyleProp<TextStyle>;
  fontWeight?: 'regular' | 'light' | 'bold' | 'heavy';
  noMargin?: boolean;
  noMarginBottom?: boolean;
  noPadding?: boolean;
  noPaddingBottom?: boolean;
};

const Typography = ({
  children,
  variant = 'body',
  color = 'body',
  fontWeight,
  style,
  noMargin,
  noMarginBottom,
  noPadding,
  noPaddingBottom,
  ...props
}: TextProps & Props) => {
  const isHeading = variant !== 'body' && variant !== 'small';
  return (
    <Text
      style={[
        fontColor[color],
        fontVariant[variant],
        style,
        styles.container,
        isHeading && styles.semibold,
        fontWeight === 'light'
          ? styles.light
          : fontWeight === 'bold'
          ? styles.semibold
          : fontWeight === 'heavy'
          ? styles.heavy
          : styles.semibold,
        noMargin && styles.noMargin,
        noMarginBottom && styles.noMarginBottom,
        noPadding && styles.noPadding,
        noPaddingBottom && styles.noPaddingBottom,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export default Typography;
