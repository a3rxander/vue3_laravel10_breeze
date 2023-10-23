 


import { defineStore } from 'pinia';
import authApi from '@/api/authApi'
import axios from 'axios'


const csrf = () => axios.get(`${import.meta.env.VITE_API_URL}/sanctum/csrf-cookie`)


export const TeacherStore = defineStore('TeacherStore', {
    state: () => ({
        list_teachers:[],
        loading:false,
        teacher:[]
    }),
    getters: {
        
    },
    actions: {
        
        async a_get_teacher()
        {
            try {
                
                this.loading=true
                const response = await authApi.get('api/teachers')
                this.list_teachers=response.data
            } catch (error) {
                
            }finally{
                this.loading=false
            }
        },
    },
});
