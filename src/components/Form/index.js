import React from 'react'
import { colors } from '../../content/theme'
import {
  StyledTitle,
  StyledField,
  StyledGroup,
  SimpleContainer,
  StyledScrollView,
  StyledText,
  Label
} from './style'

export const Title = ({children, mb, color}) =>
  <StyledTitle color={color ? color : colors.blue} mb={mb} >{children}</StyledTitle>

export const Field = ({label, children, full, bold, color, size}) => {
  return (
    <StyledField full={full} >
      {
        label && <Label>{label}</Label>
      }
      <StyledText bold={bold} color={color} size={size} >{children}</StyledText>
    </StyledField>
  )
}

export const Group = ({title, children, mb, highlight, spaceAround, center, maxHeight, style}) =>
  <StyledGroup
    mb={mb}
    highlight={highlight}
    spaceAround={spaceAround}
    center={center}
    maxHeight={maxHeight}
    style={style}
  >
    {title && <Field full color={colors.darkGray} >{title}</Field> }
    {children}
  </StyledGroup>

export const ScrollGroup = ({ title, children, height, highlight, mb}) => {
  return (
    <SimpleContainer height={height} mb={mb}>
      {title && <Field full color={colors.darkGray} >{title}</Field> }
      <StyledScrollView highlight={highlight} >{children}</StyledScrollView>
    </SimpleContainer>
  )
}

