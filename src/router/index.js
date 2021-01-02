import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue')
  },
  {
    path: '/blog/:slug',
    name: 'SingleBlog',
    component: () => import(/* webpackChunkName: "SingleBlog" */ '../views/SingleBlog.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
