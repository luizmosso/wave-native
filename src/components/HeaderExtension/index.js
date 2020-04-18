import React from 'react'
import { Container } from './style'
import { useSimpleAnimation } from '../../hooks/animation'

export default function HeaderExtension({ show }){
  const openAnimation = useSimpleAnimation({
    doAnimation: show,
    duration: 100,
    delay: 0
  });

  return (
    <Container
      style={{
        height: openAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 100],
        }),
      }}
    />
  )
}
