import { TagContainer, Color, Name, QuantityBox, Quantity } from './styles'

export interface TagProps {
  name: string
  quantity: number
  color: string
}

export function Tag({ name, quantity, color = '#FFF' }: TagProps) {
  return (
    <TagContainer>
      <Color css={{ '--tag-color': color }} />
      <Name size="sm">{name}</Name>
      <QuantityBox>
        <Quantity size="sm">{quantity}</Quantity>
      </QuantityBox>
    </TagContainer>
  )
}

Tag.displayName = 'Tag'
