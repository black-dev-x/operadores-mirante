import axios from 'axios'
import { getUser } from './auth'

const api = axios.create()
api.interceptors.request.use(async config => {
  const user = getUser()
  if (user) {
    config.headers.Authorization = `Bearer ${user.jwt}`
  }
  return config
})
export default api
