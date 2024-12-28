<template>
  <div class="flex-1 flex flex-col">
    <!-- 头部内容 -->
    <div class="relative">
      <!-- Swiper -->
      <Swiper :items="items" :height="36 * store.rate + 'rem'" :pagination_hide="true"></Swiper>
      <!-- Swiper里面登录 -->
      <div
        class="absolute bottom-0 left-0 w-full flex py-2 bg-gray-900 bg-opacity-40 z-20 lt-sm:display-none"
      >
        <Container>
          <div class="flex justify-between w-full">
            <!-- 分类 -->
            <ul class="flex types text-white" v-if="$route.name === '/study/cart'">
              <li class="active item">购物车</li>
            </ul>
            <ul class="flex types text-white" v-else>
              <li class="active item">每日一课</li>
              <li class="item">精品微课</li>
              <li class="item">学习计划</li>
              <li class="item">优质专栏</li>
            </ul>
            <div class="flex items-center">
              <!-- 搜索 -->
              <div class="relative bg-white rounded-6 pl-4 pr-2 h-full flex items-center mr-4">
                <input type="text" class="outline-none mr-2" placeholder="搜索课程" />
                <i class="i-ep:search"></i>
              </div>
              <!-- 登录 -->
              <div class="text-gray-200">
                <span class="mr-2 cursor-pointer hover:text-white">登录</span>|
                <span class="ml-2 cursor-pointer hover:text-white">注册</span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import type { SwiperItemType } from '@/components/types'

import { useThemeStore } from '@/store/useThemeStore'

import bg from '@/assets/images/bg.png'

const store = useThemeStore()

const items: SwiperItemType[] = [
  {
    image: bg,
    title: '传播技术的种子',
    subTitle: '让技术没有门槛，让沟通没有障碍',
    url: 'https://www.imooc.com'
  },
  {
    image: bg,
    title: '传播技术的种子1',
    subTitle: '让技术没有门槛，让沟通没有障碍1',
    url: 'https://www.imooc.com'
  },
  {
    image: bg,
    title: '传播技术的种子2',
    subTitle: '让技术没有门槛，让沟通没有障碍2',
    url: 'https://www.imooc.com'
  },
  {
    image: bg,
    title: '传播技术的种子3',
    subTitle: '让技术没有门槛，让沟通没有障碍3',
    url: 'https://www.imooc.com'
  }
]
</script>

<style scoped lang="scss">
.types {
  .item {
    @apply px-4 py-1 rounded-6 bg-gray-100 bg-opacity-20 mr-2 cursor-pointer;
    &:hover {
      @apply bg-white text-dark-200;
    }
  }
  .active {
    @apply bg-white text-dark-300;
  }
}
</style>
