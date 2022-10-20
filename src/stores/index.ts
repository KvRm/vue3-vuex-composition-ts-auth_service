import { createStore } from 'vuex'
import { authModule } from './auth/module'
import { RootState, Store } from './types'

export const store = createStore<RootState>({
  modules: {
    auth: authModule,
  },
})

// Возвращает новый стор
export function useStore() {
  return store as Store
}
