import Vue from 'vue'
import Router from 'vue-router'
import Main from  '@/components/main/Main'
import Typography from  '@/components/main/Typography'
import Elements from  '@/components/main/Elements'
import Login from  '@/components/main/Login'
import Register from  '@/components/main/Register'
import Gift_show from  '@/components/gift/gift_show'


Vue.use(Router)

export default new Router({
  routes: [
   
   	{
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main
    },
    {
      path: '/Typography',
      name: 'Typography',
      component: Typography
    },
     {
      path: '/Gift_show',
      name: ' Gift_show',
      component: Gift_show
    },
    {
      path: '/Elements',
      name: 'Elements',
      component: Elements
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
  ]
})
