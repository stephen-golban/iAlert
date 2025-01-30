import { View } from "react-native";
import { Link } from "expo-router";
import { Text } from "~/components/ui";

export function WelcomeButtons() {
  return (
    <View className="px-4 pb-8 space-y-4">
      <Link
        href="/(auth)/sign-up/phone-number"
        className="bg-blue-500 py-4 rounded-full items-center"
      >
        <Text className="text-white font-semibold text-lg">Create account</Text>
      </Link>

      <Link
        href="/(auth)/sign-in"
        className="bg-gray-100 dark:bg-gray-800 py-4 rounded-full items-center"
      >
        <Text className="text-gray-900 dark:text-white font-semibold text-lg">
          Login
        </Text>
      </Link>
    </View>
  );
}
