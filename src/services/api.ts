import axios, { type AxiosResponse } from 'axios'
import { TOKEN_KEY } from '@/lib/localStorageKeys'

export type HttpResponseData<T> = AxiosResponse<T>

const baseUrl = 'https://some-url/api'

export const api = axios.create({
  baseURL: `${baseUrl}`,
})

api.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem(TOKEN_KEY)

    if (token) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      config.headers!['Authorization'] = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    console.log(error, 'error REQUEST')
  }
)
