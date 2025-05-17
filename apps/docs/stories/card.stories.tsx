import { Card } from '@fiap-design-system/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
  component: Card,
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the card',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      },
    },
    subtitle: {
      control: 'text',
      description: 'Subtitle of the card',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      },
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
    imageUrl: 'https://placehold.co/380x204',
    imageAltText: 'Receita',
    title: 'Title',
    subtitle: 'Subtitle',
  },
};
