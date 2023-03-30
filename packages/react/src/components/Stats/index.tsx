import { Description, StatsContainer, Amount } from './styles'

export interface StatsProps {
  amount: number
  description: string
}

export function Stats({ amount, description }: StatsProps) {
  return (
    <StatsContainer>
      <Amount size="sm">{amount}</Amount>
      <Description size="sm">{description}</Description>
    </StatsContainer>
  )
}

Stats.displayName = 'Stats'
