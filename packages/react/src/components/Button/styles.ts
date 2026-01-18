import { css, styled } from 'styled-components';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md';
}

export const ButtonContainer = styled.button<ButtonProps>`
  all: unset;
  box-sizing: border-box;

  font-family: ${({ theme }) => theme.fonts.default};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-align: center;
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: 0 ${({ theme }) => theme.space[4]};
  min-width: 120px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[2]};

  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  svg {
    width: ${({ theme }) => theme.space[4]};
    height: ${({ theme }) => theme.space[4]};
  }

  ${({ variant = 'primary', theme }) => {
    switch (variant) {
      case 'primary':
        return css`
          color: ${theme.colors.white};
          background: ${theme.colors.ignite500};

          &:not(:disabled):hover {
            background: ${theme.colors.ignite300};
          }

          &:disabled {
            background-color: ${theme.colors.gray200};
          }
        `;
      case 'secondary':
        return css`
          color: ${theme.colors.ignite300};
          border: 2px solid ${theme.colors.ignite500};

          &:not(:disabled):hover {
            background: ${theme.colors.ignite500};
            color: ${theme.colors.white};
          }

          &:disabled {
            color: ${theme.colors.gray200};
            border-color: ${theme.colors.gray200};
          }
        `;
      case 'tertiary':
        return css`
          color: ${theme.colors.gray100};

          &:not(:disabled):hover {
            color: ${theme.colors.white};
          }

          &:disabled {
            color: ${theme.colors.gray600};
          }
        `;
    }
  }}

  ${({ size = 'md' }) => {
    switch (size) {
      case 'sm':
        return css`
          height: 38px;
        `;
      case 'md':
        return css`
          height: 46px;
        `;
    }
  }}
`;
