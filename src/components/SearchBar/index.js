import React from 'react'
import { Container, Input, SearchIcon } from './style'

export default function SearchBar({ searchFrom, searched, keywords }){

  handleTyping = (searchFrom, text) => {
    const foundList = []
    for (let o = 0; o < searchFrom.length; o++) {
      const obj = searchFrom[o];
      const found = searchKeyWords(obj, keywords, text)
      if(found){
        foundList.push(obj)
        continue
      }
      found = searchWords(obj, text)
      if(found)
        foundList.push(obj)
    }
    searched(foundList)
  }

  searchWords = (obj, text) => {
    const wordFound = Object.keys(obj)
    .find(key =>
      typeof obj[key] === 'string' &&
      obj[key].toLowerCase().includes(text.toLowerCase())
    )
    return wordFound ? true : false
  }

  searchKeyWords = (obj, keywords, text) => {
    const keyFound = keywords
      .find(keyword => keyword.split(':')[0].toLowerCase() === text.toLowerCase())
    if(keyFound){
      const [keyword, prop, value ] = keyFound.split(':')
      const contentFound = Object.keys(obj)
        .find(key => key === prop && obj[key].toString() === value)

      if(contentFound) return true
    }
    return false
  }

  return (
    <Container>
      <Input
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Pesquisar família"
        onChangeText={(text) => handleTyping(searchFrom, text)}
      />
      <SearchIcon />
    </Container>
  )
}
