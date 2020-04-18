import Icon from 'react-native-vector-icons/MaterialIcons'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  position: relative;
  padding: 10px 10px 20px 10px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999'
})`
  flex: 1;
  height: 50px;
  background: #EEE;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #EEE;
`;

export const SearchIcon = styled(Icon).attrs({
  name: "search",
  size: 20,
  color: '#999'
})`
  position: absolute;
  right: 20px;
  top: 15px;
`;
