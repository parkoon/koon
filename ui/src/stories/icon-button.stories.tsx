import type { Meta, StoryObj } from '@storybook/react'
import { ArrowDownToDot } from 'lucide-react'

import IconButton from '@/ui/icon-button'

const meta = {
  title: 'ui/IconButton',
  component: IconButton,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'ghost', 'outlined'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const _IconButton: Story = {
  args: {
    loading: false,
    block: false,
    variant: 'outlined',
    icon: <ArrowDownToDot className="w-4 h-4" />,
  },
}
