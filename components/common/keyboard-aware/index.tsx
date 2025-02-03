import React from "react";
import {
  KeyboardAwareScrollView,
  type KeyboardAwareScrollViewProps,
} from "react-native-keyboard-controller";

interface KeyboardAwareProps extends KeyboardAwareScrollViewProps {}

export function KeyboardAware({ children, ...props }: KeyboardAwareProps) {
  return (
    <KeyboardAwareScrollView
      {...props}
      bottomOffset={200}
      className="flex-1"
      showsVerticalScrollIndicator={false}
    >
      {children}
    </KeyboardAwareScrollView>
  );
}
