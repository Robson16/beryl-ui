import { ComponentProps, ElementType } from "react";

import { BoxContainer } from "./styles";

export interface BoxProps extends ComponentProps<typeof BoxContainer> {
  as?: ElementType;
}

export function Box(props: BoxProps) {
  return <BoxContainer {...props} />;
}

Box.displayName = "Box";
