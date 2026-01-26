import { styled } from "styled-components";

interface TextInputContainerProps {
  size?: "sm" | "md";
}

export const TextInputContainer = styled.div<TextInputContainerProps>`
  background-color: ${({ theme }) => theme.colors.gray900};
  border-radius: ${({ theme }) => theme.radii.sm};
  box-sizing: border-box;
  border: 2px solid ${({ theme }) => theme.colors.gray900};
  display: flex;
  align-items: center;

  padding: ${({ theme, size = "md" }) => {
    const paddingMap = {
      sm: `${theme.space[2]} ${theme.space[3]}`,
      md: `${theme.space[3]} ${theme.space[4]}`,
    };

    return paddingMap[size];
  }};

  &:has(input:focus) {
    border-color: ${({ theme }) => theme.colors.emerald300};
  }

  &:has(input:disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Prefix = styled.span`
  font-family: ${({ theme }) => theme.fonts.default};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray400};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

export const Input = styled.input`
  font-family: ${({ theme }) => theme.fonts.default};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  background: transparent;
  border: 0;
  width: 100%;

  &:focus {
    outline: 0;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
  }
`;
