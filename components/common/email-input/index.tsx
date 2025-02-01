import React from "react";

import { Input } from "~/components/ui";

interface IEmailInput extends React.ComponentProps<typeof Input> {
  onChange: (...event: any[]) => void;
}

const EmailInput: React.FC<IEmailInput> = ({ onChange, ...props }) => {
  return (
    <Input
      autoFocus
      autoComplete="email"
      autoCapitalize="none"
      onChangeText={onChange}
      keyboardType="email-address"
      placeholder="Enter your email"
      textContentType="emailAddress"
      inputMode="email"
      spellCheck={false}
      autoCorrect={false}
      selectionColor="white"
      returnKeyType="next"
      enablesReturnKeyAutomatically
      className="bg-transparent-white text-white text-lg h-12 rounded-2xl px-4 native:h-16 border-transparent"
      {...props}
    />
  );
};

export { EmailInput };
