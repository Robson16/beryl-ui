import { Box, MultiStep, MultiStepProps } from "@beryl-ui/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { styled } from "styled-components";

const StoryBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]};
`;

export default {
  title: "Form/Multi Step",
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return <StoryBox as="label">{Story()}</StoryBox>;
    },
  ],
} as Meta<MultiStepProps>;

export const Primary: StoryObj<MultiStepProps> = {
  args: {},
};

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
};
