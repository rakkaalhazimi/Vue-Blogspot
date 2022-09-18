import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsView.vue')
  },
  {
    path: '/post/:id',
    name: 'post',
    component: () => import('../views/BlogPostView.vue')
  },
  {
    path: '/post/create',
    name: 'createPost',
    component: () => import ('../views/BlogEditorView.vue')
  },
  {
    path: '/admin-login',
    name: 'adminLogin',
    component: () => import ('../views/AdminLoginView.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
