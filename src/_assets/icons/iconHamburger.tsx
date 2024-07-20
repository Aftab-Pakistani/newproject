import Svg, {SvgProps, Path} from 'react-native-svg';

const Hamburger = (props: SvgProps) => (
  <Svg width="22" height="17" viewBox="0 0 22 17" fill="none" {...props}>
    <Path
      d="M1.33335 1.24316H21M1.33335 8.61816H21M1.33335 15.9932H21"
      {...props}
      stroke="#F9F4F0"
      stroke-width="1.22917"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default Hamburger;
