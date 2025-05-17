import { Input } from '@fiap-design-system/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
  component: Input,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['email', 'text', 'password', 'number'],
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => <Input {...props} />,
  name: 'Input',
  args: {
    type: 'email',
    placeholder: 'Email',
    variant: 'primary',
  },
};
