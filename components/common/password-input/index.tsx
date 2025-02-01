import React, { useState } from "react";

import { Input } from "~/components/ui";
import { Eye, EyeOff } from "lucide-react-native";
import { Pressable } from "react-native";

interface IPasswordInput
  extends Omit<React.ComponentProps<typeof Input>, "secureTextEntry"> {
  error?: string | undefined;
  onChange: (...event: any[]) => void;
}

const PasswordInput: React.FC<IPasswordInput> = ({
  value,
  onChange,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const Icon = showPassword ? Eye : EyeOff;

  return (
    <Input
      value={value}
      onChangeText={onChange}
      secureTextEntry={!showPassword}
      placeholder="Enter your password"
      autoComplete="password"
      textContentType="password"
      autoCapitalize="none"
      spellCheck={false}
      autoCorrect={false}
      returnKeyType="done"
      enablesReturnKeyAutomatically
      className="bg-transparent-white text-lg h-12 rounded-2xl px-4 native:h-16 border-transparent"
      rightElement={
        <Pressable onPress={togglePasswordVisibility}>
          <Icon size={20} color={props.error ? "rgb(242, 62, 48)" : "white"} />
        </Pressable>
      }
      {...props}
    />
  );
};

export { PasswordInput };
