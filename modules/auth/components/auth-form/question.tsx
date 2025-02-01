import React from "react";

import { Link } from "expo-router";
import { Text } from "~/components/ui";

const Question: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Link href="/(auth)/forgot-password" className="mb-8">
      <Text className="text-white text-base">{text}</Text>
    </Link>
  );
};

export default Question;
