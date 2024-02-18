<template>
  <nav v-if="user">
    <div>
      <RouterLink v-if="user" :to="{}">
        Hey {{ user.displayName }}!
      </RouterLink>
      <p class="email">Currently logged in as {{ user.email }} email</p>
    </div>
    <button class = "glow-on-hover" @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import userLogout from '../composables/userLogout.js';
import getUser from '../composables/getUser.js';
export default {
  setup() {
    const { logout, error } = userLogout();
    const { user } = getUser();

    const handleClick = async () => {
      await logout();
      if (!error.value) {
        console.log('user logged out');
      }
    };
    return { handleClick, user, error };
  },
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eeee;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
  margin-top: 10px;
}

</style>
