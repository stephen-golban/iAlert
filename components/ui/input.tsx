import * as React from "react";
import { TextInput, type TextInputProps, View } from "react-native";
import { cn } from "~/lib/utils";
import { Text } from "./text";

interface InputProps extends TextInputProps {
  error?: string;
  hideErrorMessage?: boolean;
  rightElement?: React.ReactNode;
}

const InputWrapper: React.FC<
  React.PropsWithChildren<{ isPhoneInput?: boolean; isPasswordInput?: boolean }>
> = ({ children, isPhoneInput, isPasswordInput }) => {
  if (isPasswordInput) {
    return (
      <View className={cn("w-full flex flex-row items-center relative")}>
        {children}
      </View>
    );
  }
  return <>{children}</>;
};

const Input = React.forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  (
    {
      className,
      placeholderClassName,
      error,
      rightElement,
      hideErrorMessage = false,
      ...props
    },
    ref
  ) => {
    const isPasswordInput = props.textContentType === "password";
    const isPhoneInput = props.textContentType === "telephoneNumber";

    const showRightElement = !isPhoneInput && !!rightElement;

    return (
      <>
        <InputWrapper
          isPhoneInput={isPhoneInput}
          isPasswordInput={isPasswordInput}
        >
          <TextInput
            ref={ref}
            className={cn(
              "web:flex h-10 native:h-12 rounded-md border border-input bg-background px-3 web:py-2 text-base lg:text-sm native:text-lg native:leading-[1.25] text-white web:ring-offset-background file:border-0 file:bg-transparent file:font-medium web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2",
              rightElement && "pr-10",
              props.editable === false && "opacity-50 web:cursor-not-allowed",
              (isPhoneInput || isPasswordInput) && "flex-1",
              className,
              error && "border-destructive text-destructive"
            )}
            placeholderClassName={cn(
              "text-muted-foreground",
              placeholderClassName
            )}
            placeholderTextColor="#666"
            {...props}
            selectionColor={error ? "rgb(242, 62, 48)" : "white"}
          />
          {showRightElement && (
            <View className="absolute right-3 flex items-center justify-center">
              {rightElement}
            </View>
          )}
        </InputWrapper>
        {error && !hideErrorMessage && (
          <Text className="text-red-500 text-sm mt-2">{error}</Text>
        )}
      </>
    );
  }
);

Input.displayName = "Input";

export { Input };
