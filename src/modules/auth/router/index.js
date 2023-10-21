
export default {

    name: 'auth',
    component: () => import(/* webpackChunkName: "Auth Layout" */ '@/modules/auth/views/Layout.vue'),
    children: [
       {
           path: '',
           name: 'login',
           component: () => import(/* webpackChunkName: "Login" */ '@/modules/auth/views/Login.vue'),
       },
       {
           path: '/logout',
           name: 'logout',
           component: () => import(/* webpackChunkName: "logout" */ '@/modules/auth/views/Logout.vue'),
       },
    ]

}
