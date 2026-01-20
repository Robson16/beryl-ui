import * as Checkbox from '@radix-ui/react-checkbox';
import { keyframes, styled } from 'styled-components';

export const CheckboxContainer = styled(Checkbox.Root)`
  all: unset;
  width: ${({ theme }) => theme.space[6]};
  height: ${({ theme }) => theme.space[6]};
  background-color: ${({ theme }) => theme.colors.gray900};
  border-radius: ${({ theme }) => theme.radii.xs};
  line-height: 0;
  cursor: pointer;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.gray900};

  &:focus,
  &[data-state='checked'] {
    border: 2px solid ${({ theme }) => theme.colors.ignite300};
  }

  &[data-state='checked'] {
    background-color: ${({ theme }) => theme.colors.ignite300};
  }
`;

const slideIn = keyframes`
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
`;

const slideOut = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(-100%); }
`;

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  color: ${({ theme }) => theme.colors.white};
  width: ${({ theme }) => theme.space[4]};
  height: ${({ theme }) => theme.space[4]};

  &[data-state='checked'] {
    animation: ${slideIn} 200ms ease-out;
  }

  &[data-state='unchecked'] {
    animation: ${slideOut} 200ms ease-out;
  }
`;
