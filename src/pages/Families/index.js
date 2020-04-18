import React, { useState, useEffect } from 'react'
import { Container, Counter } from './style'
import BoxList from '../../components/BoxList'
import FamilyModel from '../../models/family'
import HeaderExtension from '../../components/HeaderExtension'
import Box from '../../components/Box'
import SearchBar from '../../components/SearchBar'
import Modal from '../../components/Modal'
import FamilyDetails from './details'

export default function Families({ navigation }){
  const [families, setFamilies] = useState([])
  const [familiesFiltered, setFamiliesFiltered] = useState([])
  const [shouldOpenDetails, setShouldOpenDetails] = useState(false)
  const [selectedFamilyID, setSelectedFamilyID] = useState(null)
  const [isOnEditMode, setIsOnEditMode] = useState(false)
  const SCREEN_TITLE = 'Familias'

  useEffect(() => {
    navigation.setParams({title: SCREEN_TITLE})
    loadFamilyData()
  }, [])

  useEffect(() => {
      navigation.setParams({title: shouldOpenDetails ? '' : SCREEN_TITLE})
  }, [shouldOpenDetails])

  const getFamilyData = async () => {
    const model = new FamilyModel()
    let familiesData = await model.getList()
    if (familiesData.length > 0)
      familiesData = familiesData.map(family => {
        return {
          id : family.id,
          name : family.membros[0].nome,
          address : `${family.endereco} - ${family.bairro}`,
          status : family.ativo ? true : false,
          ...family
        }
      })
      return familiesData
  }

  const loadFamilyData = async () => {
    const data = await getFamilyData()
    setFamilies(data)
    setFamiliesFiltered(data)
  }

  const handleSearch = found => setFamiliesFiltered(found)

  const handleBoxClick = familyID => {
    if(!shouldOpenDetails)
      setSelectedFamilyID(familyID)
    setShouldOpenDetails(!shouldOpenDetails)
  }

  const getSelectedFamilyData = (id) => {
    return familiesFiltered.find(family => family.id === id)
  }

  return (
    <Container>
      <HeaderExtension show={shouldOpenDetails} />
      <SearchBar
        searchFrom={families}
        searched={found => handleSearch(found)}
        keywords={[
          'ativas:status:true',
          'inativas:status:false'
        ]}
      />
      <Counter>{`${familiesFiltered.length} registros`}</Counter>
      <BoxList>
        { familiesFiltered.map(data =>
            <Box
              key={data.id}
              {...data }
              onPress={() => handleBoxClick(data.id)}
              doAnimation={shouldOpenDetails}
            />
        )}
      </BoxList>
      <Modal
        open={shouldOpenDetails}
        onClose={() => { setShouldOpenDetails(false)}}
        showCloseButton={!isOnEditMode}
      >
        <FamilyDetails
          data={getSelectedFamilyData(selectedFamilyID)}
          show={shouldOpenDetails}
          updateEditMode={(editMode) => setIsOnEditMode(editMode)}
        />
      </Modal>
    </Container>
  )
}

Families.navigationOptions = screenProps => ({
  title: screenProps.navigation.getParam("title")
});
