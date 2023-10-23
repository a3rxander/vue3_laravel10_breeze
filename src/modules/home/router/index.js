
export default {

    name: 'home',
    component: () => import(/* webpackChunkName: "Layout" */ '@/views/Layout.vue'),
    children: [
       {
           path: '/home',
           name: 'home_index',
           component: () => import(/* webpackChunkName: "home_index" */ '@/modules/home/views/HomeView.vue'),
       },
       {
           path: '/profile',
           name: 'profile',
           component: () => import(/* webpackChunkName: "profile" */ '@/modules/home/views/ProfileView.vue'),
       },
    ]

}
