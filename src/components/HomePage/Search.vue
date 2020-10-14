<template>
  <v-bottom-sheet
    inset
    v-model="$store.state.sheet.search"
    class="rounded-bottom-sheet"
    hide-overlay
  >
    <v-sheet>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="Cari berdasarkan nama atau email"
              dense
              outlined
              rounded
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn
          class="mt-6"
          color="error"
          @click="$store.state.sheet.search = !$store.state.sheet.search"
        >
          close
        </v-btn>
      </v-container>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>