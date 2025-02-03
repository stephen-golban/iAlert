import { PlateType, PlateConfig } from "./types";

export const detectPlateType = (value: string): PlateType => {
  // Remove all spaces and convert to uppercase
  const normalized = value.replace(/\s+/g, "").toUpperCase();

  // Check for special prefixes first
  if (normalized.startsWith("CD")) return "diplomatic";
  if (normalized.startsWith("T")) return "temporary";
  if (normalized.startsWith("XX")) return "transit";
  if (normalized.startsWith("MA")) return "military";
  if (normalized.startsWith("MAI")) return "police";

  // Check for patterns
  if (/^[A-Z]{2}\d{4}EV$/.test(normalized)) return "electric";
  if (/^[A-Z]{2}\d{4}[A-Z]{2}$/.test(normalized)) return "public";
  if (/^[A-Z]{2}\d{2}\d{2}$/.test(normalized)) return "legacy1992";
  if (/^[A-Z]{2}\d{4}$/.test(normalized)) return "legacy1995";

  // Default to standard if no other pattern matches
  return "standard";
};

export const getPlateConfig = (type: PlateType = "standard"): PlateConfig => {
  switch (type) {
    case "diplomatic":
      return { prefix: "CD", maxLength: [3, 3], placeholder: ["123", "XXX"] };
    case "temporary":
      return { prefix: "T", maxLength: [4], placeholder: ["1234"] };
    case "transit":
      return { prefix: "XX", maxLength: [4], placeholder: ["1234"] };
    case "military":
      return { prefix: "MA", maxLength: [4], placeholder: ["1234"] };
    case "police":
      return { prefix: "MAI", maxLength: [4], placeholder: ["1234"] };
    case "public":
      return {
        prefix: "",
        maxLength: [2, 4, 2],
        placeholder: ["AB", "1234", "TT"],
      };
    case "electric":
      return {
        prefix: "",
        maxLength: [2, 4, 2],
        placeholder: ["AB", "1234", "EV"],
      };
    case "legacy1992":
      return {
        prefix: "",
        maxLength: [2, 2, 2],
        placeholder: ["AB", "12", "34"],
      };
    case "legacy1995":
      return { prefix: "", maxLength: [2, 4], placeholder: ["AB", "1234"] };
    default:
      return { prefix: "", maxLength: [3, 3], placeholder: ["XXX", "123"] };
  }
};
