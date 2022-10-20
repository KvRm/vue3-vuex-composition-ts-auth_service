import { User } from '@/types'
import { RootState } from '../types'

export enum AuthMutationEnum {
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  AUTHENTICATED = 'AUTHENTICATED',
  USER = 'USER',
  RESET = 'RESET',
}

export type Mutations<S = RootState['auth']> = {
  [AuthMutationEnum.LOADING](state: S, payload: boolean): void
  [AuthMutationEnum.ERROR](state: S, payload: string): void
  [AuthMutationEnum.AUTHENTICATED](state: S, payload: boolean): void
  [AuthMutationEnum.USER](state: S, payload: User): void
  [AuthMutationEnum.RESET](state: S): void
}
