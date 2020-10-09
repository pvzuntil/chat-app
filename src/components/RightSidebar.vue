<template>
  <v-navigation-drawer app clipped right width="300" v-model="$store.state.rightDrawer">
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