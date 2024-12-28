<template>
  <transition name="fade">
    <div
      class="fixed w-full h-full z-100 top-0 left-0 bg-black bg-opacity-30 flex transition-all"
      v-if="show"
    >
      <div class="w-80 m-auto bg-white border shadow-lg rounded-2 px-4 py-6">
        <slot></slot>
        <div class="flex justify-end pt-4">
          <div class="btn px-6 mr-4" @click="show = false">取消</div>
          <div
            class="btn-plain px-6"
            @click="
              () => {
                show = false
                $emit('submit')
              }
            "
          >
            确定
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
// vue3.3 -> 实验特性
const show = defineModel({ default: false })
</script>

<style scoped lang="scss"></style>
