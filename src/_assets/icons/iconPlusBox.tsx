import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const IconPlusBox = (props: SvgProps) => (
  <Svg
    width="29"
    height="28"
    viewBox="0 0 29 28"
    fill="none"
    {...props}
    >
    <Path
      d="M18.9583 14H10.2917M14.625 9.66667V18.3333M14.625 1C25.025 1 27.625 3.6 27.625 14C27.625 24.4 25.025 27 14.625 27C4.225 27 1.625 24.4 1.625 14C1.625 3.6 4.225 1 14.625 1Z"
      stroke="#B48254"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default IconPlusBox;
