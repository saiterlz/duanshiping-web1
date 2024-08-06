import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from "@/views/Layout.vue";
import NProgress from 'nprogress'
const Home = () => import("@/views/Home/Home.vue")
const About = () => import("@/views/About/About.vue")
const Login = () => import('@/views/Login.vue')
const Shotmovie = () => import('@/views/Shotmovie/Shotmovie.vue')
const Douyin = () => import('@/views/Douyin/Douyin.vue')
const News = () => import('@/views/News/News.vue')
const Knowledge = () => import('@/views/Knowledge/Knowledge.vue')
const Tradnews = () => import('@/views/Tradnews/Tradnews.vue')
const Content = () => import('@/views/Content/Content.vue')
const Message = () => import('@/views/Message/Message.vue')
const Download = () => import('@/views/Download/Download.vue')
const Info = () => import('@/views/Info/Info.vue')


const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/',
        meta: { id: '1', name: '首页', icon: '', path: '/', describe: '用于展示网站首页信息' },
        component: Home,
      }, {
        path: '/about',
        meta: { id: '2', name: '关于我们', icon: '', path: '/about', describe: '用于展示网站首页信息' },
        component: About,
        // hiddle: true
      }, {
        path: '/shotmovie',
        meta: { id: '3', name: '短视频代运营方案', icon: '', path: '/shotmovie', describe: '用于展示网站首页信息' },
        component: Shotmovie,
        // hiddle: true
      }, {
        path: '/douyin',
        meta: { id: '4', name: '抖音代运营案例', icon: '', path: '/douyin', describe: '用于展示网站首页信息' },
        component: Douyin,
        // hiddle: true
      }, {
        // 删除news 前面的斜杠后，可以正常访问二级目录
        path: '/news',
        meta: { id: '5', name: '新闻资讯', icon: '', path: '/news', describe: '用于展示网站首页信息'},
        component: News,
        children: [{
          path: '/tradnews',
          meta: { id: '1', name: '行业新闻', icon: '', path: '/tradnews', describe: '用于展示网站首页信息' },
          component: Tradnews,
        }, {
          path: '/knowledge',
          meta: { id: '2', name: '短视频知识', icon: '', path: '/knowledge', describe: '用于展示网站首页信息' },
          component: Knowledge,
          // hiddle: trues
        }]
      }, {
        path: '/download',
        meta: { id: '6', name: '下载中心', icon: '', path: '/download', describe: '用于展示网站首页信息' },
        component: Download,
      }, {
        path: '/message',
        meta: { id: '7', name: '在线留言', icon: '', path: '/message', describe: '用于展示网站首页信息' },
        component: Message,
      }, {
        path: '/content',
        meta: { id: '8', name: '联系我们', icon: '', path: '/content', describe: '用于展示网站首页信息' },
        component: Content,
      }, {
        path: '/info/:id',
        // meta: { id: '9', name: '文章详情', icon: '', path: '/info', describe: '用于展示网站首页信息' },
        name: 'info',
        component: Info,
        // hiddle: true

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
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
//后置钩子
router.afterEach((to, from, next) => {
  NProgress.done()
})

export default router
