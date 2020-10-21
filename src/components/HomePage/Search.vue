<template>
  <v-bottom-sheet
    inset
    v-model="$store.state.sheet.search"
    class="rounded-bottom-sheet"
    scrollable
  >
    <v-card max-height="400" min-height="400">
      <v-card-title primary-title class="font-weight-regular">
        <v-text-field
          label="Cari berdasarkan nama atau email"
          dense
          outlined
          rounded
          autofocus
          hide-details
          @keyup="doSearch"
          v-model="field.search"
        ></v-text-field>
      </v-card-title>
      <v-card-text>
        <span class="text-center title" v-if="items.length == 0">
          <span v-if="field.search == ''">Ketik sesuatu untuk mencari</span>
          <span v-else>Tidak ada hasil apapun.</span>
        </span>
        <v-list two-line class="" rounded v-else>
          <template v-for="item in items">
            <v-list-item :key="item.title" link>
              <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-html="item.name"></v-list-item-title>
                <v-list-item-subtitle>
                  <span class="text--primary">{{ item.name }}</span> &mdash;
                  Percakapan terakhir dengan dia
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-card-text>
    </v-card>
  </v-bottom-sheet>
</template>

<script>
import Axios from "axios";
import httpAuth from "../../plugins/httpAuth";

var cancel;
var CancelToken = Axios.CancelToken;

export default {
  data: () => ({
    items: [],
    field: {
      search: "",
    },
  }),
  methods: {
    doSearch() {
      let dataPost = {
        key: this.field.search,
      };

      if (cancel) {
        cancel();
      }
      httpAuth
        .post(this.API_LINK + "user/search", dataPost, {
          cancelToken: new CancelToken(function executor(c) {
            cancel = c;
          }),
        })
        .then((res) => {
          let data = res.data;
          this.items = data.data;
          console.log(this.items);
        });
    },
  },
  created() {
    this.axiosToken = Axios.CancelToken;
  },
};
</script>

<style lang="scss" scoped>
</style>