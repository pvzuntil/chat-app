<template>
  <div>
    <v-responsive width="100%" class="pl-16 pt-3 pr-2">
      <v-text-field
        label="Cari percakapan"
        outlined
        dense
        hide-details=""
        rounded
      ></v-text-field>
    </v-responsive>

    <v-list class="pl-16" rounded dense>
      <v-list-item v-for="n in 5" :key="n" link>
        <v-list-item-avatar size="32">
          <v-img
            :src="`https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${n}`"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>User {{ n }}</v-list-item-title>
          <v-list-item-subtitle class="grey--text font-weight-regular"
            >Subtitle</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>