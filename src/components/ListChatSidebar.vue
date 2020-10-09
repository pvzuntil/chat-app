<template>
  <v-navigation-drawer v-model="$store.state.drawer" app width="320">
    <v-navigation-drawer
      v-model="$store.state.drawer"
      absolute
      color="grey lighten-3"
      mini-variant
      expand-on-hover
    >
      <v-avatar
        class="d-block text-center mx-auto mt-4"
        color="grey darken-1"
        size="36"
      >
        <img
          src="https://ui-avatars.com/api/?background=0D8ABC&color=fff"
          alt=""
        />
      </v-avatar>

      <v-divider class="mx-3 mt-5 mb-3"></v-divider>

      <v-list nav dense rounded>
        <v-list-item link v-for="(n, index) in menu" :key="index">
          <v-list-item-icon>
            <v-icon>{{ n.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ n.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <v-list dense rounded>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon color="red">mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Keluar</v-list-item-title>
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>

    <SearchField />

    <v-list class="pl-16" rounded dense>
      <v-list-item v-for="n in 5" :key="n" link>
        <v-list-item-avatar size="32">
          <v-img
            :src="`https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${n}`"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>User {{ n }}</v-list-item-title>
          <v-list-item-subtitle class="grey--text font-weight-regular">Subtitle</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import SearchField from "./SearchField";
export default {
  components: {
    SearchField,
  },
  data: () => ({
    drawer: {
      menuList: true,
    },
    menu: [
      {
        icon: "mdi-message",
        text: "Pesan",
      },
      {
        icon: "mdi-account-group",
        text: "Pesan Grup",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
</style>