import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const Logo: React.FC<SvgProps> = ({ color = "black", ...props }) => {
  return (
    <Svg width="91" height="99" viewBox="0 0 91 99" fill="none" {...props}>
      <Path
        d="M26.1143 98H4.73595C1.9531 98 0.0206474 95.2289 0.982454 92.6175L33.7626 3.61753C34.3418 2.04483 35.8401 1 37.5161 1H50.5048C52.1406 1 53.6115 1.99601 54.2189 3.51487L89.8067 92.5149C90.8573 95.1423 88.9223 98 86.0926 98H63.6841C62.0749 98 60.6223 97.0356 59.9977 95.5525L48.1185 67.3453C46.7227 64.0311 42.0032 64.0986 40.7028 67.4512L29.8435 95.4466C29.2465 96.9857 27.7652 98 26.1143 98Z"
        fill={color}
        stroke="black"
      />
    </Svg>
  );
};

export { Logo };
