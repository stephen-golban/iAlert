import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Container } from "~/components/common";
import { AuthHeader } from "~/modules/auth/components";

export default function AuthLayout() {
  return (
    <View className="flex-1 bg-[#18246d]">
      <StatusBar backgroundColor="#18246d" style="light" />
      <Container className="flex-1" removeEdges={["bottom"]}>
        <Stack
          screenOptions={{
            header: () => <AuthHeader />,
            contentStyle: { backgroundColor: "transparent" },
          }}
        />
      </Container>
    </View>
  );
}
