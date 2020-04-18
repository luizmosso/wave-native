import React, { useState, useEffect } from 'react'
import { DetailContainer } from './style'
import { Title, Field, Group, ScrollGroup } from '../../components/Form'
import EditButton from '../../components/EditButton'
import ActivateButton from '../../components/ActivateButton'
import { colors } from '../../content/theme'
import { useSimpleAnimation } from '../../hooks/animation'
import AddOrEditFlow from './addOrEdit'
import moment from 'moment'

export default function FamilyDetails({ show, data, updateEditMode }){

  if(!data) return null

  const [containerDimensions, setContainerDimensions] = useState({
    x : 0, y : 0, height : 0, width : 0
  })

  const {
    id,
    name,
    address,
    telefone,
    documento,
    observacao,
    tempoAtendimento,
    renda,
    ativo,
    beneficios,
    membros,
    itensDoacao
  } = data

  const [isEditMode, setIsEditMode] = useState(false)

  useEffect(() => { updateEditMode(isEditMode) }, [isEditMode])

  const editModeAnimation = useSimpleAnimation({
    doAnimation: isEditMode,
    duration: 300,
    delay: 200
  })

  const handleEditButtonPress = () => {
    if(show)
      setIsEditMode(true)
  }

  const editModeDetailsStyling = {
    opacity : editModeAnimation.interpolate({
      inputRange: [0,1],
      outputRange: [1, 0]
    })
  }

  const showEditFlowStyle = {
    width : editModeAnimation.interpolate({
      inputRange: [0,1],
      outputRange: [0, containerDimensions.width]
    }),
    height : editModeAnimation.interpolate({
      inputRange: [0,1],
      outputRange: [0, containerDimensions.height]
    }),
    opacity : editModeAnimation.interpolate({
      inputRange: [0,1],
      outputRange: [0, 1]
    }),
    position: 'absolute',
    top: 0,
    zIndex: 2,
  }

  return (
    <DetailContainer onLayout={event => {
      setContainerDimensions(event.nativeEvent.layout)
      }}
    >
      <Group style={{ ...editModeDetailsStyling }}>
        <Title mb='10px'>{id}</Title>
        <Group mb='10px'>
          <Field full label='NOME' bold >{name}</Field>
          <Field full label='ENDEREÇO' >{address}</Field>
          <Field label='CPF'>{documento}</Field>
          <Field label='TELEFONE'>{telefone}</Field>
          <Field label='RENDA'>{`R$ ${renda}`}</Field>
        </Group>
        {
          membros &&
            <ScrollGroup title='Membros' height='100px' highlight mb='10px'>
              {
                membros.map(membro => {
                  return (
                    <Group key={membro.nome} >
                      <Field size='12px'>{membro.nome}</Field>
                      <Field size='12px'>{moment(membro.nascimento).format('DD/MM/YYYY')}</Field>
                    </Group>
                  )
                })
              }
            </ScrollGroup>
        }
        {
          beneficios && beneficios.length > 0 &&
            <ScrollGroup title='Beneficios' height='100px' highlight>
              {
                beneficios.map(beneficio => {
                  return (
                    <Group key={beneficio._id} >
                      <Field size='12px'>{beneficio.nome}</Field>
                      <Field size='12px'>{`R$ ${beneficio.valor}`}</Field>
                    </Group>
                  )
                })
              }
            </ScrollGroup>
        }
        <Group>
          <Field label='TEMPO DE ATENDIMENTO'>{tempoAtendimento}</Field>
          <Field label='ITENS DOADOS'>{itensDoacao}</Field>
        </Group>
        <ScrollGroup height='100px'>
          <Field key='obs' size='12px' full label='OBSERVAÇÃO'>{observacao}</Field>
        </ScrollGroup>
      </Group>
      <EditButton
        size={30}
        icon="edit"
        buttonColor={colors.orange}
        iconColor={colors.light}
        containerWidth={containerDimensions && containerDimensions.width}
        containerHeight={containerDimensions && containerDimensions.height}
        finalPosition={70}
        bottom={70}
        show={show}
        editMode={isEditMode}
        onPress={handleEditButtonPress}
      />
      <ActivateButton
        size={30}
        icon="done"
        buttonColor={colors.lightGray}
        iconColor={colors.light}
        containerWidth={containerDimensions && containerDimensions.width}
        containerHeight={containerDimensions && containerDimensions.height}
        finalPosition={containerDimensions && containerDimensions.width - 120}
        editMode={isEditMode}
        bottom={70}
        show={show}
      />
      <AddOrEditFlow
        style={{...showEditFlowStyle}}
        containerDimensions={containerDimensions}
        isEdit={true}
        familyData={data}
        closeEditMode={() => setIsEditMode(false)}
      />
    </DetailContainer>
  )
}
