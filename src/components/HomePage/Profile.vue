<template>
  <v-dialog
    v-model="$store.state.dialog.profile"
    scrollable
    persistent
    max-width="700px"
    transition="dialog-transition"
  >
    <v-card>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">
            {{ $store.state.currentUser.name }}'s profile
          </h3>
        </div>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="4" class="text-center">
            <v-avatar
              class="d-block text-center mx-auto my-4 duration-avatar"
              color="grey darken-1"
              size="100"
              transition="scale-transition"
            >
              <v-img
                :src="`https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${currentUser.name}&size=100`"
                alt=""
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                      size="20"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-avatar>
            <v-btn color="success" small>
              <v-icon left>mdi-camera</v-icon>
              Pilih foto profil
            </v-btn>
          </v-col>
          <v-col cols="8">
            <v-col cols="12">
              <v-text-field
                label="Display Name"
                dense
                hide-details
                outlined
                rounded
                :value="currentUser.name"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Status"
                dense
                hide-details
                outlined
                rounded
                :value="currentUser.name"
              ></v-text-field>
            </v-col>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="d-flex justify-end">
        <v-btn color="error" rounded @click="$store.commit('toggleDialogProfile')">close</v-btn>
        <v-btn color="primary" rounded>save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    currentUser: null,
    select: {
      status: ["Ada", "Sibuk", "Jangan janggu"],
    },
    model: {
      status: null,
    },
  }),
  created() {
    this.currentUser = this.$store.state.currentUser;
  },
};
</script>

<style lang="scss" scoped>
</style>