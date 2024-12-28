<template>
  <div>
    <Swiper :items="swipers" :height="36 * store.rate + 'rem'"></Swiper>
    <Container>
      <router-view></router-view>
    </Container>
    <div class="bg-gray-100">
      <Container>
        <Partners title="谁在使用" :items="items"></Partners>
      </Container>
    </div>
    <div class="bg-white text-center py-10 sm:py-20">
      <div class="pb-4 font-bold text-3xl text-dark-300">toimc团队宣言</div>
      <div class="pb-6 text-xl text-gray-500">人人都是技术达人，让分享带来价值</div>
      <button class="mx-auto btn flex items-center">
        现在注册 <i class="i-mdi:arrow-right-thin"></i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PartnerType, SwiperItemType } from '@/components/types'
import bg from '@/assets/images/bg.png'

import { useThemeStore } from '@/store/useThemeStore'

const store = useThemeStore()

const swipers: SwiperItemType[] = [
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

const items: PartnerType[] = [
  {
    name: '百度',
    desc: '百度是全球最大的中文搜索引擎、最大的中文网站，拥有超过亿的活跃用户',
    image: 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
  },
  {
    name: '阿里巴巴',
    desc: '阿里巴巴集团是一家提供电子商务解决方案的公司，旗下拥有淘宝、天猫等电商平台',
    image:
      'https://img.alicdn.com/imgextra/i1/O1CN01dUHefe1TNxqfFY58z_!!6000000002371-55-tps-404-83.svg'
  },
  {
    name: '腾讯',
    desc: '腾讯是一家以互联网为基础的科技与文化公司，旗下拥有微信、QQ等产品',
    image: 'https://www.tencent.com/img/index/tencent_logo.png'
  },
  {
    name: '字节跳动',
    desc: '字节跳动是一家中国的科技公司，旗下拥有抖音、今日头条等产品',
    image:
      'https://lf1-cdn-tos.bytescm.com/obj/static/ies/bytedance_official/_next/static/images/0-390b5def140dc370854c98b8e82ad394.png'
  }
]
</script>

<style scoped></style>
