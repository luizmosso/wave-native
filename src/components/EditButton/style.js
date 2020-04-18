import styled from 'styled-components/native'
import { Animated } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../../content/theme'

export const Circle = styled(Animated.View)`
  position: absolute;
  padding: 10px;
  border-radius: 300px;
  background-color : ${props => props.buttonColor ? props.buttonColor : colors.lighterGray};
  z-index: 2;
`;

export const ButtonIcon = styled(Icon)``;
