import { Label } from '@fiap-design-system/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Label> = {
  component: Label,
};

export default meta;

type Story = StoryObj<typeof Label>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => <Label {...props} />,
  name: 'Label',
  args: {
    htmlFor: 'label',
    children: 'Label',
  },
};
