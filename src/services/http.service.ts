import axios from 'axios'
// import config from '../config.json'

// const http = axios.create({
//   baseURL: config.apiEndpoint
// })

const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch
}

export default httpService
