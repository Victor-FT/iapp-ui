import { ComponentProps } from 'react'
import { TagContainer, Color, Name, QuantityBox, Quantity } from './styles'

export interface TagProps extends ComponentProps<typeof TagContainer> {
  name: string
  quantity?: number
  color: string
}

export function Tag({ name, quantity, color = '#FFF', ...rest }: TagProps) {
  return (
    <TagContainer {...rest}>
      <Color css={{ '--tag-color': color }} />
      <Name size="sm">{name}</Name>
      {quantity && (
        <QuantityBox>
          <Quantity size="sm">{quantity}</Quantity>
        </QuantityBox>
      )}
    </TagContainer>
  )
}

Tag.displayName = 'Tag'
