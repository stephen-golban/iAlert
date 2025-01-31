import React from "react";
import { View } from "react-native";

interface IWelcomeIndicators {
  length: number;
  currentPage: number;
  progress: number;
}

const WelcomeIndicators: React.FC<IWelcomeIndicators> = ({
  currentPage,
  length,
  progress,
}) => {
  return (
    <View className="flex-row gap-2">
      {Array.from({ length }, (_, index) => (
        <View
          key={index}
          className="h-1 rounded-sm flex-1 overflow-hidden bg-white/30"
        >
          <View
            className="h-full bg-white"
            style={{
              width: currentPage === index ? `${progress}%` : index < currentPage ? '100%' : '0%',
            }}
          />
        </View>
      ))}
    </View>
  );
};

export { WelcomeIndicators };
