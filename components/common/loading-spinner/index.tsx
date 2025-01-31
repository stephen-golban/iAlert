import React from "react";
import { ActivityIndicator, ActivityIndicatorProps } from "react-native";

interface LoadingSpinnerProps extends Omit<ActivityIndicatorProps, "size"> {
  size?: "small" | "large" | number;
}

export function LoadingSpinner({
  size = "small",
  color = "#000",
  ...props
}: LoadingSpinnerProps) {
  return <ActivityIndicator size={size} color={color} {...props} />;
}
