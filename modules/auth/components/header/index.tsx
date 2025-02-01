import React from "react";

import { View } from "react-native";
import { useRouter } from "expo-router";
import { Button } from "~/components/ui";
import { Icon } from "~/components/common";

export function AuthHeader() {
  const router = useRouter();

  return (
    <View className="py-2 ml-5">
      <Button
        size="icon"
        variant="ghost"
        onPress={() => router.back()}
        className="-ml-2 active:bg-transparent"
      >
        <Icon name="ArrowLeftLong" color="white" />
      </Button>
    </View>
  );
}
