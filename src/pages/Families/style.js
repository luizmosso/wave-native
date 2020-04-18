import styled from 'styled-components/native'
import { colors } from '../../content/theme'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${colors.light};
  z-index: 999;
`;

export const Counter = styled.Text`
  color : ${colors.lightGray};
  align-self: flex-end;
  margin-right: 10px;
  font-weight: bold;
`;

export const DetailContainer = styled.View`
  align-items: center;
  justify-content: flex-start;
  height: 100%;
`;

export const InnerContainer = styled.View`
  width: 90%;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderContainer = styled.View`
 margin-left: 10px;
 margin-top: 10px;
 width: 100%;
`;

export const EditContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const EditTitle = styled.Text`
  color : ${colors.darkBlue};
  font-size: 25px;
  margin-bottom: 10px;
  margin-top: 10px;
  width: 100px;
`;
export const Section = styled.Text`
  color : ${colors.light};
  font-size : 14px;
  width: 100%;
  font-weight: bold;
`;

export const FamilyBadge = styled.View`
  background-color: ${colors.orange};
  padding: 3px 6px;
  height: 23px;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
`;

export const FamilyBadgeText = styled.Text`
  color: ${colors.light};
  font-weight: bold;
`
