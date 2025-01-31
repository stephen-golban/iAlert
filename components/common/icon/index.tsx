import React from "react";

import * as Icons from "../../icons";

type AllIcons = typeof Icons;
export type IconKey = keyof typeof Icons;

type IconProps<T extends IconKey> = React.ComponentProps<AllIcons[T]> & {
  name: keyof typeof Icons;
  size?: number;
};

const Icon = <T extends IconKey>({
  name,
  size = 24,
  ...rest
}: IconProps<T>) => {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent width={size} height={size} {...rest} />;
};

Icon.displayName = "Icon";

export { Icon };
