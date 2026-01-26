import {
  Button,
  Text,
  Tooltip,
  TooltipProps,
  TooltipProvider,
} from "@beryl-ui/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import styled from "styled-components";

const StoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space[10]};
  height: 300px;
`;

export default {
  title: "Feedback/Tooltip",
  component: Tooltip,
  args: {
    content: "This is a Tooltip",
  },
  argTypes: {
    children: {
      control: false,
    },
    content: {
      control: { type: "text" },
    },
  },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <StoryContainer>{Story()}</StoryContainer>
      </TooltipProvider>
    ),
  ],
} satisfies Meta<TooltipProps>;

export const Primary: StoryObj<TooltipProps> = {
  render: (args) => (
    <Tooltip {...args}>
      <Button>Hover me</Button>
    </Tooltip>
  ),
};

export const WithText: StoryObj<TooltipProps> = {
  args: {
    content: "This is another Tooltip",
  },
  render: (args) => (
    <Tooltip {...args}>
      <Text>Hover over this text.</Text>
    </Tooltip>
  ),
};
