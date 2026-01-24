import { Box, Text, TextArea, TextAreaProps } from '@beryl-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { styled } from 'styled-components';

const StoryBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]};
`;

export default {
  title: 'Form/Text Area',
  component: TextArea,
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
} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observations...',
  },
};

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
};
