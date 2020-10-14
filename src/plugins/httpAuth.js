import axios from 'axios'
import NProgress from 'nprogress';
import Cookies from 'js-cookie'

const httpAuth = axios.create({})

httpAuth.interceptors.request.use(conf =>{
    NProgress.start()
    conf.headers.common['AUTH_TOKEN'] = Cookies.get('AUTH_TOKEN')
    return conf
})

httpAuth.interceptors.response.use(conf =>{
    NProgress.done()
    return conf
})

export default httpAuth