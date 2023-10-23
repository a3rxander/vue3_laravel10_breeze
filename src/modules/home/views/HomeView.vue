 
<template>   
    <div class="container mx-auto p-4"> 
        <h1 class="text-2xl font-semibold mb-4">Home Page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
 
    </div>
</template>

<script setup>

import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
 
import { RouterLink, RouterView } from 'vue-router' 

import { AuthStore } from '@stores/AuthStore';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
 
const {CheckAuth}=AuthStore()
const { if_authenticated } = storeToRefs(AuthStore()) 
const router = useRouter()

onMounted( async() => {
   
const {ok} =  await CheckAuth()

console.log(ok)
if(!ok)
{
  
console.log("entra")
  router.push({ name:'login'})
}  
 
}) 
</script>
