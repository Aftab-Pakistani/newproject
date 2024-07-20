import React, { ReactNode } from 'react';
import {
  StyleProp,
  ViewStyle,
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  KeyboardAvoidingViewProps as RNKeyboardAvoidingViewProps,
} from 'react-native';
import {IS_APPLE} from "../../_helper";

interface KeyboardAvoidingViewProps extends RNKeyboardAvoidingViewProps {
  flex: number;
  children: ReactNode;
  style: StyleProp<ViewStyle>;
}

export const KeyboardAvoidingView = ({
  flex,
  style,
  children,
  ...rest
}: KeyboardAvoidingViewProps) => {
  return (
    <RNKeyboardAvoidingView
      // @ts-ignore
      style={{flex, ...(style || {})}}
      {...(IS_APPLE && {
        behavior: 'padding',
      })}
      {...rest}>
      {children}
    </RNKeyboardAvoidingView>
  );
};

KeyboardAvoidingView.defaultProps = {
  flex: 1,
  style: {},
  children: null,
};

export default KeyboardAvoidingView;
