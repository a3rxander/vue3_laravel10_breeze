
export default {

    name: 'teachers',
    component: () => import(/* webpackChunkName: "Layout" */ '@/views/Layout.vue'),
    children: [
       {
           path: '',
           name: 'teacher_index',
           component: () => import(/* webpackChunkName: "teacher_index" */ '@/modules/teachers/views/Index.vue'),
       },
       {
           path: '/:{id}',
           name: 'teacher_show',
           component: () => import(/* webpackChunkName: "teacher_show" */ '@/modules/teachers/views/Show.vue'),
       },
    ]

}
