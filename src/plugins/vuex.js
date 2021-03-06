import vue from 'vue'
import vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
// import Cookies from 'js-cookie'

vue.use(vuex)

const state =  {
    drawer: true,
    rightDrawer: true,
    sheet:{
        search: false
    },
    dialog: {
        profile: false
    }
}

const mutations = {
    initVue(){
        // console.log(Cookies.get('IS_LOGIN'), Cookies.get('AUTH_TOKEN'));
    },
    toggleDrawer(state) {
        state.drawer = !state.drawer
    },
    toggleRightDrawer(state) {
        state.rightDrawer = !state.rightDrawer
    },
    toggleDialogProfile(state){
        state.dialog.profile =  !state.dialog.profile        
    }
}

const plugins = [new VuexPersistence().plugin]

export default new vuex.Store({
    state,
    mutations,
    plugins
})