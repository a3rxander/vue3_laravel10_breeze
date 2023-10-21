<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

import { AuthStore } from '@stores/AuthStore';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
 
const {CheckAuth}=AuthStore()
const { if_authenticated } = storeToRefs(AuthStore()) 
const router = useRouter()

onMounted( async() => {
  
await CheckAuth()
if(if_authenticated)
{

  router.push({ name:'home'})
}
else
{

  router.push({ name:'login'})
} 
 
})
</script>

<template>
   
  <RouterView />
</template>
 