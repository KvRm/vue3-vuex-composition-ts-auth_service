import { api, type HttpResponseData } from '@/services/api'

import type {
  UserInfoResponse,
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from '@/types'

const LOGIN_API_ROUTE = '/user/login',
  USER_INFO_API_ROUTE = '/user/get-user',
  REGISTER_API_ROUTE = '/user/signup'

export const getUserInfo = (): Promise<HttpResponseData<UserInfoResponse>> =>
  api.get(USER_INFO_API_ROUTE)

export const login = (body: LoginRequest): Promise<HttpResponseData<LoginResponse>> => {
  return api.post(LOGIN_API_ROUTE, body)
}

export const register = (
  body: RegisterRequest
): Promise<HttpResponseData<RegisterResponse>> => api.post(REGISTER_API_ROUTE, body)
