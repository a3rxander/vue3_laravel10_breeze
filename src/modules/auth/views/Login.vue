<template> 
    <div class="bg-white p-8 rounded shadow-md w-96">
      <h2 class="text-2xl font-semibold text-gray-700 mb-6">Login</h2>
      <form @submit.prevent="fn_login">
        <div class="mb-4">
          <label for="email" class="text-gray-600">Email:</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-400"
            required
          />
        </div>
        <div class="mb-4">
          <label for="password" class="text-gray-600">Password:</label>
          <input
            type="password"
            id="password"
            v-model="formData.password"
            class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-400"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div> 
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import {AuthStore} from '@stores/AuthStore'
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';

const formData=ref({ email:'test@example.com',password:'password'})

const {loginUser,CheckAuth} = AuthStore()
const { if_authenticated } = storeToRefs(AuthStore()) 

const router= useRouter()

const fn_login = async () => {

  const {ok, message } = await loginUser(formData.value)
  if (ok) {
    Swal.fire({
      icon: 'success',
      title: 'Éxito',
      text: message, // Puedes personalizar el mensaje que se muestra
    })
    router.push({name:'index'})

  } else {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: message, // Puedes personalizar el mensaje de error
    })
} }

onMounted( async() => {
  
  const {ok} = await CheckAuth()
  if(ok)
  {
  
    router.push({ name:'home'})
  } 
})
   
</script> 