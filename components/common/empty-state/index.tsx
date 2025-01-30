import React from "react";

import { cn } from "~/lib/utils";

import { View } from "react-native";
import { Text } from "~/components/ui";

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <View
      className={cn(
        "items-center justify-center p-4 w-full max-w-[400px]",
        className
      )}
    >
      {icon && <View className="mb-6">{icon}</View>}
      <Text className="text-xl font-semibold text-center mb-2">{title}</Text>
      {description && (
        <Text className="text-muted-foreground text-center mb-6">
          {description}
        </Text>
      )}
      {action && <View className="w-full">{action}</View>}
    </View>
  );
}
