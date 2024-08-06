import { createStore } from 'vuex'
import menu from "./menu";
import articles from "./articles"

export default createStore({
  // state: {
  // },
  // getters: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    menu,
    articles
  }
})
