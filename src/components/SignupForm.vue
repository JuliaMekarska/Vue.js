<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      required
      placeholder="display name"
      v-model="displayName"
    />
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div className="error">{{ error }}</div>
    <button class = "glow-on-hover">Sign up</button>
  </form>
</template>
<script>
import { ref } from 'vue';
import useSignup from '../composables/useSignup.js';
import main from '../assets/main.css';

export default {
  setup(props, context) {
    const { error, signup } = useSignup();
    const displayName = ref('');
    const email = ref('');
    const password = ref('');
    const handleSubmit = async () => {
      error.value = '';
      await signup(email.value, password.value, displayName.value);
      context.emit('signUp');
    };
    return { email, password, displayName, handleSubmit, error };
  },
};
</script>
<style></style>
