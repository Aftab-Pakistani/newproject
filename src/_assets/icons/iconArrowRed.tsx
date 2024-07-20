import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const IconArrowRed = (props: SvgProps) => (
  <Svg width="12" height="14" viewBox="0 0 12 14" fill="none" {...props}>
    <Path
      d="M6 1.5V12.5M6 1.5L10.7143 6.21429M6 1.5L1.28571 6.21429"
      stroke="#F20B35"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default IconArrowRed;
