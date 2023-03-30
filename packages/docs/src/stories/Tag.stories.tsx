import type { StoryObj, Meta } from '@storybook/react'
import { TagProps, Tag } from '@iapp-ui/react'

export default {
  title: 'Surfaces/Tag',
  component: Tag,
  args: {
    name: 'Novo Cliente',
    quantity: 15,
    color: 'blue',
  },
} as Meta<TagProps>

export const Primary: StoryObj<TagProps> = {}
