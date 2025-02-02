import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Image } from "expo-image";
import { Button, ButtonProps } from "~/components/ui";
import { UploadIcon } from "lucide-react-native";
import * as ImagePicker from "expo-image-picker";
import { cn } from "~/lib/utils";

interface IAvatarInput extends Pick<ButtonProps, "onBlur" | "onFocus"> {
  value?: string;
  error?: string;
  onChange: (value: string) => void;
}

const AvatarInput: React.FC<IAvatarInput> = ({
  value,
  onChange,
  error,
  ...props
}) => {
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
      quality: 1,
    });

    if (!result.canceled) {
      onChange(result.assets[0].uri);
    }
  };

  return (
    <View className="items-center">
      <View
        className={cn(
          "w-32 h-32 rounded-2xl overflow-hidden mb-4",
          error ? "border-2 border-destructive 500" : "bg-transparent-white"
        )}
      >
        {value ? (
          <TouchableOpacity onPress={pickImage} className="w-full">
            <Image
              contentFit="cover"
              source={{ uri: value }}
              style={{ width: 128, height: 128 }}
            />
          </TouchableOpacity>
        ) : (
          <Button
            variant="ghost"
            onPress={pickImage}
            className="flex-1 items-center justify-center bg-transparent-white"
            {...props}
          >
            <UploadIcon
              size={24}
              color={error ? "rgb(242, 62, 48)" : "rgba(255, 255, 255, 0.6)"}
            />
          </Button>
        )}
      </View>
      <Text
        className={cn(
          "text-white/60 text-sm mb-2",
          error && "text-destructive"
        )}
      >
        {error ? error : "Here you can upload the best photo of your car"}
      </Text>
    </View>
  );
};

export { AvatarInput };
