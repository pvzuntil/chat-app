<template>
  <v-flex xs10 md6>
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
                clearable
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
            <v-col xs-12 class="d-flex justify-end mb-0">
              <v-btn
                depressed
                small
                rounded
                class="mr-3"
                outlined
                @click="dialog.signup = true"
                >SIGNUP</v-btn
              >
              <v-btn color="primary" small rounded>LOGIN</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>

    <v-dialog v-model="dialog.signup" persistent width="650">
      <v-card>
        <v-card-title class="headline">Registration</v-card-title>
        <v-card-text>
          <!-- <v-layout row wrap> -->
          <v-row>
            <v-col cols="12">
              <v-text-field
                name="nama"
                label="Masukkan nama ..."
                outlined
                rounded
                hide-details
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field
                name="email"
                label="Masukkan email ..."
                outlined
                rounded
                hide-details
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                name="password"
                label="Masukkan password ..."
                outlined
                rounded
                type="password"
                hide-details
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                name="Ketik ulang password"
                label="Konfirmasi password..."
                outlined
                rounded
                type="password"
                hide-details
              ></v-text-field>
            </v-col>
          </v-row>
          <!-- </v-layout> -->
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" @click.native="dialog.signup = false"
            >Close</v-btn
          >
          <v-btn color="primary" @click.native="dialog.signup = false"
            >SIGNUP</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-flex>
</template>

<script>
export default {
  data: () => ({
    dialog: {
      signup: false,
    },
  }),
};
</script>

<style lang="scss" scoped>
</style>