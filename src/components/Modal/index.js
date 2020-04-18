import React from 'react'
import { Dimensions } from 'react-native'
import { Container } from './style'
import IconButton from '../IconButton'
import { useSimpleAnimation } from '../../hooks/animation'

export default function Modal({ children, open, onClose, showCloseButton }){
  const WIDTH = Dimensions.get('window').width - 20

  const openAnimation = useSimpleAnimation({
    doAnimation: open,
    duration: 700,
    delay: 0
  });

  return (
    <Container
      style={{
        right: openAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [-WIDTH, 10],
        }),
      }}
    >
      {
        showCloseButton &&
        <IconButton onPress={onClose} name="arrow-forward" />
      }
      {children}
    </Container>
  )
}
