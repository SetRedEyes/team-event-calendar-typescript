import { IUser } from '../models/IUser'
import httpService from './http.service'

const userEndpoint = '/users.json'

const userService = {
  fetchAll: async () => {
    const { data } = await httpService.get<IUser[]>(userEndpoint)
    return data
  }
}

export default userService
