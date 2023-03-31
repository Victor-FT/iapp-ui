import { styled } from '../../styles'
import { Box } from '../Box'
import { Text } from '../Text'

export const QuantityBox = styled('div', {
  padding: '0 $1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$gray600',
  borderRadius: '$xs',
})

export const TagContainer = styled('button', Box, {
  display: 'flex',
  gap: '$2',
  padding: '$2',
  fontWeight: '500',
  float: 'left',
  clear: 'left',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'all 0.2s',

  '&:hover': {
    background: '$gray700',
  },

  variants: {
    active: {
      true: {
        border: '1px solid $iapp500',
      },
    },
  },
  // justifyContent: 'center',
})

export const Color = styled('div', {
  backgroundColor: 'var(--tag-color)',
  height: '$3',
  width: '$3',
  borderRadius: '$full',
  lineHeight: 0,
})
export const Name = styled(Text, {
  lineHeight: '$shorter',
  FontWeight: 'strong',
  textTransform: 'capitalize',
})

export const Quantity = styled(Text, {
  color: '$gray100',
  fontWeight: '700',
  lineHeight: '$shorter',
})
