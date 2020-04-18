import React from 'react'
import { Dimensions } from 'react-native'
import { TapGestureHandler } from 'react-native-gesture-handler'
import { Container, Row, Circle, Id, Name, StatusIcon, Address } from './style'
import { useSimpleAnimation } from '../../hooks/animation'

export default function Box({
  id, name, status, address,
  doAnimation, onPress
}){
  const WIDTH = Dimensions.get('window').width - 20

  const unSelectedAnimation = useSimpleAnimation({
    doAnimation: doAnimation,
    duration: 100,
    delay: 0
  });

  return (
    <TapGestureHandler onHandlerStateChange={onPress}>
      <Container
        width={WIDTH}
        style={{
          opacity: unSelectedAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
          }),
          width: unSelectedAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [WIDTH, WIDTH - 40],
          })
        }}
      >
        <Row>
          <Circle>
            <Id>{id}</Id>
          </Circle>
          <Name>{name}</Name>
          <StatusIcon
            name={status ? "toggle-on" : "toggle-off"}
            color={status ? "#3aa939": "#999"}
          />
        </Row>
        <Row>
          <Address>{address}</Address>
        </Row>
      </Container>
    </TapGestureHandler>
  )
}
