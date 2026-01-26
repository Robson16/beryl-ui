import { Button, ButtonProps } from "@beryl-ui/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowRight } from "phosphor-react";
import { ReactNode } from "react";

type ButtonPropsWithStringChildren = Omit<ButtonProps, "children"> & {
  children?: ReactNode;
};

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Send",
    variant: "primary",
    size: "md",
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: {
        type: "inline-radio",
      },
    },
    size: {
      options: ["sm", "md"],
      control: {
        type: "inline-radio",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    onClick: {
      action: "click",
    },
  },
} as Meta<ButtonPropsWithStringChildren>;

export const Primary: StoryObj<ButtonPropsWithStringChildren> = {};

export const Secondary: StoryObj<ButtonPropsWithStringChildren> = {
  args: {
    variant: "secondary",
    children: "Create new",
  },
};

export const Tertiary: StoryObj<ButtonPropsWithStringChildren> = {
  args: {
    variant: "tertiary",
    children: "Cancel",
  },
};

export const Small: StoryObj<ButtonPropsWithStringChildren> = {
  args: {
    size: "sm",
  },
};

export const WithIcon: StoryObj<ButtonPropsWithStringChildren> = {
  args: {
    children: (
      <>
        Next step
        <ArrowRight weight="bold" />
      </>
    ),
  },
};

export const Disabled: StoryObj<ButtonPropsWithStringChildren> = {
  args: {
    disabled: true,
  },
};
