import * as Tooltip from "@radix-ui/react-tooltip";
import { styled } from "styled-components";

export const TooltipContent = styled(Tooltip.Content)`
  padding: ${({ theme }) => `${theme.space[3]} ${theme.space[4]}`};
  background: ${({ theme }) => theme.colors.gray900};
  color: ${({ theme }) => theme.colors.gray100};
  font-family: ${({ theme }) => theme.fonts.default};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.radii.sm};
  user-select: none;
  box-shadow: 4px 16px 24px rgba(0, 0, 0, 0.25);
`;

export const TooltipArrow = styled(Tooltip.Arrow)`
  fill: ${({ theme }) => theme.colors.gray900};
`;
