<template>
  <div>
    <h1 class="mb-3">Users</h1>
    <ul class="list-group">
      <li
        class="list-group-item list-group-item-action" 
        style="cursor: pointer;"
        v-for="user in users" :key="user.id"
      > {{ `${user.firstName} ${user.lastName} | ${user.email}` }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { User } from '@/interfaces/user';

  useHead({
    title: 'List'
  }); 

  const response = await useFetch('http://localhost:3001/api/v1/users');
  const users: User[] = response.data;
</script>
