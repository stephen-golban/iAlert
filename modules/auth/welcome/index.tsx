import { View } from "react-native";
import { Container } from "~/components/common";
import Animated, { FadeIn } from "react-native-reanimated";
import { WelcomeCarousel } from "./components/welcome-carousel";
import { WelcomeButtons } from "./components/welcome-buttons";

export function WelcomeScreen() {
  return (
    <Container className="bg-white dark:bg-black">
      <Animated.View entering={FadeIn} className="flex-1 justify-between">
        <View className="h-20 items-center justify-center">
          <Animated.Text className="text-xl font-bold text-black dark:text-white">
            Welcome to iAlert
          </Animated.Text>
        </View>

        <WelcomeCarousel />

        <WelcomeButtons />
      </Animated.View>
    </Container>
  );
}
