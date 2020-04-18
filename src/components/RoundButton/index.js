import React from 'react'
import { Circle, ButtonIcon } from './style'
import { useSimpleAnimation } from '../../hooks/animation'

const BulletButton = ({
  icon,
  size,
  buttonColor,
  iconColor,
  show,
  containerWidth,
  finalPosition,
  bottom
}) => {

  const showAnimation = useSimpleAnimation({
    doAnimation: show,
    duration: 700,
    delay: 200
  });

  return (
    <Circle buttonColor={buttonColor} style={{
      left: showAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [containerWidth, finalPosition],
      }),
      bottom
    }}>
      <ButtonIcon size={size} name={icon} color={iconColor} />
    </Circle>
  )
}

export default BulletButton
