import React from 'react'
import { Button, ButtonIcon } from './style'

export default function Modal({ onPress, name }){
  return (
    <Button onPress={onPress}>
      <ButtonIcon name={name} />
    </Button>
  )
}
