import type { RouteLocationNormalized } from 'vue-router'
import { store } from '@/stores'
import { TOKEN_KEY } from '@/lib/localStorageKeys'
import { AuthActionsEnum } from '@/stores/auth'

export const getUserRoute = async (to: RouteLocationNormalized) => {
  if (to.meta.login) {
    const token = window.localStorage.getItem(TOKEN_KEY)

    if (token) {
      try {
        await store.dispatch(AuthActionsEnum.AUTO_LOGIN)

        if (!store.state.auth.authenticated) return { name: 'login' }

        return true
      } catch (err) {
        window.localStorage.removeItem(TOKEN_KEY)
        return { name: 'login' }
      }
    } else {
      return { name: 'login' }
    }
  }
}
