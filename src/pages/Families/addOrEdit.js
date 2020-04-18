import React, { useState, useEffect } from 'react'
import Swiper from 'react-native-swiper'
import IconButton from '../../components/IconButton'
import { Group } from '../../components/Form'
import GeneralInfo from './Forms/GeneralInfo'
import RentAndBenefits from './Forms/RentAndBenefits'
import {
  HeaderContainer,
  EditTitle,
  EditContainer,
  FamilyBadge,
  Section,
  FamilyBadgeText
} from './style'
import { colors } from '../../content/theme'

const AddOrEditFlow = ({style, isEdit, familyData, closeEditMode}) => {

  const [shouldLoadForm, setShouldLoadForm] = useState(false)

  useEffect(() => {
    if(!isEdit)
      setShouldLoadForm(true)
  },[])

  useEffect(() => {
    if(isEdit && familyData && familyData.id)
      setShouldLoadForm(true)
  },[familyData])

  return (
    <Group style={{ ...style }}>
      <IconButton name="close" onPress={closeEditMode} />
      {
        shouldLoadForm &&
        <>
          <HeaderContainer>
            <EditContainer>
              <EditTitle color={colors.light}>
                { isEdit ? `Edição` : 'Cadastro' }
              </EditTitle>
              {
                isEdit &&
                  <FamilyBadge>
                    <FamilyBadgeText>{familyData.id}</FamilyBadgeText>
                  </FamilyBadge>
              }
            </EditContainer>
            <Section>
              INFORMAÇÕES GERAIS
            </Section>
          </HeaderContainer>
          <Swiper>
            <GeneralInfo />
            <RentAndBenefits />
          </Swiper>
        </>
      }
    </Group>
  )
}

export default AddOrEditFlow
