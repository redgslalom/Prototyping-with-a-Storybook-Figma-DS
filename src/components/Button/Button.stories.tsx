import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { Activity, AlertCircle, ArrowRight, Check, X } from 'react-feather';

const icons = {
  None: null,
  ArrowRight: <ArrowRight size={20} />,
  ArrowLeft: <ArrowRight size={20} style={{ transform: 'rotate(180deg)' }} />,
  Activity: <Activity size={20} />,
  Check: <Check size={20} />,
  Alert: <AlertCircle size={20} />,
  Close: <X size={20} />,
};

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['Default', 'Secondary', 'Ghost', 'Danger'],
    },
    size: {
      control: { type: 'select' },
      options: ['Small', 'Medium', 'Large', 'XL'],
    },
    iconL: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
        labels: {
          None: 'None',
          ArrowRight: 'Arrow Right',
          ArrowLeft: 'Arrow Left',
          Activity: 'Activity',
          Check: 'Check',
          Alert: 'Alert',
          Close: 'Close',
        },
      },
    },
    iconR: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
        labels: {
          None: 'None',
          ArrowRight: 'Arrow Right',
          ArrowLeft: 'Arrow Left',
          Activity: 'Activity',
          Check: 'Check',
          Alert: 'Alert',
          Close: 'Close',
        },
      },
    },
    isFocused: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'Default',
    size: 'Medium',
    label: 'Button',
    iconL: 'None',
    iconR: 'None',
    disabled: false,
    isFocused: false,
  },
};

export const Secondary: Story = {
  args: {
    variant: 'Secondary',
    size: 'Medium',
    label: 'Secondary',
    iconL: 'None',
    iconR: 'None',
    disabled: false,
    isFocused: false,
  },
};

export const Ghost: Story = {
  args: {
    variant: 'Ghost',
    size: 'Medium',
    label: 'Ghost',
    iconL: 'None',
    iconR: 'None',
    disabled: false,
    isFocused: false,
  },
};

export const Danger: Story = {
  args: {
    variant: 'Danger',
    size: 'Medium',
    label: 'Danger',
    iconL: 'None',
    iconR: 'None',
    disabled: false,
    isFocused: false,
  },
};