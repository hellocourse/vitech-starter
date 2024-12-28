<template>
  <div class="bg-gray-100">
    <Container class="my-4">
      <div class="grid grid-cols-2 gap-3 w-full">
        <div class="bg-white p-4">
          <div class="flex justify-between items-center mb-10">
            <div class="flex flex-col">
              <span class="text-xl mb-2">toimc学院会员</span>
              <span class="text-xs text-gray-400 line-clamp-1"
                >优质专栏、每日一课免费阅读、精品微课折扣</span
              >
            </div>
            <div class="text-orange text-2xl">￥199/年</div>
          </div>
          <div class="text-center">
            <div class="btn px-8 inline-block">立即加入</div>
          </div>
        </div>
        <div class="bg-white p-4">
          <div class="flex justify-between items-center mb-10">
            <div class="flex flex-col">
              <span class="text-xl mb-2">toimc学院高级会员</span>
              <span class="text-xs text-gray-400 line-clamp-1"
                >优质专栏、每日一课、精品微课免费阅读、学习计划专展折扣</span
              >
            </div>
            <div class="text-orange text-2xl">￥499/年</div>
          </div>
          <div class="text-center">
            <div class="btn px-8 inline-block">立即加入</div>
          </div>
        </div>
      </div>
    </Container>
    <div class="my-5">
      <MemberBenefits :items="items"></MemberBenefits>
    </div>
    <!-- 推荐内容 -->
    <Container class="flex-col">
      <div class="text-3xl pb-2 pt-2 relative text-center w-full">
        100+优质专栏免费学
        <span
          class="absolute right-3 top-1/2 transform-translate-y--1/2 text-sm text-gray-400 flex items-center cursor-pointer"
          ><i class="i-charm:refresh mr-2"></i>
          换一批看看
        </span>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lt-sm:px-4 py-4">
        <a
          :href="item.url"
          target="_blank"
          v-for="(item, index) in recommend"
          :key="index"
          class="flex"
        >
          <Card
            class="w-full rounded-0 transition-all hover:(transform-translate-y--1 shadow-lg)"
            :image="item.image"
            image-type="rounded"
            :title="item.title"
            border
          >
            <template #default>
              <div class="mx-4 flex items-center justify-start text-gray-500 mb-4">
                <span class="mr-2">Brian</span>|
                <span class="ml-2">前端课程</span>
              </div>
            </template>
          </Card>
        </a>
      </div>
    </Container>
    <!-- 推荐内容 -->
    <Container class="flex-col mt-10">
      <div class="text-3xl pb-2 pt-2 relative text-center w-full">
        每天一课，每天收获一点
        <span
          class="absolute right-3 top-1/2 transform-translate-y--1/2 text-sm text-gray-400 flex items-center cursor-pointer"
          ><i class="i-charm:refresh mr-2"></i>
          查看更多
        </span>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lt-sm:px-4 py-4">
        <a
          :href="item.url"
          target="_blank"
          v-for="(item, index) in recommend"
          :key="index"
          class="flex"
        >
          <Card
            class="w-full rounded-0 transition-all hover:(transform-translate-y--1 shadow-lg)"
            :image="item.image"
            image-type="rounded"
            :title="item.title"
            border
          >
            <template #default>
              <div class="mx-4 flex items-center justify-start text-gray-500 mb-4">
                <span class="mr-2">Brian</span>|
                <span class="ml-2">前端课程</span>
              </div>
            </template>
          </Card>
        </a>
      </div>
    </Container>
    <!-- 学习计划 -->
    <Container class="flex-col">
      <div class="text-3xl pb-4 pt-10 w-full text-center">
        <p>学习计划</p>
        <p class="text-xl text-gray-400">会员享8折，高级会员享6折优惠</p>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div
          class="lt-sm:px-4 py-4 relative h-40 flex items-center justify-center transition-all cursor-pointer hover:(transform-translate-y--1 shadow-lg) group"
          v-for="(item, index) in recommend"
          :key="index"
        >
          <div
            class="absolute w-full h-full bg-cover bg-center rounded-0 overflow-hidden"
            :style="{ 'background-image': 'url(' + item.image + ')' }"
          >
            <div class="bg-black bg-opacity-30 w-full h-full group-hover:display-none"></div>
          </div>
          <div class="z-30 px-4 line-clamp-3 text-xl text-white">{{ item.title }}</div>
        </div>
      </div>
    </Container>
    <Container class="pt-10">
      <Partners title="金牌讲师一对一指导" :items="[...partners, ...partners]"></Partners>
    </Container>
    <Container class="pb-10">
      <div class="btn mx-auto">高级会员专属-立即加入</div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import bg from '@/assets/images/bg.png'
import type { PartnerType } from '@/components/types'

const items = [
  {
    name: '普通用户',
    rights: [
      {
        name: '课程答疑',
        value: true
      },
      {
        name: '学分兑换',
        value: true
      }
    ],
    price: 0
  },
  {
    name: '会员',
    rights: [
      {
        name: '课程答疑',
        value: true
      },
      {
        name: '学分兑换',
        value: true
      },
      {
        name: '优质专栏',
        value: true
      }
    ],
    price: 199
  },
  {
    name: '高级会员',
    rights: [
      {
        name: '课程答疑',
        value: true
      },
      {
        name: '学分兑换',
        value: true
      },
      {
        name: '优质专栏',
        value: true
      },
      {
        name: '精品微课',
        value: '8折'
      }
    ],
    price: 499
  }
]

const recommend = ref([
  {
    image: bg,
    title:
      '第四期开始报名了！行业风口、政策倾斜，新晋热门高薪不内卷！打通从0基础到高薪就业完整路径，抢占先发优势！',
    comments: '9',
    url: 'https://class.imooc.com/sale/embedded',
    hours: '350 小时',
    counts: '227',
    price: ' 12999.00',
    originPrice: ' 14999'
  },
  {
    image: bg,
    title: '前端入门如同写字，如果你不知道从哪开始，那就选择前端（含Vue3.x，React17,TS）',
    comments: '9',
    url: 'https://class.imooc.com/sale/fe2021',
    hours: '350 小时',
    counts: '227',
    price: ' 4666.00',
    originPrice: ' 5980'
  },
  {
    image: bg,
    title:
      '以一线互联网公司产品标准，打造适合零基础学习的全干货Java课程。选择Java，高薪就业的第一步！',
    comments: '9',
    url: 'https://class.imooc.com/sale/java2021',
    hours: '350 小时',
    counts: '227',
    price: ' 4429.00',
    originPrice: ' 5680'
  },
  {
    image: bg,
    title: '未来3-5年企业高性能项目不可替代的语言，从基础到项目实战再到重构，真正从入门到精通',
    comments: '9',
    url: 'https://class.imooc.com/sale/newgo',
    hours: '350 小时',
    counts: '227',
    price: ' 3099.00',
    originPrice: ' 3888'
  }
])

const partners: PartnerType[] = [
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

<style scoped lang="scss"></style>
