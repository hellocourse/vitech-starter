<template>
<div ref="target">
  <div>Hello World</div>
  <div>Hello World</div>
  <div>Hello World</div>
  <RouterLink to="/home">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <div>{{ msg }}</div>
  <div>Hello World</div>
  <UserComponents></UserComponents>

  <h1 class="text-3xl font-bold underline">Hello world! </h1>
  <!-- 鼠标位置，isOutside 是否在元素外部，以div为边界， -->
  <p>x:{{ x }}</p>
  <p>y:{{ y }}</p>
  <p>isOutside:{{ isOutside }}</p>
  <HelloWorld></HelloWorld>

</div>
</template>

<script setup>
import { RouterLink } from 'vue-router/auto'
// 不需要import { ref } from 'vue'
const msg = ref('Hello World')
const target = ref(null)
// 获取距离屏幕左上角的位置的坐标，isOutside 是否在元素外部
const { x, y, isOutside } = useMouseInElement(target)
</script>

<style scoped>
/* 可以添加组件特定的样式 */
</style>
