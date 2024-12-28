import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: (routes) => {
    return setupLayouts(routes)
    // return [
    //   ...setupLayouts([
    //     ...routes,
    //     {
    //       path: '/fdsafdsafds/fdsafdsafd/sfadsafdt/testt',
    //       component: () => import('@/pages/test.vue')
    //     }
    //   ])
    // ]
  }
})

export default router
