import { Avatar, AvatarProps } from "@beryl-ui/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

export default {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    src: "https://github.com/Robson16.png",
    alt: "Robson H. Rodrigues",
  },
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
