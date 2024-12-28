<template>
  <Container class="flex-col">
    <div class="text-center text-3xl py-4">会员权益</div>
    <div class="w-full p-4 bg-white">
      <!-- 会员权限表格 -->
      <!-- 表头: 用户不同等级 -->
      <!-- 表格内容：1列，相应的权限 -->
      <table class="w-full">
        <thead>
          <td></td>
          <!-- 用户不同等级 -->
          <td v-for="(item, index) in items" :key="index" class="text-center w-1/4">
            <div class="flex flex-col items-center">
              <span class="text-xl">{{ item.name }}</span>
              <span
                class="text-sm border px-2 py-1 rounded-5 w-23 mt-2 mb-4 bg-gray-200 text-dark-100"
                >{{ item.price ? `￥${item.price}/年` : '免费' }}</span
              >
            </div>
          </td>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in allRights"
            :key="index"
            :class="index % 2 === 0 ? 'bg-sky-100' : ''"
          >
            <!-- 权限最多的用户渲染的分类 -->
            <td class="text-dark-300">{{ item }}</td>
            <!-- v-for 不同用户不同的该分类的value -->
            <td v-for="(user, idx) in items" :key="idx" class="text-center">
              <div
                v-if="typeof getValue(item, user) === 'undefined'"
                class="i-teenyicons:x-circle-solid text-gray-400"
              ></div>
              <div
                v-else-if="
                  typeof getValue(item, user) === 'boolean' && getValue(item, user) === true
                "
                class="i-octicon:check-circle-fill-24 text-sky-500"
              ></div>
              <div v-else class="text-orange">{{ getValue(item, user) }}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Container>
</template>

<script setup lang="ts">
import type { UserRightsType, VipTypes } from './types'

const props = withDefaults(defineProps<VipTypes>(), {
  items: () => []
})

const allRights = computed(() => {
  return Array.from(
    new Set(props.items.map((item) => item.rights.map((o) => o.name)).flat(Infinity) as string[])
  )
})

// const allRights = computed(() => {
//   return Array.from(new Set(props.items.map(item => item.rights.map(o=>o.name)).reduce((acc, cur) => [...acc, ...cur] ,[] as string[])))
// })

function getValue(item: string, user: UserRightsType) {
  return user.rights.find((o) => o.name === item)?.value
}
</script>

<style scoped lang="scss">
table {
  td {
    @apply p-2;
    &:first-child {
      @apply w-20 sm:w-30 rounded-l;
    }
    &:last-child {
      @apply rounded-r;
    }
  }
}
</style>
