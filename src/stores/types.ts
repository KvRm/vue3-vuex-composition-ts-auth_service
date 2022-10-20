import { User } from '@/types'
import { AuthStore } from './auth'

// типизация глобального хранилища
export interface RootState {
  auth: {
    user?: User
    authenticated: boolean
    loading: boolean
    error: string
  }
}

// Каждый модуль прокидывается в новый стор
export type Store = AuthStore<Pick<RootState, 'auth'>>
