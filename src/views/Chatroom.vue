<template>
  <div class="container">
    <Navbar />
    <NewChatRoom />
    <ChatWindow />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import NewChatRoom from '../components/NewChatRoom.vue';
import ChatWindow from '../components/ChatWindow.vue';
import getUser from '../composables/getUser.js';
import { watch } from 'vue';
import { useRouter } from 'vue-router';

export default {
  components: { Navbar, NewChatRoom, ChatWindow },
  setup() {
    const { user } = getUser();
    const router = useRouter();

    watch(user, () => {
      if (!user.value) {
        router.push({ name: 'Welcome' });
      }
    });
  },
};
</script>

<style>
div {
  text-align: center;
  padding: 20px 0;
}
.chat-window {
  background: #f7f5fa;
  padding: 30px 20px;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>
