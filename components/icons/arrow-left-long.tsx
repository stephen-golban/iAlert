import React from "react";
import { Path, Svg, SvgProps } from "react-native-svg";

const ArrowLeftLong: React.FC<SvgProps> = ({
  color = "currentColor",
  ...props
}) => {
  return (
    <Svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color}
      {...props}
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
      />
    </Svg>
  );
};

export { ArrowLeftLong };
