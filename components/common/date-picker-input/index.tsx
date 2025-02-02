import React from "react";
import { View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Button, Text } from "~/components/ui";
import {
  BottomSheet,
  BottomSheetContent,
  BottomSheetView,
  useBottomSheet,
} from "~/components/ui/bottom-sheet";
import { cn } from "~/lib/utils";

interface IDatePickerInput {
  value: Date;
  error?: string;
  onChange: (date: Date) => void;
  onBlur?: () => void;
  onFocus?: () => void;
}

const DatePickerInput: React.FC<IDatePickerInput> = ({
  value,
  error,
  onChange,
  onBlur,
  onFocus,
}) => {
  const {
    ref: bottomSheetRef,
    open: openBottomSheet,
    close: closeBottomSheet,
  } = useBottomSheet();

  const handlePresentModalPress = React.useCallback(() => {
    openBottomSheet();
    onFocus?.();
  }, [openBottomSheet, onFocus]);

  const handleDismiss = React.useCallback(() => {
    closeBottomSheet();
    onBlur?.();
  }, [onBlur]);

  return (
    <View>
      <Button
        size="xl"
        onPress={handlePresentModalPress}
        className={cn(
          "bg-transparent-white rounded-2xl flex-row px-4",
          error && "border-2 border-destructive"
        )}
      >
        <Text
          className={cn("text-white text-base", error && "text-destructive")}
        >
          {value && value.toLocaleDateString()}
        </Text>
      </Button>

      <BottomSheet>
        <BottomSheetContent
          ref={bottomSheetRef}
          snapPoints={["50%"]}
          enablePanDownToClose
        >
          <BottomSheetView>
            <Text className="text-foreground text-xl font-bold text-center pb-6">
              Select Date
            </Text>
            <View className="items-center justify-center">
              <DateTimePicker
                mode="date"
                value={value}
                display="spinner"
                onChange={(_, selectedDate) => {
                  if (selectedDate) {
                    onChange(selectedDate);
                  }
                }}
              />
            </View>
            <View className="mt-6">
              <Button onPress={handleDismiss}>
                <Text>Confirm</Text>
              </Button>
            </View>
          </BottomSheetView>
        </BottomSheetContent>
      </BottomSheet>
      {error && <Text className="text-destructive text-sm mt-2">{error}</Text>}
    </View>
  );
};

export { DatePickerInput };
