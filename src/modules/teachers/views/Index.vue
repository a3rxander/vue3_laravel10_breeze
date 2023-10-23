<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Teachers</h1>
 
    <div class="overflow-x-auto">
      <table class="min-w-full table-auto">
        <thead>
          <tr>
            <th class="border px-4 py-2">First Name</th>
            <th class="border px-4 py-2">Last Name</th>
            <th class="border px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in list_teachers" :key="item.id">
            <td class="border px-4 py-2">{{ item.first_name }}</td>
            <td class="border px-4 py-2">{{ item.last_name }}</td>
            <td class="border px-4 py-2">{{ item.email }}</td>
          </tr>  
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import {ref,onMounted} from 'vue'
import { TeacherStore } from "@stores/TeacherStore";

const {list_teachers} = storeToRefs(TeacherStore())
const {a_get_teacher} =  TeacherStore()


onMounted( async() => {
  await a_get_teacher()
})
</script>