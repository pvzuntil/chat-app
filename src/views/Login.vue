<template>
  <v-layout row wrap class="d-flex justify-center align-center">
    <v-flex xs6>
      <v-card>
        <v-card-title class="blue white--text"> Silahkan Login </v-card-title>
        <v-card-text>
          <v-container fluid pt-6>
            <v-row>
              <v-col xs-12>
                <v-text-field
                  label="Masukkan Email"
                  outlined
                  hide-details
                  rounded
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col xs-12>
                <v-text-field
                  label="Masukkan Password"
                  outlined
                  rounded
                  hide-details
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col xs-12>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>