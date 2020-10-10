import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import store from './plugins/vuex'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  vuetify,
  store,
  beforeCreate(){
    this.$store.commit('initVue')
  }
}).$mount('#app')
