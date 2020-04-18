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
  containerHeight,
  finalPosition,
  bottom,
  editMode
}) => {

  const showAnimation = useSimpleAnimation({
    doAnimation: show,
    duration: 700,
    delay: 700
  });

  const editModeAnimation = useSimpleAnimation({
    doAnimation: editMode,
    duration: 700,
    delay: 200
  });

  const editModeStyling = {
    opacity : editModeAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0]
    }),
  }

  return (
    <Circle buttonColor={buttonColor} style={{
      left: showAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [containerWidth, finalPosition],
      }),
      top: containerHeight - bottom,
      ...editModeStyling
    }}>
      <ButtonIcon size={size} name={icon} color={iconColor} />
    </Circle>
  )
}

export default BulletButton
