import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  // 前台
  {
    path: '/',
    name: 'FrontLayout',
    component: () => import('@/views/client/FrontLayout.vue'), // 前台 layout
    children: [
      {
        path: '',
        name: 'index',

        component: () => import('@/views/client/Index.vue'), // 首頁
      },
      {
        path: 'product',
        name: 'product',

        component: () => import('@/views/client/Product.vue'), // 產品列表
      },
      {
        path: 'product/:pid',
        name: 'singleProduct',

        component: () => import('@/views/client/Singleproduct.vue'), // 產品內頁
      },
      {
        path: 'cart',
        name: 'cart',

        component: () => import('@/views/client/Cart.vue'), //
      },
    ],
  },
  // 登入頁面
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/client/Login.vue'),
  },
  // 後台
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/manager/Dashboard.vue'),
    children: [
      {
        path: '',
        name: 'orders',
        component: () => import('@/views/manager/Orders.vue'),
      },
      {
        path: 'product',
        name: 'dashboardProduct',
        component: () => import('@/views/manager/Product.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
