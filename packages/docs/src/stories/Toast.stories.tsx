import { Button, ToastProvider, useToast } from "@beryl-ui/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { styled } from "styled-components";

const ToastDemo = () => {
  const { showToast } = useToast();

  return (
    <Button
      onClick={() =>
        showToast({
          title: "Appointment Completed",
          description: "Wednesday, October 23rd at 4 PM",
        })
      }
    >
      Show Toast
    </Button>
  );
};

const StoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space[10]};
  height: 300px;
`;

export default {
  title: "Feedback/Toast",
  component: ToastDemo,
  decorators: [
    (Story) => (
      <ToastProvider>
        <StoryContainer>
          <Story />
        </StoryContainer>
      </ToastProvider>
    ),
  ],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "To use Toast, the application needs to be wrapped by `ToastProvider`. This is an interactive demonstration.",
      },
    },
  },
} as Meta<typeof ToastDemo>;

export const Primary: StoryObj = {};
