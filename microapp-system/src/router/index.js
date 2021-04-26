const routes = [
  { path: '/systemApp', name: 'home', component: () => import(/* webpackChunkName: "home" */ '../views/Home') },
  { path: '/systemApp/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ '../views/About') },
];

export default routes;
