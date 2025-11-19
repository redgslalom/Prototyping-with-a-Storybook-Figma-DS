import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react"; // Example icons

const meta = {
  title: "Frames X/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "ghost", "danger"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large", "xl"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "medium",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
    size: "medium",
  },
};

export const Ghost: Story = {
  args: {
    children: "Button",
    variant: "ghost",
    size: "medium",
  },
};

export const Danger: Story = {
  args: {
    children: "Button",
    variant: "danger",
    size: "medium",
  },
};

export const WithIconLeft: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "medium",
    iconL: <Mail className="w-4 h-4" />,
  },
};

export const WithIconRight: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "medium",
    iconR: <ArrowRight className="w-4 h-4" />,
  },
};

export const SizeSmall: Story = {
  args: {
    children: "Button",
    size: "small",
  },
};

export const SizeXL: Story = {
  args: {
    children: "Button",
    size: "xl",
  },
};

