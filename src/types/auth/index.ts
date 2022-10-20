//  - базовая сущность пользователь
export interface User {
  id: string
  name: string
  email: string
  phone: number
}

// Ответы от сервера

// - ответ при авторизации
export interface LoginResponse {
  message: string
  token: string
}

// ответ при регистрации
export interface RegisterResponse {
  message: string
  user: User
  token: string
}

// - ответ при запросе пользователя
export interface UserInfoResponse {
  user: User
}

// Запросы

// При авторизации
export interface LoginRequest {
  email: string
  password: string
}

// При регисатрации
export interface RegisterRequest {
  name: string
  email: string
  password: string
  phone: string
}

// Типизация ошибки аксиоса
export interface HttpErrorResponse {
  error: string
}
