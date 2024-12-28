<template>
  <div class="flex flex-col min-h-100vh">
    <div
      class="fixed top-0 w-full z-50 transition-all duration-300 h-0"
      :class="[{ 'lt-sm:(bg-black h-full)': show }]"
    >
      <!-- 这里修复滚动时h-0的bug -->
      <div :class="[{ 'bg-black bg-opacity-30 shadow-lg': y > 0 }]">
        <Container>
          <!-- <img src="/512x512.png" class="w-14 h-full lt-sm:mx-auto" alt="toimc logo" /> -->
          <div
            :class="[
              'display-none  text-gray-300 text-2xl absolute right-5 top-3 cursor-pointer hover:text-white lt-sm:display-block'
            ]"
            @click="() => toggle()"
          >
            <Transition name="rotate-icon" mode="out-in">
              <div class="i-ic-round-menu" v-if="!show"></div>
              <div class="i-radix-icons:cross-2" v-else></div>
            </Transition>
          </div>
          <Menu v-show="show" class="lt-sm:(absolute top-14 right-0 w-full flex-col)"></Menu>
        </Container>
      </div>
    </div>
    <router-view></router-view>
    <div>
      <div class="mobile-hide">
        <DefaultFooter icp="鄂ICP备19018123号-1"></DefaultFooter>
      </div>
      <div class="display-none mobile">
        <MobileNavbar></MobileNavbar>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { y } = useWindowScroll()

const [show, toggle] = useToggle(false)

const flag = ref(false)

useResizeObserver(document.body, () => {
  const width = window.innerWidth
  if (width >= 640) {
    toggle(true)
    flag.value = false
  } else {
    if (flag.value) return
    flag.value = true
    toggle(false)
  }
})
</script>

<style scoped lang="scss">
.rotate-icon-enter-active {
  animation: scaleYIn 0.3s;
}
.rotate-icon-leave-active {
  animation: scaleYIn 0.3s reverse;
}

@keyframes scaleYIn {
  0% {
    opacity: 0;
    transform: scaleY(0);
  }

  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
</style>
