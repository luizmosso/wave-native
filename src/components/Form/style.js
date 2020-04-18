import { Animated } from 'react-native'
import styled from 'styled-components'
import { colors } from '../../content/theme'

export const StyledTitle = styled.Text`
  font-size: 30px;
  font-weight: bold;
  ${props => props.color && `color : ${props.color};`}
  ${props => props.mb && `margin-bottom : ${props.mb};`}
`;

export const Label = styled.Text`
  font-size: 8px;
  color: ${colors.gray};
`;

export const StyledText = styled.Text`
  color: ${props => props.color ? props.color : colors.lightGray};
  ${props => props.bold && 'font-weight : bold;'}
  ${props => props.size &&  `font-size : ${props.size};`}
`;

export const StyledField = styled.View`
  flex-direction: column;
  margin: 5px 0;
  ${props => props.full && 'width : 100%;'}
`;

export const SimpleContainer = styled.View`
  width: 90%;
  ${props => props.height && `height : ${props.height};`}
  ${props => props.mb && `margin-bottom : ${props.mb};`}
`;

export const StyledScrollView = styled.ScrollView`
  ${props => props.highlight && `background-color: ${colors.lighterGray};`}
  border-radius: 5px;
  padding: 2px 5px;
`

export const StyledGroup = styled(Animated.View)`
  width: 90%;
  flex-direction: ${props => props.column ? 'column': 'row'};
  flex-wrap: wrap;
  align-items: center;
  justify-content: ${props => props.spaceAround ? 'space-around' : props.center ? 'center' : 'space-between'};
  ${props => props.highlight && `background-color: ${colors.lighterGray};`}
  ${props => props.mb && `margin-bottom : ${props.mb};`}
  ${props => props.maxHeight && `max-height : ${props.maxHeight};`}
`;

export const Container = styled.View`

`;
