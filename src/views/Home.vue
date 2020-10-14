<template>
  <div class="home">
    <SystemBar />
    <AppBar />
    <ListChat />
    <RightSidebar />

    <v-main>
      <v-container fluid>
        <span v-for="n in 10" :key="n + 'L'">
          <v-hover v-slot:default="{ hover }" open-delay="400">
            <span>
              <v-row class="px-8 mt-2 d-flex">
                <v-card class="px-3 py-1" elevation="1" color="blue lighten-4">
                  sdhsjdhj
                </v-card>
              </v-row>
              <v-expand-transition>
                <v-row class="px-8 mt-1 d-flex" v-if="hover">
                  <span style="font-size: 12px">10 Desember 1020 - 20:10</span>
                </v-row>
              </v-expand-transition>
            </span>
          </v-hover>
        </span>

        <span v-for="n in 10" :key="n + 'R'">
          <v-row class="px-8 mt-2 d-flex justify-end">
            <v-card class="px-3 py-1" elevation="1" color="blue lighten-2">
              sdhsjdhj
            </v-card>
          </v-row>
          <v-row class="px-8 mt-1 d-flex justify-end">
            <span style="font-size: 12px">10 Desember 1020 - 20:10</span>
          </v-row>
        </span>
      </v-container>
    </v-main>

    <ChatField />
    <Search/>
  </div>
</template>

<script>
// @ is an alias to /src

import SystemBar from "../components/SystemBar";
import AppBar from "../components/AppBar";
import ListChat from "../components/ListChatSidebar";
import RightSidebar from "../components/RightSidebar";
import ChatField from "../components/ChatField";
import Search from "../components/HomePage/Search";


export default {
  name: "Home",
  components: {
    SystemBar,
    AppBar,
    ListChat,
    RightSidebar,
    ChatField,
    Search
  },
};
</script>

<style lang="css">
  .rounded-bottom-sheet{
    border-top-left-radius: 20%;
  }
</style>