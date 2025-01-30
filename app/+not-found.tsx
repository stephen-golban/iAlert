import React from "react";
import { View } from "react-native";

import { Button } from "~/components/ui";
import { Link, Stack } from "expo-router";
import { EmptyState } from "~/components/common";
import { AlertCircle } from "lucide-react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Not Found" }} />
      <View className="flex-1 items-center justify-center dark:bg-black bg-black p-5">
        <EmptyState
          icon={<AlertCircle size={64} color="#666" />}
          title="Page Not Found"
          description="We couldn't find the page you're looking for. Please check the URL or navigate back home."
          action={
            <Link href="/" asChild>
              <Button variant="default" size="lg">
                Go to Home
              </Button>
            </Link>
          }
        />
      </View>
    </>
  );
}
