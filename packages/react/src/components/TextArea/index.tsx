import { ComponentProps, ElementRef, forwardRef } from "react";

import { TextAreaContainer } from "./styles";

export interface TextAreaProps extends ComponentProps<
  typeof TextAreaContainer
> {}

export const TextArea = forwardRef<
  ElementRef<typeof TextAreaContainer>,
  TextAreaProps
>((props, ref) => {
  return <TextAreaContainer ref={ref} {...props} />;
});

TextArea.displayName = "TextArea";
