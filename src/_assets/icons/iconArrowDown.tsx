import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const IconArrowDown = (props: SvgProps) => (
  <Svg width="15" height="17" viewBox="0 0 15 17" fill="none" {...props}>
    <Path
      d="M7.75 15.8313V1.8313M7.75 15.8313L1.68333 9.8313M7.75 15.8313L13.8167 9.8313"
      stroke="#C17833"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default IconArrowDown;
