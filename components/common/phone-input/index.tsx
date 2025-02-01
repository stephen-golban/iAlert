import { View, Text } from "react-native";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui";
import { usePhoneInput } from "./hook";

interface IPhoneInput extends React.ComponentProps<typeof Input> {
  value: string;
  error?: string | undefined;
  onChange: (...event: any[]) => void;
}

const PhoneInput: React.FC<IPhoneInput> = ({
  onChange,
  value,
  error,
  ...props
}) => {
  const { formatPhoneNumber } = usePhoneInput();
  return (
    <View>
      <View className="flex-row items-center gap-x-3 w-full">
        {/* Country code container */}
        <Button
          size="xl"
          className="bg-transparent-white rounded-2xl flex-row px-4 pointer-events-none"
        >
          <Text className="text-base">🇲🇩</Text>
          <Text className="text-white text-base ml-2">+373</Text>
        </Button>

        {/* Phone input container */}
        <Input
          {...props}
          value={value}
          error={error}
          maxLength={11} // 8 digits + 2 spaces
          inputMode="tel"
          hideErrorMessage
          autoComplete="tel"
          autoCorrect={false}
          returnKeyType="done"
          autoCapitalize="none"
          selectionColor="white"
          keyboardType="phone-pad"
          placeholder="Enter your phone"
          textContentType="telephoneNumber"
          onChangeText={(text) => onChange(formatPhoneNumber(text))}
          className="bg-transparent-white text-lg h-12 rounded-2xl px-4 native:h-16 border-transparent"
        />
      </View>
      {error && <Text className="text-red-500 text-sm mt-2">{error}</Text>}
    </View>
  );
};

export { PhoneInput };
