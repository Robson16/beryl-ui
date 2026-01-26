import { Box, Checkbox, CheckboxProps, Text } from "@beryl-ui/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { styled } from "styled-components";

const StoryBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
`;

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <StoryBox as="label">
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </StoryBox>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {};
