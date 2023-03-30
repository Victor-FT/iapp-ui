import { styled } from '../../styles'
import { Box } from '../Box'
import { Text } from '../Text'

export const StatsContainer = styled(Box, {
  padding: '$2',
  float: 'left',
  clear: 'left',
})

export const Amount = styled(Text, {
  fontWeight: '500',
  lineHeight: '$shorter',
})

export const Description = styled(Text, {
  color: '$gray400',
  fontWeight: '500',
  lineHeight: '$shorter',
})
