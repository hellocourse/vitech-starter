<template>
  <div class="w-full pt-4 px-4 pb-8">
    <div class="text-3xl text-dark-300 text-center pb-4">{{ title }}</div>
    <ul class="grid grid-cols-2 place-content-stretch gap-4 mt-2 lg:grid-cols-4">
      <li v-for="(item, index) in items" :key="index" class="flex flex-col items-center">
        <Card
          class="bg-white w-full flex-1"
          :image-type="'avatar'"
          :image="item.image"
          :title="item.name"
          :sub-title="item.desc"
        ></Card>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { PartnerType } from './types.d'
import Card from './Card.vue'

interface Partner {
  items: PartnerType[]
  title?: string
}

withDefaults(defineProps<Partner>(), {
  items: () => [],
  title: '合作伙伴'
})
</script>

<style scoped lang="scss">
.grid {
  li {
    :deep(.img) {
      @apply bg-white bg-contain bg-center shadow-lg;
    }
  }
}
</style>
