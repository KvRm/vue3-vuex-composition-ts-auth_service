<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-container">
      <p class="status">{{ textButtonSubmit }}</p>

      <input type="text" required placeholder="login" />
      <input type="text" required placeholder="name" />
      <input type="text" required placeholder="surname" />
      <input type="password" required placeholder="password" />
      <button>Войти</button>

      <p class="link" @click="switchForm">Авторизация</p>
    </div>
  </form>
</template>

<script lang="ts">
import { AuthActionsEnum } from '@/stores/auth'
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  emits: ['switchForm'],

  setup(_, { emit }) {
    const store = useStore()

    const name = ref<string>('')
    const surname = ref<string>('')
    const login = ref<string>('')
    const password = ref<string>('')

    const textButtonSubmit = computed<string>(() =>
      store.state.auth.loading ? 'LOADING...' : 'SIGN IN'
    )

    async function handleSubmit() {
      await store.dispatch(AuthActionsEnum.REGISTER, { name, surname, login, password })
    }

    function switchForm() {
      emit('switchForm', 'auth')
    }

    return {
      name,
      surname,
      login,
      password,

      textButtonSubmit,
      switchForm,
      handleSubmit,
    }
  },
})
</script>

<style scoped>
.form-container {
  display: grid;
  padding: 10px;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
}

.status {
  font-size: 16px;
}

.link {
  cursor: pointer;
}
</style>
