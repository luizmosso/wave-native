import React from 'react'
import { Container, ItemContainer } from './style'

export default function BoxList({ children, onLayout }){
  return (
    <Container onLayout={onLayout}>
      <ItemContainer>
        {children}
      </ItemContainer>
    </Container>
  )
}
