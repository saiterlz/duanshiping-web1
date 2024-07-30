import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaiduMap from 'vue-baidu-map-3x'
// 引入初始化样式
import '@/assets/styles/base.css'

createApp(App).use(store).use(router).mount('#app')
