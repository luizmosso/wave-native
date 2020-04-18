import { API_URL } from 'react-native-dotenv'

export default class FamilyModel {
  constructor(){
    this.baseURL = `${API_URL}/familia`
    this.options = { headers : { 'Content-Type' : 'application/json'}}
  }

  getList = async () => {
    const options = { ...this.options, method : 'GET'}
    const response = await fetch(this.baseURL, options)
    const data = await response.json()
    return data ? data : []
  }

  getItem = async (id) => {
    const options = { ...this.options, method : 'GET'}
    const response = await fetch(`${this.baseURL}/${id}`, options)
    const data = await response.json()
    return data
  }
}
