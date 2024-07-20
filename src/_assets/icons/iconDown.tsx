import Svg, {SvgProps, Path, Defs, Stop} from 'react-native-svg';

const IconDown = (props: SvgProps) => (
  <Svg width="13" height="8" viewBox="0 0 13 8" fill="none" {...props}>
    <Path
      d="M12 1.33118L6.5 6.33118L1 1.33118"
      stroke="#F9F4F0"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    />
  </Svg>
);

export default IconDown;
