<template>
  <v-navigation-drawer
    app
    clipped
    right
    width="300"
    v-model="$store.state.rightDrawer"
  >
    <span class="d-block text-center mx-auto mt-4">
      <v-avatar
        class="d-block text-center mx-auto mb-5"
        color="grey darken-1"
        size="100"
      >
        <img
          src="https://ui-avatars.com/api/?background=0D8ABC&color=fff"
          alt=""
        />
      </v-avatar>
      <span class="mt-3">Nama nya disini pak</span>
    </span>
    <v-list>
      <v-list-item v-for="n in 5" :key="n" link>
        <v-list-item-content>
          <v-list-item-title>Item {{ n }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>