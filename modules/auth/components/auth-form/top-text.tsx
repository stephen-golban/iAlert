import React from "react";
import { Text } from "~/components/ui";

interface ITopText {
  title: string;
  subtitle: string;
}

const TopText: React.FC<ITopText> = ({ title, subtitle }) => {
  return (
    <>
      <Text className="text-white text-4xl font-bold mb-4">{title}</Text>
      <Text className="text-gray-400 text-base mb-8">{subtitle}</Text>
    </>
  );
};

export default TopText;
