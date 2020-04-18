import styled from 'styled-components/native'
import { colors } from '../../content/theme'

export const Container = styled.View`
  max-height: 50%;
`;

export const StyledScrollView = styled.ScrollView`
  padding-top: 7px;
`;

export const TitleBox = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Title = styled.Text``;

export const AddContainer = styled.TouchableOpacity`
  background-color: ${colors.lightBlue};
  padding: 0px 6px;
  margin-left: 6px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const AddIcon = styled.Text`
  margin-top: -2px;
  font-size: 26px;
  color: ${colors.light};
`;

export const ContentItem = styled.View`

`;
export const ContentField = styled.View`
  flex-direction: row;
`;
export const CloseContainer = styled.View`
  background : ${colors.lightBlue};
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  height: 22px;
  width: 22px;
  position: absolute;
  right: 0px;
  top: -7px;
  z-index: 1;
`;
export const CloseIcon = styled.Text`
  transform: rotate(45deg);
  font-size: 20px;
  height: 20px;
  margin-left: 5px;
  margin-top: -3px;
`;
export const Input = styled.TextInput`
  flex: 1;
  height: 50px;
  background-color: ${colors.lighterGray};
  padding-left: 10px;
  ${({hasSeparator}) => hasSeparator && `
    border-right-width: 2px;
    border-right-color: ${colors.lightGray};
  `}
  ${({first}) => first && `
    border-top-left-radius : 5px;
    border-bottom-left-radius: 5px;
  `}
  ${({last}) => last && `
    border-top-right-radius : 5px;
    border-bottom-right-radius: 5px;
  `}
`;
