import styled from 'styled-components/native'
import { Animated } from 'react-native'
import { colors } from '../../content/theme'

export const Container = styled(Animated.View)`
  background-color: ${colors.blue};
  width: 100%;
  position: absolute;
  z-index: 1;
`
