import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Fontisto'
import { Animated } from 'react-native'


export const Container = styled(Animated.View)`
  box-shadow : 3px 6px 6px #cecece;
  margin: 10px;
  border-radius: 8px;
  margin-bottom: 0;
  border-top-width: 1px;
  border-top-color: #0000000a;
  padding: 10px;
  background: white;
  width : ${props => props.width}px;
`;

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Circle = styled.View`
  background-color: #0D5E98;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
`;

export const Id = styled.Text`
  color: white;
  font-size: 14px;
`;

export const Name = styled.Text`
  flex: 0.7;
  color: #3e3d3d;
  font-size: 16px;
  font-weight: bold;
`;

export const StatusIcon = styled(Icon).attrs({
  size: 30
})``;

export const Address = styled.Text`
  color: #999;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 12px;
  font-weight: normal;
`;
