import 'whatwg-fetch'
import { getBaseUrl } from './baseUrl'

const baseUrl = getBaseUrl()

/* eslint-disable no-console */
console.log(baseUrl)
const getUsers = () => get('users')
const get = (url) => fetch(baseUrl + url).then(onSuccess, onError)
const onSuccess = (response) => response.json()
const onError = (error) => console.log(error)

export { getUsers }
