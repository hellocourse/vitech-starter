<template>
  <div class="pb-10">
    <template v-if="activeIndex === 0">
      <md></md>
    </template>
    <template v-else-if="activeIndex === 1">
      <!-- 章节 -->
      <Chapters :items="items"></Chapters>
    </template>
    <template v-else>
      <!-- 评论 -->
      <Comments :items="comments"></Comments>
    </template>
  </div>
</template>

<script setup lang="ts">
import md from '../test.md'
import bg from '@/assets/images/bg.png'

const activeIndex = inject<number>('activeIndex')

const items = [
  {
    title: '课程介绍11',
    children: [
      {
        type: 'video',
        title: '章导读',
        url: 'www.imooc.com'
      },
      {
        type: 'video',
        title: '章导读',
        url: 'www.imooc.com'
      },
      {
        type: 'video',
        title: '章导读',
        url: 'www.imooc.com'
      },
      {
        type: 'video',
        title: '章导读',
        url: 'www.imooc.com'
      },
      {
        type: 'video',
        title: '章导读',
        url: 'www.imooc.com'
      }
    ]
  },
  {
    title: '课程介绍',
    children: [
      {
        type: 'video',
        title: '章导读',
        url: 'www.imooc.com'
      },
      {
        type: 'video',
        title: '章导读',
        url: 'www.imooc.com'
      },
      {
        type: 'video',
        title: '章导读',
        url: 'www.imooc.com'
      },
      {
        type: 'video',
        title: '章导读',
        url: 'www.imooc.com'
      },
      {
        type: 'video',
        title: '章导读',
        url: 'www.imooc.com'
      }
    ]
  },
  {
    title: '课程介绍',
    children: [
      {
        type: 'video',
        title: '章导读',
        url: 'www.imooc.com'
      },
      {
        type: 'video',
        title: '章导读',
        url: 'www.imooc.com'
      },
      {
        type: 'video',
        title: '章导读',
        url: 'www.imooc.com'
      },
      {
        type: 'video',
        title: '章导读',
        url: 'www.imooc.com'
      },
      {
        type: 'video',
        title: '章导读',
        url: 'www.imooc.com'
      }
    ]
  },
  {
    title: '课程介绍',
    children: [
      {
        type: 'video',
        title: '章导读',
        url: 'www.imooc.com'
      },
      {
        type: 'video',
        title: '章导读',
        url: 'www.imooc.com'
      },
      {
        type: 'video',
        title: '章导读',
        url: 'www.imooc.com'
      },
      {
        type: 'video',
        title: '章导读',
        url: 'www.imooc.com'
      },
      {
        type: 'video',
        title: '章导读',
        url: 'www.imooc.com'
      }
    ]
  }
]

const comments = [
  {
    username: 'toimc',
    image: bg,
    desc: `从2020的老课程跟到新课程，Brian老师的授课风格越来越好了。从端到端，确实能解決工作中非常大的一部分问题。跟看一个优秀的老师、好的课程，不知不觉的学完课，才发现自己有了很大的提升。
          千货满满，技术栈不断选代更新到了最新的Vue了，课程的QQ群也很活跃，在群里提出的问题很快就会有老师回复（有时候是同学回复），学习的氛国感很强，相信学完这门课程，我的前端开发水平会有质的提升，加油！`
  },
  {
    username: 'toimc',
    image: bg,
    desc: `从2020的老课程跟到新课程，Brian老师的授课风格越来越好了。从端到端，确实能解決工作中非常大的一部分问题。跟看一个优秀的老师、好的课程，不知不觉的学完课，才发现自己有了很大的提升。
          千货满满，技术栈不断选代更新到了最新的Vue了，课程的QQ群也很活跃，在群里提出的问题很快就会有老师回复（有时候是同学回复），学习的氛国感很强，相信学完这门课程，我的前端开发水平会有质的提升，加油！`
  },
  {
    username: 'toimc',
    image: bg,
    desc: `从2020的老课程跟到新课程，Brian老师的授课风格越来越好了。从端到端，确实能解決工作中非常大的一部分问题。跟看一个优秀的老师、好的课程，不知不觉的学完课，才发现自己有了很大的提升。
          千货满满，技术栈不断选代更新到了最新的Vue了，课程的QQ群也很活跃，在群里提出的问题很快就会有老师回复（有时候是同学回复），学习的氛国感很强，相信学完这门课程，我的前端开发水平会有质的提升，加油！`
  },
  {
    username: 'toimc',
    image: bg,
    desc: `从2020的老课程跟到新课程，Brian老师的授课风格越来越好了。从端到端，确实能解決工作中非常大的一部分问题。跟看一个优秀的老师、好的课程，不知不觉的学完课，才发现自己有了很大的提升。
          千货满满，技术栈不断选代更新到了最新的Vue了，课程的QQ群也很活跃，在群里提出的问题很快就会有老师回复（有时候是同学回复），学习的氛国感很强，相信学完这门课程，我的前端开发水平会有质的提升，加油！`
  }
]
</script>

<style scoped></style>
