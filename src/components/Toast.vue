<template>
  <transition name="fade">
    <div class="fixed w-full h-full left-0 top-0 flex z-100 transition-all" v-if="show">
      <div :class="['m-auto bg-black bg-opacity-40 text-white px-4 py-2 rounded-2']">
        {{ text }}
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
interface ToastType {
  text: string
  time?: number
}

const props = defineProps<ToastType>()

const show = defineModel({ default: false })

watch(show, () => {
  if (show.value) {
    setTimeout(() => {
      show.value = false
    }, props.time || 2000)
  }
})
</script>

<style scoped></style>
