import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
  title: 'Components/Text',
  component: Text,
  args: { children: 'Lorem impsun', size: 'md' },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
  args: { size: 'sm' },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
  },
}

export const Large: StoryObj<TextProps> = {
  args: { size: 'lg' },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
  },
}

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>Text with P</p>,
  },

  // disable value children in CustomComponent
  // argTypes: {
  //   children: {
  //     control: {
  //       type: null,
  //     },
  //   },
  // },

  // disable table children in CustomComponent
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
}
