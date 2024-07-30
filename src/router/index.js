import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from "@/views/Layout.vue";
const Home=()=>import("@/views/Home/Home.vue")
const About=()=>import("@/views/About/About.vue")
const Login = () => import('@/views/Login.vue')
const Shotmovie = () => import('@/views/Shotmovie/Shotmovie.vue')
const Douyin = () => import('@/views/Douyin/Douyin.vue')
const Knowledge=()=>import('@/views/Knowledge/Knowledge.vue')
const News=()=>import('@/views/News/News.vue')
const Tradnews=()=>import('@/views/Tradnews/Tradnews.vue')
const Content=()=>import('@/views/Content/Content.vue')
const Message=()=>import('@/views/Message/Message.vue')
const Download=()=>import('@/views/Download/Download.vue')


const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home,
      },{
        path:'/about',
        component:About,
      },{
        path:'/shotmovie',
        component:Shotmovie,
      },{
        path:'/douyin',
        component:Douyin,
      },{
        path:'/knowledge',
        component:Knowledge,
      },{
        path:'/news',
        component:News,
      },{
        path:'/tradnews',
        component:Tradnews,
      },{
        path:'/content',
        component:Content,
      },{
        path:'/message',
        component:Message,
      },{
        path:'/download',
        component:Download,
      }
      
    ]
  },
  {
    path: '/login',
    component: Login
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
