import { Box, Text, TextInput, TextInputProps } from '@beryl-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { styled } from 'styled-components';

const StoryBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]};
`;

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <StoryBox as="label">
          <Text size="sm">Email address</Text>
          {Story()}
        </StoryBox>
      );
    },
  ],
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
};

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
};

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
  },
};
