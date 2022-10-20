<template>
  <div>
    <AuthForm v-if="currentForm === 'auth'" @switchForm="switchForm" />
    <RegisterForm v-if="currentForm === 'register'" @switchForm="switchForm" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import AuthForm from '@/components/AuthForm.vue'
import RegisterForm from '@/components/RegisterForm.vue'

export type Form = 'auth' | 'register'

export default defineComponent({
  components: {
    AuthForm,
    RegisterForm,
  },

  setup() {
    const currentForm = ref<Form>('auth')

    function switchForm(formType: Form) {
      currentForm.value = formType
    }

    return {
      currentForm,
      switchForm,
    }
  },
})
</script>
