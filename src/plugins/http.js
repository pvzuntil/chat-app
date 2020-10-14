import axios from 'axios'
import NProgress from 'nprogress';

const http = axios.create({})

http.interceptors.request.use(conf =>{
    NProgress.start()
    return conf
})

http.interceptors.response.use(conf =>{
    NProgress.done()
    return conf
})

export default http