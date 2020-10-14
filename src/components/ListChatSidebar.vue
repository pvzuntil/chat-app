<template>
  <v-navigation-drawer
    v-model="$store.state.drawer"
    app
    width="320"
    class="border-right"
  >
    <v-navigation-drawer
      v-model="$store.state.drawer"
      absolute
      color="grey lighten-3"
      :mini-variant.sync="drawer.left.mini"
      expand-on-hover
      hide-overlay
      fixed
      @update:mini-variant="updateMiniVariant"
    >
      <v-avatar
        class="d-block text-center mx-auto mt-4 duration-avatar"
        color="grey darken-1"
        :size="avatar.size"
        @click="console.log('sahs')"
        transition="scale-transition"
      >
        <img
          src="https://ui-avatars.com/api/?background=0D8ABC&color=fff"
          alt=""
        />
      </v-avatar>

      <div class="text-center mt-4">
        <v-scale-transition>
          <v-btn color="success" small v-if="!drawer.left.mini"
            >EDIT PROFILE</v-btn
          >
        </v-scale-transition>
      </div>
      <v-divider class="mx-3 mt-5 mb-3"></v-divider>

      <v-list nav dense rounded>
        <v-list-item
          v-for="(n, index) in menu"
          :key="index"
          @click="menuAction(n.action)"
        >
          <v-list-item-icon>
            <v-icon>{{ n.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ n.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <v-list dense rounded>
          <v-list-item link @click="doLogout">
            <v-list-item-icon>
              <v-icon color="red">mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Keluar</v-list-item-title>
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>

    <ListChat />
  </v-navigation-drawer>
</template>

<script>
import ListChat from "./ListChat";
import sw from "../plugins/swal";
import Cookies from "js-cookie";
export default {
  components: {
    ListChat,
  },
  data: () => ({
    avatar: {
      size: 36,
    },
    drawer: {
      menuList: true,
      left: {
        mini: true,
      },
    },
    menu: [
      {
        icon: "mdi-message",
        text: "Pesan",
        action: "pesan",
      },
      {
        icon: "mdi-account-group",
        text: "Pesan Grup",
        action: "group",
      },
      {
        icon: "mdi-account-search",
        text: "Cari",
        action: "search",
      },
    ],
  }),
  methods: {
    updateMiniVariant(e) {
      if (e) {
        this.avatar.size = 36;
      } else {
        this.avatar.size = 90;
      }
    },
    menuAction(act) {
      switch (act) {
        case "search":
          this.$store.state.sheet.search = true;
          break;
      }
    },
    doLogout() {
      return sw
        .confirm({
          title: "Perhatian !",
          text: "Apakah anda yakin ingin keluar .?",
          icon: "warning",
        })
        .then((result) => {
          if (result.value) {
            Cookies.remove("IS_AUTH");
            Cookies.remove("AUTH_TOKEN");
            this.$router.replace("/login");
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.border-right {
  border-right: 0.2px solid rgba($color: #0000, $alpha: 0.1);
}
.duration-avatar {
  transition-duration: 500ms;
}
</style>