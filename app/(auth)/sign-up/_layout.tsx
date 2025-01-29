import { Stack } from "expo-router";
import { useSignUpGuard } from "@/modules/auth/sign-up/hooks/useSignUpGuard";

export default function SignUpLayout() {
  useSignUpGuard();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        gestureEnabled: false, // Prevent back swipe gesture
      }}
    />
  );
}
