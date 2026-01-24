import { Box, BoxProps, Text } from '@beryl-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testing the Box element</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
