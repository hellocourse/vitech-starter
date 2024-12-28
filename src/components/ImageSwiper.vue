<template>
  <div class="py-4">
    <!-- tab按钮，切换swiper中的slide -->
    <ul class="flex justify-evenly items-center w-full pb-4">
      <li
        v-for="(item, index) in titles"
        :key="index"
        :class="[
          'flex flex-col items-center cursor-pointer transition-all text-gray-400 item',
          { active: activeIndex === index }
        ]"
        @click="
          () => {
            swiperRef?.slideTo(index, 500)
            activeIndex = index
          }
        "
      >
        <div class="text-2xl border-b-2 pb-2 px-2 line">{{ index + 1 }}</div>
        <div class="pt-4 text">{{ item }}</div>
      </li>
    </ul>
    <swiper
      :slides-per-view="1"
      :space-between="0"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :style="{ height: (width / 1200) * height + 'px' }"
      :modules="modules"
      :navigation="{ prevEl: '.prev', nextEl: '.next' }"
      :pagination="{
        clickable: true,
        bulletClass: 'inline-block w-3 h-3 rounded-1/2 bg-gray-300 z-20 mr-4 cursor-pointer',
        bulletActiveClass: 'w-8! bg-orange rounded-3'
      }"
      loop
      v-bind="$attrs"
    >
      <swiper-slide v-for="(item, index) in items" :key="index">
        <slot :item="item">
          <div
            class="w-full h-full bg-contain bg-no-repeat bg-center-top"
            :style="{ backgroundImage: `url(${item})` }"
          ></div>
        </slot>
      </swiper-slide>
      <!-- <slot name="pagination"> -->
      <div v-if="!$attrs.pagination_hide">
        <div
          class="rounded-1/2 bg-white shadow-lg w-15 h-15 absolute left-2 top-1/2 transform-translate-y--1/2 z-30 border flex justify-center items-center cursor-pointer group"
        >
          <div
            class="prev i-ep:arrow-left text-gray-300 group-hover:text-gray-700"
            style="font-size: 2rem"
          ></div>
        </div>
        <div
          class="rounded-1/2 bg-white shadow-lg w-15 h-15 absolute right-2 top-1/2 transform-translate-y--1/2 z-30 border flex justify-center items-center cursor-pointer group"
        >
          <div
            class="next i-ep:arrow-right text-gray-300 group-hover:text-gray-700"
            style="font-size: 2rem"
          ></div>
        </div>
      </div>
      <!-- </slot> -->
    </swiper>
  </div>
</template>

<script setup lang="ts">
import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const { width } = useWindowSize()

const props = defineProps({
  height: {
    type: Number,
    default: 1200
  },
  items: {
    type: Array as PropType<Array<String>>,
    default: () => []
  },
  titles: {
    type: Array as PropType<Array<String>>,
    default: () => []
  }
})

const swiperRef = ref<SwiperType>()
const activeIndex = ref<number>(0)

const modules = [Navigation, Pagination]

const emits = defineEmits(['change'])

const onSwiper = (swiper: SwiperType) => {
  // console.log(swiper)
  swiperRef.value = swiper
}
const onSlideChange = (e) => {
  emits('change', e)
  activeIndex.value = (e as SwiperType).activeIndex
}
</script>

<style scoped lang="scss">
.swiper-button-disabled {
  color: rgba($color: #000, $alpha: 0.3);
}

.item {
  &.active,
  &:hover {
    .line {
      color: orange;
      border-color: orange;
    }
    .text {
      color: orange;
    }
  }
}
</style>
