import { ComponentProps, ElementType, forwardRef } from "react";

import { BoxContainer } from "./styles";

export interface BoxProps extends ComponentProps<typeof BoxContainer> {
  as?: ElementType;
}

export const Box = forwardRef<HTMLElement, BoxProps>((props, ref) => {
  return <BoxContainer ref={ref} {...props} />;
});

Box.displayName = "Box";
