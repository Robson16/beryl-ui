import { styled } from "styled-components";

export interface TextContainerProps {
  size?:
    | "xxs"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";
}

export const TextContainer = styled.p<TextContainerProps>`
  font-family: ${({ theme }) => theme.fonts.default};
  line-height: ${({ theme }) => theme.lineHeights.base};
  margin: 0;
  color: ${({ theme }) => theme.colors.gray100};

  font-size: ${({ theme, size }) => theme.fontSizes[size || "md"]};
`;
