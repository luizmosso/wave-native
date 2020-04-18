import React from 'react'
import { Form, InputContainer, InputLabel, Input, Button, ButtonText } from './style'

const GeneralInfo = ({ isEdit }) => {
  return (
    <Form>
      <InputContainer>
        <InputLabel>Nome</InputLabel>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Maria da Conceição"
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>Endereço</InputLabel>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Rua das Margaridas, 110"
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>Bairro</InputLabel>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Jardim das Margaridas"
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>Telefone</InputLabel>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="34988764312"
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>Documento</InputLabel>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="08741325267"
        />
      </InputContainer>
      { isEdit &&
        <Button>
          <ButtonText>Salvar</ButtonText>
        </Button>
      }
    </Form>
  )
}

export default GeneralInfo
