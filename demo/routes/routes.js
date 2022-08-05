const routes = [
  {
    name: 'home',
    path: '/',
    component: ()=> import('../pages/home/index.vue')
  },
  {
    name: 'docs',
    path: '/docs',
    component: ()=> import('../pages/Layout.vue'),
    redirect: '/docs/introduction',
    children: [
      {
        path: 'introduction',
        component: () => import('../pages/docs/introduction/index.md')
      },
      {
        path: 'price',
        component: () => import('../../src/components/price/docs/index.md')
      },
      {
        path: 'watch',
        component: () => import('../../src/components/watch/docs/index.md')
      }
    ]
  }
];

export default routes;
