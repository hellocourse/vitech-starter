<template>
  <ul class="tabs flex w-full">
    <li
      :class="['px-4 py-2 cursor-pointer', { active: index === activeIndex }]"
      v-for="(item, index) in items"
      :key="index"
      @click="activeIndex = index"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script setup lang="ts" generic="T">
defineProps({
  items: {
    type: Array as PropType<T[]>,
    default: () => []
  }
  // activeIndex: Number
})

// v-model
const activeIndex = defineModel<number>({ local: true, default: 2 })

// const activeIdx = ref(props.activeIndex)

// defineEmits(['change'])
</script>

<style scoped lang="scss">
.tabs {
  .active {
    @apply text-sky-400 relative;
    &:after {
      @apply content-none absolute bg-sky-400 w-8 h-[2px] bottom-0 left-1/2 transform-translate-x--1/2;
    }
  }
}
</style>
