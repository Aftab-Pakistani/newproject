import {
  Hambuger,
  Homelogo,
  Homeprofile,
  IconArrowDown,
  IconArrowGreen,
  IconArrowRed,
  IconArrowUp,
  IconConnection,
  IconDown,
  IconEyeClose,
  IconEyeOpen,
  IconFaceID,
  IconHome,
  IconLogout,
  IconPlus,
  IconPlusBox,
  IconProfile,
  IconRequest,
  IconSadEmoji,
  IconSend,
  IconSuccesCheck,
  IconTransactions,
  IconWallet,
  IconWithdraw,
} from '@icons';
import {IconsName, RotateTypes} from '@ts';

export interface IconsProps {
  color?: string;
  width?: number;
  height?: number;
  name?: IconsName;
  rotate?: RotateTypes;
  type?: 'image' | 'svg';
  transform?: any;
  style?: any;
  onPress?: () => void;
}

const getRotate = (rotate: string) => {
  switch (rotate) {
    case 'top':
      return '90deg';
    case 'bottom':
      return '270deg';
    case 'left':
      return '0deg';
    case 'right':
      return '-180deg';
    default:
      return '0deg';
  }
};

function Icon(props: IconsProps) {
  const style = {transform: [{rotate: getRotate(props.rotate || '')}]};
  switch (props.name) {
    case 'eye_open':
      return (
        <IconEyeOpen {...props} style={[props.rotate && style, props.style]} />
      );
    case 'eye_close':
      return (
        <IconEyeClose {...props} style={[props.rotate && style, props.style]} />
      );
    case 'home':
      return (
        <IconHome {...props} style={[props.rotate && style, props.style]} />
      );
    case 'connections':
      return (
        <IconConnection
          {...props}
          style={[props.rotate && style, props.style]}
        />
      );
    case 'transactions':
      return (
        <IconTransactions
          {...props}
          style={[props.rotate && style, props.style]}
        />
      );
    case 'profile':
      return (
        <IconProfile {...props} style={[props.rotate && style, props.style]} />
      );
    case 'logout':
      return (
        <IconLogout {...props} style={[props.rotate && style, props.style]} />
      );
    case 'FaceID':
      return (
        <IconFaceID {...props} style={[props.rotate && style, props.style]} />
      );
    case 'Hamburger':
      return (
        <Hambuger {...props} style={[props.rotate && style, props.style]} />
      );
    case 'Logo':
      return (
        <Homelogo {...props} style={[props.rotate && style, props.style]} />
      );
    case 'ProfileIcon':
      return (
        <Homeprofile {...props} style={[props.rotate && style, props.style]} />
      );
    case 'Down':
      return (
        <IconDown {...props} style={[props.rotate && style, props.style]} />
      );
    case 'Plus':
      return (
        <IconPlus {...props} style={[props.rotate && style, props.style]} />
      );
    case 'Wallet':
      return (
        <IconWallet {...props} style={[props.rotate && style, props.style]} />
      );
    case 'ArrowUp':
      return (
        <IconArrowUp {...props} style={[props.rotate && style, props.style]} />
      );
    case 'ArrowDown':
      return (
        <IconArrowDown
          {...props}
          style={[props.rotate && style, props.style]}
        />
      );
    case 'PlusBox':
      return (
        <IconPlusBox
          {...props}
          style={[props.rotate && style, props.style]}
        />
      );
    case 'Withdraw':
      return (
        <IconWithdraw
          {...props}
          style={[props.rotate && style, props.style]}
        />
      );
    case 'Send':
      return (
        <IconSend
          {...props}
          style={[props.rotate && style, props.style]}
        />
      );
    case 'Request':
      return (
        <IconRequest
          {...props}
          style={[props.rotate && style, props.style]}
        />
      );
      case 'RedArrow':
        return (
          <IconArrowRed
            {...props}
            style={[props.rotate && style, props.style]}
          />
        );
        case 'GreenArrow':
          return (
            <IconArrowGreen
              {...props}
              style={[props.rotate && style, props.style]}
            />
          );
        case 'SuccesCheck':
          return (
            <IconSuccesCheck
              {...props}
              style={[props.rotate && style, props.style]}
            />
          );
        case 'sad_emoji':
          return (
            <IconSadEmoji
              {...props}
              style={[props.rotate && style, props.style]}
            />
          );
    default:
      return null;
  }
}

export default Icon;
