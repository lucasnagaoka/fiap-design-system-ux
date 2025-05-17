import { Card } from '@fiap-design-system/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
  component: Card,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['button', 'submit', 'reset'],
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => <Card {...props}>Hello</Card>,
  name: 'Card',
  args: {
    children: 'Hello',
    type: 'button',
    variant: 'primary',
    // style: {
    //   color: 'blue',
    //   border: '1px solid gray',
    //   padding: 10,
    //   borderRadius: 10,
    // },
  },
};
