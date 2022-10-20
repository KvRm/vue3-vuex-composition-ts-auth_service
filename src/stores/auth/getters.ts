import { GetterTree } from 'vuex'
import { RootState } from '../types'

export type Getters<S = RootState['auth']> = {
  authState(state: S): boolean
}

export const getters: GetterTree<RootState['auth'], RootState> & Getters = {
  authState: (state) => state.authenticated,
}
