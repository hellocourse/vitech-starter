<template>
  <swiper
    :modules="modules"
    :slides-per-view="width > 640 ? (width < 800 ? 3 : 4) : 2"
    :freeMode="true"
    :space-between="50"
    :pagination="{ clickable: true }"
    loop
    v-bind="$attrs"
  >
    <swiper-slide v-for="(item, index) in items" :key="index" class="py-10">
      <div class="px-2 lt-sm:h-20 sm:h-36 w-full bg-gray-100">
        <div
          class="h-full w-full bg-no-repeat bg-contain bg-center"
          :style="{
            'background-image': `url('${item}')`
          }"
        ></div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { Pagination, FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

const { width } = useWindowSize()

interface ItemsType {
  items: string[]
}

defineProps<ItemsType>()

const modules = ref([Pagination, FreeMode])
</script>

<style scoped></style>
