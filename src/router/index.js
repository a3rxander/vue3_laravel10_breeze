import { createRouter, createWebHistory } from 'vue-router' 
import authRouter from '@modules/auth/router'
import teachersRouter from '@modules/teachers/router'
import homeRouter from '@modules/home/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ 
    {
      path:'/',
      ...homeRouter
    },
    
    {
      path:'/teachers',
      ...teachersRouter
    },
    {
      path:'/auth',
      ...authRouter
    }
  ]
})

export default router
