import styled from 'styled-components/native'
import { colors } from '../../../content/theme'

export const Form = styled.View`
  width: 100%;
  height: 86%;
  margin-top: 20px;
  justify-content: space-evenly;
`;

export const InputContainer = styled.View`
  width: 100%;
`;

export const InputLabel = styled.Text``;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999'
})`
  background: ${colors.lighterGray};
  height: 50px;
  border-radius: 7px;
  padding-left: 10px;
`;

export const Button = styled.TouchableOpacity`
  background: ${colors.blue};
  height: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  box-shadow: 0px 3px 0px ${colors.darkBlue};
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
`;
