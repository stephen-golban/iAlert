export type PlateType =
  | "standard" // 2002-Present: XXX 123
  | "diplomatic" // CD 123 XXX
  | "temporary" // T 1234
  | "transit" // XX 1234
  | "military" // MA 1234
  | "police" // MAI 1234
  | "public" // AB 1234 TT
  | "electric" // AB 1234 EV
  | "legacy1992" // 1992-1995: AB 12 34
  | "legacy1995"; // 1995-2002: AB 1234

export interface LicensePlateProps {
  type?: PlateType;
  onChange?: (value: string) => void;
  value?: string;
}

export interface PlateConfig {
  prefix: string;
  maxLength: number[];
  placeholder: string[];
}
