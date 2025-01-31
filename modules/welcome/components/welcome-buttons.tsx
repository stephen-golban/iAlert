import { Link } from "expo-router";
import { View } from "react-native";
import { Text } from "~/components/ui";

export function WelcomeButtons() {
  return (
    <View className="w-full gap-y-4">
      <Link
        href="/(auth)/sign-up/phone-number"
        className="bg-white rounded-full py-5 text-center"
      >
        <Text className="text-black text-base font-medium">Create account</Text>
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="bg-button-dark py-5 rounded-full text-center"
      >
        <Text className="text-white native:text-lg font-medium">Login</Text>
      </Link>
    </View>
  );
}
