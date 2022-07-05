const routes = [
  {
    name: 'docs',
    path: '/docs',
    component: ()=> import('../pages/index.vue'),
    children: [
      {
        path: 'price',
        component: () => import('../../src/components/price/docs/index.md')
      }
    ]
  }
];

export default routes;
