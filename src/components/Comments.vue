<template>
  <ul class="px-2">
    <li class="flex py-4 border-b-1" v-for="(item, index) in items" :key="index">
      <div class="mr-4">
        <div
          class="w-15 h-15 rounded-1/2 bg-cover bg-center"
          :style="{ backgroundImage: `url(${item.image})` }"
        ></div>
      </div>
      <div class="flex flex-col">
        <div class="text-dark-300 text-xl mb-4">{{ item.username }}</div>
        <div class="text-gray-500">
          {{ item.desc }}
        </div>
      </div>
    </li>
    <li v-if="items.length === 0" class="py-2 text-gray-300">暂无评价~</li>
  </ul>
</template>

<script setup lang="ts" generic="T extends {image: string, username:string, desc: string}">
import type { GenericType } from './types'

defineProps<GenericType<T>>()
</script>

<style scoped></style>
