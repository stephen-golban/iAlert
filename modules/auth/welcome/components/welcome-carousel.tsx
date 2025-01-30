import { View } from "react-native";
import Animated, {
  FadeIn,
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { WELCOME_SLIDES } from "../constants";
import { useState } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { WelcomeSlide } from "../types";

export function WelcomeCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const translateX = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = event.translationX;
    })
    .onEnd((event) => {
      if (Math.abs(event.velocityX) > 500) {
        if (event.velocityX > 0 && activeIndex > 0) {
          setActiveIndex((prev) => prev - 1);
        } else if (
          event.velocityX < 0 &&
          activeIndex < WELCOME_SLIDES.length - 1
        ) {
          setActiveIndex((prev) => prev + 1);
        }
      }
      translateX.value = withSpring(0);
    });

  return (
    <View className="flex-1 px-4">
      <GestureDetector gesture={panGesture}>
        <View className="flex-1">
          {WELCOME_SLIDES.map((slide, index) => (
            <SlideItem
              key={slide.id}
              slide={slide}
              index={index}
              activeIndex={activeIndex}
              translateX={translateX}
            />
          ))}
        </View>
      </GestureDetector>

      <View className="flex-row justify-center space-x-2 mt-4">
        {WELCOME_SLIDES.map((_, index) => (
          <View
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === activeIndex
                ? "bg-blue-500"
                : "bg-gray-300 dark:bg-gray-700"
            }`}
          />
        ))}
      </View>
    </View>
  );
}

function SlideItem({
  slide,
  index,
  activeIndex,
  translateX,
}: {
  slide: WelcomeSlide;
  index: number;
  activeIndex: number;
  translateX: SharedValue<number>;
}) {
  const animatedStyle = useAnimatedStyle(() => {
    const input = interpolate(translateX.value, [-350, 0, 350], [1, 0, -1]);

    const translateXValue = interpolate(
      index,
      [activeIndex - 1, activeIndex, activeIndex + 1],
      [-100, 0, 100]
    );

    return {
      transform: [{ translateX: translateXValue + input * 100 }],
      opacity: interpolate(Math.abs(index - activeIndex), [0, 1], [1, 0]),
    };
  });

  return (
    <Animated.View
      className="absolute inset-0 items-center justify-center"
      style={animatedStyle}
    >
      <slide.icon className="text-blue-500 mb-8 w-16 h-16 stroke-[1.5]" />
      <Animated.Text
        className="text-3xl font-bold text-center text-black dark:text-white px-4"
        entering={FadeIn}
      >
        {slide.title}
      </Animated.Text>
    </Animated.View>
  );
}
