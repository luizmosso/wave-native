import styled from 'styled-components/native'
import { Animated } from 'react-native'
import { colors } from '../../content/theme'

export const Container = styled(Animated.View)`
  box-shadow : 0px 4px 6px ${colors.darkOpacityGray};
  margin: 10px;
  border-radius: 8px;
  margin-bottom: 0;
  border-top-width: 1px;
  border-top-color: ${colors.opacityGray};
  padding: 10px;
  background: white;
  width : 90%;
  height: 80%;
  position: absolute;
  z-index: 1;
`;
