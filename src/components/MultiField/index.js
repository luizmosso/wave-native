import React from 'react'
import {
  Container,
  StyledScrollView,
  TitleBox,
  Title,
  AddContainer,
  AddIcon,
  ContentItem,
  ContentField,
  CloseContainer,
  CloseIcon,
  Input
} from './styles'

const MultiField = ({ title, content, onAdd, onRemove }) => {
  return (
    <Container>
      <TitleBox>
        <Title>{title}</Title>
        <AddContainer onPress={onAdd} ><AddIcon>+</AddIcon></AddContainer>
      </TitleBox>
      <StyledScrollView>
        {
          content &&
          content.map(item => {
            const topFields = item.items.filter(field => field.position === 'top')
            const bottomFields = item.items.filter(field => field.position === 'bottom')
            return (
              <ContentItem key={item.id}>
                {
                  topFields && topFields.length > 0 &&
                    <ContentField>
                      <CloseContainer><CloseIcon>+</CloseIcon></CloseContainer>
                      {
                        topFields.map((topField, index) =>
                          <Input
                            key={item.id + index}
                            placeholder={topField.name}
                            hasSeparator={index !== topFields.length -1}
                            first={index === 0}
                            last={index === topFields.length -1}
                          />
                        )
                      }
                    </ContentField>
                }
                {
                  bottomFields && bottomFields.length > 0 &&
                    <ContentField>
                      {
                        bottomFields.map(bottomField =>
                          <Input key={item.id + index} placeholder={bottomField.name} />
                        )
                      }
                    </ContentField>
                }
              </ContentItem>
            )
          })
        }
      </StyledScrollView>
    </Container>
  )
}

export default MultiField
