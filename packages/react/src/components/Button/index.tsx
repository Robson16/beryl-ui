import { ComponentProps, ElementType, forwardRef, ReactElement } from "react";

import { ButtonContainer, ButtonContainerProps } from "./styles";

export interface ButtonProps
  extends ComponentProps<"button">, ButtonContainerProps {
  as?: ElementType;
  children?: ReactElement;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return <ButtonContainer ref={ref} {...props} />;
  },
);

Button.displayName = "Button";
