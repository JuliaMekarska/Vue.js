<template>
  <div class="welcome container">
    <p>Welcome to our chat!</p>
    <img src = "https://cdn-icons-png.flaticon.com/512/6723/6723246.png">
    <div v-if="showLogin">
      <h2>Log in</h2>
      <LoginForm @logIn="enterChat"></LoginForm>
      <p>
        No account yet? <span @click="showLogin = false"> Sign up </span> instead
      </p>
    </div>
    <div v-else>
      <h2>Sign up</h2>
      <SignupForm @signUp="enterChat"></SignupForm>
      <p>
        Already registered?
        <span @click="showLogin = true"> Log in </span> instead
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import LoginForm from '../components/LoginForm.vue';
import SignupForm from '../components/SignupForm.vue';

export default {
  components: {
    LoginForm,
    SignupForm,
  },
  setup() {
    const showLogin = ref(true);
    const router = useRouter();

    const enterChat = () => {
      router.push({ name: 'Chatroom' });
    };

    return { showLogin, enterChat };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  background-color: #e1ddfa;
  margin: 10px auto;
}
.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto;
}

img {
  height: 60px;
}

</style>
