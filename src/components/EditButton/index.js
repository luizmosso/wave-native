import React from 'react'
import { Circle, ButtonIcon } from './style'
import { useSimpleAnimation } from '../../hooks/animation'
import { TapGestureHandler } from 'react-native-gesture-handler'
import { colors } from '../../content/theme'

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
  editMode,
  onPress
}) => {

  const showAnimation = useSimpleAnimation({
    doAnimation: show,
    duration: 500,
    delay: 700
  });

  const editModeAnimation = useSimpleAnimation({
    doAnimation: editMode,
    duration: 300,
    delay: 0
  });

  const showButtonStyling = {
    left: showAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [containerWidth, finalPosition],
    })
  }

  const ediModeCircleStyling = {
    top : editModeAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [containerHeight - bottom, 0]
    }),
    width : editModeAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [50, containerWidth]
    }),
    ...(
      editMode && {
        left: editModeAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [finalPosition, 0],
        })
      }
    ),
    height : editModeAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [50, 100]
    }),
    borderTopLeftRadius : editModeAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [300, 0]
    }),
    borderBottomRightRadius : editModeAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [300, 0]
    }),
    borderBottomLeftRadius : editModeAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [300, 30]
    }),
    backgroundColor : editModeAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [colors.orange, colors.lightBlue]
    }),
  }

  return (
    <TapGestureHandler onHandlerStateChange={onPress}>
      <Circle style={{
        ...showButtonStyling,
        ...ediModeCircleStyling
      }}>
        <ButtonIcon
          size={size}
          name={icon}
          color={editMode ? colors.transparent : iconColor}
        />
      </Circle>
    </TapGestureHandler>
  )
}

export default BulletButton
