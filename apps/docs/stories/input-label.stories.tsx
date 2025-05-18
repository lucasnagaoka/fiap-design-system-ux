import { InputLabel } from '@fiap-design-system/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof InputLabel> = {
  component: InputLabel,
  argTypes: {
    inputProps: {
      control: 'object',
    },
    labelProps: {
      control: 'object',
    },
    label: {
      control: { type: 'text' },
      description: 'Label for the input field',
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof InputLabel>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => <InputLabel {...props} />,
  name: 'InputLabel > Primary > Email',
  args: {
    label: 'Email',
    variant: 'primary',
    inputProps: {
      type: 'text',
      id: 'email',
      placeholder: 'Enter email',
    },
    labelProps: {
      htmlFor: 'email',
    },
  },
};

export const Secondary: Story = {
  render: (props) => <InputLabel {...props} />,
  name: 'InputLabel > Secondary > Password',
  args: {
    label: 'Password',
    variant: 'secondary',
    inputProps: {
      type: 'password',
      id: 'password',
      placeholder: 'Enter password',
    },
    labelProps: {
      htmlFor: 'password',
    },
  },
};

export const Number: Story = {
  render: (props) => <InputLabel {...props} />,
  name: 'InputLabel > Primary > Number',
  args: {
    label: 'Number',
    variant: 'primary',
    inputProps: {
      type: 'number',
      id: 'number',
      placeholder: 'Enter number',
    },
    labelProps: {
      htmlFor: 'number',
    },
  },
};
