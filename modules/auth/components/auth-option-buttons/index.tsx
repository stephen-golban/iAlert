import React from "react";
import { View } from "react-native";

import { Mail, Phone } from "lucide-react-native";
import { Icon } from "~/components/common";
import { Button, Text } from "~/components/ui";

interface IAuthOptionButtons {
  isPhoneAuth: boolean;
  toggleAuth: () => void;
}

const AuthOptionButtons: React.FC<IAuthOptionButtons> = ({
  isPhoneAuth,
  toggleAuth,
}) => {
  const EmailPhoneIcon = isPhoneAuth ? Mail : Phone;
  return (
    <>
      <View className="items-center mb-8">
        <Text className="text-gray-400">or</Text>
      </View>

      <View className="gap-y-4">
        <Button
          size="lg"
          onPress={toggleAuth}
          className="bg-button-dark rounded-full flex-row gap-x-2"
        >
          <EmailPhoneIcon size={14} color="white" />
          <Text className="text-white font-medium">
            Continue with {isPhoneAuth ? "email" : "phone"}
          </Text>
        </Button>

        <Button
          size="lg"
          className="bg-button-dark rounded-full flex-row gap-x-2"
        >
          <Icon name="Google" size={14} />
          <Text className="text-white font-medium">Continue with Google</Text>
        </Button>

        <Button
          size="lg"
          className="bg-button-dark rounded-full flex-row gap-x-2"
        >
          <Icon name="Apple" size={14} color="white" />
          <Text className="text-white font-medium">Continue with Apple</Text>
        </Button>
      </View>
    </>
  );
};

export { AuthOptionButtons };
