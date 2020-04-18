import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../../content/theme'

export const Button = styled.TouchableOpacity`
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 2;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const ButtonIcon = styled(Icon).attrs({
  size: 20,
  color: colors.gray,
})`
`;
