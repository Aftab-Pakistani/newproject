import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const IconArrowUp = (props: SvgProps) => (
  <Svg width="15" height="17" viewBox="0 0 15 17" fill="none" {...props}>
    <Path
      d="M7.75 1.8313V15.8313M7.75 1.8313L13.75 7.8313M7.75 1.8313L1.75 7.8313"
      stroke="#C17833"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default IconArrowUp;
