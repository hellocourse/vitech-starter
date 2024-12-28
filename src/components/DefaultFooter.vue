<template>
  <div class="bg-coolgray-700 text-coolgray-400 text-lg py-4">
    <Container class="flex-col">
      <!-- 菜单 -->
      <div class="w-full flex justify-between items-center">
        <!-- Mene or Props -->
        <ul class="flex justify-start flex-1">
          <li><router-link class="item" to="/">产品</router-link></li>
          <li><a class="item" href="https://www.imooc.com" target="_blank">社区</a></li>
          <li><router-link class="item" to="/study">学习</router-link></li>
          <li><router-link class="item" to="/about">关于</router-link></li>
        </ul>
        <div class="flex items-center pr-10 text-3xl z-1">
          <div class="group relative">
            <div class="i-ic:baseline-wechat cursor-pointer"></div>
            <img
              :src="contacts.wechat || wechat"
              class="display-none absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-100%] w-20 h-20 rounded group-hover:display-block max-w-unset"
              alt=""
            />
          </div>
          <div class="group relative">
            <div class="ml-4 i-bi:sina-weibo cursor-pointer"></div>
            <img
              :src="contacts.sina || sina"
              class="display-none absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-100%] w-20 h-20 rounded group-hover:display-block max-w-unset"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="my-4 border-b-1 border-b-coolgray-600 w-full"></div>
      <!-- 介绍，联系信息，媒体信息，外链 -->
      <ul class="w-full flex justify-start mb-4">
        <li v-if="contacts">
          <div class="text-gray-200 font-500 text-lg pb-4 flex items-center">
            <span class="i-bi:phone mr-2"></span>
            <span>联系信息</span>
          </div>
          <p>
            邮箱：<a :href="`mailto:${contacts.email}`">{{ contacts.email }}</a>
          </p>
          <p v-if="contacts.phone">电话：{{ contacts.phone }}</p>
          <p v-if="contacts.address">地址：{{ contacts.address }}</p>
        </li>
        <li class="ml-10" v-if="links.length > 0">
          <div class="text-gray-200 font-500 text-lg pb-4 flex items-center">
            <span class="i-ph:link-light mr-2"></span>
            <span>友链信息</span>
          </div>
          <p v-for="(item, index) in links" :key="index">
            <a :href="item.url" target="_blank">{{ item.title }}</a>
          </p>
        </li>
        <slot name="info"></slot>
      </ul>
      <!-- ICP备案信息 -->
      <div class="flex w-full justify-center">
        Copyright © {{ copyRight }} 2022-{{ new Date().getFullYear() }}
        <a href="https://beian.miit.gov.cn/" target="_blank" class="flex pl-2 items-center">
          <i class="w-4 h-4 bg-contain inline-block mr-2 bg-center mr-2"></i>
          {{ icp }}
        </a>
      </div>
      <!-- http://www.beian.gov.cn/ -->
    </Container>
  </div>
</template>

<script setup lang="ts">
import wechat from '@/assets/images/wechat.jpg'
import sina from '@/assets/images/sina.jpg'

interface LinkType {
  title: string
  url: string
}

interface ContactsType {
  email: string
  phone?: string
  address?: string
  wechat?: string
  sina?: string
}

interface FootItem {
  icp?: string
  copyRight?: string
  links?: LinkType[]
  contacts?: ContactsType
}

withDefaults(defineProps<FootItem>(), {
  icp: '',
  copyRight: 'toimc',
  links: () => [
    {
      url: 'https://www.toimc.com',
      title: 'toimc博客'
    },
    {
      url: 'https://www.imooc.com',
      title: '慕课网'
    }
  ],
  contacts: () => ({
    email: 'admin@wayearn.com'
  })
})
// {
// icp: {
//   type: String,
//   default: ''
// },
// }
</script>

<style scoped>
i {
  background-image: url('@/assets/icons/beianicon.png');
}
.item {
  @apply px-4 text-gray-400;
}
</style>
