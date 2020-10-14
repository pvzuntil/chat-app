import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import store from './plugins/vuex'

Vue.config.productionTip = false

import VueSweetalert2 from 'vue-sweetalert2'
Vue.use(VueSweetalert2);


import VueGlobalVariable from 'vue-global-var'
import globalVars from './plugins/globalVars'
Vue.use(VueGlobalVariable, globalVars)

new Vue({
  render: h => h(App),
  router,
  vuetify,
  store,
  beforeCreate(){
    this.$store.commit('initVue')
  }
}).$mount('#app')
