<template>
  <v-flex xs10 md6>
    <v-card>
      <v-card-title class="blue white--text"> Silahkan Login </v-card-title>
      <v-card-text>
        <v-container fluid pt-6>
          <v-row>
            <v-col xs-12>
              <v-text-field
                tabindex="1"
                label="Masukkan Email"
                outlined
                hide-details
                rounded
                clearable
                dense
                v-model="field.login.email"
                @keyup.enter="doLogin"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col xs-12>
              <v-text-field
                tabindex="2"
                label="Masukkan Password"
                outlined
                rounded
                hide-details
                dense
                v-model="field.login.password"
                @keyup.enter="doLogin"
                type="password"
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
              <v-btn
                color="primary"
                small
                rounded
                @click="doLogin()"
                :loading="loading.login"
                >LOGIN</v-btn
              >
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
                dense
                v-model="field.signup.name"
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
                dense
                v-model="field.signup.email"
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
                dense
                v-model="field.signup.password"
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
                dense
                v-model="field.signup.rePass"
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
          <v-btn color="primary" @click="doSignup()" :loading="loading.signup"
            >SIGNUP</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-flex>
</template>

<script>
// import axios from 'axios'
// import NProgress from 'nprogress'
import sw from "../../plugins/swal";
import http from "../../plugins/http";
import Cookie from "js-cookie";

export default {
  data: () => ({
    dialog: {
      signup: false,
    },
    field: {
      login: {
        email: "",
        password: "",
      },
      signup: {
        name: "",
        email: "",
        password: "",
        rePass: "",
      },
    },
    loading: {
      signup: false,
      login: false,
    },
  }),
  methods: {
    doSignup() {
      if (this.field.signup.password != this.field.signup.rePass) {
        return sw.toast({
          title: "Password konfirmasi harus sama.",
          icon: "error",
        });
      }
      this.loading.signup = true;
      let dataPost = {
        name: this.field.signup.name,
        email: this.field.signup.email,
        password: this.field.signup.password,
      };
      http.post(this.API_LINK + "user/signup", dataPost).then((res) => {
        this.loading.signup = false;
        let data = res.data;

        if (data.status == 0) {
          return sw.toast({
            title: data.message.capitalize(),
            icon: "error",
          });
        }

        return sw
          .show({
            title: "Berhasil !",
            text: data.message,
            icon: "success",
          })
          .then(() => {
            this.dialog.signup = false;
          });
      });
      // http.post()
    },
    doLogin() {
      this.loading.login = true;
      let dataPost = {
        email: this.field.login.email,
        password: this.field.login.password,
      };
      http.post(this.API_LINK + "user/login", dataPost).then((res) => {
        this.loading.login = false;
        let data = res.data;

        if (data.status == 0) {
          return sw.toast({
            title: data.message.capitalize(),
            icon: "error",
          });
        }

        Cookie.set("AUTH_TOKEN", data.data.token);
        Cookie.set("IS_AUTH", true);

        return sw
          .show({
            title: "Berhasil !",
            text: data.message,
            icon: "success",
          })
          .then(() => {
            this.$router.replace("/");
          });
      });
    },
  },
  created() {
    console.log(this.API_LINK);
  },
};
</script>

<style lang="scss" scoped>
</style>