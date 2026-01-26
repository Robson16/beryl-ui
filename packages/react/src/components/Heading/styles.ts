import { css, styled } from "styled-components";

export interface HeadingContainerProps {
  size?: "sm" | "md" | "lg" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
}

const sizeVariants = {
  sm: css`
    font-size: ${({ theme }) => theme.fontSizes.xl};
  `,
  md: css`
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  `,
  lg: css`
    font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  `,
  "2xl": css`
    font-size: ${({ theme }) => theme.fontSizes["5xl"]};
  `,
  "3xl": css`
    font-size: ${({ theme }) => theme.fontSizes["6xl"]};
  `,
  "4xl": css`
    font-size: ${({ theme }) => theme.fontSizes["7xl"]};
  `,
  "5xl": css`
    font-size: ${({ theme }) => theme.fontSizes["8xl"]};
  `,
  "6xl": css`
    font-size: ${({ theme }) => theme.fontSizes["9xl"]};
  `,
};

export const HeadingContainer = styled.h2<HeadingContainerProps>`
  font-family: ${({ theme }) => theme.fonts.default};
  line-height: ${({ theme }) => theme.lineHeights.shorter};
  margin: 0;
  color: ${({ theme }) => theme.colors.gray100};

  ${({ size = "md" }) => sizeVariants[size]}
`;
