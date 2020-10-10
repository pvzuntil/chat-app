<template>
  <v-app-bar app elevation="1" height="60" clipped-right>
    <v-btn icon color="primary" class="mr-2" @click="$store.commit('toggleDrawer')">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <span>Chatting Dengan Saya</span>
    <v-spacer></v-spacer>
    <v-btn icon color="primary" @click="$store.commit('toggleRightDrawer')">
        <v-icon>mdi-information</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    // datamenu: null
  }),
  props: [],
  mounted() {},
  methods: {
      
  },
};
</script>

<style lang="scss" scoped>
</style>