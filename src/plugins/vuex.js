import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

const state =  {
    drawer: true,
    rightDrawer: false
}

const mutations = {
    toggleDrawer(state) {
        state.drawer = !state.drawer
    },
    toggleRightDrawer(state) {
        state.rightDrawer = !state.rightDrawer
    },
}

export default new vuex.Store({
    state,
    mutations
})