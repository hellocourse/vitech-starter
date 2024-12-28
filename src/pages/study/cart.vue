<template>
  <div class="py-4 relative bg-gray-100 flex-1">
    <Container>
      <ul class="w-full pb-15">
        <li
          class="border flex items-center h-40 bg-white"
          v-for="(course, index) in courses"
          :key="index"
        >
          <!-- checkbox -->
          <div class="px-4 text-xl">
            <!-- 选中 -->
            <i class="i-radix-icons:checkbox" v-if="true"></i>
            <!-- 未选中 -->
            <i class="i-carbon:checkbox" v-else></i>
          </div>
          <!-- 课程头图 -->
          <div class="py-2">
            <div
              class="w-45 h-32 bg-center bg-cover"
              :style="{ backgroundImage: `url(${course.image})` }"
            ></div>
          </div>
          <div class="flex-1 flex flex-col items-start justify-between border-r-1 h-full py-3 px-4">
            <!-- 标题 -->
            <div class="text-xl">{{ course.title }}</div>
            <div>
              <!-- 老师，标签 -->
              <div class="text-sm text-gray-400 pb-2">{{ course.teacher }} | {{ course.tag }}</div>
              <!-- 购买用户，更新信息 -->
              <div class="text-sm text-gray-400">
                {{ course.count }}人购买 | 已更新：{{ course.progress }}
              </div>
            </div>
          </div>
          <!-- 价格 -->
          <div class="border-r-1 h-full px-4 flex items-center text-gray-600">
            ￥{{ course.price }}
          </div>
          <!-- 操作 -->
          <div class="flex items-center justify-center px-4">
            <!-- delete -->
            <span class="text-red-500" @click="show = !show">删除</span>
            <!-- favorite -->
          </div>
        </li>
      </ul>
    </Container>
    <div class="absolute bottom-0 left-0 w-full">
      <Container class="bg-white flex justify-between items-center w-full px-2 py-2">
        <div class="flex">
          <!-- checkbox -->
          <div class="px-2 text-xl">
            <!-- 选中 -->
            <i class="i-radix-icons:checkbox" v-if="flag" @click="() => toggle(false)"></i>
            <!-- 未选中 -->
            <i class="i-carbon:checkbox" v-else @click="() => toggle(true)"></i>
          </div>
          <span class="text-gray-400">全选</span>
        </div>
        <div class="flex items-center">
          <span class="mr-2 text-gray-400">合计：</span>
          <span class="pr-4 text-orange text-xl">￥999.00</span>
          <div class="px-8 btn">结算</div>
        </div>
      </Container>
    </div>
    <teleport to="body">
      <!-- modal -->
      <Toast text="hello world" v-model="show"></Toast>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import bg from '@/assets/images/bg.png'

const show = ref(false)

interface CartItemType {
  image: string
  teacher: string
  tag: string
  count: number
  progress: string
  price: string
  title: string
}

interface CartType {
  courses: CartItemType[]
}

withDefaults(defineProps<CartType>(), {
  courses: () => [
    {
      image: bg,
      title: '大前端高级前端工程师',
      teacher: 'Brian',
      tag: '前端',
      count: 1000,
      price: '999.00',
      progress: '10/20'
    }
  ]
})

const [flag, toggle] = useToggle(false)
</script>

<style scoped></style>
