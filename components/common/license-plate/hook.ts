import { useState, useCallback } from "react";
import { PlateType } from "./types";

export const useLicensePlate = (
  initialValue = "",
  initialType: PlateType = "standard"
) => {
  const [value, setValue] = useState(initialValue);
  const [type, setType] = useState(initialType);

  const handleChange = useCallback(
    (text: string, index: number) => {
      const parts = value.split(" ");
      parts[index] = text.toUpperCase();
      setValue(parts.join(" ").trim());
    },
    [value]
  );

  const handleTypeChange = useCallback((newType: PlateType) => {
    setType(newType);
    setValue(""); // Reset value when type changes
  }, []);

  return {
    value,
    type,
    handleChange,
    handleTypeChange,
  };
};
