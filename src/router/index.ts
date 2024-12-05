import { createRouter, createWebHistory } from 'vue-router'
const Home =()=> import('../views/home.vue')
const Classified =()=> import('../views/Classified.vue')
const route=[
    {
        path:'/',
        name:'home',
        component:Home
    },{
        path:'/classified/:name?',
        name:'classified',
        component:Classified
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes: route
  })
  
  export default router
