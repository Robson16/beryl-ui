import { ComponentProps, ElementType, forwardRef, ReactNode } from "react";

import { HeadingContainer, HeadingContainerProps } from "./styles";

export interface HeadingProps
  extends ComponentProps<"h2">, HeadingContainerProps {
  as?: ElementType;
  children?: ReactNode;
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (props, ref) => {
    return <HeadingContainer ref={ref} {...props} />;
  },
);

Heading.displayName = "Heading";
