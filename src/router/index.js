/* eslint-disable */
import { createRouter, createWebHashHistory } from 'vue-router'
<<<<<<< HEAD
=======
import Home from '../views/home/Home'
import Register from '../views/register/Register'
import Login from '../views/login/Login'
>>>>>>> origin/master

const routes = [{
    path: '/',
    name: 'Home',
<<<<<<< HEAD
    component: () => import(/* webpackChunkName: "home" */ '../views/home/Home')
  }, {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/register/Register'),
=======
    component: Home
  }, {
    path: '/register',
    name: 'Register',
    component: Register,
>>>>>>> origin/master
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage;
      isLogin ? next({ name: 'Home'}):  next();
    }
  }, {
    path: '/login',
    name: 'Login',
<<<<<<< HEAD
    component: () => import(/* webpackChunkName: "login" */ '../views/login/Login'),
=======
    component: Login,
>>>>>>> origin/master
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage;
      isLogin ? next({ name: 'Home'}):  next();
    }
<<<<<<< HEAD
  }, {
    path: '/shop/:id',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/shop/Shop')
  },
=======
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
>>>>>>> origin/master
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from ,next) => {
  const { isLogin } = localStorage;
  const { name } = to;
  const isLoginOrRegister = (name === "Login" || name === "Register");
  (isLogin || isLoginOrRegister) ? next() : next({ name: 'Login'});
})

export default router
