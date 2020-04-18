import React, { useState } from 'react'
import { Form, InputContainer, InputLabel, Input, Button, ButtonText } from './style'
import  MultiField from '../../../components/MultiField'

const RentAndBenefits = ({ isEdit }) => {

  const [benefits, setBenefits] = useState([])

  const getBenefitLastId = (benefits) => {
    return benefits && benefits.length > 0 ? (
      benefits.length === 1 ?
        benefits[0].id :
        benefits.reduce((prev, next) => {
          return prev.id ? prev : next.id > prev ? next.id : prev
        })
    ) : 1
  }

  const handleAddBenefit = () => {
    const newBenefit = { id : getBenefitLastId(benefits), items : [
      { position : 'top', name : 'Nome'},
      { position : 'top', name : 'Valor'},
    ]}
    setBenefits([...benefits, newBenefit])
  }

  const handleRemoveBenefit = (id) => {
    const newBenefits = benefits.filter(benefit => benefit.id !== id)
    setBenefits(newBenefits)
  }

  return (
    <Form>
      <InputContainer>
        <InputLabel>Ganhos Mensais</InputLabel>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="1000,00"
        />
      </InputContainer>
      <MultiField
        title='Benefícios'
        content={benefits}
        onAdd={handleAddBenefit}
        onRemove={handleRemoveBenefit}
      />
      { isEdit &&
        <Button>
          <ButtonText>Salvar</ButtonText>
        </Button>
      }
    </Form>
  )
}

export default RentAndBenefits
