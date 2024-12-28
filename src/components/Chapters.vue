<template>
  <ul>
    <li v-for="(item, index) in items" :key="index">
      <div class="text-xl">
        {{ `${index < 10 ? '0' + (index + 1) : index + 1} ${item.title}` }}
      </div>
      <ul class="pt-4">
        <li
          class="flex line-clamp-1 py-2 pl-4 mb-3 bg-gray-200 cursor-pointer"
          v-for="(child, childIndex) in item.children"
          :key="childIndex"
          @click="() => handleClick(item.children)"
        >
          <span class="flex items-center mr-2 text-2xl text-sky-500">
            <i v-if="child.type === 'video'" class="i-mdi:video"></i>
            <i v-else-if="child.type === 'paper'" class="i-mdi:paper"></i>
          </span>
          <span> {{ `${index + 1}-${childIndex + 1}` }} {{ child.title }} </span>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup lang="ts" generic="T extends {title: string, children: any}">
import type { GenericType } from './types'

defineProps<GenericType<T>>()

const emits = defineEmits(['click'])

const handleClick = (item) => {
  emits('click', item)
}
</script>

<style scoped></style>
