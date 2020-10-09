import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

export default new vuex.Store({
    state: {
        drawer: true,
        rightDrawer: false
    },
    mutations: {
        toggleDrawer(state) {
            state.drawer = !state.drawer
        },
        toggleRightDrawer(state) {
            state.rightDrawer = !state.rightDrawer
        },
    }
})