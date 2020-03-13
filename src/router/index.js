import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/login/main.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/',
    name: 'menu',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/menu/main.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
