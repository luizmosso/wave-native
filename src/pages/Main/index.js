import React from 'react'
import {
  Screen, Header, BoxList,
  Footer, BoxButton, BoxIcon,
  Title, Logo, LogoTitle,
  LogoImage, LogOut, LogOutText
} from './style'

export default function Main({ navigation }){

  const handlePress = () => navigation.navigate('Families');

  return (
    <Screen>
      <Header>
        <Logo>
          <LogoTitle>Wav</LogoTitle>
          <LogoImage source={require('../../content/wave_logo.png')} />
        </Logo>
      </Header>
      <BoxList>
        <BoxButton onPress={handlePress}>
          <BoxIcon source={require('../../content/family.png')} />
          <Title>Famílias</Title>
        </BoxButton>
        <BoxButton>
          <BoxIcon source={require('../../content/finances.png')} />
          <Title>Financeiro</Title>
        </BoxButton>
        <BoxButton>
          <BoxIcon source={require('../../content/events.png')} />
          <Title>Eventos</Title>
        </BoxButton>
        <BoxButton>
          <BoxIcon source={require('../../content/donations.png')} />
          <Title>Doações</Title>
        </BoxButton>
      </BoxList>
      <Footer>
        <LogOut>
          <LogOutText>Log out</LogOutText>
        </LogOut>
      </Footer>
    </Screen>
  )
}

Main.navigationOptions = {
  header : null
};
