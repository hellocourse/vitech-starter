<template>
<div>home</div>
</template>
<script setup>
import { RouterLink } from 'vue-router/auto'
import { registerSW } from 'virtual:pwa-register'

onMounted(() => {
  registerSW({
    immediate: true,
    onRegisteredSW(_url, registration) {
      setInterval(() => {
        registration && registration.update()
      }, 3600000)
    }
  })
})
</script>

<style scoped></style>

<route lang="yaml">
  meta:
    layout: default
</route>
