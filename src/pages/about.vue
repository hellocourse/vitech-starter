<template>
<div>Hello World</div>
<div>Hello World</div>
  <RouterLink to="/">home</RouterLink>
  <RouterLink to="/about">about</RouterLink>
  <div>This is an about page</div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

</style>
