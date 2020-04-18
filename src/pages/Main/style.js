import styled from 'styled-components/native'

export const Screen = styled.View`
  flex : 1;
  background-color : #0D5E98;
  align-items : center;
  justify-content : center;
`;

const Container = styled.View`
  align-items : center;
  justify-content : center;
  width: 100%;
`;

export const Header = styled(Container)`flex: 0.3;`;
export const BoxList = styled(Container)`
  flex: 0.5;
  flex-wrap : wrap;
  padding: 0 10px;
`;
export const Footer = styled(Container)`flex: 0.2;`;

export const BoxButton = styled.TouchableOpacity`
  align-items : center;
  justify-content : center;
  width: 100%;
  background : #09568B;
  width : 45%;
  min-width: 100px;
  max-width : 200px;
  height: 100%;
  max-height: 150px;
  min-height: 100px;
  border-radius: 8px;
  flex-direction: column;
  margin: 10px;
  box-shadow: 1px 4px 1px #004170;
`;

export const BoxIcon = styled.Image`
  width: 90px;
  height : 90px;
  margin-bottom: 5px;
`;

export const Title = styled.Text`
  color: #eee;
  font-size: 18px;
`;

export const Logo = styled.View`
  align-items : center;
  justify-content : center;
  flex-direction: row;
`;

export const LogoTitle = styled.Text`
  font-size: 36px;
  display: flex;
  align-items : center;
  justify-content : center;
  color: #ffffffe3;
  text-shadow: 2px 2px 2px #063F6E;
`;

export const LogoImage = styled.Image`
  width: 50px;
  height: 50px;
  transform: rotate(-50deg);
`;

export const LogOut = styled.TouchableOpacity``;

export const LogOutText = styled.Text`
  color : #ffffffe3;
  font-size: 16px;
  font-weight: 500;
`;
