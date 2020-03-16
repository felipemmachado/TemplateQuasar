import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/login/main.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login/:hash?',
    name: 'login',
    component: Login,
    props: true,
  },
  {
    path: '/',
    name: 'menu',
    component: () => import('../views/menu/main.vue'),
    children: [
      {
        path: '/inicio',
        name: 'inicio',
        component: () => import('../views/inicio/main.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
