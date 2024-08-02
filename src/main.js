import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import $ from 'jquery'
import AOS from 'aos';


// 引入初始化样式
import '@/assets/styles/base.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.use($)
app.use(AOS)
app.config.globalProperties.$http=axios;

app.mount('#app')
