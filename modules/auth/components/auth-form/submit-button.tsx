import React from "react";

import { Button, Text } from "~/components/ui";
import { LoadingSpinner } from "~/components/common";

interface ISubmitButton {
  onPress(): void;
  isDisabled?: boolean;
  isSubmitting?: boolean;
  title?: string;
}

const SubmitButton: React.FC<ISubmitButton> = ({
  onPress,
  title = "Continue",
  isDisabled = false,
  isSubmitting = false,
}) => {
  return (
    <Button
      size="lg"
      onPress={onPress}
      disabled={isSubmitting || isDisabled}
      className="rounded-full my-4 bg-white"
    >
      {isSubmitting ? (
        <LoadingSpinner />
      ) : (
        <Text className="text-center text-gray-900 font-medium">
          {isSubmitting ? <LoadingSpinner color="#000" /> : title}
        </Text>
      )}
    </Button>
  );
};

export default SubmitButton;
