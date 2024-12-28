<template>
  <router-view />
</template>

<script setup>
useHead({
  title: 'Vite App',
  meta: [
    { name: 'description', content: 'Vite App Description' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
  ]
})
</script>

<style>
/* 重置默认样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>