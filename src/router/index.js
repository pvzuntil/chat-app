import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Cookies from 'js-cookie'
import NProgress from 'nprogress';
import httpAuth  from '../plugins/httpAuth'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      type: 'auth'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      type: 'guest'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, _from, next) => {
  NProgress.start()
  let isAuth = Cookies.get('IS_AUTH')
  let toType = to.meta.type

  if (toType == 'guest') {
    if (isAuth) {
      next('/')
    }
  }

  if (toType == 'auth') {
    if (!isAuth) {
      next('/login')
    }
  }

  if (isAuth) {    
    httpAuth.post(new Vue().API_LINK + 'user').then(res=>{
      if(res.data.status == 99){
        Cookies.remove('IS_AUTH')
        Cookies.remove('AUTH_TOKEN')
        return next('/login')
      }
    })
  }

  return next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
