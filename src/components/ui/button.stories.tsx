import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { Mail, PenLineIcon, Verified } from 'lucide-react';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
    },
    iconOnly: {
      type: 'boolean',
      control: 'select',
      options: [true, false],
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};

export const Secondary: Story = {
    args: {
      variant: 'secondary',
      children: 'Button',
    },
  };

export const WithIconOnStart: Story = {
  args: {
    variant: 'outline',
    children: 'Button',
    startContent: <PenLineIcon size={16}/>,
  },
};

export const WithIconOnEnd: Story = {
    args: {
      variant: 'outline',
      children: 'Button',
      endContent: <Verified size={16}/>,
    },
};

export const IconOnly: Story = {
    args: {
      variant: 'primary',
      iconOnly: true,
      children: <Mail />,
    },
};