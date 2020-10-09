<template>
  <v-app>
    <SystemBar />
    <AppBar />
    <ListChat />
    <RightSidebar/>

    <v-main>
      <!--  -->
    </v-main>

    <ChatField/>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import SystemBar from "./components/SystemBar";
import AppBar from "./components/AppBar";
import ListChat from "./components/ListChatSidebar";
import RightSidebar from './components/RightSidebar'
import ChatField from './components/ChatField'

export default {
  name: "App",

  components: {
    SystemBar,
    AppBar,
    ListChat,
    RightSidebar,
    ChatField
  },

  data: () => ({
    drawer: true,
  }),

  mounted() {},

  methods: {},
};
</script>
