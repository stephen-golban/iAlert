import React from "react";
import { View, useWindowDimensions } from "react-native";
import Animated, {
  useAnimatedStyle,
  withSpring,
  FadeInRight,
  Layout,
} from "react-native-reanimated";
import { Text } from "~/components/ui";

interface WelcomePagerProps extends React.PropsWithChildren {
  data: {
    title: string;
    description: string;
  }[];
  currentPage: number;
}

const AnimatedText = Animated.createAnimatedComponent(Text);

export function WelcomePager({
  currentPage,
  children,
  data,
}: WelcomePagerProps) {
  const { width } = useWindowDimensions();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withSpring(-currentPage * width, {
          damping: 20,
          stiffness: 90,
        }),
      },
    ],
  }));

  return (
    <View className="flex-1 overflow-hidden">
      {children}
      <Animated.View
        className="mt-6"
        style={[
          { width: width * data.length, flexDirection: "row" },
          animatedStyle,
        ]}
      >
        {data.map((page, index) => (
          <View key={index} style={{ width }}>
            <AnimatedText
              layout={Layout}
              entering={FadeInRight.delay(300).duration(400)}
              className="text-4xl font-bold text-white leading-tight"
            >
              {page.title}
            </AnimatedText>
            <AnimatedText
              layout={Layout}
              entering={FadeInRight.delay(400).duration(400)}
              className="text-white/80 text-base mt-4"
            >
              {page.description}
            </AnimatedText>
          </View>
        ))}
      </Animated.View>
    </View>
  );
}
