import React from "react";
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";

interface IAnimatedFormWrapper {
  children: React.ReactNode;
  animationKey: string;
}

export const AnimatedFormWrapper: React.FC<IAnimatedFormWrapper> = ({
  children,
  animationKey,
}) => {
  return (
    <Animated.View
      key={animationKey}
      entering={FadeInDown.duration(300)}
      exiting={FadeOutDown.duration(300)}
    >
      {children}
    </Animated.View>
  );
};
