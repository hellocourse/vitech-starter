<template>
  <div :class="['flex', { 'flex-col': align === 'vertical' }]">
    <router-link class="item" to="/">产品</router-link>
    <a class="item" href="https://www.imooc.com" target="_blank">社区</a>
    <router-link class="item" to="/study">学习</router-link>
    <router-link class="item" to="/about">关于</router-link>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  align: {
    type: String as PropType<'vertical' | 'horizanal'>
  }
})
</script>

<style scoped lang="scss">
// method 1: 使用transformer
.item {
  @apply relative text-white text-xl px-8 py-2 font-300 cursor-pointer lt-sm:self-start;
  &:hover {
    @apply font-500;
    &:after {
      // content: '';
      @apply content-none absolute bg-gray-100 w-8 h-[1px] bottom-0 left-[calc(50%-1rem)];
      // left: calc(50% - 1rem);
    }
  }
}
</style>
