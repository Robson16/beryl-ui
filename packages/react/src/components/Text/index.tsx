import { ComponentProps, ElementType, forwardRef, ReactNode } from "react";

import { TextContainer, TextContainerProps } from "./styles";

export interface TextProps extends ComponentProps<"p">, TextContainerProps {
  as?: ElementType;
  children?: ReactNode;
}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  (props, ref) => {
    return <TextContainer ref={ref} {...props} />;
  },
);

Text.displayName = "Text";
