import { styled } from 'styled-components';

import { Text } from '../Text';

export const MultiStepContainer = styled.div``;

export const Label = styled(Text).attrs({
  size: 'xs',
})`
  color: ${({ theme }) => theme.colors.gray200};
`;

interface StepsProps {
  size: number;
}

export const Steps = styled.div<StepsProps>`
  display: grid;
  grid-template-columns: repeat(${({ size }) => size}, 1fr);
  gap: ${({ theme }) => theme.space[2]};
  margin-top: ${({ theme }) => theme.space[1]};
`;

export const Step = styled.div<{ $active?: boolean }>`
  height: ${({ theme }) => theme.space[1]};
  border-radius: ${({ theme }) => theme.radii.px};
  background-color: ${({ theme }) => theme.colors.gray600};

  ${({ $active, theme }) =>
    $active && `background-color: ${theme.colors.gray100};`}
`;
