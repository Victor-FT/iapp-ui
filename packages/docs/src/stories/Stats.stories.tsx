import type { StoryObj, Meta } from '@storybook/react'
import { StatsProps, Stats } from '@iapp-ui/react'

export default {
  title: 'Surfaces/Stats',
  component: Stats,
  args: {
    amount: 2,
    description: 'Número de telefones',
  },
} as Meta<StatsProps>

export const Primary: StoryObj<StatsProps> = {}
