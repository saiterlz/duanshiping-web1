import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from "@/views/Layout.vue";
import NProgress from 'nprogress'
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
const Info=()=>import('@/views/Info/Info.vue')


const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home,
        hiddle: true
      },{
        path:'/about',
        component:About,
        hiddle: true
      },{
        path:'/shotmovie',
        component:Shotmovie,
        hiddle: true
      },{
        path:'/douyin',
        component:Douyin,
        hiddle: true
      },{
        path:'/knowledge',
        component:Knowledge,
        hiddle: true
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
      },{
        path:'/info/:id',
        name:'info',
        component:Info,
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

//前置钩子
router.beforeEach((to,from,next)=>{
  NProgress.start()
  next()
})
//后置钩子
router.afterEach((to,from,next)=>{
  NProgress.done()
})

export default router
