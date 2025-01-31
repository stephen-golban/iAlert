import React from "react";
import {
  View,
  Keyboard,
  Platform,
  ViewStyle,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

interface KeyboardAwareProps {
  children: React.ReactNode;
  style?: ViewStyle;
  enabled?: boolean;
}

export function KeyboardAware({
  children,
  style,
  enabled = true,
}: KeyboardAwareProps) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
        enabled={enabled}
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        contentContainerStyle={[{ flex: 1, width: "100%" }, style]}
      >
        <View style={{ flex: 1 }}>{children}</View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

// import React from "react";
// import { View, ViewStyle } from "react-native";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// interface KeyboardAwareProps {
//   children: React.ReactNode;
//   style?: ViewStyle;
//   enabled?: boolean;
// }

// export function KeyboardAware({
//   children,
//   style,
//   enabled = true,
// }: KeyboardAwareProps) {
//   return (
//     <KeyboardAwareScrollView
//       enableOnAndroid
//       enableAutomaticScroll
//       scrollEnabled={enabled}
//       extraScrollHeight={200}
//       keyboardDismissMode="on-drag"
//       enableResetScrollToCoords={false}
//       keyboardShouldPersistTaps="handled"
//       showsVerticalScrollIndicator={false}
//       contentContainerStyle={[{ flex: 1, width: "100%" }, style]}
//     >
//       <View style={{ flex: 1 }}>{children}</View>
//     </KeyboardAwareScrollView>
//   );
// }
